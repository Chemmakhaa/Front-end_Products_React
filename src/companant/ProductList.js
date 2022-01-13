import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



import '../style/ProductList.css';


 function ProductList() {

  const [category, setCategory] = React.useState('All');

  function toArray(array){
    let newProducts= []
    array.map((row) =>
      newProducts.push({
      'id':row.id,
      'title':row.title,
      'price':row.price,
      'description':row.description,
      'image':row.image,    
      'category':row.category,
      'rate':row.rating.rate,
      'count':row.rating.count
    })
    );
    return newProducts;
  }  

  const handleChange = (event) => {
    setCategory(event.target.value);
    const result = products.filter(row => row.category===event.target.value);
    setProductCategory(result);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Title', width: 200 
    ,renderCell: (params) => <p style={{width:'250px',height:"80px",whiteSpace:'normal',overflowY:'scroll'}} >{params.value}</p>, // renderCell will render the component
  },    
    { field: 'price', headerName: 'Prix', width: 100 },
    { field: 'description', headerName: 'Description', width: 400 
    ,renderCell: (params) => <div style={{width:'400px',height:"80px",whiteSpace:'normal',overflowY:'scroll'}} >{params.value}</div>, // renderCell will render the component
  },    
    { field: 'category', headerName: 'Category', width: 130 },

    { field: 'image', headerName: 'Image', width: 130 
    ,renderCell: (params) => <img alt='some value' width='80px' height="80px" src={params.value} />, // renderCell will render the component
  },{ field: 'rate', headerName: 'Rating', width: 70 
  ,renderCell: (params) =><div style={{textAlign:'center',width:'100%'}}  >{params.value}</div>, // renderCell will render the component
  },
  { field: 'count', headerName: 'Count', width: 70 
  ,renderCell: (params) =><div style={{textAlign:'center',width:'100%'}}  >{params.value}</div>, // renderCell will render the component
  }
  ];

  
  


  const [products,setProduct]=useState([]);
  const [productsCategory,setProductCategory]=useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
    .then(res => {
      setProduct(res.data)
      })

  },[]);


  return (
   <div style={{display:'flex'}} > 
  <div style={{padding:'15px 20px 20px 20px',width:'100px'}} >
 
 <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Categorye</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="Categorye"
          onChange={handleChange}
        >
          <MenuItem value={"All"} >All Products</MenuItem>
          <MenuItem value={"men's clothing"} >Men's clothing</MenuItem>
          <MenuItem value={"women's clothing"}  >Women's clothing</MenuItem>
          <MenuItem value={"jewelery"}  >Jewelery</MenuItem>
          <MenuItem value={"electronics"}  >Electronics</MenuItem>
        </Select>
      </FormControl>
    </Box>
  </div>
  <div style={{padding:'15px 20px 20px 20px' ,height: 600, width: '88%' }}>
    <DataGrid
      rows={ category==='All' ?  toArray(products) : toArray(productsCategory)}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      rowHeight={90}
    />
    </div>
  
</div>
    
  );

  
}

export default ProductList ;
