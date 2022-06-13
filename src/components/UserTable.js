import { useTable } from 'react-table';
import { useMemo } from 'react'
import { COLUMNS } from './UserTableColumn';
import dummy_data from './dummy_data.json'
import UserDataService from '../services/service'

export default function UserTable() {

  const columns = useMemo(() => COLUMNS, [])
  const data = useMemo(() => dummy_data, [])

  const tableInstance = useTable({
    columns: columns,
    data: data
  })

  const { 
    getTableProps, 
    getTableBodyProps, 
    headerGroups, 
    rows, 
    prepareRow
  } = tableInstance

  return (
    <table className='ml-20'{...getTableProps()}>
      <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>
                  {column.render("header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>{
                row.cells.map(
                  cell => {
                    return (<td {...cell.getCellProps()}>
                      {cell.render('Cell')}
                    </td>)
                  }
                )
              }
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}