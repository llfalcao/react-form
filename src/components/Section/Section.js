import React from 'react';

class Section extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      values: this.initialize(['one', 'two']),
      isEditable: true,
    };
    this.enableEditing = this.enableEditing.bind(this);
    this.disableEditing = this.disableEditing.bind(this);
  }

  initialize(fields) {
    const values = {};
    fields.map((key) => (values[key] = ''));
    return values;
  }

  enableEditing() {
    this.setState({ isEditable: true });
  }

  disableEditing(e) {
    e.preventDefault();
    const { inputs } = this.props;
    if (inputs.name === '') return;
    this.setState({ isEditable: false });
  }

  render() {
    const { sectionName, fields, inputs, handleChange } = this.props;
    const { isEditable } = this.state;
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
                value={inputs[i]}
                onChange={handleChange}
              ></textarea>
            ) : (
              <input
                id={field.id}
                type={field.type}
                name={field.name}
                placeholder={field.placeholder}
                value={inputs[i]}
                onChange={(e) => handleChange(e, i)}
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
            <div className="field-saved">{inputs[i]}</div>
          </div>
        );
      });
    }

    return (
      <section className="section">
        <header className="section-name">{sectionName}</header>
        <form onSubmit={this.disableEditing}>
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
