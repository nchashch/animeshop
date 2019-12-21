{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API (AnimeShopAPI, animeShopServer) where

import AnimeShop.Prelude
import AnimeShop.API.Admin
import AnimeShop.API.Maintenance
import AnimeShop.API.Stock
import AnimeShop.API.Security

type AnimeShopAPI =
  AdminAPI :<|>
  MaintenanceAPI :<|>
  StockAPI :<|>
  SecurityAPI

animeShopServer :: ServerT AnimeShopAPI App
animeShopServer = adminServer :<|> maintenanceServer :<|> stockServer :<|> securityServer
