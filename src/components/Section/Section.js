import React from 'react';

class Section extends React.Component {
  render() {
    const {
      sectionName,
      fields,
      inputs,
      isEditable,
      handleChange,
      handleSectionSubmit,
    } = this.props;

    let items = [];
    if (fields !== undefined) {
      if (isEditable) {
        items = fields.map((field, i) => {
          return (
            <div className="field-wrapper" key={i}>
              <label htmlFor={field.id}>{field.title}</label>
              <input
                type={field.type}
                id={field.id}
                placeholder={field.placeholder}
                value={inputs[i]}
                onChange={handleChange}
              />
            </div>
          );
        });
      } else {
        items = fields.map((field, i) => {
          return (
            <div className="field-wrapper" key={i}>
              <label htmlFor={field.id}>{field.title}</label>
              <div id={field.id}>{inputs[i]}</div>
            </div>
          );
        });
      }
    }

    return (
      <section className="section">
        <header className="section-name">{sectionName}</header>
        <form onSubmit={handleSectionSubmit}>
          <div className="section-fields">{items}</div>
          <div className="buttons">
            <button className="btn btn-edit" type="button">
              Edit
            </button>
            <button
              className="btn btn-save"
              type="submit"
              onClick={handleSectionSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Section;
