'use strict';

console.log('App.js is running');

// JSX - JavaScript XML

var app = {
    title: 'Indecision App',
    subtitle: 'A great app',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        app.title
    ),
    app.subtitle && React.createElement(
        'h3',
        null,
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        app.options.length ? "Here are your options" : "No options"
    )
);
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
