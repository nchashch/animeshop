{-# LANGUAGE OverloadedStrings #-}
{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.Internal ( animeShopApp, migrateDb ) where

import AnimeShop.Models (migrateAll)
import AnimeShop.API (AnimeShopAPI, animeShopServer)
import Servant
import Config
import Control.Monad.Reader (runReaderT)
import Database.Persist.Sql (runMigration, runSqlPool, ConnectionPool)
import Network.Wai.Middleware.Cors
import Network.Wai.Middleware.Servant.Options

animeShopAPI :: Proxy AnimeShopAPI
animeShopAPI = Proxy

-- | This is the function we export to run our 'UserAPI'. Given
-- a 'Config', we return a WAI 'Application' which any WAI compliant server
-- can run.
animeShopApp :: Config -> Application
animeShopApp cfg =
  cors (const $ Just policy)
  $ provideOptions animeShopAPI
  $ serve animeShopAPI (appToServer cfg)
  where
    policy = simpleCorsResourcePolicy { corsRequestHeaders = [ "content-type" ] }

-- | This function converts our @'AppT' m@ monad into the @ExceptT ServantErr
-- m@ monad that Servant's 'enter' function needs in order to run the
-- application.
convertApp :: Config -> App a -> Handler a
convertApp cfg appt = runReaderT (runApp appt) cfg

-- | This functions tells Servant how to run the 'App' monad with our
-- 'server' function.
appToServer :: Config -> Server AnimeShopAPI
appToServer cfg = hoistServer animeShopAPI (convertApp cfg) animeShopServer


-- | This function applies migration to the database according to models specified in AnimeShop.Models
migrateDb :: ConnectionPool -> IO ()
migrateDb pool = runSqlPool (runMigration migrateAll) pool
