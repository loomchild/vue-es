# vue-es

[![Build Status](https://api.travis-ci.org/loomchild/vue-es.svg)](https://api.travis-ci.org/loomchild/vue-es)

> A Vue and ElasticSearch demo

# Requirements

* Node 6.x
* Docker with Docker Compose or ElasticSearch running locally with [elasticseach.yml](./elasticsearch.yml)

# Build

Download node dependencies:

    npm install

# Prepare

Start external services:

    npm run deps

Initialize databases (deletes all data!):

    npm run init

# Run

Start the local development server:

    npm run start

# Test

Launch style check:

    npm run lint

Launch unit / integration tests (deps must be running):

    npm run test

Launch end-to-end tests (deps and local server must be running):

    npm run test-e2e

All of the above tests are automatically executed by [Travis](https://api.travis-ci.org/loomchild/vue-es) after every commit.

# Deploy

Static application can be generated into dist/ directory using:

    npm run build
