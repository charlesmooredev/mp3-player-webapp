import { useSelector } from 'react-redux';
import { selectSongData } from '../../../features/music/musicSlice.ts';

export function MusicPlayerInformation() {
  const currentMusic = useSelector(selectSongData);

  return (
    <div className="flex w-full flex-col space-y-1 text-center lg:w-auto lg:text-left">
      <div className="truncate text-[1.25rem]">{currentMusic.title}</div>
      <div className="text-[1.15rem] text-gray-200 lg:ml-2">{currentMusic.artist}</div>
      {currentMusic.album !== null && <div className="text-[1.05rem]">{currentMusic.album}</div>}
    </div>
  );
}
