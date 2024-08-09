import './App.css';
import { AppWrapper } from './app/components/AppWrapper';
import { MusicPlayer } from './app/components/MusicPlayer';
import { MusicPlaylist } from './app/components/MusicPlaylist';

function App() {
  return (
    <>
      <AppWrapper>
        <MusicPlaylist />
        <MusicPlayer />
      </AppWrapper>
    </>
  );
}

export default App;
