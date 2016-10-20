function responseParser(response, dispatch, params) {
  const contentType = response.headers.get('content-type');
  let fetchReponse;

  if (!contentType) {
    fetchReponse = response.blob();
  } else if (contentType.indexOf('application/json') !== -1) {
    fetchReponse = response.json();
  } else if (contentType.indexOf('text/plain') !== -1) {
    fetchReponse = response.text();
  } else if (contentType.indexOf('multipart/form-data') !== -1) {
    fetchReponse = response.formData();
  } else {
    fetchReponse = response.blob();
  }
  return fetchReponse.then(result => dispatch(params.receive_action(params.context, result)));
}

function makeAsyncCall(params) {
  return (dispatch) => {
    let fetchInit = {
      method: 'GET'
    };
    dispatch(params.request_action(params.context));

    if (params.fetchInit) {
      fetchInit = params.fetchInit;
    }

    return fetch(params.endpoint, fetchInit)
    .then((response) => {
      if (params.fetchResponseParser) {
        return params.fetchResponseParser(response, dispatch, params);
      }
      return responseParser(response, dispatch, params);
    });
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
