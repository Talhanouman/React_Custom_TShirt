import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Input = ({ errors, label, ...props }) => (
  <InputContainer hasErrors={errors.length > 0}>
    <label>{label}</label>
    <input {...props} />
    <ErrorList errors={errors} />
  </InputContainer>
);
const InputContainer = styled.div`
  label {
    color: ${props => (props.hasErrors ? '#ff2222' : '#69B0E9')};
  }
  input {
    border-color: ${props => (props.hasErrors ? '#ff2222' : '#69B0E9')};
    border: 1px solid #69b0e9;
    box-shadow: 8px 4px 15px #d0d0d0;
    width: 100%;
    padding-left: 4px;
    padding-bottom: 60px;
    margin-right: 0 !important;
    margin-left: 0 !important;
    margin-bottom: 0 !important;
    &:focus {
      outline: 0;
    }
  }
`;

const ErrorList = ({ errors }) =>
  errors.length > 0 ? (
    <Ul>
      {errors.map(error => (
        <li>{error}</li>
      ))}
    </Ul>
  ) : null;

const Ul = styled.ul`
    padding: 0px;
    margin: 6px 0;
    list-style: none;
    li {
      border 1px solid transparent;
      padding: 2px;
      margin-bottom: 2px;
      font-size: 12px;
      font-family: Arial;
      background: transparent;
      color: #ff9999;
}`;

Input.propTypes = {
  errors: PropTypes.array,
  label: PropTypes.string,
};
ErrorList.propTypes = {
  errors: PropTypes.array,
};
