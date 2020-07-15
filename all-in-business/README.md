# Vue Template with typescript

## Getting Started

### Install
```
vue create [name]
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Directory Structure overview
```
- assets
- axios # All axios setting will be here
- components # Global compoents will be stored in here
  - Folder Name
    - index.vue
    - compoents # If need
- config # Config files will be here
  - index.ts # Global setting
- lang # Vuei18n
- layouts # layouts
  - FolderName
    - index.vue
    - compoents
- mixins
  - Typesript files
- plugins
  - Typescript files
- router
- store
- styles
- types # All Global types will be sotred in here
- utils
- views
- main.ts
- App.vue
- apolloClient.ts
```
### Naming
1. Components
    1. Use pascal case
    2. If just word, use word without capital letter 
    3. Ex)ArticleTitle.vue
  ------  
2. Folder
    1. name it to noun type
    2. Ex) axios, config, layout


## Comments
1. Write following format of comment at the all top of files
```typescript
/**
@author: Youngjin Kwak(kkan0615@gmail.com)
@contributors: none
@name: Readme.md
@description: Overview of this project
@createdAt: 07-15-2020 # If missing, just write none or missing
@updatedAt: 07-15-2020
*/
```
