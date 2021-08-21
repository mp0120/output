export const selectStoriesCount = state => state.ids.length;
export const selectStories = page => state => state.ids.slice(page * 10, page * 10 + 10);
export const selectStory = id => state => state.stories.find(item => item.id === id);
