{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInstances where

import AnimeShop.Prelude

type EquipmentInstancesAPI =
  "equipment_instances" :>
  (
    Get '[JSON] [Entity EquipmentInstance] :<|>
    ReqBody '[JSON] EquipmentInstance :> Post '[JSON] (Entity EquipmentInstance) :<|>
    ReqBody '[JSON] EquipmentInstanceId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity EquipmentInstance) :> Patch '[JSON] ()
  )

equipmentInstancesServer :: ServerT EquipmentInstancesAPI App
equipmentInstancesServer = getEquipmentInstances :<|> postEquipmentInstance :<|> deleteEquipmentInstance :<|> patchEquipmentInstance

getEquipmentInstances :: App [Entity EquipmentInstance]
getEquipmentInstances = runDb $ selectList [] []

postEquipmentInstance :: EquipmentInstance -> App (Entity EquipmentInstance)
postEquipmentInstance = runDb . insertEntity

deleteEquipmentInstance :: EquipmentInstanceId -> App ()
deleteEquipmentInstance = runDb . delete

patchEquipmentInstance :: Entity EquipmentInstance -> App ()
patchEquipmentInstance entity = runDb $ replace (entityKey entity) (entityVal entity)
