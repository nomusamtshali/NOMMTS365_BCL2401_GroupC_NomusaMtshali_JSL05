// Array of song objects. Add at least 5 songs with title, artist, and genre properties.
const songs = [
  { title: "Hooked on a Feeling", artist: "Blue Swede", genre: "Pop" },
  { title: "Moonage Daydream", artist: "David Bowie", genre: "Rock" },
  { title: "I Want You Back", artist: "The Jackson 5", genre: "Pop" },
  { title: "Spirit in the Sky", artist: "Norman Greenbaum", genre: "Rock" },
  { title: "Cherry Bomb", artist: "The Runaways", genre: "Rock" },
  { title: "Escape (The Piña Colada Song)", artist: "Rupert Holmes", genre: "Pop", },
  { title: "O-O-H Child", artist: "The Five Stairsteps", genre: "R&B" },
  { title: "Ain't No Mountain High Enough", artist: "Marvin Gaye & Tammi Terrell", genre: "R&B", },
  { title: "Come and Get Your Love", artist: "Redbone", genre: "Rock" },
  { title: "I'm Not in Love", artist: "10cc", genre: "Pop" },
  { title: "Fooled Around and Fell in Love", artist: "Elvin Bishop", genre: "Rock", },
  
  // Feel free to add even more songs
  { title: "90s by Nature", artist: "Showtek", genre: "Electro-House" },
  { title: "Enter Sandman", artist: "Metallica", genre: "Metal" },
  { title: "Lover Is a Day", artist: "Cuco", genre: "Lo-fi" },
  { title: "Blame", artist: "Calvin Harris, John Newman", genre: "Electro-House" },
  { title: "No More Tears", artist: "Ozzy Osbourne", genre: "Metal" },
  { title: "Affection", artist: "Jinsang", genre: "Lo-fi" },
  { title: "Saxo", artist: "Aniello", genre: "Electro-House" },
  { title: "Thunderstruck", artist: "AC/DC", genre: "Metal" },
  { title: "Sorry, I Like You", artist: "Burbank", genre: "Lo-fi" }
];

// Object containing each Guardian's preferred genre
const guardians = {
  "Star-Lord": "Rock",
  "Gamora": "Pop",
  // Add preferences for Drax, Rocket, and Groot
  "Drax": "Lo-fi",
  "Rocket": "Metal",
  "Groot": "Electro-House",
};

// Function to generate playlist based on preferred genre
function generatePlaylist(guardians, songs) {
  // Use the map() function to create playlists for each Guardian
  // Your code here
}

// Call generatePlaylist and display the playlists for each Guardian
generatePlaylist(guardians, songs);
