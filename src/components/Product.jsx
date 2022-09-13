import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import React from 'react'
import styled from "styled-components";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(0, 0, 0, 0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;

  
`

const Container = styled.div`
  flex:1;
  min-width: 280px;
  height: 350px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;

  &:hover ${Info}{
    opacity: 1;

  }
`



const Circle = styled.div`
// circle z-index=1
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`
const Image = styled.img`
  
  height: 75%;
  z-index: 2;

  `

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
  
  
`

const Product = ({item}) => {
  return (
    <Container>
      
      <Circle/>
      <Image src={item.img}/>
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon/>

        </Icon>
        <Icon>
        <SearchOutlinedIcon/>

        </Icon>

        <Icon>
        <FavoriteBorderOutlinedIcon/>

        </Icon>
      </Info>
    </Container>
  )
}

export default Product