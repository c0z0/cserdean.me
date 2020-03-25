import React from 'react';
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';

const InputWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 16px;
  margin-bottom: 32px;
`;

const InputClear = styled.button.attrs({
  type: 'button',
  'data-testid': 'input-clear-button',
})`
  background: none;
  border: none;
  outline: none;
  color: ${p => p.theme.colors.foreground};
  cursor: pointer;
  position: absolute;
  font-size: 1.5em;
  right: -5px;
  top: 50%;
  transform: translate(0, -50%) rotate(45deg);
`;

const LoadingKeyframes = keyframes`
 0% {
      left: 0;
      right: 75%;
    }
    50% {
      left: 75%;
      right: 0;
    }
    100% {
      left: 0;
      right: 75%;
    }
`;

const Loading = styled.span`
  position: absolute;
  background: ${p => p.theme.colors.foreground};
  bottom: 0px;
  height: 1px;
  animation: ${LoadingKeyframes} 2s infinite;
`;

const InputElement = styled.input.attrs({
  'data-testid': 'input-element',
  type: 'text',
  placeholder: 'Type something...',
})`
  width: 290px;
  height: 18px;
  border: none;
  border-bottom: solid ${p => p.theme.colors.foreground}66 1px;
  padding: 8px 0;
  padding-right: 10px;
  outline: none;
  font-size: 16px;
  background: none;
  transition: 0.2s all;
  color: ${p => p.theme.colors.foreground};

  &:focus {
    border-color: ${({ loading, theme }) =>
      theme.colors.foreground + (loading ? '66' : 'FF')};
  }
`;

export default function Input({ loading, text, onClear, onChange }) {
  return (
    <InputWrapper>
      {text.length > 0 && <InputClear onClick={onClear}>+</InputClear>}
      <InputElement loading={loading} value={text} onChange={onChange} />
      {loading && <Loading data-testid="input-loading" />}
    </InputWrapper>
  );
}

Input.propTypes = {
  loading: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClear: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};
