import React from 'react';
import { Token } from '../token/token';
import {
  BoardProps,
  TriggerType,
  GamePhase,
} from '@connect-the-tokens-game/types';
import './board.module.scss';

export function Board({ board, trigger, message, state }: BoardProps) {
  const handleClickColumn: (
    index: number
  ) => React.MouseEventHandler<HTMLDivElement> = (index: number) => {
    return () => trigger({ type: TriggerType.CLICK_COLUMN, payload: index });
  };
  const classBoardState: Record<GamePhase, string> = {
    FULL: 'full',
    MID: 'mid',
    WIN: 'win',
  };
  return (
    <div className={`board board--${classBoardState[state]}`}>
      {message && <span className="board__message">{message}</span>}
      <div className={`board__columns`}>
        {board.map((column, index) => (
          <div
            key={`board__column--${index}`}
            className="board__column"
            onClick={handleClickColumn(index)}
          >
            {column
              .slice(0)
              .reverse()
              .map((token, tokenIndex) => (
                <Token
                  key={`board__col--${index}__token--${tokenIndex}`}
                  state={token}
                ></Token>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Board;
