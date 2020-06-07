[![Build](https://github.com/{{repo-name}}/workflows/Build%20&%20Publish%20CLI/badge.svg)](https://github.com/{{repo-name}}/actions?query=workflow%3A%22Build+%26+Publish+CLI%22)
[![Codecov](https://codecov.io/gh/{{repo-name}}/branch/master/graph/badge.svg)](https://codecov.io/gh/{{repo-name}})

### Project specific

Install dependencies:

```sh
yarn install
```

Run tests:

```sh
yarn test
```

Run your cli:

```sh
./bin/run
```

Use your code as the cli version you use on your system:

```sh
yarn link
```

### For maintainers

We follow [Semantic versioning](https://semver.org/) and make use of [Yarn version](https://classic.yarnpkg.com/docs/cli/version) to manage new versions.

#### Patch

When you make backwards compatible bug fixes:

```sh
yarn version --patch
```

#### New feature

When you add functionality in a backwards compatible manner:

```sh
yarn version --minor
```

#### Major version

When you make incompatible API changes:

```sh
yarn version --major
```
