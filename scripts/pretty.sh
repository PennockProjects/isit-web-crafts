#!/bin/bash

find source -iname "*.js" -exec "./prettier" --write {} \;