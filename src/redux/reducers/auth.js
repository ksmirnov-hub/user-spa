const initialState = {
  loading: false,
  error: false,
  isAuth: false,
  justMoved: false,
  profile: {},
};

const reducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case 'USER_AUTH_REQUEST':
			return {
				...state,
				loading: true
			}
		case 'USER_AUTH_SUCCESS':
			localStorage.setItem('token', true);
			localStorage.setItem('userData', JSON.stringify(payload));
			return {
				...state,
				loading: false,
				isAuth: true,
				justMoved: false,
				profile: { ...state.profile, ...payload},
			}
		case 'USER_AUTH_FAILURE':
			return {
				...state,
				loading: false,
				error: payload,
				isAuth: false,
				profile: {}
			}
		case 'ERASE_USER_AUTH':
			localStorage.removeItem('token');
			localStorage.removeItem('userData');
			return {
				...state,
				loading: false,
				error: null,
				isAuth: false,
				profile: {}
			}
		case 'CLEAR_ERROR':
			return {
				...state,
				loading: false,
				error: null,
				isAuth: false,
				profile: {}
			}
		default:
			return state
	}
}

export default reducer;