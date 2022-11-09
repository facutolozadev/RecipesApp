import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import {Link} from 'react-router-dom'

const Veggie = () => {

    const [veggie, setVeggie] = useState([]);


    const getVeggie = async () => {


       const check = localStorage.getItem('popular');

       if(check) {
        setVeggie(JSON.parse(check))
       }else{
        const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`)
        const data = await api.json();
        localStorage.setItem('veggie', JSON.stringify(data.recipes))
        setVeggie(data.recipes) 
       }

       
    }

  useEffect(() => {
    getVeggie()
  }, [])

  return (  
        <Wrapper>
            <h3>Our vegetarian picks</h3>

          <Splide options={{
            perPage:4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "4rem"
            }}>
            
             {
                veggie.map((recipe) => (
                    <SplideSlide key={recipe.id}>
                        <Card>
                          <Link to={`/recipe/${recipe.id}`}>
                            <p>{recipe.title}</p>
                            <img src={recipe.image} alt={recipe.title} />
                            <Gradient />
                          </Link>
                        </Card>
                    </SplideSlide>
                ))
             }
            </Splide>
        </Wrapper> 
  )
}


const Wrapper = styled.div`
  margin: 5rem 0rem;
`;


const Card = styled.div`
    min-height: 20rem;
    border-radius: 2rem;
    overflow:hidden;
    position:relative;
    min-width: 10rem;
    img{
        border-radius: 2rem;
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }

    p {
       position: absolute;
       z-index: 10;
       color: #fff;
       bottom: 0%;
       width: 100%;
       text-align: center;
       font-size: .7rem;
       height: 40%;
       display: flex;
       justify-content: center;
       align-items: center;
       font-weight: 600;
    }
`

const Gradient = styled.div`
    z-index: 3;
    position:absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.5))
`

export default Veggie