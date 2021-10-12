import React from 'react';
import { v4 as uuid_v4 } from 'uuid';

class Section extends React.Component {
  render() {
    const { name, fields } = this.props;

    return (
      <section className="section">
        <header className="section-name">{name}</header>

        {fields !== undefined ? (
          fields.map((field) => {
            return (
              <div className="field-wrapper" key={uuid_v4()}>
                <label htmlFor={field.id}>{field.title}</label>
                <input type={field.type} id={field.id} />
              </div>
            );
          })
        ) : (
          <></>
        )}

        <div className="buttons">
          <button className="btn btn-edit" type="button">
            Edit
          </button>
          <button className="btn btn-save" type="submit">
            Save
          </button>
        </div>
      </section>
    );
  }
}

export default Section;
