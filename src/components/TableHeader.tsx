import { ReactElement } from 'react';
import { Column } from './tableTypes';

type Props = {
  columnList: Column[];
};

export default function TableHeader(props: Props): ReactElement {
  const { columnList } = props;
  return (
    <div className="flex px-2 border-b-4 border-blue-900 font-semibold">
      {columnList.map((columnItem) => (
        <div key={`${columnItem.value}+${columnItem.width}`} className={`text-blue-900 ${columnItem.width}`}>
          {columnItem.value}
        </div>
      ))}
    </div>
  );
}
