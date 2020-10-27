interface Game {
  title: string;
  description: string;
  platform?: string[];
  readonly genre: string;
  getSimilars?: (title: string) => void;
}

const tlou: Game = {
  description: "Best game",
  title: "The last of us",
  platform: ["PS3", "PS4"],
  genre: "Action",

  getSimilars: (title: string) => {
    console.log(`Similar games to ${title}: Uncharted, A plague Tale, Metro`);
  },
};

if (tlou.getSimilars) tlou.getSimilars(tlou.title);

class CreateGame implements Game {
  title: string;
  description: string;
  genre: string;

  constructor(t: string, d: string, g: string) {
    this.description = d;
    this.title = t;
    this.genre = g;
  }
}
