{-# LANGUAGE DeriveDataTypeable #-}

module Wasp.AppSpec.App.Dependency
  ( Dependency (..),
    fromList,
  )
where

import Data.Data (Data)

data Dependency = Dependency
  { name :: String,
    version :: String
  }
  deriving (Show, Eq, Data)

fromList :: [(String, String)] -> [Dependency]
fromList = map (\(n, v) -> Dependency {name = n, version = v})