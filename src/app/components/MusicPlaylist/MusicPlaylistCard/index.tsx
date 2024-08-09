import MusicData = App.Data.MusicData;
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useMemo } from 'react';
import { musicSlice, selectSongData } from '../../../features/music/musicSlice.ts';

interface Props {
  data: MusicData;
}

export function MusicPlaylistCard({ data }: Props) {
  const dispatch = useDispatch();
  const currentSongData = useSelector(selectSongData);

  const cardCls = useMemo(() => {
    return `${data === currentSongData ? 'text-white font-semibold' : 'text-white/50'} group flex w-full cursor-pointer items-center space-x-4 p-2 first:rounded-t-md last:rounded-b-md odd:bg-white/25 even:bg-black/25`;
  }, [currentSongData, data]);

  const chooseSongFn = useCallback(() => {
    dispatch(musicSlice.actions.chooseSong(data));
  }, [data, dispatch]);

  return (
    <div className={cardCls} onClick={chooseSongFn}>
      <div>
        <img
          src={`/assets/images/${data.image}`}
          alt={data.title}
          className="aspect-square w-[30px] rounded-sm object-cover"
        />
      </div>
      <div>{data.title}</div>
      <div className="hidden hover:text-purple-300 lg:block">{data.artist}</div>
    </div>
  );
}
