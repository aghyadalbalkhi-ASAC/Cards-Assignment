import React ,{ useEffect, useState } from 'react';
import {Card,CardColumns,Button} from 'react-bootstrap'
import {getSpecificPosts} from '../../API/API'
import { Loading } from '../Loading';
import { useParams } from "react-router-dom";

const CardDetails = ({cards,incrItem,incrPost}) => {

  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  
  useEffect(() => {
      getSpecificPosts(id).then(data =>{
          setPost(data);
          setIsLoading(false);
      });
  });


  return (
    <div className="post-details">
      <CardColumns>
          { isLoading && <Loading /> }
         {post && < RenderCard post = {post} />}
         {/* < RenderCard card = {cards.filter((card) => card.id === parseInt(id))[0]} /> */}
      </CardColumns>
      <br></br><br></br>
      <Button onClick={() => {incrItem()
          incrPost(post)}
      }> Add To Cart</Button>

    </div>
  );
}


function RenderCard({post}){
  return(
      <>
        <Card>
              <Card.Body>
                <Card.Title as='h3'> Title :  {post.title}</Card.Title>
                <Card.Text as="h6"> userId : {post.userId}</Card.Text>
                <Card.Text>
                  {post.body}
                </Card.Text>
              </Card.Body>
            </Card>
      </>
  );

}
 
export default CardDetails;