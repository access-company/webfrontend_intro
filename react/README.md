React Training
====

## Generate static site

### Installation

```
$ asdf install nodejs 10.19.0
$ asdf local nodejs 10.19.0
$ cd docs
$ npm install
```

### Edit API keys

```
$ cp .env{Template,}
```

```
// .env

GATSBY_ALGOLIA_INDEX_NAME=
GATSBY_ALGOLIA_APP_ID=
GATSBY_ALGOLIA_SEARCH_KEY=
ALGOLIA_ADMIN_KEY=
```

### Getting Started

```
$ npm run build
$ npm start
```

### Staging (copy)

```shell
$ npm run stage
```
