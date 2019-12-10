build:
	@stack install
	@BINARY_PATH="build/backend" docker-compose build
