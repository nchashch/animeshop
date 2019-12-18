{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API (AnimeShopAPI, animeShopServer) where

import AnimeShop.Prelude
import AnimeShop.API.Admin
import AnimeShop.API.Maintenance
import AnimeShop.API.Stock

type AnimeShopAPI =
  AdminAPI :<|>
  MaintenanceAPI :<|>
  StockAPI

animeShopServer :: ServerT AnimeShopAPI App
animeShopServer = adminServer :<|> maintenanceServer :<|> stockServer
