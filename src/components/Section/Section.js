import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditable: true,
      isFilled: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleEditing = this.toggleEditing.bind(this);
  }

  componentDidMount() {
    const { fields } = this.props;
    fields.map((key) => this.setState({ [key.name]: '' }));
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  toggleEditing(e) {
    e.preventDefault();
    const { isEditable } = this.state;
    const { updateFilledCount } = this.props;

    if (isEditable) {
      this.setState({ isEditable: false, isFilled: true }, () =>
        updateFilledCount(this.state.isFilled),
      );
    } else {
      this.setState({ isEditable: true, isFilled: false }, () =>
        updateFilledCount(this.state.isFilled),
      );
    }
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
        <form className="section-form" onSubmit={this.toggleEditing}>
          <div className="section-fields">{items}</div>
          <button
            className="btn btn-toggle-edit"
            type="submit"
            onSubmit={this.toggleEditing}
          >
            {isEditable ? 'Save' : 'Edit'}
          </button>
        </form>
      </section>
    );
  }
}

export default Section;
