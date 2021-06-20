
import React ,{ useEffect, useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import CardDetails from './CardComponents/CardDetails';
import PostsCard from './PostsCard';
import {getPostsInfo} from '../API/API'



function Main(props) {

    const [cardsFetchData, setCardsFetchData] = useState(null);
    const [cards, setCards] = useState(null);
    let [postsCart, setPostsCard] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let [itemCount, setCount] = useState(0);


    useEffect(() => {

        getPostsInfo().then(data =>{
            setCardsFetchData(data)
            setCards(data);
            setIsLoading(false);

        });

      }, []);

      const onSearch = (prodId) =>{
        prodId = parseInt(prodId);
        if(prodId === 0){
            setCards(cardsFetchData);
        }else{
           const filteredCards =cards.filter((card) => card.userId === prodId)
            setCards(filteredCards);
            }
      }

      const incrItem = () =>{
          
        setCount(++itemCount)
      }

      const incrPost = (post) =>{
        postsCart = [...postsCart,post];
        setPostsCard(postsCart)
      }


    return(
        <div className="container">
            <div className="row justify-content-center">             
                <Header itemCount={itemCount} />
                <Switch>
                    <Route exact path='/' component={()=>  <Home cards={cards} isLoading={isLoading} onSearch={onSearch} /> } /> 
                    <Route path="/cards/:id" component = {()=> <CardDetails cards={cards} incrItem={incrItem} incrPost={incrPost} />} />          
                    <Route path="/postscart" component = {()=> <PostsCard cards={postsCart}/>} />          

                </Switch>
                <Footer />
            </div>
        </div>
    )
}

export default Main;