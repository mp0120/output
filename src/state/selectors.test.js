import { selectStories, selectStoriesCount, selectStory } from "./selectors";


const defaultState = {
    ids: [1, 2, 3, 28244064],
    stories: [
        {
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
    ],
    listLoading: false,
    storyLoading: false,
};

describe(
    'Test selectors',
    () => {
        test(
            'select stories count',
            () => {
                expect(selectStoriesCount(defaultState)).toEqual(4)
            }
        );

        test(
            'select stories',
            () => {
                expect(selectStories(0)(defaultState)).toContain(1);
                expect(selectStories(1)(defaultState).length).toEqual(0);
            }
        );

        test(
            'select story',
            () => {
                expect(selectStory(28244064)(defaultState).score).toEqual(56)
            }
        );
    }
)
