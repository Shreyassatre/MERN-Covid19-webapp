import React, {useState, useEffect} from 'react';
import {MenuItem, formControl,Select} from '@material-ui/core';
import './Home.css';
import Map from './Map';
import Table from './Table';
import { sortData, prettyPrintStat } from './Utl';
import LineGraph from './LineGraph';
import 'leaflet/dist/leaflet.css';
import numeral from 'numeral';
// import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    const [countries, setCountries] = useState([]);
    const [country, setCountry] = useState('worldwide');
    const [countryInfo, setCountryInfo] = useState({});
    const [tableData, setTableData] = useState([]);
    const [mapCenter, setMapCenter] = useState({ lat: 25.7041, lng: 75.1025 });
    const [mapZoom, setMapZoom] = useState(3);
    const [mapCountries, setMapCountries] = useState([]);
    const [casesType, setCasesType] = useState("cases");
    const [casesType1, setCasesType1] = useState("cases");
    
  
    useEffect(() => {
      fetch("https://disease.sh/v3/covid-19/all")
      .then(response => response.json())
      .then(data => {
        setCountryInfo(data);
      })
    }, [])
  
    useEffect(() => {
      const getCountriesData = async () => {
        await fetch ("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => (
            {
              name: country.country,
              value: country.countryInfo.iso2
            }));
  
            const sortedData = sortData(data);
            setTableData(sortedData);
            setMapCountries(data);
            setCountries(countries);
        });
      };
  
      getCountriesData();
    }, []);
  
    const onCountryChange = async (event) => {
      const countryCode = event.target.value;
      setCountry(countryCode); 
  
      const url = countryCode === 'worldwide' 
      ? 'https://disease.sh/v3/covid-19/all' 
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`;
  
      await fetch(url)
      .then(response => response.json())
      .then(data => {
        setCountry(countryCode);
        setCountryInfo(data);
  
        countryCode === "worldwide" 
        ? setMapCenter([34.80746, -40.4796])
        : setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
        countryCode === "worldwide"
        ? setMapZoom(3)
        : setMapZoom(4);
      });
    };
  
    console.log(countryInfo);
  
    return (
        <div>
        <div id="loading"></div>
            <div className="app">
                <div className="app_left">
                <div className="app_header">
                    <h1>Covid 19 Tracker</h1>
                    <formControl className="app_dropdown">
                    <Select variant="outlined" onChange={onCountryChange} value={country}>
                    <MenuItem value="worldwide">World Wide</MenuItem>
                        {
                        countries.map(country => (
                            <MenuItem value={country.value}>{country.name}</MenuItem>
                        )) 
                        }
            
                    </Select>
                    </formControl>
                </div>

                <div className="container my-5 updates">
                    <div className="row text-center">
                    <div className="col-lg-3 col-md-5 col-sm-12 mx-auto text-center text-danger m-3 con">
                    <div onClick={e => setCasesType('cases')} onMouseUp={e => setCasesType1('cases')} className="infoBox_con">
                        <div>
                            <div className="infoBox_title">
                                <h4>Confirmed</h4>
                            </div>

                            <h5 className="infoBox_cases">{prettyPrintStat(countryInfo.todayCases)}</h5>

                            <h2 className="infoBox_total" color="textSecondary">
                                {numeral(countryInfo.cases).format("0.0a")}
                            </h2>
                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12 mx-auto text-success m-3 act">
                    <div onClick={e => setCasesType('recovered')} onMouseUp={e => setCasesType1('recovered')} className="infoBox_rec">
                        <div>
                            <div className="infoBox_title" color="textSecondary">
                                <h4>Recovered</h4>
                            </div>

                            <h5 className="infoBox_recovered">{prettyPrintStat(countryInfo.todayRecovered)}</h5>

                            <h2 className="infoBox_total">
                                {numeral(countryInfo.recovered).format("0.0a")}
                            </h2>

                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12 mx-auto text-primary m-3 rec">
                    <div onClick={e => setCasesType('active')} onMouseUp={e => setCasesType1('cases')} className="infoBox_act">
                        <div>
                            <div className="infoBox_title" color="textSecondary">
                                <h4>Active</h4>
                            </div>

                            <h2 className="infoBox_active">{numeral(countryInfo.active).format("0.0a")}</h2>

                            <h5>Total Active Cases</h5>

                        </div>
                    </div>
                    </div>
                    <div className="col-lg-3 col-md-5 col-sm-12 mx-auto text-secondary m-3 deaths">
                    <div onClick={e => setCasesType('deaths')} onMouseUp={e => setCasesType1('deaths')} className="infoBox_deaths">
                        <div>
                            <div className="infoBox_title" color="textSecondary">
                                <h4>Deceased</h4>
                            </div>

                            <h5>{prettyPrintStat(countryInfo.todayDeaths)}</h5>

                            <h2 className="infoBox_total" color="textSecondary">
                                {numeral(countryInfo.deaths).format("0.0a")} 
                            </h2>

                        </div>
                    </div>
                    </div>
                    </div>
                </div>

                <Map
                    countries={mapCountries}
                    casesType={casesType}
                    center={mapCenter}
                    zoom={mapZoom}
                />
                </div>

                <div className="app_right">
                <div>
                    <div className="table_data">
                    <h3>Live Cases By Country</h3>
                    <Table countries={tableData} />
                    </div>
                    <div className="graph">
                    <h3 className="text-capitalize">World wide new {casesType1}</h3>
                    <LineGraph casesType={casesType1}/>
                    </div>
                    {/* Graph */}
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home
