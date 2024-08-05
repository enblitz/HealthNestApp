#!/bin/bash
cd backend
docker build -t backend .
docker tag db:latest enblitztechnologies/healthnest:backend
cd ..
