{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE FlexibleContexts #-}
{-# LANGUAGE GADTs #-}
module DB (
  module Database.Persist,
  runDb,
  updateBy,
  connectDb
  ) where

import Database.Persist
import Database.Persist.Sql (SqlPersistT, runMigration, runSqlPool, ConnectionPool)
import Database.Persist.Postgresql (ConnectionString, createPostgresqlPool)
import Control.Monad.Reader (ReaderT, MonadReader, asks)
import Control.Monad.IO.Class (MonadIO, liftIO)
import Control.Monad.Logger (runStderrLoggingT)

import Config

connectDb :: ConnectionString -> IO ConnectionPool
connectDb connectionString = runStderrLoggingT $ createPostgresqlPool connectionString 1

runDb :: (MonadReader Config m, MonadIO m) => SqlPersistT IO b -> m b
runDb query = do
  pool <- asks configPool
  liftIO $ runSqlPool query pool

updateBy :: (MonadIO m, PersistUniqueRead backend, PersistEntity record, PersistStoreWrite backend, PersistEntityBackend record ~ BaseBackend backend)
         => Unique record
         -> [Update record]
         -> ReaderT backend m ()
updateBy unique updates = do
  mExisting <- getBy unique
  case mExisting of
    Just (Entity key _) -> update key updates
    Nothing -> return ()
