#!/bin/bash

stack install
npm run build --prefix ./frontend
BINARY_PATH="build/backend" docker-compose build
docker-compose up
