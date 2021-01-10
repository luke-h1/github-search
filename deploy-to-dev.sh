#!/bin/bash
if ! npm run lint:fix; then
    echo ''
    echo ''
    echo "###########################################" 
    echo "# ❌     ESLINT returned an error.     ❌  #" 
    echo "# ❌ process exited with status code 1 ❌  #" 
    echo "###########################################" 
    exit 1
else
    echo 'eslint returned no errors. Deploying to dev ✅'
fi
rm -rf build/ 
npm run build 
vc 