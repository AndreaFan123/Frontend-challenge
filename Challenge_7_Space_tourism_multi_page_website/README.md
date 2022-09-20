# Basic workflow for using sass

## Install extensions in VSCode
Click the extension button and search for:

1. `Live Sass compiler` by **Glenn Marks**
2. `Live Server`

## Configuration
Press `shift` + `command` + `p` to open `preferences: Open setting(JSON)`.
Scroll down to the last and add a comma, then type `liveSassCompile.settings.formats` with double quotes.

Amend the save path accordingly as this would be the `css` file after compilering.

```json
"liveSassCompile.settings.formats": [
    {
      "format": "compressed",
      "extensionName": ".css",
      "savePath": "[path]",
      "savePathReplacementPairs": null
    }
  ]
```
## Structuring SCSS files
First, create a folder `scss`, and the following child folders and files:

You can amend name of files accordingly.

```
|-- scss
|   |-- base
|       |-- _reset.scss
|   |-- components
|       |-- _components.scss
|   |-- layout
|       |-- layout.scss
|   |-- pages
|       |-- pages.scss
|   |-- utils
|       |-- utils.scss
|   |-- variables
|       |-- variables.scss
|-- style.scss
```


