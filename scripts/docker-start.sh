#!/usr/bin/env bash

(cd /workspace/yscloud && node /workspace/node_modules/.bin/next start) & (cd /workspace/zswl && node /workspace/node_modules/.bin/next start -p 3001)
