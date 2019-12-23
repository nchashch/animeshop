{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Maintenance.EquipmentInspectionResults where

import AnimeShop.Prelude

type EquipmentInspectionResultsAPI =
  "equipment_inspection_results" :>
  (
    Get '[JSON] [Entity EquipmentInspectionResult] :<|>
    ReqBody '[JSON] EquipmentInspectionResult :> Post '[JSON] (Entity EquipmentInspectionResult) :<|>
    ReqBody '[JSON] EquipmentInspectionResultId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity EquipmentInspectionResult) :> Patch '[JSON] ()
  )

equipmentInspectionResultsServer :: ServerT EquipmentInspectionResultsAPI App
equipmentInspectionResultsServer = getEquipmentInspectionResults :<|> postEquipmentInspectionResult :<|> deleteEquipmentInspectionResult :<|> patchEquipmentInspectionResult

getEquipmentInspectionResults :: App [Entity EquipmentInspectionResult]
getEquipmentInspectionResults = runDb $ selectList [] []

postEquipmentInspectionResult :: EquipmentInspectionResult -> App (Entity EquipmentInspectionResult)
postEquipmentInspectionResult = runDb . insertEntity

deleteEquipmentInspectionResult :: EquipmentInspectionResultId -> App ()
deleteEquipmentInspectionResult = runDb . delete

patchEquipmentInspectionResult :: Entity EquipmentInspectionResult -> App ()
patchEquipmentInspectionResult entity = runDb $ replace (entityKey entity) (entityVal entity)
