import React from "react";
import DuplicatePplButton from "./DuplicatePplBtn";
import leven from "leven";
import { flatMap } from "lodash";

// if props.people are truthy, do the following:
const DuplicatePpl = props => {
  if (props.people) {
    const arr = [];
    // map over props, get emails and push them into an array
    props.people.map(person => arr.push(person.email_address));
    // use flat map to return a flattened array by using flatMap that takes in three arguments (collection, value and index)
    // slice the array from the index of a particular email we are on to compare it with the rest of the array
    //then map over the array and cpare each email we sliced off with all comparison emails in an array
    //filter thaose that have a difference value of __ (i chose 12 to show some data on the screen)
    //in reality I would use a difference value of 1 to check for possible duplicates
    //this is a levenshtein argorithm : Measure the difference between two strings
    //npm package states: The fastest JS implementation of the Levenshtein distance algorithm
    //Example: const leven = require('leven');
    // leven('cat', 'cow');
    // => 2
    var difference = flatMap(arr, (email, index) => {
      return arr
        .slice(index + 1)
        .map(comparisonEmail => {
          return {
            emails: `${email} ${comparisonEmail}`,
            differenceValue: leven(email, comparisonEmail)
          };
        }).filter(pair => pair.differenceValue < 12);
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
        {/* pass props to the button to fire off event handler to show duplicate entries */}
        <DuplicatePplButton handleDuplicates={props.handleDuplicates} />
      </div>
    );
  } else {
    return null;
  }
};

export default DuplicatePpl;
