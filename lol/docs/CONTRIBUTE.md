<!-- cli-contribute -->

### Project specifics

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

<!-- cli-contribute -->