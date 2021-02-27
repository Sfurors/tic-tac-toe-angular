export interface CellCoordinates {
    column: number;
    row: number;
}

export interface GameStateDto {
    tableState: Sign[][]; //Current table state (moves)
    verdict: string; //TODO which data I want retrieve from backend?
}

export enum Sign {
    X = 'X',
    O = 'O',
}
