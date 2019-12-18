{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.Equipment where

import AnimeShop.Prelude

type EquipmentAPI =
  "equipment" :>
  (
    Get '[JSON] [Entity Equipment] :<|>
    ReqBody '[JSON] Equipment :> Post '[JSON] (Entity Equipment)
  )

equipmentServer :: ServerT EquipmentAPI App
equipmentServer = getEquipment :<|> postEquipment

getEquipment :: App [Entity Equipment]
getEquipment = runDb $ selectList [] []

postEquipment :: Equipment -> App (Entity Equipment)
postEquipment = runDb . insertEntity
