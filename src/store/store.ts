import {configureStore} from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from "redux-persist/lib/storage";
import uiSlice from "./ui/ui_slice.ts";
import boardSlice from "./board/boardSlice.ts";
import categorySlice from "./category/categorySlice.ts";
import taskSlice from "./task/taskSlice.ts";
import {api} from "../services/api.ts";


const persistUiConfig = {
  key: 'ui',
  storage,
}
const persistBoardConfig = {
  key: 'board',
  storage,
}
const persistCategoryConfig = {
  key: 'category',
  storage,
}
const persistTaskConfig = {
  key: 'task',
  storage,
}

const UiReducer = persistReducer(persistUiConfig, uiSlice.reducer);
const BoardReducer = persistReducer(persistBoardConfig, boardSlice.reducer);
const CategoryReducer = persistReducer(persistCategoryConfig, categorySlice.reducer);
const TaskReducer = persistReducer(persistTaskConfig, taskSlice.reducer);
export const store = configureStore({
  reducer: {
    ui: UiReducer,
    board: BoardReducer,
    category: CategoryReducer,
    task: TaskReducer,
    [api.reducerPath]: api.reducer
  },
  // devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(api.middleware),
})

let persistor = persistStore(store)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export {persistor}
