{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInspectionResults where

import AnimeShop.Prelude

type EquipmentInspectionResultsAPI =
  "equipment_inspection_results" :>
  (
    Get '[JSON] [Entity EquipmentInspectionResult] :<|>
    ReqBody '[JSON] EquipmentInspectionResult :> Post '[JSON] (Entity EquipmentInspectionResult)
  )

equipmentInspectionResultsServer :: ServerT EquipmentInspectionResultsAPI App
equipmentInspectionResultsServer = getEquipmentInspectionResults :<|> postEquipmentInspectionResult

getEquipmentInspectionResults :: App [Entity EquipmentInspectionResult]
getEquipmentInspectionResults = runDb $ selectList [] []

postEquipmentInspectionResult :: EquipmentInspectionResult -> App (Entity EquipmentInspectionResult)
postEquipmentInspectionResult = runDb . insertEntity
