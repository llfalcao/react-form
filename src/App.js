import React from 'react';
import Section from './components/Section';
import Modal from './components/Modal';
import fields from './assets/fields.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    this.setState({ submitted: true });
  }

  render() {
    const { submitted } = this.state;

    return (
      <div className="app">
        <h1>CV Application</h1>
        <Section sectionName="General Information" fields={fields.general} />
        <Section sectionName="Education" fields={fields.education} />
        <Section sectionName="Work Experience" fields={fields.work} />
        <button className="btn btn-submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {submitted ? (
          <>
            <div className="overlay"></div>
            <Modal />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
