import { MusicPlayerImage } from './MusicPlayerImage';
import { MusicPlayerCard } from './MusicPlayerCard';
import { MusicPlayerInformation } from './MusicPlayerInformation';
import { MusicPlayerPlaybackBar } from './MusicPlayerPlaybackBar';

export function MusicPlayer() {
  return (
    <MusicPlayerCard>
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:space-x-4">
        <MusicPlayerImage />
        <MusicPlayerInformation />
      </div>
      <MusicPlayerPlaybackBar />
    </MusicPlayerCard>
  );
}
