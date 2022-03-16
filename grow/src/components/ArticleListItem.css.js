import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  height: 90px;
  margin: 10px 5px;
  justify-content: space-between;
  background: lightgrey;
  cursor: pointer;
  overflow: hidden;
  padding: 12px 20px;
  margin: 8px 5px;
  border: 2px solid grey;
  border-radius: 4px;
  font-size: 20px;
  cursor: initial;
`;


export const InfoColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 15px;
  min-width: 600px;
  padding-right: 10px;
`;

export const Name = styled.div`
  color: black;
  font-size: 25px;
  font-weight: 200;
  padding-left: 10px;
  width: 98%;
`;

export const DetailsColumn = styled.div`
  width: 400px;
  min-width: 400px;
  height: 100%;
  flex-direction: column;
  display: inherit;
  padding: 0 30px 10px 15px;

`;

export const Details = styled.div`
  font-size: 16px;
  line-height: 30px;
  color: darkslategrey;
`;

