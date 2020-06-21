#!/usr/bin/env bash

# install Amazon CLI
apt-get update && apt-get install -y python-dev
curl -O https://bootstrap.pypa.io/get-pip.py
python get-pip.py
pip install awscli
aws s3 rm s3://lerna-stencil/branch-del --recursive
