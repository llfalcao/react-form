import React from 'react';
import Section from './components/Section';
import Modal from './components/Modal';
import fields from './assets/fields.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      phone: '',
      school: '',
      study: '',
      studyStartDate: '',
      studyEndDate: '',
      companyTitle: '',
      positionTitle: '',
      mainTasks: '',
      workStartDate: '',
      workEndDate: '',
      submitted: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit() {
    this.setState({ submitted: true });
  }

  render() {
    const {
      name,
      email,
      phone,
      school,
      study,
      studyStartDate,
      studyEndDate,
      companyTitle,
      positionTitle,
      workStartDate,
      workEndDate,
      mainTasks,
      submitted,
    } = this.state;

    if (submitted) {
      return <Modal />;
    } else {
      return (
        <div className="app">
          <Section
            sectionName="General Information"
            fields={fields.general}
            inputs={[name, email, phone]}
            handleChange={this.handleChange}
          />
          <Section
            sectionName="Education"
            fields={fields.education}
            inputs={[school, study, studyStartDate, studyEndDate]}
            handleChange={this.handleChange}
          />
          <Section
            sectionName="Work Experience"
            fields={fields.work}
            inputs={[
              companyTitle,
              positionTitle,
              workStartDate,
              workEndDate,
              mainTasks,
            ]}
            handleChange={this.handleChange}
          />
          <button className="btn btn-submit" onClick={this.handleSubmit}>
            Submit
          </button>
        </div>
      );
    }
  }
}

export default App;
