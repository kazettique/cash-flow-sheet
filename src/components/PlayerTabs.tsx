import { ReactElement } from 'react';

type Props = {
  tabList: string[];
  currentPlayer: string;
  setCurrentPlayer: React.Dispatch<React.SetStateAction<string>>;
};

export default function PlayerTabs(props: Props): ReactElement {
  const { tabList, currentPlayer, setCurrentPlayer } = props;

  const handleChangeTab = (player: string) => {
    if (confirm('Save data before change player.')) {
      setCurrentPlayer(player);
    }
  };

  return (
    <div className="bg-gray-200 my-2 flex rounded-md w-full overflow-x-auto">
      {tabList.map((player) => {
        const isCurrentPlayer = player === currentPlayer;
        return (
          <div
            key={player}
            className={`py-2 px-4 cursor-pointer rounded-md 
              ${isCurrentPlayer ? 'bg-gray-700 text-gray-100' : 'text-gray-700'}`}
            onClick={() => handleChangeTab(player)}
          >
            {player}
          </div>
        );
      })}
    </div>
  );
}
