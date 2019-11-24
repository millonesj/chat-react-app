import React from 'react';

/* 
  {
    from: 'user
    msg: 'hi'
    topic: 'general'
  }

  state {
    topic1: [
      {msg}, {msg}, {msg}
    ]
    general: [
      {msg}, {msg}, {msg}, {newmsg}
    ]
  }

*/

const initState = {
  general: [
    {from: 'Aaron', msg: 'Hello'},
    {from: 'Jhon', msg: 'hello'},
    {from: 'Pool', msg: 'Hi'},
    {from: 'Moor', msg: 'hello'}
  ],
  general2: [
    {from: 'Leo', msg: 'hello'},
    {from: 'Klark', msg: 'Hi'},
    {from: 'Castillo', msg: 'Hello'},
    {from: 'Beethoven', msg: 'hello'}
  ]
}

export const CTX = React.createContext();

const reducer = (state, action) => {
  console.log('>> STATE');
  console.log(state);
  console.log('>>> ACTION>');
  console.log(action);

  const { from, msg, topic } = action.payload;
  switch(action.type) {
    case 'RECEIVE_MESSAGE':
      return {
          ...state,
          [topic]: [
            ...state[topic],
            { from,msg }
          ]
      }
    default:
      return false;
  }
}

const Storage = (props)  => {
  const reducerHook = React.useReducer(reducer, initState);

    return (
      <CTX.Provider value={reducerHook}>
        {props.children}
      </CTX.Provider>
    )
  
}


export default  Storage;
