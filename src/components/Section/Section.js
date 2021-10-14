import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.enableEditing = this.enableEditing.bind(this);
    this.saveForm = this.saveForm.bind(this);
  }

  componentDidMount() {
    const { fields } = this.props;
    fields.map((key) => this.setState({ [key.name]: '' }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  enableEditing() {
    this.setState({ isEditable: true });
  }

  saveForm(e) {
    e.preventDefault();
    const { ...values } = this.state;
    if (values[e.target.name] === '') return;
    this.setState({ isEditable: false });
  }

  render() {
    const { sectionName, fields } = this.props;
    const { isEditable, ...values } = this.state;
    let items = [];

    if (isEditable) {
      items = fields.map((field, i) => {
        return (
          <div className="field-wrapper" key={i}>
            <label htmlFor={field.id}>{field.title}</label>
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={values[field.name]}
                onChange={this.handleChange}
              ></textarea>
            ) : (
              <input
                id={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                defaultValue={values[field.name]}
                onChange={this.handleChange}
                required
              />
            )}
          </div>
        );
      });
    } else {
      items = fields.map((field, i) => {
        return (
          <div className="field-wrapper" key={i}>
            <label htmlFor={field.id}>{field.title}</label>
            <div className="field-saved">{values[field.name]}</div>
          </div>
        );
      });
    }

    return (
      <section className="section">
        <header className="section-name">{sectionName}</header>
        <form onSubmit={this.saveForm}>
          <div className="section-fields">{items}</div>
          <div className="buttons">
            <button
              className="btn btn-edit"
              type="button"
              onClick={this.enableEditing}
            >
              Edit
            </button>
            <button className="btn btn-save" type="submit">
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Section;
