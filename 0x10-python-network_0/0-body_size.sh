#!/bin/bash
# Sends a request to that URL to displays the body size
curl -sI "$1" | grep -i Content-Length | cut -d " " -f2
