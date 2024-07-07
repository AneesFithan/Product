import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Add = ({item}) => {
    const [page,setPage]=useState('ADD')
    const [count,setCount]=useState(0)
    const [form,setForm]=useState({
      title:'',
      description:'',
      price:'',
      category:'',
    })
    function valueAdd()
    {
       console.log(form) // setCount(count+1)
    }
    function valueCap(e)
    {
      // console.log(e)
       setForm({...form,[e.target.title]:e.target.value})
    }
  return (
        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >   
    <div>
      <div>
        <TextField
          required
        //   id="outlined-required"
          label="TITLE"
          name='title'
          value={form.title}
          onChange={valueCap}
        //   defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
        
        //   id="outlined-disabled"
          label="DESCRIPTION"
        
          name='description'
          value={form.description}
          onChange={valueCap}
        //   defaultValue="Hello World"
        />
        </div>
        <div>
        <TextField
        //   id="outlined-read-only-input"
          label="PRICE"
          name='price'
          value={form.price}
          onChange={valueCap}
          
        //   defaultValue="Hello World"
        //   InputProps={{
            // readOnly: true,
        //   }}
        />
        </div>
        <div>
         <TextField
        //   id="outlined-read-only-input"
          label="CATEGORY"
          name='category'
          value={form.category}
          onChange={valueCap}
          
        //   defaultValue="Hello World"
        //   InputProps={{
            // readOnly: true,
        //   }}
        />
        </div>
    </div>
    <div>
        <Button variant='contained' style={{backgroundColor:'green'}} onClick={(valueAdd)}>ADD PRODUCT</Button>
        <br />
    </div>
    </Box>
  )
}

export default Add