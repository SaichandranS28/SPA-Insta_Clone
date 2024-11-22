const Users = [
  {
    id_no: 1,
    name: "Pablo Escobar",
    username: "charlie_pablo_escobar",
    image: "https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8TWVufGVufDB8MHwwfHx8MA%3D%3D",
    followers: 1200,
    following: 600,
    caption: "Living life one moment at a time 🌟 | Traveler ✈️ | Coffee lover ☕",
    requestSent: false,
    profession: "Software Engineer",
    posts: [
      {
        id: 1,
        likes: 150,
        postImage: "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&auto=format&fit=crop&q=60",
        postedAt: "2024-11-20T10:15:00",
        caption: "Exploring the beauty of nature 🌳."
      },
      {
        id: 2,
        likes: 200,
        postImage: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=500&auto=format&fit=crop&q=60",
        postedAt: "2024-11-21T14:30:00",
        caption: "Coffee and code ☕💻."
      },
      {
        id: 3,
        likes: 250,
        postImage: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?w=500&auto=format&fit=crop&q=60",
        postedAt: "2024-11-18T08:10:00",
        caption: "Sunrise vibes 🌅."
      },
      {
        id: 4,
        likes: 175,
        postImage: "https://plus.unsplash.com/premium_photo-1673697239981-389164b7b87f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-19T22:00:00",
        caption: "Late-night coding session 🤖."
      },
      {
        id: 5,
        likes: 300,
        postImage: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=500&auto=format&fit=crop&q=60",
        postedAt: "2024-11-17T16:40:00",
        caption: "Captured this amazing view!"
      },
      {
        id: 6,
        likes: 100,
        postImage: "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-15T20:20:00",
        caption: "Coding marathon completed 🏁."
      }
    ]
  },
  {
    id_no: 2,
    name: "Priya Sweety",
    username: "sweety_priya",
    image: "https://images.unsplash.com/photo-1650405844475-7397a46b6213?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfDB8MHx8fDA%3D",
    followers: 2500,
    following: 800,
    caption: "Dream big, work hard, stay humble 🌸 | Fashion enthusiast 👗 | Nature lover 🍃",
    requestSent: false,
    profession: "Fashion Designer",
    posts: [
      {
        id: 7,
        likes: 300,
        postImage: "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-20T09:25:00",
        caption: "Styled for the season 🌸."
      },
      {
        id: 8,
        likes: 500,
        postImage: "https://plus.unsplash.com/premium_photo-1711174134755-bfa7a6a08c8e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-21T11:45:00",
        caption: "Fashion that tells a story 👗."
      },
      {
        id: 9,
        likes: 650,
        postImage: "https://images.unsplash.com/photo-1655848641018-b0f6a8f3cfd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-19T14:30:00",
        caption: "Nature's beauty reflected in style 🍃."
      },
      {
        id: 10,
        likes: 400,
        postImage: "https://images.unsplash.com/photo-1554881070-74595ca2b74c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-18T18:50:00",
        caption: "Elegance is the only beauty that never fades ✨."
      },
      {
        id: 11,
        likes: 550,
        postImage: "https://plus.unsplash.com/premium_photo-1682097133960-e9979d40bc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-17T12:00:00",
        caption: "Fashion is an instant language 🗣️."
      },
      {
        id: 12,
        likes: 700,
        postImage: "https://plus.unsplash.com/premium_photo-1711393510819-cf75cd73caeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-16T15:10:00",
        caption: "Creating magic through fabrics ✨."
      }
    ]
  },
  {
    id_no: 3,
    name: "William Butcher",
    username: "william_butcher_007",
    image: "https://images.unsplash.com/photo-1475403614135-5f1aa0eb5015?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fE1lbnxlbnwwfDB8MHx8fDA%3D",
    followers: 1800,
    following: 1200,
    caption: "Engineer by day, artist by night 🎨 | Exploring the world 🌍 | Tech geek 💻",
    requestSent: false,
    profession: "Mechanical Engineer",
    posts: [
      {
        id: 13,
        likes: 350,
        postImage: "https://images.unsplash.com/photo-1676018368082-9ef131f14d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1lY2hhbmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-21T12:10:00",
        caption: "Mechanical wonders, one machine at a time ⚙️."
      },
      {
        id: 14,
        likes: 400,
        postImage: "https://images.unsplash.com/photo-1581090124360-558a029c4148?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-19T10:00:00",
        caption: "Designing the future with precision ✏️."
      },
      {
        id: 15,
        likes: 250,
        postImage: "https://images.unsplash.com/photo-1676018368021-195887b8bf5c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fG1lY2hhbmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-18T16:30:00",
        caption: "The art of engineering 🎨."
      },
      {
        id: 16,
        likes: 500,
        postImage: "https://plus.unsplash.com/premium_photo-1664297997167-88170c57bc35?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVjaGFuaWNhbCUyMGVuZ2luZWVyaW5nfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-17T14:45:00",
        caption: "Exploring new horizons 🌍."
      },
      {
        id: 17,
        likes: 320,
        postImage: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fG1lY2hhbmljYWwlMjBlbmdpbmVlcmluZ3xlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-16T20:05:00",
        caption: "Bridging creativity with technology 💻."
      },
      {
        id: 18,
        likes: 600,
        postImage: "https://images.unsplash.com/photo-1581092335878-2d9ff86ca2bf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI3fHxtZWNoYW5pY2FsJTIwZW5naW5lZXJpbmd8ZW58MHwwfDB8fHww",
        postedAt: "2024-11-15T18:00:00",
        caption: "Tech geek life 💡."
      }
    ]
  },
  {
    id_no: 4,
    name: "Anushka Shetty",
    username: "shetty_anushka_queen",
    image: "https://images.unsplash.com/photo-1617009762269-c062aaf6b3a0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGluZGlhbiUyMGdpcmx8ZW58MHwwfDB8fHww",
    followers: 3000,
    following: 500,
    caption: "Dancing through life 💃 | Foodie 🍕 | Spreading positive vibes ✨",
    requestSent: false,
    profession: "Choreographer",
    posts: [
      {
        id: 19,
        likes: 450,
        postImage: "https://images.unsplash.com/photo-1525296416200-59aaed194d0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGFuY2VyfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-21T13:30:00",
        caption: "Dance is the hidden language of the soul 💃✨."
      },
      {
        id: 20,
        likes: 500,
        postImage: "https://images.unsplash.com/photo-1698795635937-31264cdbf359?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Zm9vZCUyMGFuZCUyMGRhbmNlfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-19T17:20:00",
        caption: "Food and dance, a perfect combo 🍕💃."
      },
      {
        id: 21,
        likes: 600,
        postImage: "https://plus.unsplash.com/premium_photo-1689885430775-ad2d484d41e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRhbmNlfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-18T14:10:00",
        caption: "Spreading good vibes through movement ✨."
      },
      {
        id: 22,
        likes: 450,
        postImage: "https://images.unsplash.com/photo-1722440044211-e5ec891a2822?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmhhcmF0YW5hdHlhbXxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-17T12:50:00",
        caption: "Let’s dance it out 🕺💃."
      },
      {
        id: 23,
        likes: 300,
        postImage: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGZvb2RzfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-16T09:00:00",
        caption: "A true foodie’s paradise 🍕🥗."
      },
      {
        id: 24,
        likes: 400,
        postImage: "https://plus.unsplash.com/premium_photo-1681234558121-904ba886cf03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBkYW5jZXxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-15T20:25:00",
        caption: "Dancing under the stars ✨."
      }
    ]
  },
  {
    id_no: 5,
    name: "Vigneshwaran",
    username: "vignesh_tn",
    image: "https://images.unsplash.com/photo-1512663150964-d8f43c899f76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1lbnxlbnwwfDB8MHx8fDA%3D",
    followers: 1500,
    following: 700,
    caption: "Adventure seeker 🏞️ | Music lover 🎶 | Capturing moments 📸",
    requestSent: false,
    profession: "Photographer",
    posts: [
      {
        id: 25,
        likes: 600,
        postImage: "https://images.unsplash.com/photo-1510382684496-dda106e3f86a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBob3RvZ3JhcGhlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-21T10:30:00",
        caption: "The world is full of beauty, just waiting to be captured 📸."
      },
      {
        id: 26,
        likes: 550,
        postImage: "https://images.unsplash.com/photo-1516283182395-4b90237bff2e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHBob3RvZ3JhcGhlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-20T15:45:00",
        caption: "Music in the air, adventure in the heart 🎶."
      },
      {
        id: 27,
        likes: 450,
        postImage: "https://images.unsplash.com/photo-1476979877450-4037538c2749?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njd8fHBob3RvZ3JhcGhlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-19T08:00:00",
        caption: "Adventure time! Nature’s beauty never disappoints 🏞️."
      },
      {
        id: 28,
        likes: 700,
        postImage: "https://images.unsplash.com/photo-1719937206094-8de79c912f40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8cGhvdG9ncmFwaGVyfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-18T14:25:00",
        caption: "Every picture tells a story 📷."
      },
      {
        id: 29,
        likes: 500,
        postImage: "https://images.unsplash.com/photo-1506434304575-afbb92660c28?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGhvdG9ncmFwaGVyfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-17T11:10:00",
        caption: "Chasing sunsets, one click at a time 🌅."
      },
      {
        id: 30,
        likes: 650,
        postImage: "https://images.unsplash.com/photo-1622702247961-f3619c5d6211?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhbWVyYXxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-16T18:00:00",
        caption: "A photographer’s dream: capturing moments that last forever 📸."
      }
    ]
  },
  {
    id_no: 6,
    name: "Samantha flair",
    username: "samantha_sam",
    image: "https://plus.unsplash.com/premium_photo-1708271598149-a3feca3c0c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGluZGlhbiUyMHdvbWFufGVufDB8MHwwfHx8MA%3D%3D",
    followers: 2800,
    following: 900,
    caption: "Aesthetic soul 🌼 | Bookworm 📚 | Believer in magic ✨",
    requestSent: false,
    profession: "Author",
    posts: [
      {
        id: 31,
        likes: 700,
        postImage: "https://images.unsplash.com/photo-1725582204163-46d1f246ecd6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGF1dGhvcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-22T10:00:00",
        caption: "Books are a uniquely portable magic 📚✨."
      },
      {
        id: 32,
        likes: 650,
        postImage: "https://images.unsplash.com/photo-1530103043960-ef38714abb15?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWVzdGhldGljfGVufDB8MHwwfHx8MA%3D%3D",
        postedAt: "2024-11-20T14:30:00",
        caption: "Aesthetic vibes only 🌼."
      },
      {
        id: 33,
        likes: 600,
        postImage: "https://images.unsplash.com/photo-1682080113170-13d76869c9fc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGJvb2slMjBsb3ZlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-19T12:45:00",
        caption: "The magic of words is infinite ✨."
      },
      {
        id: 34,
        likes: 550,
        postImage: "https://images.unsplash.com/photo-1521714161819-15534968fc5f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fGJvb2slMjBsb3ZlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-18T09:30:00",
        caption: "A book a day keeps reality away 📖."
      },
      {
        id: 35,
        likes: 480,
        postImage: "https://images.unsplash.com/photo-1473755504818-b72b6dfdc226?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTV8fGJvb2slMjBsb3ZlcnxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-17T16:20:00",
        caption: "Lost in a world of magic and mystery ✨."
      },
      {
        id: 36,
        likes: 550,
        postImage: "https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bGlicmFyeXxlbnwwfDB8MHx8fDA%3D",
        postedAt: "2024-11-16T11:00:00",
        caption: "Every book is a new adventure 📚."
      }
    ]
  }  
  ];
  
  export default Users;
  