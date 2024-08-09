import { musicPlayerArray } from '../../helpers/MusicHelper.ts';
import { MusicPlaylistCard } from './MusicPlaylistCard';
import { Fragment } from 'react';

export function MusicPlaylist() {
  return (
    <div className="h-[calc(100vh-235px)] w-full lg:h-[calc(100vh-125px)]">
      <div className="h-full overflow-y-auto py-2">
        {musicPlayerArray.map((music, index) => (
          <Fragment key={index}>
            <MusicPlaylistCard data={music} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
