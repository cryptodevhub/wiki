#!/bin/sh

project_name=cryptodevhub
destination=~/Desktop/backups
script_dir_path=$(cd "$(dirname "$0")" || exit; pwd)

timestamp=$(date +%s)
filename="$timestamp-$project_name.zip"

mkdir -p "$destination"

cd "$script_dir_path"/../

zip -er "$filename" ./* \
  -x ./node_modules\* \
  -x ./.next\*

cd -

mv "$filename" "$destination";
