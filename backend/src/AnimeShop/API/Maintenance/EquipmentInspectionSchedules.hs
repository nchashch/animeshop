{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInspectionSchedules where

import AnimeShop.Prelude

type EquipmentInspectionSchedulesAPI =
  "equipment_inspection_schedules" :>
  (
    Get '[JSON] [Entity EquipmentInspectionSchedule] :<|>
    ReqBody '[JSON] EquipmentInspectionSchedule :> Post '[JSON] (Entity EquipmentInspectionSchedule)
  )

equipmentInspectionSchedulesServer :: ServerT EquipmentInspectionSchedulesAPI App
equipmentInspectionSchedulesServer = getEquipmentInspectionSchedules :<|> postEquipmentInspectionSchedules

getEquipmentInspectionSchedules :: App [Entity EquipmentInspectionSchedule]
getEquipmentInspectionSchedules = runDb $ selectList [] []

postEquipmentInspectionSchedules :: EquipmentInspectionSchedule -> App (Entity EquipmentInspectionSchedule)
postEquipmentInspectionSchedules = runDb . insertEntity
