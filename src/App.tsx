import { useState, useEffect } from 'react';
import _ from 'lodash';
import Menu from '@/components/Menu';
import PlayerTabs from '@/components/PlayerTabs';
import PlayerSheet from '@/pages/PlayerSheet';
import { Sheet } from '@/types';
import { INITIAL_PLAYER_SHEET } from '@/constants';

type PlayerList = {
  [player: string]: Sheet;
};

const INITIAL_PLAYER_LIST: PlayerList = {
  woody: INITIAL_PLAYER_SHEET,
  enoch: INITIAL_PLAYER_SHEET,
  // casey: INITIAL_PLAYER_SHEET,
};
const INITIAL_CURRENT_PLAYER: string = _.chain(INITIAL_PLAYER_LIST).keys().head().value();

function App() {
  const [playerList, setPlayerList] = useState<PlayerList>(INITIAL_PLAYER_LIST);
  const [currentPlayer, setCurrentPlayer] = useState<string>(INITIAL_CURRENT_PLAYER);

  const createPlayer = (newPlayerName: string): void => {
    const hasDuplicatePlayerName = _.has(playerList, newPlayerName);
    if (hasDuplicatePlayerName) {
      alert('Duplicate name!! Please try another name');
    } else {
      setPlayerList((prev) => {
        return { ...prev, [newPlayerName]: INITIAL_PLAYER_SHEET };
      });
      setCurrentPlayer(newPlayerName);
    }
  };

  const isPlayerListEmpty = _.isEmpty(playerList);
  const tabList = _.keys(playerList);

  return (
    <div className="w-screen h-auto">
      <Menu createPlayer={createPlayer} />
      <div className="container mx-auto mt-16 mb-4">
        {isPlayerListEmpty ? (
          <div className="h-96 flex items-center justify-center">
            <p className="text-gray-800 text-2xl text-bold text-center">Please create player to start the game!</p>
          </div>
        ) : (
          <>
            <PlayerTabs currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} tabList={tabList} />
            <PlayerSheet currentPlayer={currentPlayer} sheet={playerList[currentPlayer]} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
