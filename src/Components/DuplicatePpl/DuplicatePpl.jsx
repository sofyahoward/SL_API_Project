import React from "react";
import DuplicatePplButton from "./DuplicatePplBtn";
import leven from "leven";
import { flatMap } from "lodash";

const DuplicatePpl = props => {
  if (props.people) {
    const arr = [];
    props.people.map(person => arr.push(person.email_address));

    var difference = flatMap(arr, (email, index) => {
      return arr
        .slice(index + 1)
        .map(e => {
          return {
            emails: `${email} ${e}`,
            differenceValue: leven(email, e)
          };
        })
        .filter(pair => pair.differenceValue < 12);
    });

    return (
      <div>
        {props.showDuplicates && (
          <div style={{ margin: "15%", marginTop: "5%", marginBottom: "5%" }}>
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>Emails</th>
                  <th>By Letters</th>
                </tr>
              </thead>
              <tbody>
                {difference.map(a => (
                  <tr key={a.emails}>
                    <td>{a.emails}</td>
                    <td>{a.differenceValue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <DuplicatePplButton handleDuplicates={props.handleDuplicates} />
      </div>
    );
  } else {
    return null;
  }
};

export default DuplicatePpl;
