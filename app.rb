$LOAD_PATH << '.'
require 'utils.rb'

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
  entries = json['params']['entries']
  mode = json['params']['mode']

  first = Integer(entries[0])
  second = Integer(entries[1])
  answer = 0

  if mode == "MUL"
    answer = Calculator.multiply(first, second)
  elsif mode == "DIV"
    answer = Calculator.divide(first, second)
  elsif mode == "ADD"
    answer = Calculator.add(first, second)
  elsif mode == "SUB"
    answer = Calculator.subtract(first, second)
  end

  {"answer" => answer}.to_json
end
