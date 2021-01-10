#!/bin/bash
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
fi
rm -rf build/ 
npm run build 
echo 'Deploying to dev ✅'

vc 
echo 'Deploying to prod ✅'
vc --prod