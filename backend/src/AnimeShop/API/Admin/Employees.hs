{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin.Employees where

import AnimeShop.Prelude

type EmployeesAPI =
  "employees" :>
  (
    Get '[JSON] [Entity Employee] :<|>
    ReqBody '[JSON] Employee :> Post '[JSON] (Entity Employee) :<|>
    ReqBody '[JSON] EmployeeId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity Employee) :> Patch '[JSON] ()
  )

employeesServer :: ServerT EmployeesAPI App
employeesServer = getEmployees :<|> postEmployee :<|> deleteEmployee :<|> patchEmployee

getEmployees :: App [Entity Employee]
getEmployees = runDb $ selectList [] []

postEmployee :: Employee -> App (Entity Employee)
postEmployee = runDb . insertEntity

deleteEmployee :: EmployeeId -> App ()
deleteEmployee = runDb . delete

patchEmployee :: Entity Employee -> App ()
patchEmployee entity = runDb $ replace (entityKey entity) (entityVal entity)
