import { Modal, 
  Box, 
  Typography, 
  FormControl, 
  FormLabel, 
  FormGroup, 
  FormControlLabel,
  FormHelperText,
  Checkbox
} from '@mui/material';

import './Filter.css';

export const Filter = ({ props }) => {
  const setFilter = (e) => {
    props.handleFilterChange({
      ...props.filters,
      [e.target.name]: e.target.checked
    });
  }

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
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Options</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox checked={props.filters.tv} onChange={setFilter} name="tv" />
                }
                label="TV"
              />
              <FormControlLabel
                control={
                  <Checkbox checked={props.filters.movie} onChange={setFilter} name="movie" />
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