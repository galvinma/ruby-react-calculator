# myapp.rb
require 'sinatra'
require "sinatra/cors"
require 'json'

set :allow_origin, "http://localhost:3000"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

post '/api/answer' do
  req = request.body.read
  json = JSON.parse(req)
  entries = json["params"]['entries']



  {"answer" => "3"}.to_json

end
