import './App.css';
import { AppWrapper } from './app/components/AppWrapper';
import { MusicPlayer } from './app/components/MusicPlayer';
import { MusicPlaylist } from './app/components/MusicPlaylist';

function App() {
  return (
    <>
      <AppWrapper>
        <MusicPlaylist />
      </AppWrapper>
      <MusicPlayer />
    </>
  );
}

export default App;
