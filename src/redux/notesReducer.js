const initialState = {
	notes: [],
}

export const ActionTypes = {
	SET_NOTES: 'SET_NOTES',
	DELETE_NOTE: 'DELETE_NOTE',
	SEARCH_NOTE: 'SEARCH_NOTE'
}

export const ActionCreators = {
	setNotes: payload => ({
		type: ActionTypes.SET_NOTES, payload
	}),
	DeleteNote: payload => ({
		type: ActionTypes.DELETE_NOTE, payload
	}),
	SearchNote: payload => ({
		type: ActionTypes.SEARCH_NOTE, payload
	}),
}

export default function (state = initialState, action) {
	switch (action.type) {

		case ActionTypes.SET_NOTES:
		return {
			...state, notes: [...action.payload]
		};

		case ActionTypes.DELETE_NOTE:
			for (let i = 0; i < state.notes.length; i++){
				if (state.notes[i].id === action.payload){
					state.notes.splice(i, 1);
					break;
				}
		}
		return { 
			...state, notes: [...state.notes]
		}

		case ActionTypes.SEARCH_NOTE:
			for (let i = 0; i < state.notes.length; i++){
				if (state.notes[i].id === action.payload){
					state.notes.splice(i, 1);
					break;
				}
		}
		return { 
			...state, notes: [...state.notes]
		}
		default:
			return state;
	}
}