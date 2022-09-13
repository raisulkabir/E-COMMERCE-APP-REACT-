import React from 'react'
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
  width: 40%;
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
  flex-wrap: wrap;

`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0px 0px;
padding: 10px;

`

const Agreement = styled.span`
margin: 10px;
font-size: 12px;

`
const Button = styled.button`
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


const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder='Fast Name' />
          <Input placeholder='Last Name' />
          <Input placeholder='UserName' />
          <Input placeholder='Email' />
          <Input placeholder='password' />
          <Input placeholder='confirm password' />
          <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  )
}

export default Register