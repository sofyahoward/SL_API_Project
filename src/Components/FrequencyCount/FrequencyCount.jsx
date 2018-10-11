import React from "react";
import FrequencyCountBtn from "./FrequencyCountBtn";
import Loading from "../ReactLoading/ReactLoading";

const FrequencyCount = props => {
  // if props.people are truthy execute the following:
  if (props.people) {
    // empty array in which we push each email address from props.people
    const arr = [];
    props.people.map(person => arr.push(person.email_address));
    // join the array to make one long string
    const string = arr.join("");
    //do a character map for each character in the string
    //for each new character, add 1 to the count (otherwise it will start off as undefined) 
    const chars = {};
    for (let char of string) {
      chars[char] = chars[char] + 1 || 1;
    }
    //take an object of objects above and create an array of objects
    //because you can't sort an object from highest to lowest by value
    let arrOfObjects = Object.keys(chars).map(key => {
      return { key: key, value: chars[key] };
    });
    //sort that array of objects by values
    arrOfObjects.sort((a, b) => {
      return b.value - a.value;
    });
    // display the following information in a component
    return (
      <div>
        {props.showCount && (
          <div style={{ margin: "15%", marginTop: "5%", marginBottom: "5%" }}>
            <table className="striped centered responsive-table">
              <thead>
                <tr>
                  <th>Character</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {arrOfObjects.map(char => (
                  <tr key={char.key}>
                    <td>{char.key}</td>
                    <td>{char.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <FrequencyCountBtn handleClick={props.handleClick} />
      </div>
    );
  } else {
    return (
      // if props are still undefined, return loading component
      <div style={{ marginLeft: "45%", marginTop: "25%" }}>
        <Loading />;
      </div>
    );
  }
};

export default FrequencyCount;
