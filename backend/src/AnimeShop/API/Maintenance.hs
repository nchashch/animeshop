{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance (MaintenanceAPI, maintenanceServer) where

import AnimeShop.Prelude
import AnimeShop.API.Maintenance.Equipment
import AnimeShop.API.Maintenance.EquipmentInstances
import AnimeShop.API.Maintenance.EquipmentInspectionSchedules
import AnimeShop.API.Maintenance.EquipmentInspectionResults

type MaintenanceAPI = "maintenance" :>
  (EquipmentAPI :<|>
   EquipmentInstancesAPI :<|>
   EquipmentInspectionSchedulesAPI :<|>
   EquipmentInspectionResultsAPI)

maintenanceServer :: ServerT MaintenanceAPI App
maintenanceServer =
  equipmentServer :<|>
  equipmentInstancesServer :<|>
  equipmentInspectionSchedulesServer :<|>
  equipmentInspectionResultsServer
