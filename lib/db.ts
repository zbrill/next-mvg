import clientPromise from "./mongodb";

export type Game = {
    room: string;
    players: Player[];
    letter: string;
    nextLetter: string;
    playing: boolean;
    turn: number;
  };

export type Player = {
    name: string;
  };


export async function getGames(): Promise<Game[]> {
    try {
        const client = await clientPromise;
        const db = client.db("mvg");
        const games = await db
            .collection("games")
            .find({})
            .toArray();
        console.log(games);
        return JSON.parse(JSON.stringify(games));
    } catch (e) {
        throw(e);
    }
}

export async function getGame(roomId: string): Promise<Game> {
    try {
        const client = await clientPromise;
        const db = client.db("mvg");
        const game = await db
            .collection("games")
            .findOne({
                'game.room': roomId
            });
        return JSON.parse(JSON.stringify(game));
    } catch (e) {
        throw(e)
    }
}