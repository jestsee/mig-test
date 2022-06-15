import { FiEdit2, FiTrash2 } from "react-icons/fi";

export const COLUMNS = [
  // {
  //   Header: 'ID',
  //   accessor: 'id',
  //   sortable: false,
  // },
  {
    Header: 'Name',
    accessor: 'name',
    sortable: true,
  },
  {
    Header: 'Address',
    accessor: 'address',
    sortable: false,
  },
  {
    Header: 'Country',
    accessor: 'country',
    sortable: false,
  },
  {
    Header: 'Phone Number',
    accessor: 'phone_number',
    sortable: false,
  },
  {
    Header: 'Job Title',
    accessor: 'job_title',
    sortable: false,
  },
  {
    Header: 'Status',
    accessor: 'status',
    sortable: false,
    Cell: ({ cell: { value }}) => value ? 
    <p className='text-primary font-semibold'>Active</p> : 
    <p className='text-[red] font-semibold'>Inactive</p>,
  },
  {
    Header: 'Action',
    accessor: null,
    sortable: false,
    Cell: <div className="flex">
    <i className="text-primary cursor-pointer mr-3"><FiEdit2 size={20}/></i>
    <i className="text-[red] cursor-pointer"><FiTrash2 size={20}/></i>
  </div>
  },
  // {
  //   Header: 'Created at',
  //   accessor: 'created_at',
  //   sortable: false,
  // },
  // {
  //   Header: 'Updated at',
  //   accessor: 'updated_at',
  //   sortable: false,
  // },
]