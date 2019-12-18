{-# LANGUAGE ExistentialQuantification #-}
{-# LANGUAGE GADTs #-}
{-# LANGUAGE GeneralizedNewtypeDeriving #-}
{-# LANGUAGE OverloadedStrings          #-}
{-# LANGUAGE QuasiQuotes                #-}
{-# LANGUAGE TemplateHaskell            #-}
{-# LANGUAGE TypeFamilies #-}
{-# LANGUAGE FlexibleInstances #-}
{-# LANGUAGE MultiParamTypeClasses #-}
module DB.Models where


import Database.Persist
import Database.Persist.TH
import Data.Text
import Data.Time

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

-- A piece of equipment
EquipmentInstance json
    model EquipmentId
    comment Text nullable
    unit UnitId -- At what unit is this piece of equipment?
    location Text -- How do we represent location?
    installedAt UTCTime
    operational Bool
    deriving Show

Unit json
    name Text
    address Text
    deriving Show
|]

{-
EquipmentInspectionResult
    equipment EquipmentInstanceId -- What piece of equipment was inspected?
    inspectedAt UTCTime
    inspectedBy EmployeeId
    schedule EquipmentInspectionScheduleID
    description Text -- General inspection report
    deriving Show

-- Planned inspections
EquipmentInspectionSchedule
    employeeID EmployeeID
    equipmenInstanceID EquipmentInstanceID
    dateTime DateTime
    completed Bool
    deriving Show

Employee
    name String
    securityRole SecurityRole -- Determines what access rights this employee has
    deriving Show
-- What is this employee's schedule? - 9 to 5 5 days a week?
EmployeeSchedule

-- RepairResult

-- Security

EmployeeEntry
    unit UnitId
    employee EmployeeId
    enteredAt UTCTime nullable -- can be null if employee "didn't enter"
    exitedAt UTCTime nullable -- can be null if employee "didn't exit"
    deriving Show

-- Not sure if this is neccessary
TransportEntry
    unit UnitId
    licensePlate Text
    enteredAt UTCTime nullable -- can be null if employee "didn't enter"
    exitedAt UTCTime nullable -- can be null if employee "didn't exit"
-}
