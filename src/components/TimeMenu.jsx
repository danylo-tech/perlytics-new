import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default function TimeMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = timeP => {
    setAnchorEl(null);
    props.setTimePeriod(timeP);
  };

  return (
    <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        {props.timePeriod}
      </Button>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        <MenuItem value="day" onClick={() => handleClose('day')}>
          Day
        </MenuItem>
        <MenuItem value="week" onClick={() => handleClose('week')}>
          Week
        </MenuItem>
        <MenuItem value="month" onClick={() => handleClose('month')}>
          Month
        </MenuItem>
        <MenuItem value="year" onClick={() => handleClose('year')}>
          Year
        </MenuItem>
      </Menu>
    </div>
  );
}
