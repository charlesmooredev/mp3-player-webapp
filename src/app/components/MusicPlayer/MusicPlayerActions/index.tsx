import { useDispatch, useSelector } from 'react-redux';
import { musicSlice, selectPlayingStatus } from '../../../features/music/musicSlice.ts';
import { useCallback, useEffect } from 'react';
import { MusicStatus } from '../../../helpers/MusicHelper.ts';
import { PauseFill, PlayFill } from 'react-bootstrap-icons';

export function MusicPlayerActions() {
  const dispatch = useDispatch();
  const currentMusicStatus = useSelector(selectPlayingStatus);

  const onMusicPlayFn = useCallback(() => {
    dispatch(musicSlice.actions.playSong());
  }, [dispatch]);

  const onMusicPauseFn = useCallback(() => {
    dispatch(musicSlice.actions.pauseSong());
  }, [dispatch]);

  const keyboardCheckFn = useCallback(
    (ev: KeyboardEvent) => {
      if (ev.key === ' ') {
        if (currentMusicStatus === MusicStatus.Playing) {
          onMusicPauseFn();
        } else {
          onMusicPlayFn();
        }
      }
    },
    [currentMusicStatus, onMusicPauseFn, onMusicPlayFn],
  );

  useEffect(() => {
    document.addEventListener('keypress', keyboardCheckFn);

    return () => {
      document.removeEventListener('keypress', keyboardCheckFn);
    };
  }, [keyboardCheckFn]);

  return (
    <>
      {currentMusicStatus === MusicStatus.Paused ? (
        <button onClick={onMusicPlayFn}>
          <PlayFill size={35} />
        </button>
      ) : (
        <button onClick={onMusicPauseFn}>
          <PauseFill size={35} />
        </button>
      )}
    </>
  );
}
