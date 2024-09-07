#!/bin/sh
# https://unix.stackexchange.com/a/36805
# This will work in the BSD implementation of sed
find . -name '*.html' -exec sed -i '' "s%index.html%%g" {} +

# GNU implementation (not tested)
# find . -name '*.html' -exec sed -i "s%index.html%%g" {} +
