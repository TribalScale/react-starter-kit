function makeAsyncCall(params) {
  return (dispatch) => {
    let options = {};
    dispatch(params.request_action(params.data));

    if (params.headers) {
      options = Object.assign({}, { headers: params.headers });
    }

    return fetch(params.endpoint, options)
    .then(response => response.json())
    .then(json => dispatch(params.receive_action(params.data, json)));
  };
}

function shouldMakeAsyncCall(state, params) {
  const reducerState = state[params.reducer];
  if (!reducerState) {
    return true;
  } else if (reducerState.isFetching) {
    return false;
  }
  return true;
}

export default (configs => (dispatch, getState, extraArgument) => {
  let params = configs;
  if (extraArgument) {
    params = Object.assign({}, params, extraArgument);
  }
  if (shouldMakeAsyncCall(getState(), params)) {
    return dispatch(makeAsyncCall(params));
  }
  return Promise.resolve();
});
