#!/bin/bash

export BUILD_PATH_RELATIVE=../build
make
npm run build --prefix ./frontend
docker-compose up
