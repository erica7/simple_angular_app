# simpleAngularApp

## Develop
Clone the repo locally. Run `npm install`, `bower install`, and `npm start`. Navigate to the address provided by `http-server` (likely `http://127.0.0.1:8081`).

## Description
This is an AngularJS application run on a simple `http-server` to handle AngularJS's requests (specifically, `$http`). It works with data from an [API](http://jsonplaceholder.typicode.com/) (some real, and some imaginary such as post like status) and pretends to update some entries. The 'imaginary' post like status is treated as a boolean, as in a user has liked or not liked a post. Simple error messages are displayed to the user (which are really just placeholders now and should be improved significantly before release). The routes are RESTful:

- `/` is the index page showing all posts 
- `/posts/:id` shows post details  
- `/users/:id` shows user details  

Simple responsive web design was implemented with [Bootstrap](https://getbootstrap.com).

## Architecture
The application code lives in the `app` directory. The code is organized into folders-by-feature rather than folders-by-type. The features are posts (which houses the index partial as well as the post details partial), users, and comments. Additionally, a components folder houses all of the components used throughout the app. 

Components rely on external controllers and services to manipulate data. They use output events to send the data to the parent view & controller via their own controllers, or they access services directly via dependency injection. File names are descriptive of their contents. 

Controllers, factories, and directives (in this case, components) are given concise and descriptive names and aliases.

```
├── app.config.js
├── app.constant.js
├── app.module.js
├── comments
│   ├── comment.service.js
│   └── comments.controller.js
├── components
│   ├── comment.component.html
│   ├── comment.component.js
│   ├── editableValue.component.html
│   ├── editableValue.component.js
│   ├── homeButton.component.html
│   ├── homeButton.component.js
│   ├── post.component.html
│   ├── post.component.js
│   ├── user.component.html
│   └── user.component.js
├── index.html
├── posts
│   ├── index.html
│   ├── post.html
│   ├── post.service.js
│   └── posts.controller.js
├── static
│   ├── favicon.ico
│   └── style.css
└── users
    ├── user.html
    ├── user.service.js
    └── users.controller.js
```

## Development Process & Going Forward
As someone who hasn't used AngularJS in a while, and only in very simple applications, I started where any good dev should start: the documentation. I found the [Developer Guide](https://docs.angularjs.org/guide) to be particularly helpful in providing overviews and examples. I poked through a couple [example](https://github.com/angular/angular-phonecat) [repos](https://github.com/angular/angular-seed) as well. 

A styleguide and best practices for AngularJS are wonderfully organized and summarized [here](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md).

I also looked into making AngularJS more Angular-y (Angular 2/4/5/6, that is) by using components. Taking it a step further, one could eliminate the view controllers such that an app consists entirely of components and their associated controllers, plus services, factories, other directives, etc. I found some insightful [articles](https://toddmotto.com/rewriting-angular-styleguide-angular-2) and [styleguides](https://github.com/toddmotto/angularjs-styleguide) that make AngularJS more Angular-y and could be helpful in transitioning to the new Angular. 

This app uses promises for asynchronous behavior. Factory services return a promise that is dealt with in the controller or component controller. (See the post component controller, which updates post likes directly with the post factory via dependency injection.) Using resolves in the route provider would make for a better user experience; the user would only move to the requested view after the data has been retrieved. 