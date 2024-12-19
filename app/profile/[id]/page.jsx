'use client'

import { useParams } from 'next/navigation';
import { useState } from 'react';

const Profile = () => {
  const params = useParams();
  const id = params.id;

  // State for table cells and selection
  const [tables, setTables] = useState(Array(3).fill().map(() => 
    Array(12).fill().map(() => Array(2).fill().map(() => ({
      color: Math.random() > 0.5 ? 'green' : 'red',
      isYellow: false
    })))
  ));
  
  const [selectedCell, setSelectedCell] = useState(null);

  // Handle cell click
  const handleCellClick = (tableIndex, rowIndex, colIndex) => {
    const cell = tables[tableIndex][rowIndex][colIndex];
    if (cell.color === 'green') {
      // When a green cell is clicked, set it as the selected cell and change its color to yellow
      const newTables = [...tables];
      newTables[tableIndex][rowIndex][colIndex] = {
        ...newTables[tableIndex][rowIndex][colIndex],
        isYellow: true
      };
      setTables(newTables);
      setSelectedCell({ tableIndex, rowIndex, colIndex });
    }
  };

  // Handle booking or cancellation
  const handleAction = (action) => {
    if (selectedCell) {
      const { tableIndex, rowIndex, colIndex } = selectedCell;
      const newTables = [...tables];
      if (action === 'book') {
        // When booking, set the cell's isYellow to true
        newTables[tableIndex][rowIndex][colIndex] = {
          ...newTables[tableIndex][rowIndex][colIndex],
          isYellow: true
        };
      } else if (action === 'cancel') {
        // Cancel action (can be used to undo selection, if needed)
        newTables[tableIndex][rowIndex][colIndex] = {
          ...newTables[tableIndex][rowIndex][colIndex],
          isYellow: false
        };
      }
      setTables(newTables);
    }
    setSelectedCell(null); // Reset selection after action
  };

  // Table component to display table
  const TableComponent = ({ tableData, tableIndex }) => (
    <div className="overflow-x-auto">
      <table className="w-full">
        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(tableIndex, rowIndex, colIndex)}
                  className={`
                    w-16 h-16 border cursor-pointer transition-colors duration-200
                    ${cell.isYellow ? 'bg-yellow-400' : 
                      cell.color === 'green' ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 cursor-not-allowed'}
                  `}
                ></td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Added margin-top to move the table down */}
      <div className="flex justify-between gap-4 mt-10">
        <div className="flex-1">
          <TableComponent tableData={tables[0]} tableIndex={0} />
        </div>
        <div className="flex-1">
          <TableComponent tableData={tables[1]} tableIndex={1} />
        </div>
        <div className="flex-1">
          <TableComponent tableData={tables[2]} tableIndex={2} />
        </div>
      </div>

      {selectedCell && (
        <div className="fixed bottom-4 right-4 flex gap-2">
          <button
            onClick={() => handleAction('book')}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
          >
            Book
          </button>
          <button
            onClick={() => handleAction('cancel')}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
