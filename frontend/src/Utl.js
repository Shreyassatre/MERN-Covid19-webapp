import React from 'react';
import { Circle, Popup } from 'react-leaflet';
import numeral from 'numeral';

const casesTypeColors = {
    cases: {
      hex: "#d83232a1",
      multiplier: 1200,
    },
    recovered: {
      hex: "#72d832ad",
      multiplier: 1200,
    },
    active: {
      hex: "#66b3ff",
      multiplier: 1200,
    },
    deaths: {
      hex: "#706c6c",
      multiplier: 2000,
    },
  };
  

export const sortData = (data) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
        if (a.cases > b.cases) {
            return -1;
        }else{
            return 1;
        }
    });
    return sortedData;
}

export const prettyPrintStat = (stat) =>
stat ? `+${numeral(stat).format("0.0a")}` : "0";

// draw circles on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
data.map((country) => (
  <Circle
    center={[country.countryInfo.lat, country.countryInfo.long]}
    color={casesTypeColors[casesType].hex}
    fillColor={casesTypeColors[casesType].hex}
    fillOpacity={0.4}
    radius={
      Math.sqrt(country[casesType]) * casesTypeColors[casesType].multiplier
    }
  >
    <Popup>
    <div className="info-container">
      <div
        className="info-flag"
        style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
      ></div>
      <div className="info-name">{country.country}</div>
      <div className="info-confirmed">
        Confirmed Cases: {numeral(country.cases).format("0,0")}
      </div>
      <div className="info-recovered">
        Recovered: {numeral(country.recovered).format("0,0")}
      </div>
      <div className="info-active">
        Active Cases: {numeral(country.active).format("0,0")}
      </div>
      <div className="info-deaths">
        Deaths: {numeral(country.deaths).format("0,0")}
      </div>
    </div>
    </Popup>
  </Circle>
));