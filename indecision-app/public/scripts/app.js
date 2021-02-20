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
var addOne = function addOne() {
    console.log('addOne');
};

var minusOne = function minusOne() {
    console.log('minusOne');
};

var reset = function reset() {
    console.log('Reset');
};

var count = 0;
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset },
        'Reset'
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
