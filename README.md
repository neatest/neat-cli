# Neat repo

This repository is a [Neat](https://github.com/olivr-com/neat) template. It is meant to be used to create a new cli based off the [oclif framework](https://oclif.io/).

You can use it in conjunction with our other template: [Neat Repo](https://github.com/olivr-templates/neat-repo)

## Content

- Write your CLI in Typescript
- Manage its dependencies and versions using Yarn
- Test it with mocha
- [Github workflow](.github/workflows/cli.yml) to test/build/publish your cli

## Usage

Install [Neat](https://github.com/olivr-com/neat) `npm i -g neat` or you can run it directly through `npx neat`

### For a new repo

Run the following command:

```sh
neat cli my-project
```

### For an existing repo

Neat will not overwrite any files in your folder unless you tell it to do so with the `--force` option

In your repo folder, run:

```sh
neat cli
```

### As your new personalized repo template

Fork this template, customize it to your needs.

Then use Neat as described above and use the path to your forked repo instead.

## Composability

Neat is composable, meaning you can compose a repo from several templates by just running the neat command several times.
Check out our [repo template](https://github.com/olivr-templates/neat-repo) which can be used in conjunction with this template.

For example, you can run:

```sh
neat cli
neat repo
```
