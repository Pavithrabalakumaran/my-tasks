import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`
export const TaskContainer = styled.form`
  background-color: #1a171d;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 35%;
  padding: 20px;
`

export const TaskHeading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  margin: 20px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 85%;
  margin: 10px;
`
export const LabelText = styled.label`
  font-family: 'Roboto';
  color: white;
  font-size: 18px;
  font-weight: bold;
  margin: 5px;
`
export const Input = styled.input`
  height: 27px;
  width: 90%;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 14px;
  padding: 10px;
  margin: 5px;
  margin-bottom: 20px;
`
export const Select = styled.select`
  height: 40px;
  width: 100%;
  font-family: 'Roboto';
  font-weight: normal;
  font-size: 10px;
  padding: 10px;
  margin: 5px;
  margin-bottom: 20px;
  outline: none;
  cursor: pointer;
`
export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  padding: 10px;
  margin: 10px;
  border-radius: 10px;
  height: 40px;
  width: 50%;
`
export const TaskDisplayContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: flex-start;
  height: 100vh;
  width: 70%;
  flex-direction: column;
  padding: 10px;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  text-align: center;
  width: 90%;
  margin: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const TagsHeading = styled.h1`
  color: white;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 25px;
  justify-content: flex-start;
`
export const TagListItem = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
`
export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 12px;
  height: 45px;
  color: white;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: normal;
  cursor: pointer;
  outline: none;
  padding-right: 10px;
  padding-left: 10px;
`
export const NoTask = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  color: white;
  font-weight: bold;
  margin: 20px;
`
