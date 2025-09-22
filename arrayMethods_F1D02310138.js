const topArtists = [
  { rank: 1, artist: "The Weeknd", listeners: 112.57 },
  { rank: 2, artist: "Bruno Mars", listeners: 110.86 },
  { rank: 3, artist: "Justin Bieber", listeners: 100.68 },
  { rank: 4, artist: "Lady Gaga", listeners: 100.45 },
  { rank: 5, artist: "Coldplay", listeners: 93.73 },
  { rank: 6, artist: "Ed Sheeran", listeners: 93.38 },
  { rank: 7, artist: "Rihanna", listeners: 92.57 },
  { rank: 8, artist: "Billie Eilish", listeners: 88.17 },
  { rank: 9, artist: "Taylor Swift", listeners: 87.53 },
  { rank: 10, artist: "Drake", listeners: 81.61 }
];

// 1. map()
const upperCaseArtists = topArtists.map(item => item.artist.toUpperCase());
console.log("map(): ubah menjadi uppercase", upperCaseArtists);

// 2. filter() lebih dari 100 juta listeners
const moreThan100M = topArtists.filter(item => item.listeners > 100);
console.log("filter(): artis dengan lebih dari 100 juta listeners", moreThan100M);

// 3. reduce() total listeners semua artis
const totalListeners = topArtists.reduce((acc, item) => acc + item.listeners, 0);
console.log("reduce(): total listeners seluruh artis", totalListeners.toFixed(2), "juta");

// 4. find() Cari artis yang huruf depannya sama dengan "T"
const artistWithT = topArtists.find(item => item.artist.startsWith("T"));
if (artistWithT) {
  console.log("find(): artis yang huruf depannya sama dengan (T)", { rank: artistWithT.rank, artist: artistWithT.artist });
} else {
  console.log("find(): Tidak ada artis dengan awalan T");
}

// 5. some() Cek artis dengan lebih dari 110 juta listeners
const hasSuperPopular = topArtists.some(item => item.listeners > 110);
if (hasSuperPopular) {
  const superPopularArtists = topArtists.filter(item => item.listeners > 110);
  console.log("Artis dengan lebih dari 110 juta listeners:", superPopularArtists);
}

// 6. every() Cek semua artis yang punya lebih dari 80 juta listeners
const allAbove80M = topArtists.every(item => item.listeners > 80);
console.log("every(): semua artis yang punya lebih dari 80 juta listeners", allAbove80M);
if (allAbove80M) {
  topArtists.forEach(artist => {
    console.log(`Nama: ${artist.artist}, Listeners: ${artist.listeners} juta`);
  });
}