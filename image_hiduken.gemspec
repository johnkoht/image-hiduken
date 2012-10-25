$:.push File.expand_path("../lib", __FILE__)
require "image_hiduken/version"

Gem::Specification.new do |s|
  
  s.name        = "image-hiduken"
  s.version     = ImageHiduken::VERSION
  s.authors     = ["John Koht"]
  s.email       = ["john@kohactive.com"]
  s.homepage    = "https://github.com/johnkoht/image-hiduken"
  s.summary     = %q{Responsive image handling}
  s.description = %q{Image hiduken is a simple jQuery plugin for responsive images in dynamic websites and applications.}

  s.require_paths = ["lib"]
  s.files = Dir["vendor/**/*.js"] + Dir["lib/**/*"] + ["README.md", "LICENSE"]
  
  s.required_rubygems_version = Gem::Requirement.new('>= 1.3.6') if s.respond_to? :required_rubygems_version=
  
end