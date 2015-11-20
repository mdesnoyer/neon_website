# Neon Website

This is the codebase for neon-lab.com.

## Local Setup

To get the app setup locally, follow these steps:

1. Clone the repo to your machine.
2. If you haven't installed bundler, run this command:
```
gem install bundler
```
3. From the root directory of the repo, run bundle to install necessary dependencies:
```
bundle install
```
4. This site uses the static site generator [Middleman](https://middlemanapp.com/). To start a local server, run the build command below, followed by the command to startup a local server:
```
middleman build
middleman server
```
Once you've done the first build, you should only have to run `middleman server` in the future, unless you update the Gemfile or do something else that requires re-building the source files.


