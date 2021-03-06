export enum ColOrbit {
  LEFT = 'LEFT',
  RIGHT = 'RIGHT',
  MIDDLE = 'MIDDLE_Col',
}

export enum RowOrbit {
  MIDDLE = 'MIDDLE_ROW',
  TOP = 'TOP',
  BOTTOM = 'BOTTOM',
}

export enum OccupiedState {
  PLAYER_1 = 'PLAYER_1',
  PLAYER_2 = 'PLAYER_2',
  NONE = 'NONE',
}

export type Board = OccupiedState[][];

export enum GameMessage {
  ERROR = 'ERROR',
  TURN_TAKEN = 'TURN_TAKEN',
}

export interface GameErrorMessage {
  type: GameMessage.ERROR;
  message: string;
}

export interface GameTurnTakenMessage {
  type: GameMessage.TURN_TAKEN;
  board: Board;
  coordinateUpdated: Coordinate;
}

export type Row = number;
export type Column = number;
export type Coordinate = [Column, Row];
