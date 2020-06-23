#!/usr/bin/env bash

# install Amazon CLI
apt-get update && apt-get install -y python-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install awscli

# use AWS CLI to delete folder from s3 bucket
echo "Deleting folder:" $folder_number
aws s3 rb s3://lerna-stencil/$folder_number