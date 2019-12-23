{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock.Manufacturers (ManufacturersAPI, manufacturersServer) where

import AnimeShop.Prelude

type ManufacturersAPI =
  "manufacturers" :>
  (
    Get '[JSON] [Entity Manufacturer] :<|>
    ReqBody '[JSON] Manufacturer :> Post '[JSON] (Entity Manufacturer) :<|>
    ReqBody '[JSON] ManufacturerId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity Manufacturer) :> Patch '[JSON] ()
  )

manufacturersServer :: ServerT ManufacturersAPI App
manufacturersServer = getManufacturers :<|> postManufacturer :<|> deleteManufacturer :<|> patchManufacturer

getManufacturers :: App [Entity Manufacturer]
getManufacturers = runDb $ selectList [] []

postManufacturer :: Manufacturer -> App (Entity Manufacturer)
postManufacturer = runDb . insertEntity

deleteManufacturer :: ManufacturerId -> App ()
deleteManufacturer = runDb . delete

patchManufacturer :: Entity Manufacturer -> App ()
patchManufacturer entity = runDb $ replace (entityKey entity) (entityVal entity)
