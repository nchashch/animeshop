{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin.Employees where

import AnimeShop.Prelude

type EmployeesAPI =
  "employees" :>
  (
    Get '[JSON] [Entity Employee] :<|>
    ReqBody '[JSON] Employee :> Post '[JSON] (Entity Employee)
  )

employeesServer :: ServerT EmployeesAPI App
employeesServer = getEmployees :<|> postEmployee

getEmployees :: App [Entity Employee]
getEmployees = runDb $ selectList [] []

postEmployee :: Employee -> App (Entity Employee)
postEmployee = runDb . insertEntity
