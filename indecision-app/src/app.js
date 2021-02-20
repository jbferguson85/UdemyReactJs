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
const addOne = () => {
    console.log('addOne');
}

const minusOne = () => {
    console.log('minusOne');
}

const reset = () => {
    console.log('Reset');
}

let count = 0;
const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={addOne}>+1</button>
        <button onClick={minusOne}>-1</button>
        <button onClick={reset}>Reset</button>
    </div>
);



const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);