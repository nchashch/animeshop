{-# LANGUAGE DataKinds #-}
{-# LANGUAGE TypeOperators #-}
module AnimeShop.API.Authentication (AuthenticationAPI, authenticationServer) where

import AnimeShop.Prelude
import AnimeShop.API.Authentication.Users

type AuthenticationAPI = "authentication" :> UsersAPI

authenticationServer :: ServerT AuthenticationAPI App
authenticationServer = authenticationServer
