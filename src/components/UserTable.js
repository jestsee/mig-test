import { Component} from 'react'
import { COLUMNS } from './UserTableColumn';
import dummy_data from './dummy_data.json'
import UserDataService from '../services/service'

export default class UserTable extends Component {

  constructor(props) {
    super(props);
    this.onChangeSearchData = this.onChangeSearchData.bind(this);
    this.retrieveData = this.retrieveData.bind(this);
    this.refreshList = this.refreshList.bind(this);
    this.setActiveData = this.setActiveData.bind(this);
    this.searchData = this.searchData.bind(this);
    this.state = {
      users: [],
      error: null,
      isLoaded: false,
      currentData: null,
      currentIndex: -1,
      searchData: "",
    };
  }

  componentDidMount() {
    this.retrieveData()
  }

  onChangeSearchData(e) {
    const searchData = e.target.value
    this.setState({
      searchData: searchData
    })
  }

  retrieveData() {
    UserDataService.getAll()
      .then(response => {
        this.setState({
          isLoaded: true,
          users: response.data
        });
        console.log("DATA: ", response.data);
      },
      (error) => {
        this.setState({
            isLoaded: true,
            error: error
        })
      })
  }

  refreshList() {
    this.retrieveData()
    this.setState({
      currentData: null,
      currentIndex: -1
    })
  }

  setActiveData(data, index) {
    this.setState({
      currentData: data,
      currentIndex: index
    })
  }

  searchData() {
    // UserDataService.f
  }

  render() {
    const {error, isLoaded, searchData, users, currentData, currentIndex} = this.state;
    var temp = null;
    if(error) {
      temp = <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      temp = <div>Loading...</div>
    } else {
      temp = (
      <div>
        <table>
          <thead>
            <tr>
              {COLUMNS.map((val) => {
                return (
                  <th key={val.accessor}>{val.header}</th>
                )
                })
              }
            </tr>
          </thead>
          <tbody>
            {users.data.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.name}</td>
                  <td>{val.address}</td>
                  <td>{val.country}</td>
                  <td>{val.phone_number}</td>
                  <td>{val.job_title}</td>
                  <td>{val.status ? "active" : "inactive"}</td>
                  <td>{val.created_at}</td>
                  <td>{val.updated_at}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>)
    }

    return (
      <div>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96">
            <div className="input-group relative flex items-stretch w-full mb-4">
              <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"></input>
              <button className="btn px-6 py-2.5 bg-primary text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="button" id="button-addon2">
                <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        {temp}
      </div>
    );
  }
}