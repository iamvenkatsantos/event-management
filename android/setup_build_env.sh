#!/bin/bash

# Set up environment for React Native builds
export PATH="/usr/local/bin:$PATH"
export NODE_PATH="/usr/local/bin/node"

# Make sure node is accessible
if ! command -v node &> /dev/null; then
    echo "Node.js not found in PATH. Adding /usr/local/bin to PATH..."
    export PATH="/usr/local/bin:$PATH"
fi

echo "Node.js version: $(node --version)"
echo "Node.js path: $(which node)"

# Execute the gradle command with the proper environment
exec "$@"
