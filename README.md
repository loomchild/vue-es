# vue-es

[![Build Status](https://api.travis-ci.org/loomchild/vue-es.svg)](https://api.travis-ci.org/loomchild/vue-es)


> A Vue and ElasticSearch demo

# Requirements

* Node 6.x
* Docker with Docker Compose

# Build

Download node dependencies:

    npm install

# Running

Start external services:

    npm run deps

Start the server:

    npm run dev

# Production

In order to run in production ElasticSearch is required. 
Static application can be generated into dist/ directory using:

    npm run build
