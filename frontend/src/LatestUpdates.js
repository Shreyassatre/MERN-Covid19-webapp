import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './LatestUpdates.css';
import {Link} from 'react-router-dom';

function LatestUpdates(props) {

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
                page1Heading[0] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[0]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[0]}</h3>
                            <p className="date">{page1Date[0]}, {page1Time[0]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[0]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[0]}</p>
                        <p>{page1p2[0]}</p>
                        <p>{page1p3[0]}</p>
                        <p>{page1p4[0]}</p>
                        <p>{page1p5[0]}</p>
                        <p>{page1p6[0]}</p>
                        <p>{page1p7[0]}</p>
                        <p>{page1p8[0]}</p>
                        <p><b>Source: </b>{page1Source[0]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                    page1Heading[1] != null ? 
                    (<div className="latest_updates">
                        <div className="news-container">
                            <img src={page1Images[1]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                            <div>
                                <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[1]}</h3>
                                <p className="date">{page1Date[1]}, {page1Time[1]}</p>
                                <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                                <p className="note">{page1Note[1]}</p>
                                <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                            </div>
                        </div>
                        <div className="brif_news container-fluid mt-4">
                        {readMore && <div>
                            <p>{page1p1[1]}</p>
                            <p>{page1p2[1]}</p>
                            <p>{page1p3[1]}</p>
                            <p>{page1p4[1]}</p>
                            <p>{page1p5[1]}</p>
                            <p>{page1p6[1]}</p>
                            <p>{page1p7[1]}</p>
                            <p>{page1p8[1]}</p>
                            <p><b>Source: </b>{page1Source[1]}</p>
                        </div>}
                        </div>
                        <hr/>
                    </div>):<div></div>
                    }
                    {
                page1Heading[2] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[2]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[2]}</h3>
                            <p className="date">{page1Date[2]}, {page1Time[2]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[2]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[2]}</p>
                        <p>{page1p2[2]}</p>
                        <p>{page1p3[2]}</p>
                        <p>{page1p4[2]}</p>
                        <p>{page1p5[2]}</p>
                        <p>{page1p6[2]}</p>
                        <p>{page1p7[2]}</p>
                        <p>{page1p8[2]}</p>
                        <p><b>Source: </b>{page1Source[2]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[3] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[3]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[3]}</h3>
                            <p className="date">{page1Date[3]}, {page1Time[3]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[3]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[3]}</p>
                        <p>{page1p2[3]}</p>
                        <p>{page1p3[3]}</p>
                        <p>{page1p4[3]}</p>
                        <p>{page1p5[3]}</p>
                        <p>{page1p6[3]}</p>
                        <p>{page1p7[3]}</p>
                        <p>{page1p8[3]}</p>
                        <p><b>Source: </b>{page1Source[3]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[4] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[4]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[4]}</h3>
                            <p className="date">{page1Date[4]}, {page1Time[4]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[4]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[4]}</p>
                        <p>{page1p2[4]}</p>
                        <p>{page1p3[4]}</p>
                        <p>{page1p4[4]}</p>
                        <p>{page1p5[4]}</p>
                        <p>{page1p6[4]}</p>
                        <p>{page1p7[4]}</p>
                        <p>{page1p8[4]}</p>
                        <p><b>Source: </b>{page1Source[4]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[5] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[5]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[5]}</h3>
                            <p className="date">{page1Date[5]}, {page1Time[5]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[5]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[5]}</p>
                        <p>{page1p2[5]}</p>
                        <p>{page1p3[5]}</p>
                        <p>{page1p4[5]}</p>
                        <p>{page1p5[5]}</p>
                        <p>{page1p6[5]}</p>
                        <p>{page1p7[5]}</p>
                        <p>{page1p8[5]}</p>
                        <p><b>Source: </b>{page1Source[5]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[6] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[6]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[6]}</h3>
                            <p className="date">{page1Date[6]}, {page1Time[20]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[6]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[6]}</p>
                        <p>{page1p2[6]}</p>
                        <p>{page1p3[6]}</p>
                        <p>{page1p4[6]}</p>
                        <p>{page1p5[6]}</p>
                        <p>{page1p6[6]}</p>
                        <p>{page1p7[6]}</p>
                        <p>{page1p8[6]}</p>
                        <p><b>Source: </b>{page1Source[6]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[7] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[7]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[7]}</h3>
                            <p className="date">{page1Date[7]}, {page1Time[7]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[7]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[7]}</p>
                        <p>{page1p2[7]}</p>
                        <p>{page1p3[7]}</p>
                        <p>{page1p4[7]}</p>
                        <p>{page1p5[7]}</p>
                        <p>{page1p6[7]}</p>
                        <p>{page1p7[7]}</p>
                        <p>{page1p8[7]}</p>
                        <p><b>Source: </b>{page1Source[7]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[8] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[8]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[8]}</h3>
                            <p className="date">{page1Date[8]}, {page1Time[8]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[8]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[8]}</p>
                        <p>{page1p2[8]}</p>
                        <p>{page1p3[8]}</p>
                        <p>{page1p4[8]}</p>
                        <p>{page1p5[8]}</p>
                        <p>{page1p6[8]}</p>
                        <p>{page1p7[8]}</p>
                        <p>{page1p8[8]}</p>
                        <p><b>Source: </b>{page1Source[8]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[9] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[9]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[9]}</h3>
                            <p className="date">{page1Date[9]}, {page1Time[9]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[9]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[9]}</p>
                        <p>{page1p2[9]}</p>
                        <p>{page1p3[9]}</p>
                        <p>{page1p4[9]}</p>
                        <p>{page1p5[9]}</p>
                        <p>{page1p6[9]}</p>
                        <p>{page1p7[9]}</p>
                        <p>{page1p8[9]}</p>
                        <p><b>Source: </b>{page1Source[9]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[10] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[10]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[10]}</h3>
                            <p className="date">{page1Date[10]}, {page1Time[10]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[10]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[10]}</p>
                        <p>{page1p2[10]}</p>
                        <p>{page1p3[10]}</p>
                        <p>{page1p4[10]}</p>
                        <p>{page1p5[10]}</p>
                        <p>{page1p6[10]}</p>
                        <p>{page1p7[10]}</p>
                        <p>{page1p8[10]}</p>
                        <p><b>Source: </b>{page1Source[10]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[11] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[11]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[11]}</h3>
                            <p className="date">{page1Date[11]}, {page1Time[11]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[11]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[11]}</p>
                        <p>{page1p2[11]}</p>
                        <p>{page1p3[11]}</p>
                        <p>{page1p4[11]}</p>
                        <p>{page1p5[11]}</p>
                        <p>{page1p6[11]}</p>
                        <p>{page1p7[11]}</p>
                        <p>{page1p8[11]}</p>
                        <p><b>Source: </b>{page1Source[11]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[12] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[12]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[12]}</h3>
                            <p className="date">{page1Date[12]}, {page1Time[12]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[12]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[12]}</p>
                        <p>{page1p2[12]}</p>
                        <p>{page1p3[12]}</p>
                        <p>{page1p4[12]}</p>
                        <p>{page1p5[12]}</p>
                        <p>{page1p6[12]}</p>
                        <p>{page1p7[12]}</p>
                        <p>{page1p8[12]}</p>
                        <p><b>Source: </b>{page1Source[12]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[13] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[13]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[13]}</h3>
                            <p className="date">{page1Date[13]}, {page1Time[13]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[13]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[13]}</p>
                        <p>{page1p2[13]}</p>
                        <p>{page1p3[13]}</p>
                        <p>{page1p4[13]}</p>
                        <p>{page1p5[13]}</p>
                        <p>{page1p6[13]}</p>
                        <p>{page1p7[13]}</p>
                        <p>{page1p8[13]}</p>
                        <p><b>Source: </b>{page1Source[13]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[14] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[14]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[14]}</h3>
                            <p className="date">{page1Date[14]}, {page1Time[14]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[14]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[14]}</p>
                        <p>{page1p2[14]}</p>
                        <p>{page1p3[14]}</p>
                        <p>{page1p4[14]}</p>
                        <p>{page1p5[14]}</p>
                        <p>{page1p6[14]}</p>
                        <p>{page1p7[14]}</p>
                        <p>{page1p8[14]}</p>
                        <p><b>Source: </b>{page1Source[14]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[15] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[15]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[15]}</h3>
                            <p className="date">{page1Date[15]}, {page1Time[15]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[15]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[15]}</p>
                        <p>{page1p2[15]}</p>
                        <p>{page1p3[15]}</p>
                        <p>{page1p4[15]}</p>
                        <p>{page1p5[15]}</p>
                        <p>{page1p6[15]}</p>
                        <p>{page1p7[15]}</p>
                        <p>{page1p8[15]}</p>
                        <p><b>Source: </b>{page1Source[15]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[16] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[16]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[16]}</h3>
                            <p className="date">{page1Date[16]}, {page1Time[16]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[16]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[16]}</p>
                        <p>{page1p2[16]}</p>
                        <p>{page1p3[16]}</p>
                        <p>{page1p4[16]}</p>
                        <p>{page1p5[16]}</p>
                        <p>{page1p6[16]}</p>
                        <p>{page1p7[16]}</p>
                        <p>{page1p8[16]}</p>
                        <p><b>Source: </b>{page1Source[16]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[17] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[17]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[17]}</h3>
                            <p className="date">{page1Date[17]}, {page1Time[17]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[17]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[17]}</p>
                        <p>{page1p2[17]}</p>
                        <p>{page1p3[17]}</p>
                        <p>{page1p4[17]}</p>
                        <p>{page1p5[17]}</p>
                        <p>{page1p6[17]}</p>
                        <p>{page1p7[17]}</p>
                        <p>{page1p8[17]}</p>
                        <p><b>Source: </b>{page1Source[17]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[18] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[18]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[18]}</h3>
                            <p className="date">{page1Date[18]}, {page1Time[18]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[18]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[18]}</p>
                        <p>{page1p2[18]}</p>
                        <p>{page1p3[18]}</p>
                        <p>{page1p4[18]}</p>
                        <p>{page1p5[18]}</p>
                        <p>{page1p6[18]}</p>
                        <p>{page1p7[18]}</p>
                        <p>{page1p8[18]}</p>
                        <p><b>Source: </b>{page1Source[18]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }
                {
                page1Heading[19] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[19]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[19]}</h3>
                            <p className="date">{page1Date[19]}, {page1Time[19]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[19]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[19]}</p>
                        <p>{page1p2[19]}</p>
                        <p>{page1p3[19]}</p>
                        <p>{page1p4[19]}</p>
                        <p>{page1p5[19]}</p>
                        <p>{page1p6[19]}</p>
                        <p>{page1p7[19]}</p>
                        <p>{page1p8[19]}</p>
                        <p><b>Source: </b>{page1Source[19]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
                }


            </div>
            <div class="container d-flex justify-content-center pages mb-3">
                <a style={{color:"#fff", background:"#897eec"}} href="latest-updates" className="btn btn-default" role="button">1</a>
                {   page1Heading[20] != null ?(
                    <a href="latest-updates_2" className="btn btn-default" role="button">2</a>):<div></div>
                } 
                {    page1Heading[40] != null ?(
                    <a href="latest-updates_3" className="btn btn-default" role="button">3</a>):<div></div>
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

export default LatestUpdates




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