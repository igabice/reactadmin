import { DataGrid } from '@material-ui/data-grid';
import './userList.css';
import img from '../../img/img.png';
import { DeleteOutline } from '@material-ui/icons';
import {userRows} from '../../dummyData';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function UserList() {
    const [data, setData] = useState(userRows);

    const navigate = useNavigate();

    const deleteUser =(id) =>{
        const tempData = data.filter(user=>user.id !== id);
        setData(tempData);
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'avatar', headerName: 'Avatar', width: 190, renderCell: (params)=>{
            return(
                <div>
                    <img alt='' src={img} className='userListImg' />
                    {params.row.userName}
                </div>
            )} 
        },
        { field: 'email', headerName: 'Email', width: 180 },
        { field: 'status', headerName: 'Status', width: 140 },
        {field: 'transaction', headerName: 'Transaction',
          type: 'number', width: 190, },
          {field: 'action', headerName: 'Action',
          type: 'number', width: 190, renderCell: (params)=>{
            return(
                <div className='userListAction'>
                    <Link to={`/user/${params.row.id}`}>
                    
                    <button className='userListEdit'
                    // onClick={() => navigate(`/user/${params.row.id}`)}
                    >Edit</button>
                    </Link>
                    
                    <DeleteOutline className='userListDelete'
                    onClick={()=>deleteUser(params.row.id)} />
                </div>
            )
          }},
      ];
      
      
    return (
        <div className='userList'>
            
            <div className="userTitleContainer">
                <h1 className="userTitle">Users</h1>
                <Link  to='/newUser'>
                <button className="userAddButton">Create</button>
                </Link>
            </div>
            <DataGrid
            disableSelectionOnClick
                rows={data}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )
}
