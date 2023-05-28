const initialState = {
  url: '',
  loading: false,
  error: false,
  data: []
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case 'CHECK_CREDENTIALS_REQUEST':
			return {
				...state,
				isLoading: true
			}
		case 'CHECK_CREDENTIALS_SUCCESS':
			return {
			  ...state,
			  isLoading: false
			}
		case 'CHECK_CREDENTIALS_FAILURE':
			return {
			  ...state,
			  isLoading: false,
			  error: payload
			}
		default:
			return state
	}
}

export default reducer;