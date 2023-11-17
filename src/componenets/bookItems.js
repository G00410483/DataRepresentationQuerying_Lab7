import Card from 'react-bootstrap/Card';
function BookItems(props) {
    //Return value
    return (
        <div className="App">
            {/*Return book item properties*/}
            {/*Bootstrap Card Style*/}
            <Card style={{ width: '100rem' }}></Card>
            <Card.Title>{props.myBook.title}</Card.Title>
            <img src={props.myBook.cover}></img>
            <p>{props.myBook.author}</p>
        </div>
    );
}
export default BookItems;