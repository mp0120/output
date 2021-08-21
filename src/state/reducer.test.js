import {
    STORIES_FETCH_FAILURE,
    STORIES_FETCH_REQUEST,
    STORIES_FETCH_SUCCESS,
    STORIES_GET_FAILURE,
    STORIES_GET_REQUEST,
    STORIES_GET_SUCCESS,
    STORIES_HISTORY_CLEAR,
} from "./constants";
import reducer from "./reducer";

const defaultState = {
    ids: [],
    stories: [],
    listLoading: false,
    storyLoading: false,
};

describe(
    'Test reducer',
    () => {
        test(
            'default state',
            () => {
                const state = reducer(undefined, {type: ''});

                expect(state.storyLoading).toBeFalsy();
                expect(state.listLoading).toBeFalsy();
            }
        );

        test(
            'action is STORIES_GET_REQUEST',
            () => {
                const state = reducer(defaultState, {type: STORIES_GET_REQUEST});

                expect(state.listLoading).toBeTruthy();
            }
        );

        test(
            'action is STORIES_GET_SUCCESS',
            () => {
                const state = reducer(defaultState, {type: STORIES_GET_SUCCESS, ids: [1, 2, 3]});

                expect(state.listLoading).toBeFalsy();
                expect(state.ids).toContain(3);
            }
        );

        test(
            'action is STORIES_GET_FAILURE',
            () => {
                const state = reducer(defaultState, {type: STORIES_GET_FAILURE, error: 'test error'});

                expect(state.listLoading).toBeFalsy();
                expect(state.error).toEqual('test error');
            }
        );

        test(
            'action is STORIES_FETCH_REQUEST',
            () => {
                const state = reducer(defaultState, {type: STORIES_FETCH_REQUEST});

                expect(state.storyLoading).toBeTruthy();
            }
        );

        test(
            'action is STORIES_FETCH_SUCCESS',
            () => {
                const state = reducer(
                    defaultState,
                    {
                        type: STORIES_FETCH_SUCCESS,
                        story: {
                            by: 'LinkedInSucks',
                            descendants: 59,
                            id: 28244064,
                            kids: [
                                28244742,
                                28244712,
                                28255957,
                                28244182,
                                28245191,
                                28245255,
                                28245233,
                                28244424,
                                28244597,
                                28244138,
                                28245000,
                                28244774,
                                28244798,
                                28249651,
                                28252132,
                                28245040,
                                28244776,
                                28245162,
                                28244443,
                                28245172
                            ],
                            score: 56,
                            text: 'I\'ve been using LinkedIn almost since Day 1 and I\'m not sure why.',
                            type: 'story'
                        }
                    }
                );

                expect(state.storyLoading).toBeFalsy();
                expect(state.stories.find(item => item.id === 28244064).score).toEqual(56);
            }
        );

        test(
            'action is STORIES_FETCH_FAILURE',
            () => {
                const state = reducer(defaultState, {type: STORIES_FETCH_FAILURE, error: 'test error'});

                expect(state.storyLoading).toBeFalsy();
                expect(state.error).toEqual('test error');
            }
        );

        test(
            'action is STORIES_FETCH_FAILURE',
            () => {
                const state = reducer(defaultState, {type: STORIES_HISTORY_CLEAR});

                expect(state.stories.length).toEqual(0);
            }
        );
    }
);
