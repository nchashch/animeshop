{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInspectionSchedules where

import AnimeShop.Prelude

type EquipmentInspectionSchedulesAPI =
  "equipment_inspection_schedules" :>
  (
    Get '[JSON] [Entity EquipmentInspectionSchedule] :<|>
    ReqBody '[JSON] EquipmentInspectionSchedule :> Post '[JSON] (Entity EquipmentInspectionSchedule) :<|>
    ReqBody '[JSON] EquipmentInspectionScheduleId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity EquipmentInspectionSchedule) :> Patch '[JSON] ()
  )

equipmentInspectionSchedulesServer :: ServerT EquipmentInspectionSchedulesAPI App
equipmentInspectionSchedulesServer = getEquipmentInspectionSchedules :<|> postEquipmentInspectionSchedules :<|> deleteEquipmentInspectionSchedule :<|> patchEquipmentInspectionSchedule

getEquipmentInspectionSchedules :: App [Entity EquipmentInspectionSchedule]
getEquipmentInspectionSchedules = runDb $ selectList [] []

postEquipmentInspectionSchedules :: EquipmentInspectionSchedule -> App (Entity EquipmentInspectionSchedule)
postEquipmentInspectionSchedules = runDb . insertEntity

deleteEquipmentInspectionSchedule :: EquipmentInspectionScheduleId -> App ()
deleteEquipmentInspectionSchedule = runDb . delete

patchEquipmentInspectionSchedule :: Entity EquipmentInspectionSchedule -> App ()
patchEquipmentInspectionSchedule entity = runDb $ replace (entityKey entity) (entityVal entity)
