import { useDispatch, useSelector } from 'react-redux';
import {
  musicSlice,
  selectMusicVolume,
  selectPlayingStatus,
  selectSongData,
} from '../../../features/music/musicSlice.ts';
import { ChangeEvent, useCallback, useEffect, useRef, useState } from 'react';
import { MusicStatus } from '../../../helpers/MusicHelper.ts';
import { useFormatTime } from '../../../helpers/useFormatTime.ts';
import { MusicPlayerActions } from '../MusicPlayerActions';
import { MusicPlayerVolume } from '../MusicPlayerVolume';

export function MusicPlayerPlaybackBar() {
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const dispatch = useDispatch();
  const currentMusic = useSelector(selectSongData);
  const currentMusicStatus = useSelector(selectPlayingStatus);
  const musicVolume = useSelector(selectMusicVolume);

  const musicRef = useRef<HTMLAudioElement | null>(null);

  const changeMusicTimeFn = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    musicRef.current!.currentTime = Number(e.target.value);
    setCurrentTime(Number(e.target.value));
  }, []);

  useEffect(() => {
    const audioElement = musicRef.current;
    if (audioElement) {
      audioElement.volume = musicVolume;
    }

    const handleLoadedMetadata = () => {
      if (audioElement) {
        setDuration(audioElement.duration);
      }
    };

    const handleTimeUpdate = () => {
      if (audioElement) {
        setCurrentTime(audioElement.currentTime);
        dispatch(musicSlice.actions.updateSongTime({ time: audioElement.currentTime }));
      }
    };

    if (audioElement) {
      audioElement.addEventListener('loadedmetadata', handleLoadedMetadata);
      audioElement.addEventListener('timeupdate', handleTimeUpdate);
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
        audioElement.removeEventListener('timeupdate', handleTimeUpdate);
      }
    };
  }, [dispatch, musicVolume]);

  useEffect(() => {
    const audioElement = musicRef.current;

    const playAudio = () => {
      if (audioElement) {
        audioElement.play().then();
      }
    };

    if (audioElement) {
      audioElement.pause();
      audioElement.load();

      if (currentMusicStatus === MusicStatus.Playing) {
        audioElement.addEventListener('canplay', playAudio, { once: true });
      }
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('canplay', playAudio);
      }
    };
  }, [currentMusic, currentMusicStatus]);

  return (
    <div className="flex items-center space-x-4 text-sm">
      <MusicPlayerActions />
      <div className="w-[70px] text-right">{useFormatTime(currentTime)}</div>
      <input
        type="range"
        className="slider w-[calc(100%-140px)] appearance-none bg-transparent"
        min={0}
        max={duration}
        value={currentTime}
        onChange={changeMusicTimeFn}
      />
      <div className="w-[70px]">{useFormatTime(duration)}</div>
      <MusicPlayerVolume />
      <audio ref={musicRef}>
        <source src={`/assets/music/${currentMusic?.src}`} />
      </audio>
    </div>
  );
}
