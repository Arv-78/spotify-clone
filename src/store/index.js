import { createSlice, configureStore } from "@reduxjs/toolkit";

const tokenSlice = createSlice({
  name: "token",
  initialState: { tokenString: "" },
  reducers: {
    setToken(state, action) {
      state.tokenString = action.payload;
    },
  },
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
    activeMainItem: "Home",
    featuredPlaylist: {},
    weeklyPlaylist: {},
    playlistUrl: "",
    currentTrackInfo: {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b2733f66b5b49ccea004a5ef0db2",
      title: "Lose Yourself",
      artist: "Eminem",
      trackTime: "5:20",
    },
  },
  reducers: {
    addUser(state, action) {
      state.userInfo = action.payload;
    },
    setActiveItem(state, action) {
      state.activeMainItem = action.payload;
    },
    setFeaturedList(state, action) {
      state.featuredPlaylist = action.payload;
    },
    setWeeklylist(state, action) {
      state.weeklyPlaylist = action.payload;
    },
    setplaylistUrl(state, action) {
      state.playlistUrl = action.payload;
    },
    setcurrentTrackInfo(state, action) {
      state.currentTrackInfo = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { token: tokenSlice.reducer, user: userSlice.reducer },
});
export const tokenActions = tokenSlice.actions;
export const userActions = userSlice.actions;
export default store;
