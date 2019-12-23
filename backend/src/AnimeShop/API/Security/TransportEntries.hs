{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Security.TransportEntries where

import AnimeShop.Prelude

type TransportEntriesAPI =
  "employee_entries" :>
  (
    Get '[JSON] [Entity TransportEntry] :<|>
    ReqBody '[JSON] TransportEntry :> Post '[JSON] (Entity TransportEntry) :<|>
    ReqBody '[JSON] TransportEntryId :> Delete '[JSON] () :<|>
    ReqBody '[JSON] (Entity TransportEntry) :> Patch '[JSON] ()
  )

transportEntriesServer :: ServerT TransportEntriesAPI App
transportEntriesServer = getTransportEntries :<|> postTransportEntry :<|> deleteTransportEntry :<|> patchTransportEntry

getTransportEntries :: App [Entity TransportEntry]
getTransportEntries = runDb $ selectList [] []

postTransportEntry :: TransportEntry -> App (Entity TransportEntry)
postTransportEntry = runDb . insertEntity

deleteTransportEntry :: TransportEntryId -> App ()
deleteTransportEntry = runDb . delete

patchTransportEntry :: Entity TransportEntry -> App ()
patchTransportEntry entity = runDb $ replace (entityKey entity) (entityVal entity)
