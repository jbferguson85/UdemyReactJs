let visible = false;

const appRoot = document.getElementById('app');

const onDetailClick = () => {
    visible = !visible;
    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={onDetailClick}>{visible ? 'Hide Details' : 'Show Details'}</button>
            {visible && <p>Hey here are the details</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

render();