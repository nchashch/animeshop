{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Admin.Units where

import AnimeShop.Prelude

type UnitsAPI =
  "units" :>
  (
    Get '[JSON] [Entity Unit] :<|>
    ReqBody '[JSON] Unit :> Post '[JSON] (Entity Unit) :<|>
    ReqBody '[JSON] UnitId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity Unit) :> Patch '[JSON] ()
  )

unitsServer :: ServerT UnitsAPI App
unitsServer = getUnits :<|> postUnit :<|> deleteUnit :<|> patchUnit

getUnits :: App [Entity Unit]
getUnits = runDb $ selectList [] []

postUnit :: Unit -> App (Entity Unit)
postUnit = runDb . insertEntity

deleteUnit :: UnitId -> App ()
deleteUnit = runDb . delete

patchUnit :: Entity Unit -> App ()
patchUnit entity = runDb $ replace (entityKey entity) (entityVal entity)
