/* eslint-disable */
import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledButton = styled.button`
  min-width: 30px;
  width: auto;
  padding: 0 16px;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 5px 10px;
  height: 44px;
  border-radius: 1rem;
  border-style: none;
  outline: none;
  box-shadow: ${props =>
    props.dark
      ? '5px 5px 12px #2b2b2b, -4px -4px 10px #3b3b3b'
      : '2px 2px 3px #c8d0e7, -5px -5px 5px #eef3f9'};
  transition: box-shadow 0.2s ease;
  background: ${props => (props.dark ? '#333333' : '#e4ebf5')};
  color: #f2994a;
  outline: none;

  :hover {
    color: #4b4b96;
    outline: none;
  }
  :active {
    box-shadow: ${props =>
      props.dark
        ? 'inset -2px -2px 5px #4b4b4b,inset 2px 2px 5px #212121'
        : 'inset -2px -2px 1px #ffffff,inset 2px 2px 5px #cdd3dc'};
    outline: none;
  }
`;

const Button = ({ title,...rest }) => {
  return <StyledButton {...rest}>{title}</StyledButton>;
};

Button.propTypes = {
  title: propTypes.string,
};

Button.defaultProps = {
  title: 'Button',
};

export default Button;
