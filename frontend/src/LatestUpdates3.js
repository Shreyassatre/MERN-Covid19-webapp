import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './LatestUpdates.css';
import {Link} from 'react-router-dom';

function LatestUpdates3(props) {

    const [readMore,setReadMore]=useState(this);
    const [data, setData] = useState([]);

    const linkName=readMore?'Show Less <<':'Read More >>'

    useEffect(() => {
        const fetchData = async () => {
            const {data} = await axios.get("http://localhost:5000/updates");
            setData(data);
        }
        fetchData();
    }, [])

    const page1Images = [];
    const page1Date = [];
    const page1Time = [];
    const page1Heading = [];
    const page1Note = [];
    const page1p1 = [];
    const page1p2 = [];
    const page1p3 = [];
    const page1p4 = [];
    const page1p5 = [];
    const page1p6 = [];
    const page1p7 = [];
    const page1p8 = [];
    const page1Source = [];

    //console.log(data);
    for(var i=0; i<(data.length); i++){
    //console.log(data[i]['note']);
    page1Images.push(data[i]['img']);
    page1Heading.push(data[i]['heading']);
    page1Date.push(data[i]['date']);
    page1Time.push(data[i]['time']);
    page1Note.push(data[i]['note']);
    page1p1.push(data[i]['p1']);
    page1p2.push(data[i]['p2']);
    page1p3.push(data[i]['p3']);
    page1p4.push(data[i]['p4']);
    page1p5.push(data[i]['p5']);
    page1p6.push(data[i]['p6']);
    page1p7.push(data[i]['p7']);
    page1p8.push(data[i]['p8']);
    page1Source.push(data[i]['source'])
    }

    return (
        <div>
            <h1 className="text-center latest-updates-heading">Latest Updates</h1>
            <center><hr style={{width: "40%"}}/></center>
           <div className="container-fluid mt-4">   
           {
            page1Heading[40] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[40]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[40]}</h3>
                        <p className="date">{page1Date[40]}, {page1Time[40]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[40]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[40]}</p>
                    <p>{page1p2[40]}</p>
                    <p>{page1p3[40]}</p>
                    <p>{page1p4[40]}</p>
                    <p>{page1p5[40]}</p>
                    <p>{page1p6[40]}</p>
                    <p>{page1p7[40]}</p>
                    <p>{page1p8[40]}</p>
                    <p><b>Source: </b>{page1Source[40]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<h1 className="text-center">Updates Are Not Available</h1>
        }
        {
            page1Heading[41] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[41]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[41]}</h3>
                        <p className="date">{page1Date[41]}, {page1Time[41]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[41]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[41]}</p>
                    <p>{page1p2[41]}</p>
                    <p>{page1p3[41]}</p>
                    <p>{page1p4[41]}</p>
                    <p>{page1p5[41]}</p>
                    <p>{page1p6[41]}</p>
                    <p>{page1p7[41]}</p>
                    <p>{page1p8[41]}</p>
                    <p><b>Source: </b>{page1Source[41]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[42] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[42]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[42]}</h3>
                        <p className="date">{page1Date[42]}, {page1Time[42]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[42]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[42]}</p>
                    <p>{page1p2[42]}</p>
                    <p>{page1p3[42]}</p>
                    <p>{page1p4[42]}</p>
                    <p>{page1p5[42]}</p>
                    <p>{page1p6[42]}</p>
                    <p>{page1p7[42]}</p>
                    <p>{page1p8[42]}</p>
                    <p><b>Source: </b>{page1Source[42]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[43] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[43]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[43]}</h3>
                        <p className="date">{page1Date[43]}, {page1Time[43]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[43]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[43]}</p>
                    <p>{page1p2[43]}</p>
                    <p>{page1p3[43]}</p>
                    <p>{page1p4[43]}</p>
                    <p>{page1p5[43]}</p>
                    <p>{page1p6[43]}</p>
                    <p>{page1p7[43]}</p>
                    <p>{page1p8[43]}</p>
                    <p><b>Source: </b>{page1Source[43]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[44] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[44]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[44]}</h3>
                        <p className="date">{page1Date[44]}, {page1Time[44]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[44]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[44]}</p>
                    <p>{page1p2[44]}</p>
                    <p>{page1p3[44]}</p>
                    <p>{page1p4[44]}</p>
                    <p>{page1p5[44]}</p>
                    <p>{page1p6[44]}</p>
                    <p>{page1p7[44]}</p>
                    <p>{page1p8[44]}</p>
                    <p><b>Source: </b>{page1Source[44]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[45] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[45]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[45]}</h3>
                        <p className="date">{page1Date[45]}, {page1Time[45]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[45]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[45]}</p>
                    <p>{page1p2[45]}</p>
                    <p>{page1p3[45]}</p>
                    <p>{page1p4[45]}</p>
                    <p>{page1p5[45]}</p>
                    <p>{page1p6[45]}</p>
                    <p>{page1p7[45]}</p>
                    <p>{page1p8[45]}</p>
                    <p><b>Source: </b>{page1Source[45]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[46] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[46]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[46]}</h3>
                        <p className="date">{page1Date[46]}, {page1Time[46]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[46]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[46]}</p>
                    <p>{page1p2[46]}</p>
                    <p>{page1p3[46]}</p>
                    <p>{page1p4[46]}</p>
                    <p>{page1p5[46]}</p>
                    <p>{page1p6[46]}</p>
                    <p>{page1p7[46]}</p>
                    <p>{page1p8[46]}</p>
                    <p><b>Source: </b>{page1Source[46]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
            page1Heading[47] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[47]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[47]}</h3>
                        <p className="date">{page1Date[47]}, {page1Time[47]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[47]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[47]}</p>
                    <p>{page1p2[47]}</p>
                    <p>{page1p3[47]}</p>
                    <p>{page1p4[47]}</p>
                    <p>{page1p5[47]}</p>
                    <p>{page1p6[47]}</p>
                    <p>{page1p7[47]}</p>
                    <p>{page1p8[47]}</p>
                    <p><b>Source: </b>{page1Source[47]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
        }
        {
                page1Heading[48] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[48]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[48]}</h3>
                            <p className="date">{page1Date[48]}, {page1Time[48]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[48]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[48]}</p>
                        <p>{page1p2[48]}</p>
                        <p>{page1p3[48]}</p>
                        <p>{page1p4[48]}</p>
                        <p>{page1p5[48]}</p>
                        <p>{page1p6[48]}</p>
                        <p>{page1p7[48]}</p>
                        <p>{page1p8[48]}</p>
                        <p><b>Source: </b>{page1Source[48]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[49] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[49]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[49]}</h3>
                            <p className="date">{page1Date[49]}, {page1Time[49]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[49]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[49]}</p>
                        <p>{page1p2[49]}</p>
                        <p>{page1p3[49]}</p>
                        <p>{page1p4[49]}</p>
                        <p>{page1p5[49]}</p>
                        <p>{page1p6[49]}</p>
                        <p>{page1p7[49]}</p>
                        <p>{page1p8[49]}</p>
                        <p><b>Source: </b>{page1Source[49]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[50] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[50]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[50]}</h3>
                            <p className="date">{page1Date[50]}, {page1Time[50]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[50]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[50]}</p>
                        <p>{page1p2[50]}</p>
                        <p>{page1p3[50]}</p>
                        <p>{page1p4[50]}</p>
                        <p>{page1p5[50]}</p>
                        <p>{page1p6[50]}</p>
                        <p>{page1p7[50]}</p>
                        <p>{page1p8[50]}</p>
                        <p><b>Source: </b>{page1Source[50]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[51] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[51]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[51]}</h3>
                            <p className="date">{page1Date[51]}, {page1Time[51]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[51]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[51]}</p>
                        <p>{page1p2[51]}</p>
                        <p>{page1p3[51]}</p>
                        <p>{page1p4[51]}</p>
                        <p>{page1p5[51]}</p>
                        <p>{page1p6[51]}</p>
                        <p>{page1p7[51]}</p>
                        <p>{page1p8[51]}</p>
                        <p><b>Source: </b>{page1Source[51]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[52] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[52]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[52]}</h3>
                            <p className="date">{page1Date[52]}, {page1Time[52]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[52]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[52]}</p>
                        <p>{page1p2[52]}</p>
                        <p>{page1p3[52]}</p>
                        <p>{page1p4[52]}</p>
                        <p>{page1p5[52]}</p>
                        <p>{page1p6[52]}</p>
                        <p>{page1p7[52]}</p>
                        <p>{page1p8[52]}</p>
                        <p><b>Source: </b>{page1Source[52]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[53] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[53]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[53]}</h3>
                            <p className="date">{page1Date[53]}, {page1Time[53]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[53]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[53]}</p>
                        <p>{page1p2[53]}</p>
                        <p>{page1p3[53]}</p>
                        <p>{page1p4[53]}</p>
                        <p>{page1p5[53]}</p>
                        <p>{page1p6[53]}</p>
                        <p>{page1p7[53]}</p>
                        <p>{page1p8[53]}</p>
                        <p><b>Source: </b>{page1Source[53]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[54] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[54]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[54]}</h3>
                            <p className="date">{page1Date[54]}, {page1Time[54]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[54]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[54]}</p>
                        <p>{page1p2[54]}</p>
                        <p>{page1p3[54]}</p>
                        <p>{page1p4[54]}</p>
                        <p>{page1p5[54]}</p>
                        <p>{page1p6[54]}</p>
                        <p>{page1p7[54]}</p>
                        <p>{page1p8[54]}</p>
                        <p><b>Source: </b>{page1Source[54]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[55] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[55]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[55]}</h3>
                            <p className="date">{page1Date[55]}, {page1Time[55]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[55]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[55]}</p>
                        <p>{page1p2[55]}</p>
                        <p>{page1p3[55]}</p>
                        <p>{page1p4[55]}</p>
                        <p>{page1p5[55]}</p>
                        <p>{page1p6[55]}</p>
                        <p>{page1p7[55]}</p>
                        <p>{page1p8[55]}</p>
                        <p><b>Source: </b>{page1Source[55]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[56] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[56]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[56]}</h3>
                            <p className="date">{page1Date[56]}, {page1Time[56]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[56]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[56]}</p>
                        <p>{page1p2[56]}</p>
                        <p>{page1p3[56]}</p>
                        <p>{page1p4[56]}</p>
                        <p>{page1p5[56]}</p>
                        <p>{page1p6[56]}</p>
                        <p>{page1p7[56]}</p>
                        <p>{page1p8[56]}</p>
                        <p><b>Source: </b>{page1Source[56]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[57] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[57]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[57]}</h3>
                            <p className="date">{page1Date[57]}, {page1Time[57]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[57]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[57]}</p>
                        <p>{page1p2[57]}</p>
                        <p>{page1p3[57]}</p>
                        <p>{page1p4[57]}</p>
                        <p>{page1p5[57]}</p>
                        <p>{page1p6[57]}</p>
                        <p>{page1p7[57]}</p>
                        <p>{page1p8[57]}</p>
                        <p><b>Source: </b>{page1Source[57]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[58] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[58]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[58]}</h3>
                            <p className="date">{page1Date[58]}, {page1Time[58]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[58]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[58]}</p>
                        <p>{page1p2[58]}</p>
                        <p>{page1p3[58]}</p>
                        <p>{page1p4[58]}</p>
                        <p>{page1p5[58]}</p>
                        <p>{page1p6[58]}</p>
                        <p>{page1p7[58]}</p>
                        <p>{page1p8[58]}</p>
                        <p><b>Source: </b>{page1Source[58]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[59] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[59]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[59]}</h3>
                            <p className="date">{page1Date[59]}, {page1Time[59]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[59]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[59]}</p>
                        <p>{page1p2[59]}</p>
                        <p>{page1p3[59]}</p>
                        <p>{page1p4[59]}</p>
                        <p>{page1p5[59]}</p>
                        <p>{page1p6[59]}</p>
                        <p>{page1p7[59]}</p>
                        <p>{page1p8[59]}</p>
                        <p><b>Source: </b>{page1Source[59]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }

            </div>
            <div class="container d-flex justify-content-center pages mb-3">
                <a href="latest-updates" className="btn btn-default" role="button">1</a>
                {   page1Heading[20] != null ?(
                    <a href="latest-updates_2" className="btn btn-default" role="button">2</a>):<div></div>
                } 
                {    page1Heading[40] != null ?(
                    <a style={{color:"#fff", background:"#897eec"}} href="latest-updates_3" className="btn btn-default" role="button">3</a>):<div></div>
                }
                {    page1Heading[60] != null ?(
                    <a href="latest-updates_4" className="btn btn-default" role="button">4</a>):<div></div>
                }
                {   page1Heading[80] != null ?(
                    <a href="latest-updates_5" className="btn btn-default" role="button">5</a>):<div></div>              
                }             
            </div>
            
        </div>
    )
}

export default LatestUpdates3




{/* {
                 */}

            /* {
                data.map(updates => 
                    <div className="latest_updates">
                        <div className="news-container">
                            <img src={updates.img} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                            <div>
                                <h3 onClick={()=>{setReadMore(!readMore)}}>{updates.heading}</h3>
                                <p className="date">{updates.date}, {updates.time}</p>
                                <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                                <p className="note">{updates.note}</p>
                                <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                            </div>
                        </div>
                        <div className="brif_news container-fluid mt-4">
                        {readMore && <div>
                            <p>{updates.p1}</p>
                            <p>{updates.p2}</p>
                            <p>{updates.p3}</p>
                            <p>{updates.p4}</p>
                            <p>{updates.p5}</p>
                            <p>{updates.p6}</p>
                            <p>{updates.p7}</p>
                            <p>{updates.p8}</p>
                            <p><b>Source: </b>{updates.source}</p>
                        </div>}
                        </div>
                        <hr/>
                    </div>
                )
            } */