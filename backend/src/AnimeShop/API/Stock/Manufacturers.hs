{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock.Manufacturers (ManufacturersAPI, manufacturersServer) where

import AnimeShop.Prelude

type ManufacturersAPI =
  "manufacturers" :>
  (
    Get '[JSON] [Entity Manufacturer] :<|>
    ReqBody '[JSON] Manufacturer :> Post '[JSON] (Entity Manufacturer)
  )

manufacturersServer :: ServerT ManufacturersAPI App
manufacturersServer = getManufacturers :<|> postManufacturer

getManufacturers :: App [Entity Manufacturer]
getManufacturers = runDb $ selectList [] []

postManufacturer :: Manufacturer -> App (Entity Manufacturer)
postManufacturer = runDb . insertEntity
