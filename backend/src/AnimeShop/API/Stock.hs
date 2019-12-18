{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock (StockAPI, stockServer) where

import AnimeShop.Prelude
import AnimeShop.API.Stock.Items
import AnimeShop.API.Stock.ItemInstances
import AnimeShop.API.Stock.Manufacturers

type StockAPI = "stock" :>
  (ItemsAPI :<|> ItemInstancesAPI :<|> ManufacturersAPI)

stockServer :: ServerT StockAPI App
stockServer = itemsServer :<|> itemInstancesServer :<|> manufacturersServer
