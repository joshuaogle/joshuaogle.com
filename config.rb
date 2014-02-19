Time.zone = "UTC"

require 'redcarpet'
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true
activate :syntax, line_numbers: true

activate :livereload
activate :directory_indexes
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

require "lib/post_helpers"
helpers PostHelpers

configure :build do
  activate :minify_html
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.method = :git
end

activate :blog do |blog|
  blog.name              = "blog"
  blog.layout            = "post"
  blog.prefix            = "blog"
  blog.permalink         = ":title.html"
  blog.tag_template      = "tag.html"
  blog.year_template     = "calendar.html"
end
