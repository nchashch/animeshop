#!/bin/bash

stack install --stack-yaml ./backend/stack.yaml
npm run build --prefix ./frontend
BINARY_PATH="build/backend" docker-compose build
docker-compose up
