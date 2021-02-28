export interface CellCoordinates {
    column: number;
    row: number;
}

export interface GameStateDto {
    tableState: Sign[][];
    verdict: string;
    currentPlayer: Sign;
}

export enum Sign {
    X = 'X',
    O = 'O',
}
