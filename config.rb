activate :directory_indexes
set :css_dir, 'stylesheets'
set :js_dir, 'javascripts'
set :images_dir, 'images'

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
