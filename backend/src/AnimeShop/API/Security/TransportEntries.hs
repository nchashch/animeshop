{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Security.TransportEntries where

import AnimeShop.Prelude

type TransportEntriesAPI =
  "employee_entries" :>
  (
    Get '[JSON] [Entity TransportEntry] :<|>
    ReqBody '[JSON] TransportEntry :> Post '[JSON] (Entity TransportEntry)
  )

transportEntriesServer :: ServerT TransportEntriesAPI App
transportEntriesServer = getTransportEntries :<|> postTransportEntry

getTransportEntries :: App [Entity TransportEntry]
getTransportEntries = runDb $ selectList [] []

postTransportEntry :: TransportEntry -> App (Entity TransportEntry)
postTransportEntry = runDb . insertEntity
