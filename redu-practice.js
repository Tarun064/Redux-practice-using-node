const redux = require('redux');

const INITIAL_VALUE = {
  counter : 0,
}
const reducer = (store=INITIAL_VALUE,action) =>{ //yhaa pe hmm default value set krr rhe hai store ki initial value se toh store ki initial value tbhi  set hogi jbb store ki value null yaa undefined hogi jbb uski value change ho gyi toh voh ussi value se initialise hogi naa ki default value se js concept
  let newStore=store;
  if(action.type === 'INCREMENT'){
    newStore = {counter : store.counter +1};
  } else if(action.type === 'DECREMENT'){
    newStore = {counter : store.counter -1};
  } else if(action.type === 'ADDITION'){
    newStore = {counter : store.counter + action.payload.number};
  }
  return newStore;

} 
const store = redux.createStore(reducer);

const subscriber = ()=>{
  const state = store.getState(); // it will not get subscription means isse hrr updated value nhi chahiye isse sirf current value milegi jo bhi hogi
  console.log(state);
}

store.subscribe(subscriber); // isse hmm subscribe krr rhe hai store ko subscriber function se mtlb yeah store se bol rha hai ki jbb bhi value store mein change yaa update ho toh subscriber function call krr dena

store.dispatch({type:'INCREMENT'});
store.dispatch({type:'DECREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'INCREMENT'});
store.dispatch({type:'ADDITION',payload:{number:7}});
store.dispatch({type:'DECREMENT'});
