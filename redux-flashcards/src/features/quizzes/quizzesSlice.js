import { createSlice } from '@reduxjs/toolkit';
import { addQuizzIds } from '../topics/topicsSlice';

export const newQuiz = (payload) => {
    return (dispatch) => {
      dispatch(addQuiz(payload));
      dispatch(addQuizzIds(payload));
    };
};

export const quizzesSlice = createSlice({
    name: 'quizzes',
    initialState: { quizzes: {} },
    reducers: {
        addQuiz: (state, action) => {
            state.quizzes[action.payload.id] = action.payload;
        }
    }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const { addQuiz } = quizzesSlice.actions;

export default quizzesSlice.reducer;