import React from 'react'
import {useState, useEffect} from 'react';

//You can destructure your props directly from the parameter list

export default function Form(props) {

    //state to hold the data of our form
    const [formData, setFormData] = useState({
        searchterm: '',
    });

    //handlechange = updates form data when we type into form
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        //prevent the page from refereshing on form submission
            event.preventDefault();
            //pass the search term to moviesearch pro, which is apps getMovie function
            props.movieSearch(formData.searchterm);
    };
  return (
    <div>
        <form onSubmit = {handleSubmit}>
            <input 
                type="text" 
                name="searchterm"
                onChange={handleChange}
                value={formData.searchterm}
            />
            <input type="submit" value ="submit" />
        </form>
    </div>
  )
}
