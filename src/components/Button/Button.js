import React from 'react'
import styled from 'styled-components';

const ButtonContainer = styled.button`
    padding:0.35em 1.2em;
     border:0.1em solid #FFFFFF;
     margin:0 0.3em 0.3em 0;
     border-radius:0.12em;
     box-sizing: border-box;
     text-decoration:none;
     font-family:'Roboto',sans-serif;
     font-weight:300;
     color:#FFFFFF;
     text-align:center;
     transition: all 0.2s;
    background: transparent;

    &:hover{
     color:#000000;
     background-color:#FFFFFF;
    }
`;

const Button = ({children, type, onClick, buttonStyle, buttonSize}) => {
    return (
        <ButtonContainer onClick={onClick} type={type}>
            {children}
        </ButtonContainer>
    )
}

export default Button;
