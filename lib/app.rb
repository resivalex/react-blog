require 'sinatra'

configure do
  set :server, :puma
end

set :root, 'lib/app'

get '/' do
  erb :index
end
