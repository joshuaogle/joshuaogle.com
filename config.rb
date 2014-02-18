require 'redcarpet'
set :markdown_engine, :redcarpet
set :markdown, fenced_code_blocks: true, smartypants: true
activate :syntax, line_numbers: true

activate :livereload
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :directory_indexes

configure :build do
  activate :minify_css
  activate :minify_javascript
  activate :asset_hash
  activate :relative_assets
  set :relative_links, true
end

activate :deploy do |deploy|
  deploy.method = :git
end

activate :blog do |blog|
  blog.name              = "blog"
  blog.layout            = "post"
  blog.permalink         = ":title"
  blog.prefix            = "blog"
  #blog.tag_template      = "tag.html"
end
