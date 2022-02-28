import { ReactElement } from 'react';
import _ from 'lodash';
import { Sheet } from '@/types';

type Props = {
  tabList: string[];
  currentPlayer: string;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
};

export default function PlayerTabs(props: Props): ReactElement {
  const { tabList, currentPlayer, setCurrentPlayer } = props;

  return (
    <div className="bg-gray-200 my-2 flex rounded-md w-full overflow-x-auto">
      {tabList.map((player) => {
        const isCurrentPlayer = player === currentPlayer;
        return (
          <div
            key={player}
            className={`py-2 px-4 cursor-pointer rounded-md 
              ${isCurrentPlayer ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
            onClick={() => setCurrentPlayer(player)}
          >
            {player}
          </div>
        );
      })}
    </div>
  );
}
