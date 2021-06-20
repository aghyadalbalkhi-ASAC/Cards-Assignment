import { useHistory } from 'react-router-dom';
import {Card,Row,Col} from 'react-bootstrap'


function RenderCard({cards}) {
    
    const history = useHistory();

    const routeChange = (id) =>{ 
        let path = `/cards/${id}`; 
        history.push(path);
      }

        return(
            <>
            <Row xs={1} md={3} className="g-4">
                {cards.map(card =>{
                    return (
                        <Col class="single-card" key={card.id}>
                            <Card onClick={()=>routeChange(card.id)} border="info" >
                                {/* <Link to={`/cards/${card.id}`}> */}
                                <Card.Header as="h5">{card.title}</Card.Header>
                                <Card.Body>
                                    <Card.Text>{card.body}</Card.Text>
                                </Card.Body>
                                {/* </Link> */}
                            </Card> 
                        </Col>
                    )     
                })}
            </Row>
            </>
        );
}

export default RenderCard;