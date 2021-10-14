import React from 'react';
import Section from './components/Section';
import Modal from './components/Modal';
import fields from './assets/fields.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionsFilled: 0,
      submitted: false,
      info: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFilledCount = this.updateFilledCount.bind(this);
    this.retrieveInfo = this.retrieveInfo.bind(this);
  }

  handleSubmit() {
    const { sectionsFilled } = this.state;
    if (sectionsFilled < 3) {
      return;
    }
    this.setState({ submitted: true });
  }

  updateFilledCount(status) {
    const { sectionsFilled } = this.state;
    if (status) {
      this.setState({ sectionsFilled: sectionsFilled + 1 });
    } else {
      this.setState({ sectionsFilled: sectionsFilled - 1 });
    }
  }

  retrieveInfo(info) {
    console.log(info);
  }

  render() {
    const { submitted } = this.state;

    return (
      <div className="app">
        <h1>CV Application</h1>
        <Section
          sectionName="General Information"
          fields={fields.general}
          modCount={this.updateFilledCount}
          retrieveInfo={this.retrieveInfo}
        />
        <Section
          sectionName="Education"
          fields={fields.education}
          modCount={this.updateFilledCount}
        />
        <Section
          sectionName="Work Experience"
          fields={fields.work}
          modCount={this.updateFilledCount}
        />
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
