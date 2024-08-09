import MusicData = App.Data.MusicData;

export enum MusicStatus {
  Stopped = 'stopped',
  Playing = 'playing',
  Paused = 'paused',
}

export const musicPlayerArray = [
  {
    title: 'As Sick As The Secrets Within',
    image: 'as_sick_as_the_secrets_within.jpg',
    album: null,
    artist: 'Marilyn Manson',
    src: 'as_sick_as_the_secrets_within.mp3',
  },
  {
    title: 'Overdue',
    image: 'metro_boomin_overdue.jpg',
    album: null,
    artist: 'Metro Boomin',
    src: 'metro_boomin_overdue.mp3',
  },
  {
    title: 'Jimmy Crooks',
    image: 'jimmy_crooks.jpeg',
    album: null,
    artist: 'Drake & 21 Savage',
    src: 'jimmy_crooks.mp3',
  },
] as MusicData[];
