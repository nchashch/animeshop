{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.Internal ( animeShopApp ) where

import AnimeShop.API (AnimeShopAPI, animeShopServer)
import Servant
import Config
import Control.Monad.Reader (runReaderT)

animeShopAPI :: Proxy AnimeShopAPI
animeShopAPI = Proxy

-- | This is the function we export to run our 'UserAPI'. Given
-- a 'Config', we return a WAI 'Application' which any WAI compliant server
-- can run.
animeShopApp :: Config -> Application
animeShopApp cfg = serve animeShopAPI (appToServer cfg)

-- | This function converts our @'AppT' m@ monad into the @ExceptT ServantErr
-- m@ monad that Servant's 'enter' function needs in order to run the
-- application.
convertApp :: Config -> App a -> Handler a
convertApp cfg appt = runReaderT (runApp appt) cfg

-- | This functions tells Servant how to run the 'App' monad with our
-- 'server' function.
appToServer :: Config -> Server AnimeShopAPI
appToServer cfg = hoistServer animeShopAPI (convertApp cfg) animeShopServer
