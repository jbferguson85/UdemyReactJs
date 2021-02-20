'use strict';

var visible = false;

var appRoot = document.getElementById('app');

var onDetailClick = function onDetailClick() {
    visible = !visible;
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Visibility Toggle'
        ),
        React.createElement(
            'button',
            { onClick: onDetailClick },
            visible ? 'Hide Details' : 'Show Details'
        ),
        visible && React.createElement(
            'p',
            null,
            'Hey here are the details'
        )
    );

    ReactDOM.render(template, appRoot);
};

render();
