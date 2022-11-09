import React, {useState, useEffect} from 'react'
import {useParams, Link } from 'react-router-dom';
import styled from 'styled-components';

const Cuisine = () => {
    
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();
    
    const getCuisine = async (name) => {
        const api = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&number=9&cuisine=${name}`);
        const data= await api.json();
        setCuisine(data.results)
    }
    
    
    useEffect(() => {
       getCuisine(params.keyword)
    }, [params.keyword])

    return (
    <Grid>
       {
        cuisine.map((recipe) => (
            <Card key={recipe.id}>
                <Link to={`/recipe/${recipe.id}`}>
                <div>
                    <p>{recipe.title}</p>
                </div>
                <img src={recipe.image} alt={recipe.title} />
                </Link>
            </Card>
        ))
       }
    </Grid>
  )
}


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    grid-gap: 3rem;
    `;

const Card = styled.div`
    position: relative;
    img{    
        width: 100%;
        border-radius: 2rem;
    }
    a{
        text-decoration: none;
    }

    h4{
        text-align: center;
        padding: 1rem;
    }

    div{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    p{
       position: absolute;
       color: #ffF;
       font-weight: 600;
       bottom: 20px;
       text-align: center;

    }
`



export default Cuisine