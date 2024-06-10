import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Activity = {
  ActivityName: string;
  UnitOfMeasurement: string;
  Description: string;
  Source: string;
  Agency: string;
  period: string;
};


// Define a type for the slice state
interface Indicator {
  isOpen: boolean;
  data: Activity;
}

// Define the initial state using that type
const initialState: Indicator = {
  isOpen: false,
  data: {
    ActivityName: '',
    UnitOfMeasurement: '',
    Description: '',
    Source: '',
    Agency: '',
    period: ''
  },
}

export const indicatorSlice = createSlice({
  name: 'indicatorstate',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setIndicator: (state, action) => {
      state.isOpen = action.payload.isOpen;
      state.data = { ...action.payload.data };
    },
    resetIndicator: (state) => {
      state.isOpen = false;
      state.data = {
        ActivityName: '',
        UnitOfMeasurement: '',
        Description: '',
        Source: '',
        Agency: '',
        period: ''
      };
    }

  },
})

export const { setIndicator, resetIndicator } = indicatorSlice.actions

export const IndicatorReducer = indicatorSlice.reducer