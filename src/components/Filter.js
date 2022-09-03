import { Modal, 
  Box, 
  Typography,
  FormControl, 
  FormLabel, 
  FormGroup, 
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Checkbox
} from '@mui/material';

import './Filter.css';

export const Filter = ({ props }) => {
  const setFilter = (key, value) => { props.handleFilterChange({ ...props.filters, [key]: value }); }
  
  const handleCheck = (e) => { setFilter(e.target.name, e.target.checked); }
  const handleSelect = (e) => { setFilter(e.target.name, e.target.value); }

  return (
    <Modal
      open={props.openFilterView}
      onClose={props.handleFilterClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={{bgcolor: 'background.paper'}} id="filterbox">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Filter
        </Typography>
        <FormControl sx={{ m: 2 }} component="fieldset" variant="standard">
          <InputLabel id="select-small">Language</InputLabel>
          <Select
            name="lang"
            labelId="select-small"
            id="select-small"
            value={props.filters.lang}
            label="Age"
            onChange={handleSelect}
          >
            <MenuItem value="en">English</MenuItem>
            <MenuItem value="es">Spanish</MenuItem>
            <MenuItem value="ru">Russian</MenuItem>
          </Select>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox checked={props.filters.tv} onChange={handleCheck} name="tv" />
              }
              label="TV"
            />
            <FormControlLabel
              control={
                <Checkbox checked={props.filters.movie} onChange={handleCheck} name="movie" />
              }
              label="Movie"
            />
          </FormGroup>
          <FormHelperText>Choose wisely!</FormHelperText>
        </FormControl>
      </Box>
    </Modal>
  )
}