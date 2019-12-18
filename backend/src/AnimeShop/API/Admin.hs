{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin (AdminAPI, adminServer) where

import AnimeShop.Prelude
import AnimeShop.API.Admin.Units

type AdminAPI = "admin" :> UnitsAPI

adminServer :: ServerT AdminAPI App
adminServer = adminServer
