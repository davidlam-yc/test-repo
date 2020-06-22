#!/usr/bin/env bash

# install Amazon CLI
apt-get update && apt-get install -y python-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install awscli

# get bucket name from [1] indexed string from '/' separated branch name
# i.e. if branch name is 'feat/update-icons', get 'update-icons'
# i.e. if branch name is 'feat/FE-8/create-localisation-service', get 'FE-8'
IFS='/'

read -a strarr <<< "$branch_name"

# use AWS CLI to delete folder from s3 bucket
echo "Deleting folder ${strarr[@]:(-1)}"
aws s3 rm s3://lerna-stencil/${strarr[@]:(-1)} --recursive