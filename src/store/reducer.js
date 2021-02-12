const initialState = {
	secretCode: '1234',
	password: '',
	access: false,
	isDisabled: false
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'DELETE':
			return {...state, password: state.password.slice(0, -1)}
		case "ADD_NUM":
			return {...state, password: state.password += action.num}
		case 'DISABLE':
			if(state.password.length === 4) {
				return {...state, isDisabled: true}
			}
			return state
		case 'CHECK':
			if(state.password === state.secretCode) {
				return {...state, access: true}
			}
		default:
			return state
	}
}

export default reducer;
