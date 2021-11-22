import React from 'react';
import './Table.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import numeral from 'numeral';

function Table({countries}) {
    return (
        <div className="table">
            <tr>
                <th>Country</th>
                <th>Total Confirmed</th>
                <th>Total Active</th>
                <th>Total Recovered</th>
                <th>Total Deaths</th>
                <th>New Confirmed</th>
                <th>New Recovered</th>
                <th>New Deaths</th>
            </tr>
            {countries.map(country => (
                <tr>
                    <td>{country.country}</td>
                    <td>{numeral(country.cases).format("0,0")}</td>
                    <td>{numeral(country.active).format("0,0")}</td>
                    <td>{numeral(country.recovered).format("0,0")}</td>
                    <td>{numeral(country.deaths).format("0,0")}</td>
                    <td>{numeral(country.todayCases).format("0,0")}</td>
                    <td>{numeral(country.todayRecovered).format("0,0")}</td>
                    <td>{numeral(country.todayDeaths).format("0,0")}</td>
                </tr>
            ))}
        </div>
    )
}

export default Table
