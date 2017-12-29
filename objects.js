var playlist = {artist: "song title"}

function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromplaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}