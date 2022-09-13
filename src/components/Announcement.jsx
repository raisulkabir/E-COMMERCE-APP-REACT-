import React from 'react'
import styled from "styled-components";

const Container = styled.div`
color: white;
background-color: teal;
heigth: 30px;
display: flex;
// vertically
align-items: center;
// horizontally
justify-content: center;
`

const Announcement = () => {
  return (
    <Container>
      Super Deal! Free shipping On order over $50
    </Container>
  )
}

export default Announcement