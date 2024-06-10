import { configureStore } from '@reduxjs/toolkit';
import { MenuReducer } from './Slices/MenuSlice';
import { IndicatorReducer } from './Slices/IndicatorSlice';
import { EditReducer } from './Slices/ComponentSlice';
import { IndicatorTableReducer } from './Slices/IndicatorTableSlice';
import { SubIndicatorReducer } from './Slices/SubIndicatorSlice';
import { ImageReducer } from './Slices/ImageSlice';
import { SubProjectReducer } from './Slices/SubProjectSlice';
import { SubComponentReducer } from './Slices/subcomponents';

export const store = configureStore({
    reducer: {
        toggleMenu: MenuReducer,
        indicator: IndicatorReducer,
        components: EditReducer,
        indicatorSlice: IndicatorTableReducer,
        subIndicatorSlice: SubIndicatorReducer,
        imageSlice: ImageReducer,
        subProject: SubProjectReducer,
        subComponent: SubComponentReducer
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
