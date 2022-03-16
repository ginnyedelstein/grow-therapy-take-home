import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #9bb9c0;
  display: flex;
  flex-direction: column;
  min-width: 300px;
`;

export const Header = styled.div`
  margin: 5px 10px;
`;

export const ResultBox = styled.div`
  max-height: 100%;
  overflow: hidden;
  background-color: silver;
  border: 3px solid grey;
  padding: 12px 20px;
  margin: 8px 5px;
  border: 2px solid grey;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

export const TableWrapper = styled.form`
  background: #9bb9c0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ErrorMessage = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
`;
