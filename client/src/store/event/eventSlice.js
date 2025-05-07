import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.withCredentials = true;

const API_URL = "/api/events";

// Async thunk for getting all events
export const getAllEvent = createAsyncThunk(
  "event/getAllEvent",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data.events;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);

// Async thunk for getting the searched event
export const searchEvent = createAsyncThunk(
  "event/searchEvent",
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(`${API_URL}/search?query=${query}`);
      return response.data.events;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  }
);

const initialState = {
  events: [],
  isLoading: false,
  error: null,
};

const eventSlice = createSlice({
  name: "event",
  initialState,
  reducers: {
    addEvent: (state, action) => {
      state.events.push(action.payload);
    },
    updateEvent: (state, action) => {
      const index = state.events.findIndex(
        (event) => event.id === action.payload.id
      );
      if (index !== -1) {
        state.events[index] = action.payload;
      }
    },
    deleteEvent: (state, action) => {
      state.events = state.events.filter(
        (event) => event.id !== action.payload
      );
    },
    clearEvents: (state) => {
      state.events = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getAllEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(getAllEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(searchEvent.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(searchEvent.fulfilled, (state, action) => {
        state.isLoading = false;
        state.events = action.payload;
      })
      .addCase(searchEvent.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { addEvent, updateEvent, deleteEvent, clearEvents } =
  eventSlice.actions;
export default eventSlice.reducer;

export const selectEvents = (state) => state.events.events;
export const selectEventLoading = (state) => state.events.isLoading;
export const selectEventError = (state) => state.events.error;
