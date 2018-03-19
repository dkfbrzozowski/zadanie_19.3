import uuid from 'uuid';
export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';
// ADD COMMENT
export const addComment = text => {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
};
// EDIT COMMENT
export const editComment = (text, id) => {
	return {
		type: EDIT_COMMENT,
		text,
		id
	}
};
// REMOVE COMMENT
export const removeComment = id => {
	return {
		type: REMOVE_COMMENT,
		id
	}
};
// THUMB UP COMMENT
export const thumbUpComment = id => {
    return {
        type: THUMB_UP_COMMENT,
        id
    }
};
// THUMB DOWN COMMENT
export const thumbDownComment = id => {
    return {
        type: THUMB_DOWN_COMMENT,
        id
    }
}