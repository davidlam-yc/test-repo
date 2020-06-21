#!/usr/bin/env bash

# install Amazon CLI
apt-get update && apt-get install -y python-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install awscli
IFS='/'
read -a strarr <<< "$branch_name"
echo "Deleting folder ${strarr[1]}"
aws s3 rm s3://lerna-stencil/${strarr[1]} --recursive