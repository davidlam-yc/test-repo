GITHUB_REF=refs/heads/feature-branch-1/adsf
IFS='/'
read -a strarr <<< "$GITHUB_REF"

echo "Deleting folder ${strarr[@]:(-1)}"