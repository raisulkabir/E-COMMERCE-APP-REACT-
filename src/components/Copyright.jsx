import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";

const Container = styled.div`
  height: 20px;
  ${mobile({ display: "none" })}
  
  
  
`
const Text = styled.p`
  background-color: black;
  color: white;
  display:flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
`

const Copyright = () => {
  return (
    <Container><Text>Copyright@Raisulkabir.com</Text></Container>
  )
}

export default Copyright