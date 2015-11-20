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
4. This site uses the static site generator [Middleman](https://middlemanapp.com/) (which should get installed when you run `bundle install`. To start a local server, run the build command below, followed by the command to startup a local server:
```
middleman build
middleman server
```
Once you've done the first build, you should only have to run `middleman server` in the future, unless you update the Gemfile or do something else that requires re-building the source files.

## Usage & Best Practices

### Adding to the Code Base

#### Branches & Pull Requests
* For major changes, branch off of `develop`, and then make a pull request to merge your branch into develop.
* For minor changes, commit directly to `develop` and double-check that everything looks good on staging before making a pull request to merge to master.

#### Commits
* Use the imperative, present tense in commit messages: "change", not "changed" or "changes".
* Provide meaningful commit messages -- `Modify class names in links module` vs. `change stuff`
* Commit often, and break things up into logical chunks based on what was changed.

#### CSS & HTML
* Follow the principles, rules, and file structure of [SMACSS](https://smacss.com/), with [BEM](http://getbem.com/introduction/) naming conventions.
* Avoid more than 2-3 levels of nesting at all possible costs.
* Use semantic class names!! Refer to Chris Coyier's tips [here](https://css-tricks.com/semantic-class-names/)
* Always use SVG (if possible)
* Above all else, (try to) be consistent with naming, structure, etc.!
