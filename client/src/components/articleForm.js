import React from 'react'

function articleForm() {
  return (
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
                <h3>Add an article Desciption*</h3>
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
    </Box>
  )
}

export default articleForm