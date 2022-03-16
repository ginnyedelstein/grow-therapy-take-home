import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #9bb9c0;
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  margin: 5px 10px;
`;

export const Header2 = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 10px;
  font-size: 15px;
`;

export const TableWrapper = styled.form`
  background: #9bb9c0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const InputCol = styled.div`
  max-height: 100%;
  overflow: hidden;
  background-color: #c5d5e2;
  border: 3px solid grey;
  padding: 12px 20px;
  margin: 8px 5px;
  border: 2px solid grey;
  border-radius: 4px;
  display: flex;
`;


export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 5px;
  border: 2px solid grey;
  border-radius: 4px;
  color: black;
  font-family: monospace;
  background: #e0e9f0;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 5px 1px grey;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 5px;
  border: 2px solid grey;
  border-radius: 4px;
  color: black;
  font-family: monospace;
  background: #e0e9f0;
  &:focus-visible {
    outline: none;
  }
  &:hover {
    box-shadow: 0px 0px 5px 1px grey;
  }
`;

export const Submit = styled.input`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 20px;
  border: 2px solid grey;
  border-radius: 4px;
  color: black;
  font-family: monospace;
  background: #97b1c3;
  &:hover {
    background: #aac0cf;
  }
`;