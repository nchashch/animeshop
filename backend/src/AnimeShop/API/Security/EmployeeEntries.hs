{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Security.EmployeeEntries where

import AnimeShop.Prelude

type EmployeeEntriesAPI =
  "employee_entries" :>
  (
    Get '[JSON] [Entity EmployeeEntry] :<|>
    ReqBody '[JSON] EmployeeEntry :> Post '[JSON] (Entity EmployeeEntry)
  )

employeeEntriesServer :: ServerT EmployeeEntriesAPI App
employeeEntriesServer = getEmployeeEntries :<|> postEmployeeEntry

getEmployeeEntries :: App [Entity EmployeeEntry]
getEmployeeEntries = runDb $ selectList [] []

postEmployeeEntry :: EmployeeEntry -> App (Entity EmployeeEntry)
postEmployeeEntry = runDb . insertEntity
