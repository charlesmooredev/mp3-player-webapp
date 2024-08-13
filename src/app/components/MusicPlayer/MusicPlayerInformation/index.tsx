import { useSelector } from 'react-redux';
import { selectSongData } from '../../../features/music/musicSlice.ts';

export function MusicPlayerInformation() {
  const currentMusic = useSelector(selectSongData);

  return (
    <div className="flex w-full flex-col space-y-1 text-center lg:w-auto lg:text-left">
      <div className="truncate text-[1.25rem]">{currentMusic.title}</div>
      <div className="flex items-center justify-center space-x-3 text-[1.15rem] text-gray-200 lg:ml-2 lg:justify-start">
        <div>{currentMusic.artist}</div>
      </div>
    </div>
  );
}
