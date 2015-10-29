activate :livereload

activate :autoprefixer

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

configure :build do
  activate :directory_indexes
end
