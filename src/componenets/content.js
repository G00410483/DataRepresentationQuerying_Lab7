function Content() {
    //Return value
    return (
        <div className="App">
            <h1>Hello World</h1>
            {/* Display current date */}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
}
export default Content;