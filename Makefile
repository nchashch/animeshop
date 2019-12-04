##
# Project Title
#
# @file
# @version 0.1



# end
## Build binary and docker images
build:
	@stack build
	@BINARY_PATH=${BINARY_PATH_RELATIVE} docker-compose build
