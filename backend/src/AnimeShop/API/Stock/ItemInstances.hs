{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock.ItemInstances (ItemInstancesAPI, itemInstancesServer) where

import AnimeShop.Prelude

type ItemInstancesAPI =
  "item_instances" :>
  (
    Get '[JSON] [Entity ItemInstance] :<|>
    ReqBody '[JSON] ItemInstance :> Post '[JSON] (Entity ItemInstance) :<|>
    ReqBody '[JSON] ItemInstanceId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity ItemInstance) :> Patch '[JSON] ()
  )

itemInstancesServer :: ServerT ItemInstancesAPI App
itemInstancesServer = getItemInstances :<|> postItemInstance :<|> deleteItemInstance :<|> patchItemInstance

getItemInstances :: App [Entity ItemInstance]
getItemInstances = runDb $ selectList [] []

postItemInstance :: ItemInstance -> App (Entity ItemInstance)
postItemInstance = runDb . insertEntity

deleteItemInstance :: ItemInstanceId -> App ()
deleteItemInstance = runDb . delete

patchItemInstance :: Entity ItemInstance -> App ()
patchItemInstance entity = runDb $ replace (entityKey entity) (entityVal entity)
