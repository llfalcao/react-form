import React from 'react';

class Modal extends React.Component {
  render() {
    const { fields, info } = this.props;
    const data = JSON.parse(info);
    let fieldName;

    return (
      <div className="modal">
        <div className="modal-message">
          <p>Thank you!</p>
          <p>We'll contact you soon.</p>
        </div>
        <div className="submitted-info">
          {Object.entries(data).map((key, i) => {
            Object.entries(fields).forEach((field) => {
              field[1].filter((item) => {
                if (item.name === key[0]) {
                  console.log(item.name);
                  fieldName = item.title;
                }
                return item.title;
              });
            });

            return (
              <p key={i}>
                <span className="modal-field-title">{fieldName}</span>:{' '}
                <span>{key[1]}</span>
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Modal;
