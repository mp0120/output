import {
    Card,
    makeStyles,
    createStyles,
    CardContent,
    Typography,
    Tooltip,
    Grid,
    Link,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStoryById } from '../state/actions';
import { selectStory } from '../state/selectors';

const useStyles = makeStyles(
    theme => createStyles({
        card: {
            marginBottom: theme.spacing(2)
        }
    })
);

function NewsListEntry({id}) {
    const classes = useStyles();
    const dispatch = useDispatch();

    const story = useSelector(selectStory(id));

    useEffect(
        () => {
            if (typeof id !== 'number') {
                console.log(id);
            } else {
                dispatch(fetchStoryById(id));
            }
        },
        [id, dispatch]
    );


    if (story) {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">{story.title}</Typography>
                    <Typography variant="body2" component="p" dangerouslySetInnerHTML={{ __html: story.text }} />

                    <Grid container>
                        <Grid item container xs={12}>
                            <Grid item xs={12} md={3}>
                                {story.score && <>score: {story.score}</>}
                            </Grid>

                            <Grid item xs={12} md={3}>
                                {story.url && <Link to={story.url}>source</Link>}
                            </Grid>

                            <Grid item xs={12} md={3}>
                                {(new Date(story.time * 1000)).toDateString()}
                            </Grid>

                            <Grid item xs={12} md={3}>
                                <Tooltip title="Author" placement="bottom-end">
                                    <Typography variant="body1" component="p" align="right">{story.by}</Typography>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Grid>

                    {
                        story.kids &&
                        (
                            <Accordion TransitionProps={{ unmountOnExit: true }}>
                                <AccordionSummary>Comments</AccordionSummary>

                                <AccordionDetails>
                                    <div>
                                        {
                                            story.kids.map(item => item && (<NewsListEntry key={item} id={item}/>))
                                        }
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    }
                </CardContent>
            </Card>
        );
    }

    return <></>;
}

export default NewsListEntry;
