#!/bin/bash

find . -type f -name "*.js" \
 -not -path "**/bower_components/**" \
 -not -path "**/node_modules/**" \
 -not -path "**/source/**" \
 -exec js-beautify -r {} \;