import React from "react";

const PersonCard = props => {
  // cheking if props.people is truthy and if so, mapping over the props
  //once mapping over the props is completed, putting required information into the card
  return props.people
    ? props.people.map(person => (
        <div
          key={person.id}
          className="row"
          style={{ display: "inline-block" }}
        >
          <div className="col s12 m12">
            <div className="card grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">
                  {person.first_name} {person.last_name}
                </span>
                <p>{person.email_address}</p>
                <p>{person.title}</p>
              </div>
              <div className="card-action">
                <a>SalesLoft Person Record</a>
              </div>
            </div>
          </div>
        </div>
      ))
      // otherwise-return null
    : null;
};
// export the card
export default PersonCard;
