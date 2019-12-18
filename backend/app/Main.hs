{-# LANGUAGE OverloadedStrings #-}

module Main where

import Network.Wai.Handler.Warp
import Config (Config(..))
import DB (connectDb)
import AnimeShop (animeShopApp, migrateDb)

main :: IO ()
main = do
  putStrLn "Starting up animeshop backend server"
  let connectionString = "host=database dbname=postgres user=postgres password=postgres"
  pool <- connectDb connectionString
  putStrLn "Running database migrations"
  migrateDb pool
  putStrLn "Migrations were run"
  putStrLn "Server started successfully"
  let cfg = Config pool

  run 9000 $ animeShopApp cfg
  putStrLn "Shutting down animeshop backend server"
