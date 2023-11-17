import BookItems from "./bookItems";


function Books(props) {
    // Return message
    return props.myBooks.map(
        (book)=>{
            // Return book info
            return <BookItems myBook={book} key={book._id}></BookItems>
        }
    );
}
export default Books;