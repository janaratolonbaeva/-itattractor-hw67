const initialState = {
	secretCode: '1234',
	password: '',
	access: false,
	isDisabled: false,
	star: ''
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
		case 'VERIFICATION':
			if(state.password === state.secretCode) {
				return {...state, access: true}
			} else {
				return {...state, access: false}
			}
		case 'PRINT_STAR':
			return {...state, star: state.star += action.star}
		case 'DELETE_STAR':
			return {...state, star: state.star.slice(0, -1)}
		default:
			return state
	}
}

export default reducer;
