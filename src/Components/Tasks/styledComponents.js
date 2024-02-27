import styled from 'styled-components'

export const ListItem = styled.li`
  list-style-type: none;
  background-color: #1a171d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 15px;
  width: 98%;
  align-items: center;
  padding: 20px;
  margin: 5px;
`

export const TaskName = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 18px;
`
export const TaskCategory = styled.p`
  background-color: #f3aa4e;
  color: #131213;
  height: 10px;
  border: 0px;
  border-radius: 12px;
  text-align: center;
  padding: 10px;
  margin: 5px;
  font-family: 'Roboto';
  font-size: 10px;
  font-weight: bold;
`
