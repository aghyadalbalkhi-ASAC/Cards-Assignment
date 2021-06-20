import React from "react";
import RenderCard from './CardComponents/RenderCard';

function PostsCard({cards }) {
    console.log(cards)
    return(
        <>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        { cards.length !== 0 ? <RenderCard cards={cards} /> : <div> Posts Cart is Empty ... </div>}
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostsCard;