import { ReactElement } from 'react';
import { Column } from './tableTypes';

type Props = {
  columnList: Column[];
  className?: string;
};

export default function TableHeader(props: Props): ReactElement {
  const { columnList, className } = props;
  return (
    <div className={`flex px-2 border-b-4 border-blue-900 font-semibold text-blue-900 ${className}`}>
      {columnList.map((columnItem) => (
        <div key={`${columnItem.value}+${columnItem.width}`} className={`${columnItem.width}`}>
          {columnItem.value}
        </div>
      ))}
    </div>
  );
}
