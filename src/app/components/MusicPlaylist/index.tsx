import { musicPlayerArray } from '../../helpers/MusicHelper.ts';
import { MusicPlaylistCard } from './MusicPlaylistCard';
import { Fragment } from 'react';

export function MusicPlaylist() {
  return (
    <div className="w-full">
      {musicPlayerArray.map(music => (
        <Fragment key={music.src}>
          <MusicPlaylistCard data={music} />
        </Fragment>
      ))}
    </div>
  );
}
