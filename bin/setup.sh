#!/bin/bash

DIR="$( cd "$( dirname "$0" )" && pwd )"

cd $DIR/../

# Install npm dependencies
echo "Create .env"
cp .env.example .env

echo "Composer install"
composer install

echo "Generate application key"
php artisan key:generate