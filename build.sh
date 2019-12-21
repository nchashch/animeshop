#!/bin/bash

stack install --stack-yaml ./backend/stack.yaml
yarn --cwd ./frontend install
yarn --cwd ./frontend build
BINARY_PATH="build/backend" docker-compose build
