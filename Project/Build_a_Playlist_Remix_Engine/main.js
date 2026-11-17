const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128
    }
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124
    }
  ]
];
const flattenPlaylists = (arr) => {
  if (!Array.isArray(arr)) {
  return [];
  }
  let result = [];
  for(let  i = 0;i<arr.length;i++){
    for(let j = 0;j<arr[i].length;j++){
      result.push({
        ...arr[i][j],
        source: [i,j]
      })
    }
  }
  return result
}
function scoreTracks(arr){
  let result = []
  for(let i = 0;i<arr.length;i++){
    result.push({
      ...arr[i],
      score : arr[i].votes * 10 - Math.abs(arr[i].bpm - 120)
    })
  }
  return result
}
function dedupeTracks(arr){
  let result = [];
  for(let i = 0;i<arr.length;i++){
    let found = false
    for(let j = 0;j<result.length;j++){
      if(arr[i].trackId === result[j].trackId){
        found = true;
        break;
      }
    }
    if(found === false){
        result.push(arr[i]);
      }
  }
  return result
}


function enforceArtistQuota(arr,num){
  let result = []
  let count = 0;
  for(let i = 0;i<arr.length;i++){
    if(arr[i] && count <= num){
      count++;
      result.push(arr[i])
    }
  }
  return result
}


function buildSchedule(arr){
  let result = []
  for(let i = 0;i<arr.length;i++){
      result.push({
      slot: i+1,
      trackId : arr[i].trackId
    })
  }
  return result
}

const remixPlaylist = (arr,num) => {
  let result = [];
  let flatten = flattenPlaylists(arr)
  let score = scoreTracks(flatten);
  let dedupe = dedupeTracks(score);
  let enforce = enforceArtistQuota(dedupe,num)
  let schedule = buildSchedule(enforce);
  for(let i = 0;i<schedule.length;i++){
    result.push(schedule[i])
  }
  return result
}
console.log(remixPlaylist(playlists,3))