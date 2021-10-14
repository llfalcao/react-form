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

  retrieveInfo(newInfo) {
    if (this.state.info === '') {
      this.setState({ info: JSON.stringify(newInfo) });
    } else {
      const current = JSON.parse(this.state.info);
      const merged = JSON.stringify({ ...current, ...newInfo });
      this.setState({ info: merged });
    }
  }

  render() {
    const { submitted, info } = this.state;

    return (
      <div className="app">
        <h1>CV Application</h1>
        <Section
          sectionName="General Information"
          fields={fields.general}
          modCount={this.updateFilledCount}
          handleSaved={this.retrieveInfo}
        />
        <Section
          sectionName="Education"
          fields={fields.education}
          modCount={this.updateFilledCount}
          handleSaved={this.retrieveInfo}
        />
        <Section
          sectionName="Work Experience"
          fields={fields.work}
          modCount={this.updateFilledCount}
          handleSaved={this.retrieveInfo}
        />
        <button className="btn btn-submit" onClick={this.handleSubmit}>
          Submit
        </button>
        {submitted ? (
          <>
            <div className="overlay"></div>
            <Modal fields={fields} info={info} />
          </>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

export default App;
