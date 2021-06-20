import React from "react";
import { Loading } from './Loading';
import RenderCard from './CardComponents/RenderCard';
import SearchForm from './Forms/SearchForm'


function Home({cards,isLoading ,onSearch}) {

    return(
        <>
            <SearchForm onSearch={onSearch}/>
            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md m-1">
                        { isLoading && <Loading /> }
                        { cards && <RenderCard cards={cards} />}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;