import {Box, Container, TextField, MenuItem, Stack, Input, Button, IconButton} from '@mui/material';
import React, { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import {useMutation} from '@apollo/client'
import { ADD_NEWS } from '../graphql/mutations';
import AddCategory from '../components/addCategory';
import AddTag from '../components/addTags';

const currencies = [
  {
    value: 'USD',
    label: 'Sports',
  },
  {
    value: 'EUR',
    label: 'Politics',
  },
  {
    value: 'BTC',
    label: 'Business',
  },
];


function AddArticle () {

  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const editor = useRef(null);
  const config = {
    readonly: false,
    height: 400,
  };

  const [headline, setHeadline] = useState('');
  const [coverImage, setCoverImage] = useState('');
  const [content, setContent] = useState('');
  const [categoryId, setCategoryId] = useState('')
  const [authorId, setAuthorId] = useState('')
  const [description, setDescription] = useState('')
  const [addNews, {loading, error}] = useMutation(ADD_NEWS);

  const createNews = () => {
    addNews({
      variables: {
        newsData: { 
          headline: headline,
          coverImage: coverImage,
          content: content,
          categoryId: categoryId,
          authorId: authorId
        }
      }
    });
  } 

  if (loading) return 'Submitting...';
  if (error) {console.log(error)}


  return (
    <Box
      sx={{
        width: '100%',
        height: '140px',
        color: '#fff',
        '& > .MuiBox-root > .MuiBox-root': {
          p: 1,
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
        },
      }}
    >
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 1,
          gridTemplateRows: 'auto',
          gridTemplateAreas: `"main main main main sidebar sidebar"`
        }}
      >
        <Box sx={{ gridArea: 'main', bgcolor: 'inherit', border: '.5px solid grey', margin: '20px'}}>
          <Container>
            <Box>
              <h3>Add a Headline*</h3>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="HeadLine"
                multiline
                maxRows={4}
                value={headline}
                onChange={
                  event =>{
                    setHeadline(event.target.value)
                  }
                }
              />
            </Box>
            <Box>
              <h3>Add an article Description*</h3>
              <TextField
                fullWidth
                id="outlined-multiline-flexible"
                label="Description"
                multiline
                maxRows={4}
                value={description}
                onChange={
                  event =>{
                    setDescription(event.target.value)
                  }
                }
              />
            </Box>
            <Box sx={{
              display: 'flex',
              width: '100%'
            }} >
              <Box sx={{margin: '0 10px 0 10px'}}>
                <h3> Upload a cover Image</h3>
                <label htmlFor="contained-button-file">
                  <Input accept="image/*" id="contained-button-file" single type="file" />
                </label>
              </Box>
              <Box sx={{margin: '0 10px 0 10px', width: '25%'}} >
                <h3>Select a Category</h3>
                <TextField
                  select
                  label="categories"
                  sx={{width: '100%'}}
                  value={currency}
                  onChange={handleChange}
                  helperText="Please select a category"
                >
                  {currencies.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{margin: '0 10px 0 10px', width: '25%'}}>
                <h3>Select a Tag</h3>
                <TextField
                  select
                  label="tags"
                  sx={{width: '100%'}}
                  value={currency}
                  onChange={handleChange}
                  SelectProps={{
                    native: true,
                  }}
                  helperText="Please select a tag"
                >
                  {currencies.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </TextField>
              </Box>
            </Box>
          </Container>
          <Container>
            <h3>Add Article*</h3>
            <JoditEditor
              ref={editor}
              value={content}
              config={config}
              tabIndex={1} // tabIndex of textarea
              onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
              onChange={(newContent) => {}}
            />
          </Container>
          <Button sx={{backgroundColor: "blue", color: "white",}}>Post</Button>
        </Box>
        <Box sx={{ gridArea: 'sidebar', bgcolor: 'inherit' }}>
          <AddCategory />
          <AddTag />
        </Box>
      </Box>
    </Box>
  )
}

export default AddArticle
