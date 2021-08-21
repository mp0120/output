import { TablePagination, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadTopstories } from '../state/actions';
import { STORIES_HISTORY_CLEAR } from '../state/constants';
import { selectStories, selectStoriesCount } from '../state/selectors';
import NewsListEntry from './NewsListEntry';

function NewsList() {
    const [page, setPage] = useState(0);

    const dispatch = useDispatch();
    const articles = useSelector(selectStories(page));
    const count = useSelector(selectStoriesCount);

    const onPageChangeHandler = (event, newPage) => {
        setPage(newPage);
        dispatch({type: STORIES_HISTORY_CLEAR})
    }

    useEffect(
        () => {
            dispatch(loadTopstories());
        },
        [dispatch]
    );

    return (
        <div>
            <Typography variant="h5">NewsList</Typography>

            {
                articles.map(id => id && <NewsListEntry key={id} id={id}/>)
            }

            <TablePagination
                component="div"
                count={count}
                page={page}
                onPageChange={onPageChangeHandler}
                rowsPerPage={10}
                rowsPerPageOptions={[10]}
            />
        </div>
    )
}

export default NewsList;
