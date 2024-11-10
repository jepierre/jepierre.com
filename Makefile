install: 
	bundle install

watch:
	bundle exec jekyll serve --watch

all: 
	bundle exec jekyll serve

drafts:
	bundle exec jekyll serve --drafts
