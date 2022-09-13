import React from 'react';
import styled from 'styled-components'
import { mobile } from "../responsive";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
    center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

`

const Wrapper = styled.div`
  width: 25%;
  
  padding: 20px;
  background-color: white;
  box-shadow: 20px 20px 10px grey;
  border-radius: 5px;
  ${mobile({ width: "75%" })}

`
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  

`

const Form = styled.form`
  display: flex;
  flex-direction: column;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`


const Button = styled.button`
margin:10px 0px;
padding: 15px 20px;
width: 40%;
color: white;
background-color: teal;
border: none;
cursor: pointer;
transition: all ease 0.3s;

&:hover{
  background-color: black;
  
}

`

const Link = styled.a`
  margin: 5px 0px ;
  //text-decoration: underline;
  font-size:12px;
  cursor: pointer;
`

const Login = () => {
  return (
    <Container>
      
      <Wrapper>
      
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder='username' />
          
          <Input placeholder='password' />
          
          <Button>LOGIN</Button>
          
          <Link>Don't have an account? <b>Sign Up</b></Link>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Login