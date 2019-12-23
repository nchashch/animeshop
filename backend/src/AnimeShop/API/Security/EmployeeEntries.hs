{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Security.EmployeeEntries where

import AnimeShop.Prelude

type EmployeeEntriesAPI =
  "employee_entries" :>
  (
    Get '[JSON] [Entity EmployeeEntry] :<|>
    ReqBody '[JSON] EmployeeEntry :> Post '[JSON] (Entity EmployeeEntry) :<|>
    ReqBody '[JSON] EmployeeEntryId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity EmployeeEntry) :> Patch '[JSON] ()
  )

employeeEntriesServer :: ServerT EmployeeEntriesAPI App
employeeEntriesServer = getEmployeeEntries :<|> postEmployeeEntry :<|> deleteEmployeeEntry :<|> patchEmployeeEntry

getEmployeeEntries :: App [Entity EmployeeEntry]
getEmployeeEntries = runDb $ selectList [] []

postEmployeeEntry :: EmployeeEntry -> App (Entity EmployeeEntry)
postEmployeeEntry = runDb . insertEntity

deleteEmployeeEntry :: EmployeeEntryId -> App ()
deleteEmployeeEntry = runDb . delete

patchEmployeeEntry :: Entity EmployeeEntry -> App ()
patchEmployeeEntry entity = runDb $ replace (entityKey entity) (entityVal entity)
