#!/bin/bash
echo "Setting up CI environment..."
npm ci
npx playwright install --with-deps