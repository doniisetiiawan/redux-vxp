import React, { Component } from 'react';

class EmailInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  handleEmailChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <div>
        <label htmlFor="olsyauzqul">
          Enter Your Email
          <input
            type="email"
            onChange={this.handleEmailChange}
            value={value}
            name="email"
            id="olsyauzqul"
          />
        </label>
      </div>
    );
  }
}

export default EmailInput;
