#!/bin/bash
# sends DELETE req to given arg URL and display response body
curl -s "$1" -X DELETE
