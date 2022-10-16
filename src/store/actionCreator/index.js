export const cartNumAdd = (unit) => {
  return {
    type: "add",
    unit,
  };
};

export const initCartNum = () => {
  return (dispatch) => {
    const request = new Promise((resolve,reject) => {
      setTimeout(() => {
        resolve({
          code: 200,
          data: [1,2,3,4,5]
        })
      }, 100);
    })
    request.then(res => {
      console.log('res',res,dispatch);
      dispatch({
        type: 'init',
        unit: res.data.length
      })
    })
  }
}
