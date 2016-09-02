activate :directory_indexes
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

activate :blog do |blog|
  blog.name = "case-studies"
  blog.layout = "case-studies"
  blog.paginate = false
  blog.permalink = "case-studies/{title}"
  blog.sources = "case-studies/{title}.html"
end

page "/exercises/*", layout: "case-studies"

configure :development do
  activate :livereload
end

configure :build do
  activate :minify_css
  activate :asset_hash
end

activate :deploy do |deploy|
  deploy.build_before = true
  deploy.deploy_method = :git
end
