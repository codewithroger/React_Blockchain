import React from "react";
import { PiFlowerLotus } from "react-icons/pi";
import { PiHandPalmBold } from "react-icons/pi";
import { FaBicycle } from "react-icons/fa";
import { GiBroom } from "react-icons/gi"; // Adjust the import to specific paths

const Connected = (props) => {
    // Define an array of icons for each candidate
    const candidateIcons = [PiFlowerLotus, PiHandPalmBold, FaBicycle, GiBroom];

    return (
        <div className="connected-container">
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            {props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    <input
                        type="number"
                        placeholder="Enter Candidate Index"
                        value={props.number}
                        onChange={props.handleNumberChange}
                    />
                    <br />
                    <button className="login-button" onClick={props.voteFunction}>
                        Vote
                    </button>
                </div>
            )}
            
            <table id="myTable" className="candidates-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Candidate name</th>
                        <th>Candidate Symbol</th> {/* New column for the icon */}
                        <th>Candidate votes</th>
                    </tr>
                </thead>
                <tbody>
                    {props.candidates.map((candidate, index) => {
                        const IconComponent = candidateIcons[index % candidateIcons.length]; // Use modulus to avoid index out of bounds
                        return (
                            <tr key={index}>
                                <td>{candidate.index}</td>
                                <td>{candidate.name}</td>
                                <td><IconComponent /></td> {/* Render specific icon for each candidate */}
                                <td>{candidate.voteCount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default Connected;
