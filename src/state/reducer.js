import {
    STORIES_FETCH_FAILURE,
    STORIES_FETCH_REQUEST,
    STORIES_FETCH_SUCCESS,
    STORIES_GET_FAILURE,
    STORIES_GET_REQUEST,
    STORIES_GET_SUCCESS,
    STORIES_HISTORY_CLEAR,
} from "./constants";

const initialState = {
    ids: [],
    stories: [],
    listLoading: false,
    storyLoading: false,
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case STORIES_GET_REQUEST:
            return {
                ...state,
                listLoading: true,
                error: undefined,
            };

        case STORIES_GET_SUCCESS:
            return {
                ...state,
                ids: action.ids,
                listLoading: false,
            };

        case STORIES_GET_FAILURE:
            return {
                ...state,
                listLoading: false,
                error: action.error,
            };

        case STORIES_FETCH_REQUEST:
            return {
                ...state,
                storyLoading: true,
                error: undefined,
            };

        case STORIES_FETCH_SUCCESS:
            return {
                ...state,
                stories: [...state.stories, action.story],
                storyLoading: false,
            };

        case STORIES_FETCH_FAILURE:
            return {
                ...state,
                storyLoading: false,
                error: action.error,
            };

        case STORIES_HISTORY_CLEAR:
            return {
                ...state,
                stories: [],
            }

        default:
            return state;
    }
}
