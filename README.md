# Neat CLI

This repository is a [Neat](https://github.com/olivr-com/neat) template. Use it to create a new command line interface based on the [oclif framework](https://oclif.io/).

You can use it in conjunction with other templates such as [Neat Repo](https://github.com/olivr-templates/neat-repo)

## Content

- Example CLI written in Typescript using the latest available oclif versions
- Manage dependencies and versions using Yarn
- Tests with mocha
- CLI [contribution guidelines](inject/contribute.md)
- CLI specific [readme section](inject/installation.md)
- [Github action](actions/cli.yml) to test/build/publish your CLI

## Requirements

- Obtain an [authentication token from NPM](https://docs.npmjs.com/creating-and-viewing-authentication-tokens) and set it as the `NPM_TOKEN` Github secret for your repo (this is used to publish your CLI)

## Usage

Install [Neat](https://github.com/olivr-com/neat) `npm i -g neat` or you can run it directly through `npx neat`

### For an existing repo

Neat will not overwrite any files in your folder unless you tell it to do so with the `--force` option

In your repo folder, run:

```sh
neat cli
```

> Note: The current folder name will be used as the default internal cli name

### For a new repo

Run the following command:

```sh
neat cli my-cli
```

> Note: In this example, `my-cli` will be used as the internal cli name

### As your new personalized repo template

Fork this template, customize it to your needs.

Then use Neat as described above and use the path to your forked repo instead.

### Composability

Neat is composable, meaning you can compose a repo from several templates by just running the neat command several times.
Check out [neat repo](https://github.com/olivr-templates/neat-repo) or other [neat templates](https://github.com/search?q=topic%3Aneat-template&type=Repositories).

For example, you can run:

```sh
neat repo
neat cli
```
