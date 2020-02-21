import React, { Component } from 'react';
import Axios from 'axios';
import SimpleBarChart from '../../components/Charts/SimpleBarChart';

class MobileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      time_interval: 'day',
      api_data: {},
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    Axios.get('http://youta-api.ngrok.io/api-app/', {
      params: { interval: this.state.time_interval, app_name: this.props.match.params.id },
    }).then(res => {
      const api_data = res.data;
      this.setState({ api_data });
    });
  };

  render() {
    const { params } = this.props.match;
    console.log(this.state.date);

    return (
      <div>
        <h1>Mobile App</h1>
        <p>{params.id}</p>
        <p>{this.props.match.params.id}</p>
        <SimpleBarChart xaxis="date" col="seconds" data={this.state.api_data.daily} />
      </div>
    );
  }
}

export default MobileScreen;
