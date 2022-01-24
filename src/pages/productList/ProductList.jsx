import { DataGrid } from '@material-ui/data-grid';
import './productList.css';
import img from '../../img/img.png';
import { DeleteOutline } from '@material-ui/icons';
import {productRows} from '../../dummyData';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function ProductList() {
    const [data, setData] = useState(productRows);

    const navigate = useNavigate();

    const deleteProduct =(id) =>{
        const tempData = data.filter(product=>product.id !== id);
        setData(tempData);
    }



    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'avatar', headerName: 'Avatar', width: 190, renderCell: (params)=>{
            return(
                <div>
                    <img alt='' src={img} className='productListImg' />
                    {params.row.name}
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
                <div className='productListAction'>
                    <Link to={`/product/${params.row.id}`}>
                    
                    <button className='productListEdit'
                    // onClick={() => navigate(`/product/${params.row.id}`)}
                    >Edit</button>
                    </Link>
                    
                    <DeleteOutline className='productListDelete'
                    onClick={()=>deleteProduct(params.row.id)} />
                </div>
            )
          }},
      ];
      
      
    return (
        <div className='productList'>
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
