COMMIT=$(git rev-parse --short HEAD)

docker build \
  -t registry.davidalen.dev/portfolio:$COMMIT \
  .
