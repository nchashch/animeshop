{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Authentication.Users where

import AnimeShop.Prelude

type UsersAPI =
  "users" :> ReqBody '[JSON] UserCredentials :> Post '[JSON] (Maybe UserId)

usersServer :: ServerT UsersAPI App
usersServer = postUsers

postUsers :: UserCredentials -> App (Maybe UserId)
postUsers = undefined
