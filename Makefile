install:
	@npm ci
	npm link  # install local packages

brain-games:
	@node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint . --fix

.PHONY: install brain-games brain-even publish lint
