{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Security (SecurityAPI, securityServer) where

import AnimeShop.Prelude
import AnimeShop.API.Security.EmployeeEntries
import AnimeShop.API.Security.TransportEntries

type SecurityAPI = "security" :>
  (EmployeeEntriesAPI :<|> TransportEntriesAPI)

securityServer :: ServerT SecurityAPI App
securityServer = employeeEntriesServer :<|> transportEntriesServer
