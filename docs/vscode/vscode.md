# Extensions

## General

-------

### Material Icon Theme

Simple extension adding a bunch of icons based on file names :

[Material Icon Theme&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme){ .md-button .md-button--primary  }

??? info "Material Icons"
    ![Material Icons](https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/master/images/fileIcons.png){ loading=lazy }

### Path Auto-complete

Provides path completion for visual studio code.

[Path Auto-complete&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete){ .md-button .md-button--primary  }

### Better Comments

Improve your code commenting by annotating with alert, informational, TODOs, and more!

[Better Comments&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments){ .md-button .md-button--primary  }

### Live Share

Real-time collaborative development from the comfort of your favorite tools.

[Live Code Share&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare){ .md-button .md-button--primary  }

### Todo Tree

Show TODO, FIXME, etc. comment tags in a tree view

[Todo Tree&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree){ .md-button .md-button--primary  }

### Indenticator

Highlights your current indent depth

[Todo Tree&nbsp; :material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=SirTori.indenticator){ .md-button .md-button--primary  }

## Python

-------

### Python Extension

:material-language-python: Main extension for python development.

[Python Extension&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=ms-python.python){ .md-button .md-button--primary }

??? tip "Debug & Test"
    See quickstart to setup debug and test environment  

### Python Docstring Generator

Automatically generates detailed docstrings for python functions

[Python Docstring Generator&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=njpwerner.autodocstring){ .md-button .md-button--primary }

### Django Extension

Beautiful syntax and scoped snippets for perfectionists with deadlines

[Django Extension&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=batisteo.vscode-django){ .md-button .md-button--primary }

??? tip "File association"
    Add this to your settings to enable template snippet for correct html files

    ```json
    "files.associations": {
        "**/*.html": "html",
        "**/templates/**/*.html": "django-html",
        "**/templates/**/*": "django-txt",
        "**/requirements{/**,*}.{txt,in}": "pip-requirements"
    }
    ```

## Javascript

-------

### ES6 Code Snippets

Code snippets for JavaScript in ES6 syntax

[ES6 Code Snippets&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=xabikos.JavaScriptSnippetso){ .md-button .md-button--primary }

### ES7 React Snippets

Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax

[ESLint&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets){ .md-button .md-button--primary }

### ES Lint

Integrates ESLint JavaScript into VS Code.

[ESLint&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint){ .md-button .md-button--primary }

??? tip "Format On Save"
    Add this to your settings to enable format on save for eslint

    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    }
    ```

### Import Cost

Display import/require package size in the editor

[ESLint&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=wix.vscode-import-cost){ .md-button .md-button--primary }

## HTML & CSS

### HTML snippets

Full HTML tags including HTML5 Snippets

[HTML Snippets&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=abusaidm.html-snippets){ .md-button .md-button--primary }

### Auto Rename Tag

Auto rename paired HTML/XML tag

[Auto Rename Tag&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag){ .md-button .md-button--primary }

### Auto Close

Automatically add HTML/XML close tag, same as Visual Studio IDE or Sublime Text

[Auto Close Tag&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag){ .md-button .md-button--primary }

### IntelliSense for CSS class names in HTML

CSS class name completion for the HTML class attribute based on the definitions found in your workspace.
[IntelliSense for CSS Class&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=Zignd.html-css-class-completion){ .md-button .md-button--primary }

### CSS Peek

Allow peeking to css ID and class strings as definitions from html files to respective CSS. Allows peek and goto definition.

[CSS Peek&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=pranaygp.vscode-css-peek){ .md-button .md-button--primary }

## Markdown

-------

### Markdown Code Snippets

All you need to write Markdown (keyboard shortcuts, table of contents, auto preview and more)

[Markdown Snippets&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one){ .md-button .md-button--primary }

### Markdown Linter

Markdown linting and style checking for Visual Studio Code

[Markdown Linter&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint){ .md-button .md-button--primary }

??? tip "Format On Save"
    Add this to your settings to enable format on save for markdown

    ```json
    "editor.codeActionsOnSave": {
        "source.fixAll.markdownlint": true,
    }
    ```

## Git

-------
Supercharge the Git capabilities built into Visual Studio Code — Visualize code authorship at a glance via Git blame annotations and code lens, seamlessly navigate and explore Git repositories, gain valuable insights via powerful comparison commands, and so much more

VS Marketplace Link:
[Git Lens&nbsp;&nbsp;:material-microsoft-visual-studio-code:](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens){ .md-button .md-button--primary }
