import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Example thunk to fetch profile from server
export const fetchProfile = createAsyncThunk(
  "profile/fetchProfile",
  async (userId, { rejectWithValue }) => {
    try {
      const res = await fetch(`https://dummyjson.com/users/${userId}`);
      const data = await res.json();
      if (!res.ok) {
        return rejectWithValue(data?.message || "Failed to fetch profile");
      }
      return data;
    } catch (err) {
      return rejectWithValue(err.message || "Network error");
    }
  }
);

const initialState = {
  profileData: null,
  status: "idle",
  error: null
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: (state) => {
      state.profileData = null;
      state.status = "idle";
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending, (state) => {
        state.status = "pending";
        state.error = null;
      })
      .addCase(fetchProfile.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.profileData = action.payload;
      })
      .addCase(fetchProfile.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
        state.profileData = null;
      });
  }
});

export const { clearProfile } = profileSlice.actions;

export const selectProfile = (state) => state.profile.profileData;
export const selectProfileStatus = (state) => state.profile.status;
export const selectProfileError = (state) => state.profile.error;

export default profileSlice.reducer;