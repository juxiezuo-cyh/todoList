import React, { Component } from 'react';
import './todoList.css';
import store from '../../store/index';
import { inputChange, submitClick, deleteItem } from './actionCreators';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.inputChange = this.inputChange.bind(this);
    this.submitClick = this.submitClick.bind(this);
    this.storeChange = this.storeChange.bind(this);
    this.state = store.getState();

    store.subscribe(this.storeChange);
  };
  storeChange() {
    this.setState(store.getState());
  };
  deleteItem(index) {
    const action = deleteItem(index);
    store.dispatch(action);
  };
  item() {
    if (this.state.list.length) {
      return (
        this.state.list.map((item,index) => (
          <li onClick={this.deleteItem.bind(this, index)} key={index}>
            <span>{item}</span>
          </li>
        ))
      )
    } else {
      return (
        <li>暂无数据</li>
      )
    }
  };
  inputChange(e) {
    const action = inputChange(e.target.value);
    store.dispatch(action);
  };
  submitClick() {
    if (!this.state.inputValue) {
      return
    };
    const action = submitClick();
    store.dispatch(action);
  };
  render() {
    return (
      <div className="todo-list">
        <div>
          <input placeholder="enter ..." onChange={this.inputChange} type="text" value={this.state.inputValue}/>
          <button onClick={this.submitClick}>添加</button>
        </div>
        <ul>
          {this.item()}
        </ul>
      </div>
    );
  }
}

export default TodoList;
