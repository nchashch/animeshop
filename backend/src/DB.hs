module DB (
  module Database.Persist,
  connectDb,
  updateBy,
  runDb
  ) where

import Database.Persist

import DB.Internal (
  connectDb,
  updateBy,
  runDb
  )
