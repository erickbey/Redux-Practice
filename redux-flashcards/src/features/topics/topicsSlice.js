import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
        },

        addQuizzIds: (state, action) => {
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
          }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizzIds } = topicsSlice.actions;

export default topicsSlice.reducer;