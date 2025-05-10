import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "../slice/todoSlice.ts";

export const store = configureStore({ reducer: rootReducer });
