import React from 'react';
import Section from './components/Section';
import fields from './fields.json';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      phone: '',
      school: '',
      studyTitle: '',
      studyStartDate: '',
      studyEndDate: '',
      isEditable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSectionSubmit = this.handleSectionSubmit.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSectionSubmit(e) {
    e.preventDefault();
    this.setState({ isEditable: false });
  }

  enableEditing() {
    this.setState({ isEditable: true });
  }

  render() {
    const {
      name,
      email,
      phone,
      school,
      studyTitle,
      studyStartDate,
      studyEndDate,
      isEditable,
    } = this.state;
    const general = [name, email, phone];
    const education = [school, studyTitle, studyStartDate, studyEndDate];

    return (
      <div className="App">
        <Section
          sectionName="General Information"
          fields={fields.general}
          inputs={general}
          handleChange={this.handleChange}
          handleSectionSubmit={this.handleSectionSubmit}
          isEditable={isEditable}
          enableEditing={this.enableEditing}
        />
        <Section
          sectionName="Education"
          fields={fields.education}
          inputs={education}
          handleChange={this.handleChange}
          handleSectionSubmit={this.handleSectionSubmit}
          isEditable={isEditable}
          enableEditing={this.enableEditing}
        />
        <Section sectionName="Work Experience" />
      </div>
    );
  }
}

export default App;
