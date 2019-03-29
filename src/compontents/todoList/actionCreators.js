import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DEL_TODO_ITEM } from './actionType';
export const inputChange = (value)=> ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const submitClick = ()=> ({
  type: ADD_TODO_ITEM
});

export const deleteItem = (index)=> ({
  type: DEL_TODO_ITEM,
  index
});