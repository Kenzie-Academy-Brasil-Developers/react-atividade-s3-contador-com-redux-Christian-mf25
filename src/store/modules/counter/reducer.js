const reducerCounter = (state = 0, action) => {
	console.log(action)
	switch (action.type) {

		case "SUM_NUMBER":
			return state + action.number

		case "SUB_NUMBER":
			return state - action.number

		default:
			return state;
	}
}

export default reducerCounter