FROM ruby:2.5.1

RUN mkdir /app
WORKDIR /app

COPY ["Gemfile", "Gemfile.lock", "Rakefile", "config.ru", ".ruby-version", "./"]

RUN bundle

COPY app app
COPY bin bin
COPY config config
COPY public public
