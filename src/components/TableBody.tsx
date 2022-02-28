import { ReactElement } from 'react';
import { Column } from '@/components/tableTypes';

type Props = {
  tableData: Column[][];
};

export default function TableBody(props: Props): ReactElement {
  const { tableData } = props;

  return (
    <>
      {tableData.map((rowList, rowIndex) => {
        return (
          <div key={`${rowList[0].value}_${rowIndex}`} className="border-b border-blue-900 my-2 py-2 flex">
            {rowList.map((item, itemIndex) => (
              <div key={`${item.value}_${itemIndex}`} className={`mr-2 ${item.width}`}>
                <input type="text" className="text-gray-600 w-full rounded-sm px-2" value={item.value} />
              </div>
            ))}
          </div>
        );
      })}
    </>
  );
}
