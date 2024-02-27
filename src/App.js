import {Component} from 'react'
import {v4 as uuid} from 'uuid'
import Tasks from './Components/Tasks'

import {
  MainContainer,
  TaskContainer,
  TaskHeading,
  InputContainer,
  LabelText,
  Input,
  Select,
  AddButton,
  TaskDisplayContainer,
  TagsContainer,
  TagsHeading,
  TagListItem,
  TagsButton,
  NoTask,
} from './styled'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
class App extends Component {
  state = {
    myTaskList: [],
    inputTask: '',
    selectTag: tagsList[0].optionId,
    activeTag: 'INITIAL',
  }

  onChangeInputTask = event => {
    this.setState({inputTask: event.target.value})
  }

  onChangeSelectTag = event => {
    this.setState({selectTag: event.target.value})
  }

  onClickAddButton = () => {
    const {inputTask, selectTag} = this.state
    const taskName = inputTask
    const taskCategory = selectTag
    const id = uuid()
    const bgColor = false

    if (taskName.length !== 0) {
      this.setState(prevState => ({
        myTaskList: [
          ...prevState.myTaskList,
          {id, taskName, taskCategory, bgColor},
        ],
        inputTask: '',
        selectTag: tagsList[0].optionId,
      }))
    }
  }

  onClickTag = event => {
    this.setState(prevState => ({
      activeTag:
        prevState.activeTag === event.target.value
          ? 'INITIAL'
          : event.target.value,
    }))
  }

  render() {
    const {myTaskList, inputTask, selectTag, activeTag} = this.state
    const filterTaskList =
      activeTag === 'INITIAL'
        ? myTaskList
        : myTaskList.filter(each => each.taskCategory === activeTag)

    return (
      <MainContainer>
        <TaskContainer>
          <TaskHeading>Create a Task</TaskHeading>
          <InputContainer>
            <LabelText for="textInput">Task</LabelText>
            <Input
              id="textInput"
              placeholder="Enter the task here"
              value={inputTask}
              type="text"
              onChange={this.onChangeInputTask}
            />
            <LabelText for="optionInput">Tags</LabelText>
            <Select
              id="optionInput"
              value={selectTag}
              onChange={this.onChangeSelectTag}
            >
              {tagsList.map(eachItem => (
                <option value={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </Select>
          </InputContainer>
          <AddButton type="button" onClick={this.onClickAddButton}>
            Add Task
          </AddButton>
        </TaskContainer>
        <TaskDisplayContainer>
          <TagsHeading>Tags</TagsHeading>
          <TagsContainer>
            {tagsList.map(eachTag => {
              const isActive = activeTag === eachTag.optionId

              return (
                <TagListItem key={eachTag.optionId}>
                  <TagsButton
                    type="button"
                    onClick={this.onClickTag}
                    value={eachTag.optionId}
                    isActive={isActive}
                  >
                    {eachTag.displayText}
                  </TagsButton>
                </TagListItem>
              )
            })}
          </TagsContainer>
          <TagsHeading>Tasks </TagsHeading>
          <TaskContainer>
            {filterTaskList.length === 0 ? (
              <NoTask>No Tasks Added Yet </NoTask>
            ) : (
              filterTaskList.map(eachTask => (
                <Tasks key={eachTask.id} taskDetails={eachTask} />
              ))
            )}
          </TaskContainer>
        </TaskDisplayContainer>
      </MainContainer>
    )
  }
}

export default App
