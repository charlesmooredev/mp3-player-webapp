import { VolumeUp } from 'react-bootstrap-icons';
import { ChangeEvent, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { musicSlice, selectMusicVolume } from '../../../features/music/musicSlice.ts';
import { useOutsideClickFN } from '../../../helpers/useOutsideClickFn.tsx';

export function MusicPlayerVolume() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const volumeControlsRef = useRef<HTMLDivElement | null>(null);

  const musicVolume = useSelector(selectMusicVolume);

  const changeVolumeFn = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      dispatch(musicSlice.actions.updateMusicVolume({ volume: Number(e.target.value) / 100 }));
    },
    [dispatch],
  );

  useOutsideClickFN(volumeControlsRef, () => setOpen(false));

  return (
    <div className="relative">
      {open && (
        <div className="absolute -top-[70px] left-1/2 -translate-x-1/2 lg:-top-[50px]" ref={volumeControlsRef}>
          <input
            type="range"
            className="slider w-[100px] rotate-[270deg] appearance-none bg-transparent outline-0 lg:w-[70px]"
            onChange={e => changeVolumeFn(e)}
            value={musicVolume * 100}
            min={0}
            step={1}
            max={100}
          />
        </div>
      )}
      <VolumeUp size={35} onClick={() => setOpen(!open)} className="hidden cursor-pointer lg:block" />
    </div>
  );
}
