activate :livereload

activate :autoprefixer

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

after_build do |builder|
	src = File.join(config[:source],"_redirects")
	dst = File.join(config[:build_dir],"_redirects")
	builder.source_paths << File.dirname(__FILE__)
	builder.copy_file(src,dst)
end

configure :build do
  activate :directory_indexes
end
