# Pokemon List

[![Build Status](https://travis-ci.org/marcelorl/pokemon-list.svg?branch=master)](https://travis-ci.org/marcelorl/pokemon-list) [![Greenkeeper badge](https://badges.greenkeeper.io/marcelorl/pokemon-list.svg)](https://greenkeeper.io/)

### Tools

  - React 16
  - Redux
  - Reactstrap
  - Styled-components
  - Atomic design
  - Pokemon API
  - Jest + React-cosmos
  - TravisCI + gh-pages
  - Localforage (in order to avoid requesting the same urls and cache their response locally)

### Installation

```$ yarn```

### Usage

```$ npm start```

### Testing

```$ npm test```

### Deployment

Every commit merged on master will pass through TravisCI process, which contains the following steps:

```
$ npm test
$ npm run lint
$ npm run build
```
 
 If all these steps get completed, the built files will be sent to `gh-pages` branch and presented in
 `https://xp-pokemon.herokuapp.com/`
