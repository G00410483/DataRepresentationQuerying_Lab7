import Card from 'react-bootstrap/Card';
function BookItems(props) {
    //Return value
    return (
        <div className="App">
            {/*Return book item properties*/} 
            <Card style={{ width: '100rem' }}></Card>
            <Card.Title>{props.myBook.title}</Card.Title>
            {console.log(props.myBook.title)}
            <img src={props.myBook.thumbnailUrl}></img>
            <p>{props.myBook.authors}</p>
        </div>
    );
}
export default BookItems;