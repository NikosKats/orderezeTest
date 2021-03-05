import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth:'98%',
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  
  const [type, setType] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setType(event.target.value);
    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>

      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={type}
          onChange={handleChange}
        >
          <MenuItem value={0}>Menu</MenuItem>
          <MenuItem value={1}>Events</MenuItem>
          <MenuItem value={2}>Content</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
