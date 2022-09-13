import React from 'react'
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../responsive'
import { Link } from 'react-router-dom';


//style components
const Container = styled.div`

  height: 60px;
  // background-color: #f5a890;
  ${mobile({ height: '50px'})}
  

`
const Wrapper = styled.div`

  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`
const Left= styled.div`
flex: 1;
display: flex;
align-items: center;
`


const Language= styled.span`
font-size: 14px;
cursor: pointer;
${mobile({ display: 'none'})}
`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`

const Input = styled.input`
border: none;
${mobile({ width: "50px" })}


`


const Center= styled.div`
  flex: 1;
  text-align: center;
`

const Logo =  styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
  
`


const Right= styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${mobile({ flex: 2, justifyContent: "center" })}
  `
const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;  
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
      <Left>
      <Language>EN</Language>
      <SearchContainer>
        <Input placeholder='search'/>
        <SearchIcon style={{color:"gray", fontSize:"16px"}}/>
        
        
      </SearchContainer>
      </Left>
      <Center>
        <Logo><Link to="/" className="nav-link">
        LAMA.
      </Link></Logo>
      </Center>
      <Right>
      <MenuItem><Link to="/products" className="nav-link">
        PRODUCTS
      </Link></MenuItem>
        <MenuItem><Link to="/register" className="nav-link">
        REGISTER
      </Link></MenuItem>
        <MenuItem><Link to="/sign-in" className="nav-link">
        SIGN IN
      </Link></MenuItem>
        <MenuItem>
          <Badge badgeContent={4} color="secondary">
           <Link to="/cart" className="nav-link"><ShoppingCartOutlinedIcon /></Link>
          </Badge>
        </MenuItem>
      </Right>
      </Wrapper>

    </Container>
  )
}

export default Navbar