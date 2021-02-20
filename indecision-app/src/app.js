console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'A great app',
    options: [
        'One', 'Two'
    ]
}

const template = (
<div>
    <h1>{app.title}</h1>
    {app.subtitle && <h3>{app.subtitle}</h3>}
    <p>{app.options.length ? "Here are your options" : "No options" }</p>
</div>
);
const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

