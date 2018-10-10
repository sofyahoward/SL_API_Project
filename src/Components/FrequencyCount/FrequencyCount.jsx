import React from 'react';
import FrequencyCountBtn from './FrequencyCountBtn'

const FrequencyCount = props => {
    if (props.people) {
        const arr = []
        props.people.map(person => arr.push(person.email_address));

        const string = arr.join('');
        
        const chars = {};
        for(let char of string){
           chars[char] = chars[char] +1 || 1;
        }

        let arrOfObjects = Object.keys(chars).map(key => {
            return { key: key, value: chars[key] }
        });

        arrOfObjects.sort((a, b) => {
            return b.value - a.value;
        })
       
     
        return (
            <div>
                {props.showCount && <div style={{margin: "15%", marginTop: "5%", marginBottom: "5%"}}>
                    <table className="striped centered">
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
                </div>}
                <FrequencyCountBtn handleClick={props.handleClick}/>
            </div>
        );
    } else {
        return null
    }
};



export default FrequencyCount;