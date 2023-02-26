module.exports = [
  {
    name: "help",
    description: "List of all commands available",
  },
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "dmall",
    description: "Sends a message to every member of a selected role",
    options: [
      {
        name: "message",
        description: "Your input",
        type: 3,
        required: true,
      },
      {
        name: "role",
        description: "Pick a role to ping",
        type: 8,
        required: true,
      },
    ],
  },
  {
    name: "play",
    description: "Plays a song from YouTube",
    options: [
      {
        name: "url",
        description: "Youtube URL",
        type: 3,
        required: true,
      },
    ],
  },
  // {
  //   name: "create",
  //   description: "Creates a sign up message",
  // },
  {
    name: "tip",
    description: "Gives a random tip",
  },
  {
    name: "utc",
    description: "Shows UTC time",
  },
  {
    name: "timestamp",
    description: "Converts your date in a timestamp",
    options: [
      {
        name: "timezone",
        description: "Pick your timezone",
        type: 3,
        required: true,
        choices: [
          {
            name: "GMT	Greenwich Mean Time	GMT",
            value: "0",
          },
          {
            name: "UTC	Universal Coordinated Time	GMT",
            value: "0",
          },
          {
            name: "ECT	European Central Time	GMT+1:00",
            value: "1",
          },
          {
            name: "EET	Eastern European Time	GMT+2:00",
            value: "2",
          },

          {
            name: "EAT	Eastern African Time	GMT+3:00",
            value: "3",
          },

          {
            name: "NET	Near East Time	GMT+4:00",
            value: "4",
          },
          {
            name: "PLT	Pakistan Lahore Time	GMT+5:00",
            value: "5",
          },

          {
            name: "BST	Bangladesh Standard Time	GMT+6:00",
            value: "6",
          },
          {
            name: "VST	Vietnam Standard Time	GMT+7:00",
            value: "7",
          },
          {
            name: "CTT	China Taiwan Time	GMT+8:00",
            value: "8",
          },
          {
            name: "JST	Japan Standard Time	GMT+9:00",
            value: "9",
          },

          {
            name: "AET	Australia Eastern Time	GMT+10:00",
            value: "10",
          },
          {
            name: "SST	Solomon Standard Time	GMT+11:00",
            value: "11",
          },
          {
            name: "NST	New Zealand Standard Time	GMT+12:00",
            value: "12",
          },
          {
            name: "MIT	Midway Islands Time	GMT-11:00",
            value: "-11",
          },
          {
            name: "HST	Hawaii Standard Time	GMT-10:00",
            value: "-10",
          },
          {
            name: "AST	Alaska Standard Time	GMT-9:00",
            value: "-9",
          },
          {
            name: "PST	Pacific Standard Time	GMT-8:00",
            value: "-8",
          },

          {
            name: "MST	Mountain Standard Time	GMT-7:00",
            value: "-7",
          },
          {
            name: "CST	Central Standard Time	GMT-6:00",
            value: "-6",
          },
          {
            name: "EST	Eastern Standard Time	GMT-5:00",
            value: "-5",
          },
          {
            name: "PRT	Puerto Rico and US Virgin Islands Time	GMT-4:00",
            value: "-4",
          },

          {
            name: "BET	Brazil Eastern Time	GMT-3:00",
            value: "-3",
          },
          {
            name: "CAT	Central African Time	GMT-1:00",
            value: "-1",
          },
        ],
      },
      {
        name: "year",
        description: "Pick the year you need in 4 digits form (2022, 1970 etc)",
        type: 10,
        required: true,
      },
      {
        name: "month",
        description: "Pick a month",
        type: 3,
        required: true,
        choices: [
          {
            name: "1 January",
            value: "0",
          },
          {
            name: "2 February",
            value: "1",
          },
          {
            name: "3 March",
            value: "2",
          },
          {
            name: "4 April",
            value: "3",
          },
          {
            name: "5 May",
            value: "4",
          },
          {
            name: "6 June",
            value: "5",
          },
          {
            name: "7 July",
            value: "6",
          },
          {
            name: "8 August",
            value: "7",
          },
          {
            name: "9 September",
            value: "8",
          },
          {
            name: "10 October",
            value: "9",
          },
          {
            name: "11 November",
            value: "10",
          },
          {
            name: "12 December",
            value: "11",
          },
        ],
      },
      {
        name: "date",
        description: "Pick a day of the month you need (1, 21, 31 etc)",
        type: 10,
        required: true,
      },
      {
        name: "hours",
        description: "Pick hours (00, 05, 23, 24 etc.)",
        type: 10,
        required: true,
      },
      {
        name: "minutes",
        description: "Pick hminutes (00, 35, 44, 60 etc.)",
        type: 10,
        required: true,
      },
      {
        name: "display",
        description: "The way timestamp will be displayed",
        type: 3,
        required: true,
        choices: [
          {
            name: "default",
            description: "28 November 2018 09:01",
            value: "",
          },
          {
            name: "short-time",
            description: "03:08",
            value: ":t",
          },
          {
            name: "long-time",
            description: "03:08:11",
            value: ":T",
          },
          {
            name: "short-date",
            description: "21/11/2022",
            value: ":d",
          },
          {
            name: "long-date",
            description: "21 November, 2022",
            value: ":D",
          },
          {
            name: "short-date-time",
            description: "21 November 2022 11:20",
            value: ":f",
          },
          {
            name: "long-date-time",
            description: "Thursday, 21 November 2022 09:01",
            value: ":F",
          },
          {
            name: "relative-time",
            description: "1 year ago",
            value: ":R",
          },
        ],
      },
    ],
  },
];
