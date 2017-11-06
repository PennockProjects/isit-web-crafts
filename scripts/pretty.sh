#!/bin/bash

find source -iname "*.js" -exec "./node_modules/.bin/prettier" --write {} \;