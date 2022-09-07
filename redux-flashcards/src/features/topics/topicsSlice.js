import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: { topics: {} },
    reducers: {
        addTopic: (state, action) => {
            state.topics[action.payload.id] = action.payload;
        },

        addQuizIds: (state, action) => {
            state.topics[action.payload.id].quizIds = [];
        }
    }
});

export const selectTopics = (state) => state.topics.topics;

export const { addTopic, addQuizzId } = topicsSlice.actions;

export default topicsSlice.reducer;