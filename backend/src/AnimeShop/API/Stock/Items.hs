{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Stock.Items (ItemsAPI, itemsServer) where

import AnimeShop.Prelude

type ItemsAPI =
  "items" :>
  (
    Get '[JSON] [Entity Item] :<|>
    ReqBody '[JSON] Item :> Post '[JSON] (Entity Item) :<|>
    ReqBody '[JSON] ItemId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity Item) :> Patch '[JSON] ()
  )

itemsServer :: ServerT ItemsAPI App
itemsServer = getItems :<|> postItem :<|> deleteItem :<|> patchItem

getItems :: App [Entity Item]
getItems = runDb $ selectList [] []

postItem :: Item -> App (Entity Item)
postItem = runDb . insertEntity

deleteItem :: ItemId -> App ()
deleteItem = runDb . delete

patchItem :: Entity Item -> App ()
patchItem entity = runDb $ replace (entityKey entity) (entityVal entity)
