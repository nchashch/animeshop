{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin (AdminAPI, adminServer) where

import AnimeShop.Prelude
import AnimeShop.API.Admin.Units
import AnimeShop.API.Admin.Employees

type AdminAPI = "admin" :> (UnitsAPI :<|> EmployeesAPI)

adminServer :: ServerT AdminAPI App
adminServer = unitsServer :<|> employeesServer
