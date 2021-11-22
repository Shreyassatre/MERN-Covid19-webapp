import React, {useContext} from 'react'
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import './App.css';
import Home from './Home';
import PageNotFound from './PageNotFound'
import NavBar from './NavBar';
import AboutCovid from './AboutCovid';
import AboutCovidPrevention from './AboutCovidPrevention';
import AboutCovidSymptoms from './AboutCovidSymptoms';
import ChatBot from './ChatBot';
import ChatBotIcon, { ChatbotIcon } from './ChatBotIcon';
import SelfTest from './SelfTest';
import SelfTestMental from './SelfTestMental';
import SelfTestPhysical from './SelfTestPhysical';
import SelfTestPrecutions from './SelfTestPrecutions';
import MentalRec from './MentalRec';
import PhysicalRec from './PhysicalRec';
import SymptomsRec from './SymptomsRec';
import LatestUpdates from './LatestUpdates';
import LatestUpdates2 from './LatestUpdates2';
import LatestUpdates3 from './LatestUpdates3';
import LatestUpdates4 from './LatestUpdates4';
import LatestUpdates5 from './LatestUpdates5';
import Register from './Register'
import Login from './Login'
import AuthContext from './context/AuthContext';
import Feedback from './Feedback'
import Admin from './Admin' 
import {Feedbackicon} from './ChatBotIcon'
import Donation from './Donation';
import DonarInfo from './DonarInfo';
import DonationSucess from './DonationSucess';


function Router() {

    const {loggedIn} = useContext(AuthContext)

    return (
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/about-covid-19-overview">
                    <AboutCovid/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/about-covid-19-prevention">
                    <AboutCovidPrevention/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/about-covid-19-symptoms">
                    <AboutCovidSymptoms/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/self-test">
                    <SelfTest/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/mental-assessment">
                    <SelfTestMental/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/physical-assessment">
                    <SelfTestPhysical/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/precutions">
                    <SelfTestPrecutions/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/mental-health-recommendations">
                    <MentalRec/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/physical-health-recommendations">
                    <PhysicalRec/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/symptoms-recommendations">
                    <SymptomsRec/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/latest-updates">
                    <LatestUpdates/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/latest-updates_2">
                    <LatestUpdates2/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/latest-updates_3">
                    <LatestUpdates3/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/latest-updates_4">
                    <LatestUpdates4/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/latest-updates_5">
                    <LatestUpdates5/>
                    <ChatBotIcon/>
                </Route>
                <Route exact path="/chatbot">
                    <ChatBot/>
                    <Feedbackicon/>
                </Route>
                {
                    loggedIn === false && (
                    <>
                        <Route exact path="/login">
                            <Login/>                 
                        </Route>
                        <Route exact path="/feedback">
                            <Feedback/>
                            <ChatbotIcon/>                 
                        </Route>
                        <Route exact path="/donation">
                            <Donation/>
                            <ChatBotIcon/>                 
                        </Route>
                        <Route exact path="/payment-sucess">
                            <DonationSucess/>
                            <ChatBotIcon/>                 
                        </Route>
                        <Route exact path="/admin">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Permission not granted</h3>
                            </center>                 
                        </Route>
                    </>
                )}
                {
                    loggedIn === true && (
                    <>
                        <Route exact path="/admin">
                            <Admin/>                   
                        </Route>
                        <Route exact path="/donations">
                            <DonarInfo/>
                        </Route>
                        <Route exact path="/register">
                            <Register/>
                        </Route>
                        <Route exact path="/login">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>You are alrady logged in</h3>
                            </center>                 
                        </Route>
                        <Route exact path="/feedback">
                            <center className="mt-5 mb-5">
                                <h1>Error 500</h1>
                                <h3>Only users can give feedback</h3>
                            </center>             
                        </Route>
                    </>
                )}
                
            </Switch>
        </BrowserRouter>
    )
}

export default Router
