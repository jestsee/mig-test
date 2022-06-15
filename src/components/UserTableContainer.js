import React, { useState, useEffect, useMemo } from 'react';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import { FaSortAlphaUp, FaSortAlphaDown } from "react-icons/fa";
import { TiArrowUnsorted } from "react-icons/ti";
import { UserTableFilter } from './UserTableFilter';

export default function Table({ columns, data }) {
  const { 
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
    setGlobalFilter,
   } = useTable ({
    columns,
    data
  }, 
  useGlobalFilter,
  useSortBy,
  usePagination)

  const { globalFilter } = state
  const { pageIndex, pageSize } = state

  return (
  <>
  <UserTableFilter filter={globalFilter} setFilter={setGlobalFilter}/>
  <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
    <table {...getTableProps()}>
      <thead className="bg-primary text-white text-left">
        {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map( (column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())} className="px-6 py-3">
                    {column.render('Header')}
                    {
                      column.sortable ? 
                      <span>
                        {column.isSorted ? (column.isSortedDesc ? 
                        <FaSortAlphaDown className='inline-flex mr-2'/> :
                        <FaSortAlphaUp className='inline-flex mr-2'/>
                        ) : <TiArrowUnsorted className='inline-flex mr-2'/>}
                      </span>
                      : ''
                    }
                  </th>
                ))} 
            </tr>
          ))
        }
      </thead>
      <tbody {...getTableBodyProps()}>
        {page.map(row => {
            prepareRow(row)
            return (
            <tr {...row.getRowProps()} className="border-b odd:bg-white even:bg-gray-50">
              {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()} className="px-6 py-4">{cell.render('Cell')}</td>
                })}
            </tr>
            )
          })
        }
      </tbody>
    </table>
    <div>
      <span>Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>
      </span>
      <span>
        | Go to page: {' '}
        <input type='number' defaultValue={pageIndex+1} onChange={
          e => {
            const pageNumber = e.target.value ? Number(e.target.value) - 1 : 0
            gotoPage(pageNumber)
          }
        }></input>
      </span>
      <select value={pageSize} onChange={e => setPageSize(Number(e.target.value))}>
        {
          [10,25,50].map(pageSize => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))
        }
      </select>
      <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>{'<<'}</button>
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>Previous</button>
      <button onClick={() => nextPage()} disabled={!canNextPage}>Next</button>
      <button onClick={() => gotoPage(pageCount-1)} disabled={!canNextPage}>{'>>'}</button>
    </div>
  </div>
  </>)
}