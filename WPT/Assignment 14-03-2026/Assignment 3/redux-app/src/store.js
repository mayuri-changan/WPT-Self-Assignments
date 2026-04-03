import { createStore } from 'redux';

const zones = { India: 0, USA: -9.5, Japan: 3.5, UK: -5.5 };

function reducer(state = [], action) {
  switch (action.type) {
    case 'ADD_CLOCK':
      return [...state, action.payload];
    case 'REMOVE_CLOCK':
      return state.filter((_, i) => i !== action.index);
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store, zones };