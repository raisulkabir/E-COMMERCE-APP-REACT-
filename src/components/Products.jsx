import React from 'react'
import styled from "styled-components";
import {popularProducts} from "../data"
import Product from './Product';
// import { mobile } from "../responsive";

const Container = styled.div`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin:20px;
`



const Products = () => {
  return (
    <Container>
      
      {popularProducts.map((item) =>(
        <Product item= {item} key={item.id}/>
      ))}

    </Container>
  )
}

export default Products