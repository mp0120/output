// Find Hacker News API here
// https://github.com/HackerNews/API

import axios from "axios";
import {
    STORIES_FETCH_FAILURE,
    STORIES_FETCH_REQUEST,
    STORIES_FETCH_SUCCESS,
    STORIES_GET_FAILURE,
    STORIES_GET_REQUEST,
    STORIES_GET_SUCCESS,
} from "./constants";

const url = 'https://hacker-news.firebaseio.com/v0/'

// TODO fetch ask stories (https://hacker-news.firebaseio.com/v0/askstories.json)
export function loadTopstories() {
    return async (dispatch, getState) => {
        try {
            dispatch({type: STORIES_GET_REQUEST});

            const {data} = await axios.get(`${url}askstories.json`);

            dispatch({type: STORIES_GET_SUCCESS, ids: data});
        } catch (error) {
            dispatch({type: STORIES_GET_FAILURE, error});
        }
    };
}

const checkStructure = (object, attrs) => {
    return object &&
        typeof object === 'object' &&
        attrs.reduce(
            (pV, cV) =>  pV && object.hasOwnProperty(cV),
            true
        );
}

// TODO fetch item by id (https://hacker-news.firebaseio.com/v0/item/<itemId>.json)
export function fetchStoryById(id) {
    return async (dispatch, getState) => {
        try {
            dispatch({type: STORIES_FETCH_REQUEST});

            const {data} = await axios.get(`${url}item/${id}.json`);

            if (!checkStructure(data, ['id', 'type', 'by', 'time'])) {
                throw new Error('incorrect value');
            }

            dispatch({type: STORIES_FETCH_SUCCESS, story: data});
        } catch (error) {
            dispatch({type: STORIES_FETCH_FAILURE, error});
        }
    }
}
