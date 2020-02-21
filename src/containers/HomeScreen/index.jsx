import React, { Component } from 'react';
import Axios from 'axios';
import TimeMenu from '../../components/TimeMenu';
import TimeSelect from '../../components/TimeSelect';
import DatePicker from '../../components/DatePicker';
import Gcals from '../../components/Charts/Gcals';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';
import SimplePieChart from '../../components/Charts/SimplePieChart';
import SimpleTable from '../../components/Charts/SimpleTable';
import SimpleDomainTable from '../../components/Charts/SimpleDomainTable';

class HomeScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      time_interval: 'day',
      api_data: null,
    };
  }

  componentDidMount() {
    this.getData();
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.userInfo !== this.props.userInfo) {
      this.getData(nextProps);
    }
    return true;
  }

  cbDate = childData => {
    this.setState({ date: childData });
  };

  cbTimeInterval = childData => {
    this.setState({ time_interval: childData });
    this.getData();
  };

  getData = nextProps => {
    const { userInfo } = nextProps || this.props;

    if (!userInfo) return;

    Axios.post('http://youta-api.ngrok.io/api7/', {
      interval: this.state.time_interval,
      email: userInfo.email,
    }).then(res => {
      const api_data = res.data;
      this.setState({ api_data });
    });
  };

  render() {
    const { userInfo } = this.props;

    const { api_data, date } = this.state;

    console.log(date);

    if (!userInfo || !api_data)
      return (
        <div className="container">
          <h3>Time Period Options</h3>
          <TimeMenu />
          <TimeSelect cbTimeInterval={this.cbTimeInterval} />
        </div>
      );

    return (
      <div className="container">
        <h3>Time Period Options</h3>
        <TimeMenu />
        <TimeSelect cbTimeInterval={this.cbTimeInterval} />
        <DatePicker cbDate={this.cbDate} />
        <h3>Calendar Events</h3>
        <Gcals data={api_data.gcal.daily} />
        <SimpleBarChart xaxis="name" col="total" data={api_data.gcal.daily} />
        <h3>Time Spent in Meetings</h3>
        <SimpleBarChart xaxis="name" col="duration" data={api_data.gcal.daily} />
        <h3>Number of Attendees</h3>
        <SimplePieChart data={api_data.gcal.attendees_bkts} />
        <h3>Total Emails</h3>
        <SimpleBarChart xaxis="name" col="total" data={api_data.gmail.daily} />
        <h3>Total Transaction Amount</h3>
        <SimpleBarChart xaxis="name" col="amount" data={api_data.mint.daily} />
        <h3>App Usage</h3>
        <SimpleBarChart xaxis="name" col="time_spent" data={api_data.yh.daily} />
        <SimpleTable data={api_data.yh.top_apps} />
        <h3>Browser Usage</h3>
        <SimpleBarChart xaxis="name" col="time_spent" data={api_data.wtt.daily} />
        <SimpleDomainTable data={api_data.wtt.top_domains} />
      </div>
    );
  }
}

export default HomeScreen;
