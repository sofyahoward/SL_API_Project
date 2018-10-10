import React from "react";

const PersonCard = props => {
  return props.people
    ? props.people.map(person => (
        <div key={person.id} className="row" style={{display: "inline-block"}}>
          <div className="col s12 m12">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  {person.first_name} {person.last_name}
                </span>
                <p>{person.email_address}</p>
                <p>{person.title}</p>
              </div>
              <div className="card-action">
                <a href="#">This is a link</a>
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>
        </div>
      ))
    : null;
};

export default PersonCard;
