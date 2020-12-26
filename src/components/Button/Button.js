import React from 'react'
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    border-radius: 4px;
    background: black;
    white-space: nowrap;
    padding: 2% 5%;
    color: blue;
    cursor:pointer;
    text-transform: uppercase;
    font-weight: bold;

    &:hover{
        transition: all 0.3s ease-out;
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
