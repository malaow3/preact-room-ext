#/bin/sh

pnpm run build

mkdir -p build
cp dist/static/js/* build
cp dist/static/css/* build

cp manifest.json build
