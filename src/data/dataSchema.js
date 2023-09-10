export const mockUser = {
    id: "no_id",
    dateOfCreation: 12345678,
    avatar: "avtrurl",
    firstname: "abc",
    lastname: "def",
    username: "username",
    email: "abc@gmail.com",
    watchlist: [
      {stockEx: "NASDAQ",
      stockSymbol: "AAPL"
      },
      {stockEx: "NASDAQ",
      stockSymbol: "NFLX"
      },
      {stockEx: "NSE",
      stockSymbol: "RELIANCE"
      },

    ],
  };
  
export const mockCompetition = {
    title: "",
    competition_id: 12234,
    register_url: "www.",
    leaderboard_url: "",
    startDate: '',
    endDate: '',
    tabs: [
      {
        tab_name: "",
        content: "",
      },
    ],
    tagWeightages: [
      {
        tagName: "NLP",
        weightage: 0.7,
      },
    ],
    scoringRule: [{
      rank: 1,
      score: 200
    },
  {
    rank: 'others',
    score: 20
  }],
    ranks:[
      {
        rank: 1,
        teamName: 'something',
        teamMembers: ['kID_A','kID_B']
      },
    ]
  };
  
  
export const mockAnnoucement = {
    title: '',
    date: '',
    content: '',
    display: true
  }
  