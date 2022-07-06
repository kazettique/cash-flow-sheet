import { useState } from 'react';
import _ from 'lodash';
import Menu from '@/components/Menu';
import PlayerTabs from '@/components/PlayerTabs';
import PlayerSheet from '@/pages/PlayerSheet';
import { LocalStorageType } from '@/types';
import { getInitialPlayerSheet } from '@/utils';
import { useLocalStorageData } from '@/hooks';
import TestMobileViewPort from '@/components/TestMobileViewPor';

// type PlayerList = {
//   [player: string]: Sheet;
// };

// const INITIAL_PLAYER_LIST: PlayerList = {
//   woody: getInitialPlayerSheet(),
//   enoch: getInitialPlayerSheet(),
// };
// const INITIAL_CURRENT_PLAYER: string = _.chain(INITIAL_PLAYER_LIST).keys().head().value();

function App() {
  // const { getData, saveData } = useLocalStorageData();

  // const INITIAL_PLAYER_LIST = getData();
  // const INITIAL_CURRENT_PLAYER: string = _.chain(INITIAL_PLAYER_LIST).keys().head().value();

  // const [playerList, setPlayerList] = useState<LocalStorageType>(INITIAL_PLAYER_LIST);
  // const [currentPlayer, setCurrentPlayer] = useState<string>(INITIAL_CURRENT_PLAYER);
  // const [isRatRace, setIsRatRace] = useState(true);

  // const createPlayer = (newPlayerName: string): void => {
  //   const hasDuplicatePlayerName = _.has(playerList, newPlayerName);
  //   if (hasDuplicatePlayerName) {
  //     alert('Duplicate name!! Please try another name');
  //   } else {
  //     const newPlayerData = getInitialPlayerSheet();
  //     setPlayerList((prev) => {
  //       return { ...prev, [newPlayerName]: newPlayerData };
  //     });
  //     saveData(newPlayerName, newPlayerData);
  //     setCurrentPlayer(newPlayerName);
  //     setIsRatRace(true);
  //   }
  // };

  // const isPlayerListEmpty = _.isEmpty(playerList);
  // const tabList = _.chain(playerList)
  //   .entries()
  //   .sortBy((item) => item[1].createDate)
  //   .map((item) => item[0])
  //   .value();

  // return (
  //   <div className="w-screen h-auto">
  //     <Menu createPlayer={createPlayer} />
  //     <div className="container mx-auto mt-28 sm:mt-16 mb-4 px-2">
  //       {isPlayerListEmpty ? (
  //         <div className="h-96 flex items-center justify-center">
  //           <p className="text-gray-800 text-2xl text-bold text-center">Please create player to start the game!</p>
  //         </div>
  //       ) : (
  //         <>
  //           <PlayerTabs currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} tabList={tabList} />

  //           {_.isEmpty(currentPlayer) ? (
  //             <div className="h-96 flex items-center justify-center">
  //               <p className="text-gray-800 text-2xl text-bold text-center">Please select player</p>
  //             </div>
  //           ) : (
  //             <PlayerSheet
  //               tabList={tabList}
  //               sheet={playerList[currentPlayer]}
  //               currentPlayer={currentPlayer}
  //               setCurrentPlayer={setCurrentPlayer}
  //               isRatRace={isRatRace}
  //               setIsRatRace={setIsRatRace}
  //               setPlayerList={setPlayerList}
  //             />
  //           )}
  //         </>
  //       )}
  //     </div>
  //   </div>
  // );
  return <TestMobileViewPort />
}

export default App;
