{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin.Units where

import AnimeShop.Prelude

type UnitsAPI =
  "units" :>
  (
    Get '[JSON] [Entity Unit] :<|>
    ReqBody '[JSON] Unit :> Post '[JSON] (Entity Unit)
  )

unitsServer :: ServerT UnitsAPI App
unitsServer = getUnits :<|> postUnit

getUnits :: App [Entity Unit]
getUnits = runDb $ selectList [] []

postUnit :: Unit -> App (Entity Unit)
postUnit = runDb . insertEntity
