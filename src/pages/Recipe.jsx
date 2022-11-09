import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import {useParams} from 'react-router-dom'

const Recipe = () => {

  let params = useParams();

  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions')

  const fetchDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
    const detailData = await data.json();
    setDetails(detailData)
    console.log(detailData)
  }

  useEffect(() => {
    fetchDetails()
  }, [params.name])


  return (
  
      <DetailWrapper>
        <div>
          <h4>{details.title}</h4>
          <img src={details.image} alt="" />
        </div>
        <Info>
          <div className="buttons-container">
          <Button className={activeTab === 'instructions' ? 'active': ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
          <Button className={activeTab === 'ingredients' ? 'active': ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
          </div>
          <div>
              {
                activeTab === 'instructions' ? 
                (<div className="ingredients-container">
                  <h2>Instructions</h2>
                  <h4 dangerouslySetInnerHTML={{__html: details.instructions}} className="details"></h4>
                </div>) 
                : 
                (
               <div className="ingredients-container">
                <h2>Ingredients</h2>
                  <ul>
                    {
                      details.extendedIngredients.map((ingredient) => (
                        <li key={ingredient.id}>{ingredient.original}</li>
                        ))
                    }
                  </ul>
                  
                </div>
                )
               
              }
          </div>
        </Info>
      </DetailWrapper>
    
  )
}


const DetailWrapper = styled.div`
  display: flex;
  column-gap: 5rem;
  align-items: flex-start;

  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: #fff;
  }

  img{
    margin-top: 2rem;
    border-radius: 2rem;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;

  .buttons-container{
    display: flex;
    height: 50px;
  }

  .details{
    margin-left: .5rem;
    line-height: 1.8rem;
  }

  .ingredients-container{
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
  }

  ul{
    list-style: none;


    li{
      font-weight: 600;
      color: rgb(56,56,56);
      margin-top: 1rem;
    }
  }

 
`;


const Button = styled.button`
  margin: 0 .5rem;
  background-color: transparent;
  border: 2px solid #000;
  padding: 1rem;
  font-weight: 600;
  font-size: 12px;
  cursor: pointer;
 
  
  
`;


export default Recipe