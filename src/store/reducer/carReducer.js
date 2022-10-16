const defaultState = {
    num: 1,
  };
  
  export default (state = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(state));
    if (action.type === "add") {
      newState.num += action.unit;
      return newState;
    } else if (action.type === 'init') {
      newState.num = action.unit
      console.log('newState',newState);
      return newState
    }
    return state;
  };
  