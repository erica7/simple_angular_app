# simpleAngularApp

## Develop
Clone the repo locally. Run `npm install`, `bower install`, and `npm start`. Navigate to the address provided by `http-server` (likely `http://127.0.0.1:8081`).

## Architecture
All of the application code lives in the `app` directory. The application is organized into folders-by-feature rather than folders-by-type. File names are descriptive of its contents. Controllers, factories, and directives (in this case, components) are named and aliased according to best practices for concise and descriptive naming.

```
├── app.config.js
├── app.module.js
├── comments
│   ├── comment.service.js
│   └── comments.controller.js
├── components
│   ├── comment.directive.html
│   ├── comment.directive.js
│   ├── editableValue.directive.html
│   ├── editableValue.directive.js
│   ├── homeButton.directive.html
│   ├── homeButton.directive.js
│   ├── post.directive.html
│   ├── post.directive.js
│   ├── user.directive.html
│   └── user.directive.js
├── index.html
├── posts
│   ├── index.html
│   ├── post.html
│   ├── post.service.js
│   └── posts.controller.js
├── static
│   └── style.css
└── users
    ├── user.html
    ├── user.service.js
    └── users.controller.js
```

Components do not manipulate data directly; rather, components use an output event to send the data to the parent to handle the data and event as desired. 

## Development Proccess, FYI 
As someone who hasn't used AngularJS in a while, and only in very simple applications, I started where any good dev should start: the documentation. I found the [Developer Guide](https://docs.angularjs.org/guide) to be particularly helpful in providing overviews and examples. I poked through a couple [example](https://github.com/angular/angular-phonecat) [repos](https://github.com/angular/angular-seed) as well. 

A styleguide and best practices for AngularJS are wonderfully organized and summarized [here](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).