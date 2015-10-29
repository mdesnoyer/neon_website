require "rubygems"

require "rack"
require "middleman/rack"
require "rack/contrib/try_static"

# Enable proper HEAD responses
use Rack::Head

use Rack::TryStatic,
  :root => "build",
  :urls => %w[/],
  :try => ['.html', 'index.html', '/index.html']

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('build/index.html', File::RDONLY)
  ]
}
