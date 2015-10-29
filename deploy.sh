#!/usr/bin/env bash
if [ "$1" == "staging" ]; then
  BUCKET="staging.neon-lab.com"
else
  BUCKET="www.neon-lab.com" # This should be the site's url
fi

BUILD_DIR=dist/build
STATIC_DIR=static/

# Update region

middleman build && \
aws s3 sync $BUILD_DIR s3://$BUCKET/ --region us-standard --exclude "index.html" && \
# uncomment this if you have static files
# aws s3 sync $STATIC_DIR s3://$BUCKET/ --region us-standard && \
aws s3 cp $DIR/index.html s3://$BUCKET/index.html --region us-standard --cache-control "max-age=60"
