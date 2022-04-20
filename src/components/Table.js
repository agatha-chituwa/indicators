import React from 'react'
import { useExpanded, useGroupBy, useSortBy, useTable } from 'react-table';

function Table({columns, data}) {
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data }, useGroupBy, useSortBy, useExpanded);
  return (
    <table {...getTableProps()}>
            
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.canGroupBy && column.id === 'category' ? (
                  <span {...column.getGroupByToggleProps()}>
                    {' '}
                    {column.isGrouped ? '+ ' : '- '}
                  </span>
                ) : null}

                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' ▼' : ' ▲') : ''}
                </span>
              </th>
            ))}
          </tr>
        ))}
      </thead>
    </table>
  )
}

export default Table