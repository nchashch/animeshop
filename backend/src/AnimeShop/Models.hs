{-# LANGUAGE DeriveGeneric #-}
{-# LANGUAGE ExistentialQuantification #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE QuasiQuotes                #-}
{-# LANGUAGE TemplateHaskell            #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MultiParamTypeClasses #-}
module AnimeShop.Models where

import Database.Persist
import Database.Persist.TH
import Data.Text
import Data.Time
import Data.ByteString (ByteString)
import GHC.Generics
import Data.Aeson

type Money = Int
type Discount = Double

share [mkPersist sqlSettings, mkMigrate "migrateAll"] [persistLowerCase|
Manufacturer json
    name Text
    description Text
    deriving Show

-- List of all available items across all units
Item json
    name Text
    description Text
    manufacturer ManufacturerId
    deriving Show

-- How much of this item do we have at unit?
ItemInstance json
    unit UnitId
    amount Int
    price Money
    discount Discount nullable
    deriving Show
-- Is it a refrigerator, a cash registrar, or a lamp? What kind of lamp?
Equipment json
    name Text
    description Text
    deriving Show

Employee json
    name Text
    unit UnitId
    deriving Show

User
    email Text
    passphrase_bcrypt ByteString

-- A piece of equipment
EquipmentInstance json
    model EquipmentId
    comment Text nullable
    unit UnitId -- At what unit is this piece of equipment?
    location Text -- How do we represent location?
    installedAt UTCTime
    operational Bool
    deriving Show

-- Planned inspections
EquipmentInspectionSchedule json
    employee EmployeeId
    equipmentInstance EquipmentInstanceId
    dateTime UTCTime
    completed Bool
    deriving Show

EquipmentInspectionResult json
    inspectedAt UTCTime
    inspectedBy EmployeeId
    schedule EquipmentInspectionScheduleId
    description Text -- General inspection report
    deriving Show

Unit json
    name Text
    address Text
    deriving Show

EmployeeEntry json
    unit UnitId
    employee EmployeeId
    enteredAt UTCTime nullable -- can be null if employee "didn't enter"
    exitedAt UTCTime nullable -- can be null if employee "didn't exit"
    deriving Show

-- Not sure if this is neccessary
TransportEntry json
    unit UnitId
    licensePlate Text
    enteredAt UTCTime nullable -- can be null if employee "didn't enter"
    exitedAt UTCTime nullable -- can be null if employee "didn't exit"
|]

data UserCredentials =
  UserCredentials {
  email :: Text,
  password :: Text
  } deriving (Generic, Show)

instance ToJSON UserCredentials
instance FromJSON UserCredentials
