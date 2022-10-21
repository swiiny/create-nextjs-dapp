# make component name=ExampleComponent
# will create a directory called ExampleComponent
# and put these files in there.
# ExampleComponent
# |- index.ts
# |- ExampleComponent.tsx
# |- ExampleComponent.styles.ts
# |- ExampleComponent.type.ts
#
# the files are set up with the minimum code needed to get the component working.
# The new component is placed into the ./components directory

# How to create a component with the CLI : make component name=ExampleComponent
component:
	sh scripts/create_component.sh ${name}

# same command for windows
win-component:
	sh scripts/win_create_component.sh ${name}

# run tests before build
build:
	npm run lint
	npm run build

init:
	npm install
	npm run dev

start:
	npm run dev
	
reset:
	rm -rf .next
	rm -rf node_modules
	rm -rf package-lock.json
	npm install

restart:
	rm -rf .next
	rm -rf node_modules
	rm -rf package-lock.json
	npm install
	npm run dev

push:
	npm run lint
	npm run build
	git push

cp-common:
	cp -r ./common/* ./packages/mui
	cp -r ./common/* ./packages/base
