type AccountInfo = {
  id: number;
  name: string;
  email?: string;
};

const account: AccountInfo = {
  id: 123,
  name: "Dalton",
  // email: 'daltonphellipe@gmail.com'
};

type CharInfo = {
  nickname: string;
  level: number;
};

const char: CharInfo = {
  nickname: "dalton10",
  level: 100,
};

// Intersection
type PlayerInfo = AccountInfo & CharInfo;

const player: PlayerInfo = {
  id: 123,
  name: "daltonfelipe",
  nickname: "dalton10",
  level: 100,
};
