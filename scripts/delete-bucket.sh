#!/usr/bin/env bash

FOLDER_NUMBER=$1
echo "Deleting folder:" ${FOLDER_NUMBER}

# install Amazon CLI
apt-get update && apt-get install -y python-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install awscli

# use AWS CLI to delete folder from s3 bucket
aws s3 rm s3://lerna-stencil/${FOLDER_NUMBER} --recursive