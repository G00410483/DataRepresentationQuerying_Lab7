import { useState } from "react";
import axios from "axios";
function Create() {

    // Declaring variables that will be used in the form
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    // Handle the submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Title: " + title +
            " Cover: " + cover +
            " Author: " + author);
        const book = ({
            title:title,
            cover:cover,
            author:author
        });
        axios.post('http://localhost:4000/api/book', book)
        .then()
        .catch();
    }

    //Return value
    return (
        <div className="App">
            <h3>Hello from Create component</h3>
            {/* Creat a form */}
            <form onSubmit={handleSubmit}>
                {/* Edit Book Title */}
                <div className="form-group">
                    <label>Edit Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        // Update title
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                {/* Edit Book Author */}
                <div className="form-group">
                    <label>Edit Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        // Update  author
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                {/* Edit Book Cover */}
                <div className="form-group">
                    <label>Edit Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        // Update cover
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;