#/bin/sh

pnpx @tailwindcss/cli -i ./src/test.css -o ./src/test.inline.txt

pnpm run build

mkdir -p build
cp dist/static/js/* build
# cp dist/static/css/* build

cp manifest.json build

