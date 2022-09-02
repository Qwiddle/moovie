import { Modal, Box, Typography } from '@mui/material';
import './Filter.css';

export const Filter = ({ props }) => {
  return (
    <Modal
      open={props.openFilter}
      onClose={props.handleFilterClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      <Box sx={{bgcolor: 'background.paper'}} id="filterbox">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Filter
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Not yet implemented... placeholder text!
        </Typography>
      </Box>
    </Modal>
  )
}