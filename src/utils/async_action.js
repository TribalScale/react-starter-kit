function responseParser(response, dispatch, params) {
  // INFO: Pass fetchResponseParser function in params for custom handling of response
  if (params.fetchResponseParser) {
    return params.fetchResponseParser(response, dispatch, params);
  }

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

function errorHandling(response, params) {
  if (!response.ok) {
    // INFO: Pass err function in params for custom handling of errors
    if (params.err) {
      params.err(response);
    }
    throw Error(response.statusText);
  }
  return response;
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
    .then(response => errorHandling(response, params))
    .then(response => responseParser(response, dispatch, params))
    .catch((error) => {
      if (!params.err) {
        console.log(error);
      }
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
