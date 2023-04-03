import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  padding: 0 20px;
  list-style: none;
`;

export const ListItem = styled.li`
  display: flex;
  gap: 40px;
  align-items: center;
`;

export const Button = styled.button`
  padding: 5px 20px;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightgray;
`;