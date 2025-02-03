import { SxProps } from '@mui/material';

export const popupStyle:SxProps={
     position: 'absolute',
      top: '50%',
       left: '50%',
        transform: 'translate(-50%, -50%)', 
        width: 400,
        maxHeight: '80vh', 
    bgcolor: 'background.paper',
      boxShadow: 24, 
      p: 4,
      overflow: 'auto', 
      margin:'2px'
}