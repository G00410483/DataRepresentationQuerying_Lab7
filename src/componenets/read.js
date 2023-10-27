import { useEffect, useState } from "react";
import Books from "./books";
import axios from "axios";

function Read() {

    // Data variable
    const [data, setData] = useState([]);
    
    //  Synchronize a component with an external system
    useEffect(
        () => {
            // Send a GET request to the specified URL to retrieve JSON data
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')
            .then(
                // http Response
                (response)=>{
                    // Update data
                    setData(response.data.books);
                }
            )
            // Log any errors that occur during the API request
            .catch( (error)=>{
                // Display the message
                console.log(error);
            })
           
        }, []
    );

     // Render the component
    return (
        <div className="App">
            <h3>Hello from Read component</h3>
            {/*Display book info*/} 
            <Books myBooks={data}></Books>
        </div>
    );
}

export default Read;