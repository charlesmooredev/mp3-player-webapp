import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../configureStore.ts';
import { musicPlayerArray, MusicStatus } from '../../helpers/MusicHelper.ts';
import MusicData = App.Data.MusicData;

export interface MusicPlayerState {
  loading: boolean;
  activeSong: MusicData;
  status: MusicStatus;
  currentTime: number;
  musicVolume: number;
}

const initialState: MusicPlayerState = {
  loading: true,
  activeSong: musicPlayerArray[0],
  status: MusicStatus.Paused,
  currentTime: 0,
  musicVolume: 1,
};

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    init: state => {
      state.loading = true;
      state.activeSong = musicPlayerArray[0];
      state.status = MusicStatus.Stopped;
      state.currentTime = 0;
      state.musicVolume = 1;
    },
    stopLoading: state => {
      state.loading = false;
    },
    chooseSong: (state, action: PayloadAction<MusicData>) => {
      state.loading = false;
      state.activeSong = action.payload;
      state.status = MusicStatus.Playing;
      state.currentTime = 0;
    },
    playSong: state => {
      state.status = MusicStatus.Playing;
    },
    updateSongTime: (state, action: PayloadAction<{ time: number }>) => {
      state.currentTime = action.payload.time;
    },
    updateMusicVolume: (state, action: PayloadAction<{ volume: number }>) => {
      state.musicVolume = action.payload.volume;
    },
    pauseSong: state => {
      state.status = MusicStatus.Paused;
    },
  },
});

const selectSlice = (state: RootState) => state.music || initialState;
export const selectSongData = createSelector([selectSlice], state => state.activeSong);
export const selectPlayingStatus = createSelector([selectSlice], state => state.status);
export const selectMusicVolume = createSelector([selectSlice], state => state.musicVolume);

export const { init, pauseSong, playSong, updateSongTime, chooseSong, stopLoading, updateMusicVolume } =
  musicSlice.actions;

export default musicSlice.reducer;
