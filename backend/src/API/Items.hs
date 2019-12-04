{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module API.Items where

import API.Prelude

type ItemsAPI =
  "items" :>
  (
    Get '[JSON] [Entity Item] :<|>
    ReqBody '[JSON] Item :> Post '[JSON] (Entity Item)
  )

itemsServer :: ServerT ItemsAPI App
itemsServer = getItems :<|> postItem

getItems :: App [Entity Item]
getItems = runDb $ selectList [] []

postItem :: Item -> App (Entity Item)
postItem = runDb . insertEntity
