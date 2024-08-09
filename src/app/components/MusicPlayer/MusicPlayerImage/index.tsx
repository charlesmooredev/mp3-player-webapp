import { useSelector } from 'react-redux';
import { selectSongData } from '../../../features/music/musicSlice.ts';

export function MusicPlayerImage() {
  const currentMusic = useSelector(selectSongData);

  return (
    <img
      src={`/assets/images/${currentMusic?.image}`}
      className="aspect-square w-[100px] rounded-lg object-cover lg:w-[65px]"
      alt={currentMusic?.title}
    />
  );
}
