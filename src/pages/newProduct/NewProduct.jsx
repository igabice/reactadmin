import React from 'react';
import './newProduct.css'
import img from '../../img/img.png';
import { PublishOutlined } from '@material-ui/icons';

export default function NewProduct() {
  return (
    <div className='newProduct'>
     <h1 className="newProductTitle">New Product</h1>
         <form action="" className="productForm">
                    <div className="productFormLeft">
                    <label htmlFor='file'>
                            Image
                        </label>
                        <input type="file" name="file"  />
                    
                        <label>Product Name </label>
                        <input type="text" placeholder="Apple Airpod" />
                        <label>Stock </label>
                        <input type="text" placeholder="123" />
                        
                        <label>Active </label>
                        <select name='active' id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                        
                        <button className="productButton">Update</button>
                    
                    </div>
                   
                </form>
    </div>
  );
}
