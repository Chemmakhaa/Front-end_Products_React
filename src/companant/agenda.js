import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from '@devexpress/dx-react-scheduler-material-ui';
import { Button } from '@mui/material';






export default class Agenda extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentViewName: 'work-week',
    };
    this.currentViewNameChange = (currentViewName) => {
      this.setState({ currentViewName });
    };
  }

  render() {
    const { data, currentDate } = this.state;

    return (
        <div>
        <Button color="secondary" >Contained</Button>
        <Paper>
        <Scheduler
          data={data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            onCurrentDateChange={this.currentDateChange}
          />
          <WeekView
            startDayHour={9}
            endDayHour={19}
          />
          <Toolbar   />
          <TodayButton />
          <Appointments />
        </Scheduler>
      </Paper>
      </div>

    );
  }
}
