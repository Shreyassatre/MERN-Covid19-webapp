import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './LatestUpdates.css';
import {Link} from 'react-router-dom';

function LatestUpdates4(props) {

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
            page1Heading[60] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[60]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[60]}</h3>
                        <p className="date">{page1Date[60]}, {page1Time[60]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[60]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[60]}</p>
                    <p>{page1p2[60]}</p>
                    <p>{page1p3[60]}</p>
                    <p>{page1p4[60]}</p>
                    <p>{page1p5[60]}</p>
                    <p>{page1p6[60]}</p>
                    <p>{page1p7[60]}</p>
                    <p>{page1p8[60]}</p>
                    <p><b>Source: </b>{page1Source[60]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<h1 className="text-center">Updates Are Not Available</h1>
            }
            {
                page1Heading[61] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[61]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[61]}</h3>
                            <p className="date">{page1Date[61]}, {page1Time[37]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[61]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[61]}</p>
                        <p>{page1p2[61]}</p>
                        <p>{page1p3[61]}</p>
                        <p>{page1p4[61]}</p>
                        <p>{page1p5[61]}</p>
                        <p>{page1p6[61]}</p>
                        <p>{page1p7[61]}</p>
                        <p>{page1p8[61]}</p>
                        <p><b>Source: </b>{page1Source[61]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[62] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[62]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[62]}</h3>
                            <p className="date">{page1Date[62]}, {page1Time[38]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[62]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[62]}</p>
                        <p>{page1p2[62]}</p>
                        <p>{page1p3[62]}</p>
                        <p>{page1p4[62]}</p>
                        <p>{page1p5[62]}</p>
                        <p>{page1p6[62]}</p>
                        <p>{page1p7[62]}</p>
                        <p>{page1p8[62]}</p>
                        <p><b>Source: </b>{page1Source[62]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[63] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[63]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[63]}</h3>
                            <p className="date">{page1Date[63]}, {page1Time[39]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[63]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[63]}</p>
                        <p>{page1p2[63]}</p>
                        <p>{page1p3[63]}</p>
                        <p>{page1p4[63]}</p>
                        <p>{page1p5[63]}</p>
                        <p>{page1p6[63]}</p>
                        <p>{page1p7[63]}</p>
                        <p>{page1p8[63]}</p>
                        <p><b>Source: </b>{page1Source[63]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[64] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[64]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[64]}</h3>
                            <p className="date">{page1Date[64]}, {page1Time[40]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[64]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[64]}</p>
                        <p>{page1p2[64]}</p>
                        <p>{page1p3[64]}</p>
                        <p>{page1p4[64]}</p>
                        <p>{page1p5[64]}</p>
                        <p>{page1p6[64]}</p>
                        <p>{page1p7[64]}</p>
                        <p>{page1p8[64]}</p>
                        <p><b>Source: </b>{page1Source[64]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[65] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[65]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[65]}</h3>
                            <p className="date">{page1Date[65]}, {page1Time[41]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[65]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[65]}</p>
                        <p>{page1p2[65]}</p>
                        <p>{page1p3[65]}</p>
                        <p>{page1p4[65]}</p>
                        <p>{page1p5[65]}</p>
                        <p>{page1p6[65]}</p>
                        <p>{page1p7[65]}</p>
                        <p>{page1p8[65]}</p>
                        <p><b>Source: </b>{page1Source[65]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[66] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[66]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[66]}</h3>
                            <p className="date">{page1Date[66]}, {page1Time[42]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[66]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[66]}</p>
                        <p>{page1p2[66]}</p>
                        <p>{page1p3[66]}</p>
                        <p>{page1p4[66]}</p>
                        <p>{page1p5[66]}</p>
                        <p>{page1p6[66]}</p>
                        <p>{page1p7[66]}</p>
                        <p>{page1p8[66]}</p>
                        <p><b>Source: </b>{page1Source[66]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[67] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[67]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[67]}</h3>
                            <p className="date">{page1Date[67]}, {page1Time[43]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[67]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[67]}</p>
                        <p>{page1p2[67]}</p>
                        <p>{page1p3[67]}</p>
                        <p>{page1p4[67]}</p>
                        <p>{page1p5[67]}</p>
                        <p>{page1p6[67]}</p>
                        <p>{page1p7[67]}</p>
                        <p>{page1p8[67]}</p>
                        <p><b>Source: </b>{page1Source[67]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[68] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[68]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[68]}</h3>
                            <p className="date">{page1Date[68]}, {page1Time[44]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[68]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[68]}</p>
                        <p>{page1p2[68]}</p>
                        <p>{page1p3[68]}</p>
                        <p>{page1p4[68]}</p>
                        <p>{page1p5[68]}</p>
                        <p>{page1p6[68]}</p>
                        <p>{page1p7[68]}</p>
                        <p>{page1p8[68]}</p>
                        <p><b>Source: </b>{page1Source[68]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[69] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[69]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[69]}</h3>
                            <p className="date">{page1Date[69]}, {page1Time[45]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[69]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[69]}</p>
                        <p>{page1p2[69]}</p>
                        <p>{page1p3[69]}</p>
                        <p>{page1p4[69]}</p>
                        <p>{page1p5[69]}</p>
                        <p>{page1p6[69]}</p>
                        <p>{page1p7[69]}</p>
                        <p>{page1p8[69]}</p>
                        <p><b>Source: </b>{page1Source[69]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[70] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[70]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[70]}</h3>
                            <p className="date">{page1Date[70]}, {page1Time[46]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[70]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[70]}</p>
                        <p>{page1p2[70]}</p>
                        <p>{page1p3[70]}</p>
                        <p>{page1p4[70]}</p>
                        <p>{page1p5[70]}</p>
                        <p>{page1p6[70]}</p>
                        <p>{page1p7[70]}</p>
                        <p>{page1p8[70]}</p>
                        <p><b>Source: </b>{page1Source[70]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[71] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[71]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[71]}</h3>
                            <p className="date">{page1Date[71]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[71]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[71]}</p>
                        <p>{page1p2[71]}</p>
                        <p>{page1p3[71]}</p>
                        <p>{page1p4[71]}</p>
                        <p>{page1p5[71]}</p>
                        <p>{page1p6[71]}</p>
                        <p>{page1p7[71]}</p>
                        <p>{page1p8[71]}</p>
                        <p><b>Source: </b>{page1Source[71]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[72] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[72]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[72]}</h3>
                            <p className="date">{page1Date[72]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[72]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[72]}</p>
                        <p>{page1p2[72]}</p>
                        <p>{page1p3[72]}</p>
                        <p>{page1p4[72]}</p>
                        <p>{page1p5[72]}</p>
                        <p>{page1p6[72]}</p>
                        <p>{page1p7[72]}</p>
                        <p>{page1p8[72]}</p>
                        <p><b>Source: </b>{page1Source[72]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[73] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[73]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[73]}</h3>
                            <p className="date">{page1Date[73]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[73]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[73]}</p>
                        <p>{page1p2[73]}</p>
                        <p>{page1p3[73]}</p>
                        <p>{page1p4[73]}</p>
                        <p>{page1p5[73]}</p>
                        <p>{page1p6[73]}</p>
                        <p>{page1p7[73]}</p>
                        <p>{page1p8[73]}</p>
                        <p><b>Source: </b>{page1Source[73]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[74] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[74]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[74]}</h3>
                            <p className="date">{page1Date[74]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[74]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[74]}</p>
                        <p>{page1p2[74]}</p>
                        <p>{page1p3[74]}</p>
                        <p>{page1p4[74]}</p>
                        <p>{page1p5[74]}</p>
                        <p>{page1p6[74]}</p>
                        <p>{page1p7[74]}</p>
                        <p>{page1p8[74]}</p>
                        <p><b>Source: </b>{page1Source[74]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[75] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[75]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[75]}</h3>
                            <p className="date">{page1Date[75]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[75]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[75]}</p>
                        <p>{page1p2[75]}</p>
                        <p>{page1p3[75]}</p>
                        <p>{page1p4[75]}</p>
                        <p>{page1p5[75]}</p>
                        <p>{page1p6[75]}</p>
                        <p>{page1p7[75]}</p>
                        <p>{page1p8[75]}</p>
                        <p><b>Source: </b>{page1Source[75]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[76] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[76]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[76]}</h3>
                            <p className="date">{page1Date[76]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[76]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[76]}</p>
                        <p>{page1p2[76]}</p>
                        <p>{page1p3[76]}</p>
                        <p>{page1p4[76]}</p>
                        <p>{page1p5[76]}</p>
                        <p>{page1p6[76]}</p>
                        <p>{page1p7[76]}</p>
                        <p>{page1p8[76]}</p>
                        <p><b>Source: </b>{page1Source[76]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[77] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[77]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[77]}</h3>
                            <p className="date">{page1Date[77]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[77]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[77]}</p>
                        <p>{page1p2[77]}</p>
                        <p>{page1p3[77]}</p>
                        <p>{page1p4[77]}</p>
                        <p>{page1p5[77]}</p>
                        <p>{page1p6[77]}</p>
                        <p>{page1p7[77]}</p>
                        <p>{page1p8[77]}</p>
                        <p><b>Source: </b>{page1Source[77]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[78] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[78]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[78]}</h3>
                            <p className="date">{page1Date[78]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[78]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[78]}</p>
                        <p>{page1p2[78]}</p>
                        <p>{page1p3[78]}</p>
                        <p>{page1p4[78]}</p>
                        <p>{page1p5[78]}</p>
                        <p>{page1p6[78]}</p>
                        <p>{page1p7[78]}</p>
                        <p>{page1p8[78]}</p>
                        <p><b>Source: </b>{page1Source[78]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[79] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[79]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[79]}</h3>
                            <p className="date">{page1Date[79]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[79]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[79]}</p>
                        <p>{page1p2[79]}</p>
                        <p>{page1p3[79]}</p>
                        <p>{page1p4[79]}</p>
                        <p>{page1p5[79]}</p>
                        <p>{page1p6[79]}</p>
                        <p>{page1p7[79]}</p>
                        <p>{page1p8[79]}</p>
                        <p><b>Source: </b>{page1Source[79]}</p>
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
                    <a href="latest-updates_3" className="btn btn-default" role="button">3</a>):<div></div>
                }
                {    page1Heading[60] != null ?(
                    <a href="latest-updates_4" style={{color:"#fff", background:"#897eec"}} className="btn btn-default" role="button">4</a>):<div></div>
                }
                {   page1Heading[80] != null ?(
                    <a href="latest-updates_5" className="btn btn-default" role="button">5</a>):<div></div>              
                }             
            </div>
            
        </div>
    )
}

export default LatestUpdates4




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