{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock.ItemInstances (ItemInstancesAPI, itemInstancesServer) where

import AnimeShop.Prelude

type ItemInstancesAPI =
  "item_instances" :>
  (
    Get '[JSON] [Entity ItemInstance] :<|>
    ReqBody '[JSON] ItemInstance :> Post '[JSON] (Entity ItemInstance)
  )

itemInstancesServer :: ServerT ItemInstancesAPI App
itemInstancesServer = getItemInstances :<|> postItemInstance

getItemInstances :: App [Entity ItemInstance]
getItemInstances = runDb $ selectList [] []

postItemInstance :: ItemInstance -> App (Entity ItemInstance)
postItemInstance = runDb . insertEntity
