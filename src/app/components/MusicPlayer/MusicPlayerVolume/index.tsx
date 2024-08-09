import { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';
import { musicSlice } from '../../../features/music/musicSlice.ts';

export function MusicPlayerVolume() {
  const dispatch = useDispatch();

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(musicSlice.actions.updateMusicVolume({ volume: Math.floor(Number(e.target.value) / 100) }));
  };

  return <input type="range" min="0" max="100" onChange={handleVolumeChange} />;
}
