{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.Equipment where

import AnimeShop.Prelude

type EquipmentAPI =
  "equipment" :>
  (
    Get '[JSON] [Entity Equipment] :<|>
    ReqBody '[JSON] Equipment :> Post '[JSON] (Entity Equipment) :<|>
    ReqBody '[JSON] EquipmentId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity Equipment) :> Patch '[JSON] ()
  )

equipmentServer :: ServerT EquipmentAPI App
equipmentServer = getEquipment :<|> postEquipment :<|> deleteEquipment :<|> patchEquipment

getEquipment :: App [Entity Equipment]
getEquipment = runDb $ selectList [] []

postEquipment :: Equipment -> App (Entity Equipment)
postEquipment = runDb . insertEntity

deleteEquipment :: EquipmentId -> App ()
deleteEquipment = runDb . delete

patchEquipment :: Entity Equipment -> App ()
patchEquipment entity = runDb $ replace (entityKey entity) (entityVal entity)
