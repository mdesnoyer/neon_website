# Neon Website

This is the codebase for neon-lab.com.

## Local Setup

To get the app setup locally, follow these steps:

* Clone the repo to your machine.
* If you haven't installed bundler, run this command:
```
gem install bundler
```
* From the root directory of the repo, run bundle to install necessary dependencies:
```
bundle install
```
* This site uses the static site generator [Middleman](https://middlemanapp.com/) (which should get installed when you run `bundle install`. To start a local server, run the following command:
```
middleman server
```
Once you've run `middleman build` once, you should only have to run `middleman server` in the future, unless you change something that requires re-building the source files in order to render locally.

## Deploying

* The site is hosted on [Netlify](https://www.netlify.com/) -- ask Deb for access to the Netlify account.
* Netlify is setup with two apps, one for production and one for staging. Both are configured to deploy automatically -- they will "watch" the Github brances (develop and master) and deploy whenever there's a new commit. 
* Committing to `develop` will deploy to `staging.neon-lab.com`, committing to `master` will deploy to production, `neon-lab.com`.

## Usage & Best Practices

### Adding to the Code Base

#### CSS & HTML
* Follow the principles, rules, and file structure of [SMACSS](https://smacss.com/), with [BEM](http://getbem.com/introduction/) naming conventions.
* Avoid more than 2-3 levels of nesting
* Use semantic class names!! Refer to Chris Coyier's tips [here](https://css-tricks.com/semantic-class-names/)
* Always use SVG (if possible)
* Above all else, (try to) be consistent with naming, structure, etc.!

#### Commits
* Use the imperative, present tense in commit messages: "change", not "changed" or "changes".
* Provide meaningful commit messages -- `Modify class names in links module` vs. `change stuff`
* Commit often, and break things up into logical chunks based on what was changed.

#### Branches & Pull Requests
* For major changes, branch off of `develop`, and then make a pull request to merge your branch into develop.
* For minor changes, commit directly to `develop` and double-check that everything looks good on staging before making a pull request to merge to master.
