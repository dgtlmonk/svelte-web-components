# Conventions

[Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) is recommended for the following reasons
* Makes it easier for people to contribute to your projects, by allowing them to explore a more structured commit history. 
* Communicating the nature of changes to teammates, the public, and other stakeholders

Recommended commit types

`build:`, `chore:`, `ci:`,`docs:`, `style:`,`refactor:`, `perf:`, `test:`

### Example


Commit message with new feature
```bash
feat: add button icon image as parameter
```


Commit message with description and breaking change footer
```bash
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```
Commit message with both ! and BREAKING CHANGE footer

```bash
chore!: drop support for Node 6

BREAKING CHANGE: use JavaScript features not available in Node 6.
```
