import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {id:1, completed: false, title:'jnegfuyguhgjnegfuyguh', heading:'Первый', date:'2017-05-24T10:30'},
        {id:2, completed: false, title:'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. ', heading:'Второй', date:'2017-05-24T10:30'},
        {id:3, completed: false, title:'kkhshngkkhshngkkhs hngkkhs hngkkhshngk khshngkk hshngkkhs hngkkhshngkkhshng', heading:'Третий', date:'2017-05-24T10:30'}
      ],
}

export default createReducer( initialState, {
  
})