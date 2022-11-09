import React, { useState } from 'react'
import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';
import {useNavigate} from 'react-router-dom';

const Search = () => {

const [inputText, setInputText] = useState("");
const navigate = useNavigate();

const submitHandler = e => {
  e.preventDefault();
  navigate(`/searched/${inputText}`)
}

  return ( 
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch></FaSearch>
        <input 
        type="text" 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)} 
        />
      </div>
      
    </FormStyle>
    
  )
}





const FormStyle = styled.form`
    margin-top: 3rem;
    width: 100%;
    div{
      position:relative;
      width: 100%;
      display: flex;
      justify-content: center;
    }

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1rem;
        color: #fff;
        padding: 1rem 3rem;
        border: none;
        border-radius: 1rem;
        outline: none;
        width: 80%;
        
    }

    svg{
        position:absolute;
        top: 37%;
        left: 12%;
        color: white;
        
    
    }
`;

export default Search