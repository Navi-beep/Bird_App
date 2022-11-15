import React from 'react'



let tableHeaders = ['Species','Conservation Status', 'Latin Name', 'Habitat']

export default function birddata() {

    return (
        <div className="row">
        <table className="dflex container-fluid table table-dark table-striped mt-3 w-50">
        <thead>
        <tr>
        {tableHeaders.map((th,i) => <th key={i}>{th}</th>)}
        </tr>
        </thead>
            <tbody>
                <tr>
                <td>Cockatiel</td>
                <td>Least Concern</td>
                <td>Nymphicus hollandicus</td>
                <td>Australia</td>
                </tr>
                <tr>
                <td>Blue Macaw</td>
                <td>Extinct in the wild</td>
                <td>Cyanopsitta spixii</td>
                <td>Northeastern Brazil</td>
                </tr>
                <tr>
                <td>Tawny Owl</td>
                <td>Least Concern</td>
                <td>Strix aluco</td>
                <td>Woodlands across Europe to Siberia</td>
                </tr>
            </tbody>
        </table>
        </div>

    );
};