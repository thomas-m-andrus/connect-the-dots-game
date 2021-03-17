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