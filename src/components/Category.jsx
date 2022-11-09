import React from 'react'
import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiNoodles, GiChopsticks} from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import styled from 'styled-components';
import {NavLink} from 'react-router-dom'

const Category = () => {
  return(
 
    <List>
        <SLink to="/">
            <AiFillHome />
            <h4>Home</h4>
        </SLink>
        <SLink to="/cuisine/italian">
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink>
        <SLink to="/cuisine/american">
            <FaHamburger/>
            <h4>American</h4>
        </SLink>
        <SLink to="/cuisine/thai">
            <GiNoodles/>
            <h4>Thai</h4>
        </SLink>
        <SLink to="/cuisine/chinese">
            <GiChopsticks/>
            <h4>Chinese</h4>
        </SLink>
    </List>
    
  )
}

const List = styled.div`
    display:flex;
    justify-content: space-around;
    margin: 2rem 0rem;
`;

const SLink = styled(NavLink)`
    text-decoration:none;
    display:flex;
    flex-direction:column;
    align-items:center;
    background-color: rgb(56,56,56);
    color: white;
    position:relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    justify-content:center;
    row-gap: .5rem;
    cursor:pointer;
    
    h4{
        color:white;
        font-size: 10px;
        font-weight: 400;
        
    }

    &.active{
        background: linear-gradient(to right, #f27121, #e94057)
    }
`;


export default Category