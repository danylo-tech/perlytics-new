import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

class DatePicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedDate: new Date(),
    };
  }

  handleDateChange = date => {
    this.props.cbDate(date);
    this.setState({ selectedDate: date });
  };

  render() {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Grid container justify="space-around">
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            value={this.state.selectedDate}
            onChange={this.handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </Grid>
      </MuiPickersUtilsProvider>
    );
  }
}

export default DatePicker;
