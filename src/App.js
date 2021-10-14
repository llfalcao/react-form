import React from 'react';
import Section from './components/Section';
import fields from './fields.json';

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
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
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
      mainTasks,
      workStartDate,
      workEndDate,
    } = this.state;

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
      </div>
    );
  }
}

export default App;
