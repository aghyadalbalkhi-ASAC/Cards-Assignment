import React , { useState } from 'react';
import {Form,Button,InputGroup,FormControl} from 'react-bootstrap'


function SearchForm({onSearch}) {

    const [prodId, setProdId] = useState(null);

    const inputChange = (event) => {
        setProdId(event.target.value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        onSearch(prodId);
        console.log(typeof prodId);

    }

    return(
        <div className='form-container'>
            <Form onSubmit={onSubmit} >
                <Form.Row>
                        <Form.Label  id="form-text-color">Enter The User ID  </Form.Label>
                        <InputGroup className="mb-3 justify-content-center">
                            <FormControl
                                id="prodId"
                                placeholder="Enter a Number"
                                onChange={inputChange}
                            />
                            <InputGroup.Append>
                                <Button type="submit" id="button-search"> Search! </Button> 
                                 <span>  </span>
                                <Button type="button" onClick ={ ()=>{onSearch("0")}}>
                                Clear! </Button>
                            </InputGroup.Append>
                        </InputGroup>
                </Form.Row>
            </Form>
        </div>
    )
    
}

export default SearchForm;