import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import '../style/ProductList.css';


 function ProductList() {

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 
    ,renderCell: (params) => <p style={{width:'250px',whiteSpace:'normal'}} >{params.value}</p>, // renderCell will render the component
  },    
    { field: 'price', headerName: 'Prix', width: 100 },
    { field: 'description', headerName: 'Description', width: 500 
    ,renderCell: (params) => <div style={{width:'500px',height:"80px",whiteSpace:'normal',overflowY:'scroll'}} >{params.value}</div>, // renderCell will render the component
  },    
    { field: 'category', headerName: 'Category', width: 130 },

    { field: 'image', headerName: 'Image', width: 130 
    ,renderCell: (params) => <img width='80px' height="80px" src={params.value} />, // renderCell will render the component
  },{ field: 'rating', headerName: 'Rating', width: 70 
  ,renderCell: (params) =><div style={{textAlign:'center',width:'100%'}}  >{params.value.rate}</div>, // renderCell will render the component
  }
  ];
  


  const [products,setProduct]=useState([]);
  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      setProduct(res.data)
      console.log(res.data);
      })

  },[]);





  return (
    /* {  <div style={{ height: 400, width: '70%' ,marginTop:'5px',marginLeft:'15%',color:'grey'}}>
  <table border='1' >
    <tr>
    <th color='red' width='50px' >Id</th>
    <th>Title</th>
    <th>Prix</th>
    <th>description</th>
    <th>Category</th>
    <th>Image</th>

  </tr>
      {
          products.map((product,index)=>
          
            <tr>
    <td>  {product.id} </td>
    <td>  {product.title} </td>
    <td>  {product.price} </td>
    <td>  {product.description} </td>
    <td>  {product.category} </td>
    <td> <img  height='90px' src={product.image}  /> </td>

           </tr> 
          
          )


      }
 
</table> 


    </div> 
*/

<div style={{padding:'50px 20px 20px 20px' ,height: 600, width: '97%' }}>
<DataGrid
  rows={products}
  columns={columns}
  pageSize={5}
  rowsPerPageOptions={[5]}
  rowHeight={90}
/>
</div>
  
  

    
  );

  
}

export default ProductList ;
