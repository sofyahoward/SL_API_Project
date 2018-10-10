import React from 'react';
import DuplicatePplButton from './DuplicatePplBtn';
import leven from 'leven';
import { flatMap } from 'lodash';


const DuplicatePpl = props => {
    if (props.people) {
        const arr = []
        props.people.map(person => arr.push(person.email_address));

        
      var difference = flatMap(arr, (email, index) => {
            return (arr.slice(index + 1).map(e => {
                return {
                    emails: `${email} ${e}`,
                    differenceValue: leven(email, e)
                };
            })).filter(pair => pair.differenceValue <10);
        });
       
        var result = difference.map(a => <li key={a.emails}>{a.emails}</li>);
        

        return (
        <div>
            {props.showDuplicates &&
             <div style={{margin: "15%", marginTop: "5%", marginBottom: "5%"}}>
                <div className="row" style={{display: "inline-block"}}>
                <div className="col s12 m12">
                    <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">
                        Potential Duplicate People
                        </span>
                        <div>{result}</div>
                    </div>
                    <div className="card-action">
                        <a href="#">This is a link</a>
                        <a href="#">This is a link</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>}
            <DuplicatePplButton handleDuplicates={props.handleDuplicates}/>
        </div>
        );
} else {
    return null
}
};


export default DuplicatePpl;