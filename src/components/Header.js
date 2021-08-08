import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
const ContenedorGeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Oxygen','Slabo 27px',serif;
    text-align: center;
`;

const Header = ({titulo}) => {
    return ( 
        <ContenedorGeader>
            <TextoHeader>{titulo}</TextoHeader>
        </ContenedorGeader> 
    );
}

Header.propTypes  = {
    titulo:PropTypes.string.isRequired
}
export default Header;