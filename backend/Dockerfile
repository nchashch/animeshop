FROM ubuntu:19.04
RUN mkdir -p /opt/animeshop/
ARG BINARY_PATH
WORKDIR /opt/animeshop
RUN apt-get update && apt-get install -y \
  libpq-dev \
  libc6-dev \
  libmpc-dev
COPY "$BINARY_PATH" /opt/animeshop/backend
CMD ["/opt/animeshop/animeshop"]
