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
            page1Heading[20] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[20]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[20]}</h3>
                        <p className="date">{page1Date[20]}, {page1Time[20]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[20]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[20]}</p>
                    <p>{page1p2[20]}</p>
                    <p>{page1p3[20]}</p>
                    <p>{page1p4[20]}</p>
                    <p>{page1p5[20]}</p>
                    <p>{page1p6[20]}</p>
                    <p>{page1p7[20]}</p>
                    <p>{page1p8[20]}</p>
                    <p><b>Source: </b>{page1Source[20]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[21] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[21]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[21]}</h3>
                        <p className="date">{page1Date[21]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[21]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[21]}</p>
                    <p>{page1p2[21]}</p>
                    <p>{page1p3[21]}</p>
                    <p>{page1p4[21]}</p>
                    <p>{page1p5[21]}</p>
                    <p>{page1p6[21]}</p>
                    <p>{page1p7[21]}</p>
                    <p>{page1p8[21]}</p>
                    <p><b>Source: </b>{page1Source[21]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[22] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[22]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[22]}</h3>
                        <p className="date">{page1Date[22]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[22]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[22]}</p>
                    <p>{page1p2[22]}</p>
                    <p>{page1p3[22]}</p>
                    <p>{page1p4[22]}</p>
                    <p>{page1p5[22]}</p>
                    <p>{page1p6[22]}</p>
                    <p>{page1p7[22]}</p>
                    <p>{page1p8[22]}</p>
                    <p><b>Source: </b>{page1Source[22]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[23] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[23]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[23]}</h3>
                        <p className="date">{page1Date[23]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[23]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[23]}</p>
                    <p>{page1p2[23]}</p>
                    <p>{page1p3[23]}</p>
                    <p>{page1p4[23]}</p>
                    <p>{page1p5[23]}</p>
                    <p>{page1p6[23]}</p>
                    <p>{page1p7[23]}</p>
                    <p>{page1p8[23]}</p>
                    <p><b>Source: </b>{page1Source[23]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[24] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[24]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[24]}</h3>
                        <p className="date">{page1Date[24]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[24]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[24]}</p>
                    <p>{page1p2[24]}</p>
                    <p>{page1p3[24]}</p>
                    <p>{page1p4[24]}</p>
                    <p>{page1p5[24]}</p>
                    <p>{page1p6[24]}</p>
                    <p>{page1p7[24]}</p>
                    <p>{page1p8[24]}</p>
                    <p><b>Source: </b>{page1Source[24]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[25] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[25]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[25]}</h3>
                        <p className="date">{page1Date[25]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[25]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[25]}</p>
                    <p>{page1p2[25]}</p>
                    <p>{page1p3[25]}</p>
                    <p>{page1p4[25]}</p>
                    <p>{page1p5[25]}</p>
                    <p>{page1p6[25]}</p>
                    <p>{page1p7[25]}</p>
                    <p>{page1p8[25]}</p>
                    <p><b>Source: </b>{page1Source[25]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[26] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[26]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[26]}</h3>
                        <p className="date">{page1Date[26]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[26]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[26]}</p>
                    <p>{page1p2[26]}</p>
                    <p>{page1p3[26]}</p>
                    <p>{page1p4[26]}</p>
                    <p>{page1p5[26]}</p>
                    <p>{page1p6[26]}</p>
                    <p>{page1p7[26]}</p>
                    <p>{page1p8[26]}</p>
                    <p><b>Source: </b>{page1Source[26]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
            page1Heading[27] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[27]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[27]}</h3>
                        <p className="date">{page1Date[27]}, {page1Time[27]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[27]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[27]}</p>
                    <p>{page1p2[27]}</p>
                    <p>{page1p3[27]}</p>
                    <p>{page1p4[27]}</p>
                    <p>{page1p5[27]}</p>
                    <p>{page1p6[27]}</p>
                    <p>{page1p7[27]}</p>
                    <p>{page1p8[27]}</p>
                    <p><b>Source: </b>{page1Source[27]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
           {
            page1Heading[28] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[28]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[28]}</h3>
                        <p className="date">{page1Date[28]}, {page1Time[28]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[28]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[28]}</p>
                    <p>{page1p2[28]}</p>
                    <p>{page1p3[28]}</p>
                    <p>{page1p4[28]}</p>
                    <p>{page1p5[28]}</p>
                    <p>{page1p6[28]}</p>
                    <p>{page1p7[28]}</p>
                    <p>{page1p8[28]}</p>
                    <p><b>Source: </b>{page1Source[28]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<div></div>
            }
            {
                page1Heading[29] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[29]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[29]}</h3>
                            <p className="date">{page1Date[29]}, {page1Time[29]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[29]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[29]}</p>
                        <p>{page1p2[29]}</p>
                        <p>{page1p3[29]}</p>
                        <p>{page1p4[29]}</p>
                        <p>{page1p5[29]}</p>
                        <p>{page1p6[29]}</p>
                        <p>{page1p7[29]}</p>
                        <p>{page1p8[29]}</p>
                        <p><b>Source: </b>{page1Source[29]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[30] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[30]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[30]}</h3>
                            <p className="date">{page1Date[30]}, {page1Time[30]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[30]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[30]}</p>
                        <p>{page1p2[30]}</p>
                        <p>{page1p3[30]}</p>
                        <p>{page1p4[30]}</p>
                        <p>{page1p5[30]}</p>
                        <p>{page1p6[30]}</p>
                        <p>{page1p7[30]}</p>
                        <p>{page1p8[30]}</p>
                        <p><b>Source: </b>{page1Source[30]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[31] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[31]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[31]}</h3>
                            <p className="date">{page1Date[31]}, {page1Time[31]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[31]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[31]}</p>
                        <p>{page1p2[31]}</p>
                        <p>{page1p3[31]}</p>
                        <p>{page1p4[31]}</p>
                        <p>{page1p5[31]}</p>
                        <p>{page1p6[31]}</p>
                        <p>{page1p7[31]}</p>
                        <p>{page1p8[31]}</p>
                        <p><b>Source: </b>{page1Source[31]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[32] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[32]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[32]}</h3>
                            <p className="date">{page1Date[32]}, {page1Time[32]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[32]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[32]}</p>
                        <p>{page1p2[32]}</p>
                        <p>{page1p3[32]}</p>
                        <p>{page1p4[32]}</p>
                        <p>{page1p5[32]}</p>
                        <p>{page1p6[32]}</p>
                        <p>{page1p7[32]}</p>
                        <p>{page1p8[32]}</p>
                        <p><b>Source: </b>{page1Source[32]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[33] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[33]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[33]}</h3>
                            <p className="date">{page1Date[33]}, {page1Time[33]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[33]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[33]}</p>
                        <p>{page1p2[33]}</p>
                        <p>{page1p3[33]}</p>
                        <p>{page1p4[33]}</p>
                        <p>{page1p5[33]}</p>
                        <p>{page1p6[33]}</p>
                        <p>{page1p7[33]}</p>
                        <p>{page1p8[33]}</p>
                        <p><b>Source: </b>{page1Source[33]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[34] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[34]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[34]}</h3>
                            <p className="date">{page1Date[34]}, {page1Time[34]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[34]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[34]}</p>
                        <p>{page1p2[34]}</p>
                        <p>{page1p3[34]}</p>
                        <p>{page1p4[34]}</p>
                        <p>{page1p5[34]}</p>
                        <p>{page1p6[34]}</p>
                        <p>{page1p7[34]}</p>
                        <p>{page1p8[34]}</p>
                        <p><b>Source: </b>{page1Source[34]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[35] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[35]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[35]}</h3>
                            <p className="date">{page1Date[35]}, {page1Time[35]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[35]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[35]}</p>
                        <p>{page1p2[35]}</p>
                        <p>{page1p3[35]}</p>
                        <p>{page1p4[35]}</p>
                        <p>{page1p5[35]}</p>
                        <p>{page1p6[35]}</p>
                        <p>{page1p7[35]}</p>
                        <p>{page1p8[35]}</p>
                        <p><b>Source: </b>{page1Source[35]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[36] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[36]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[36]}</h3>
                            <p className="date">{page1Date[36]}, {page1Time[36]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[36]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[36]}</p>
                        <p>{page1p2[36]}</p>
                        <p>{page1p3[36]}</p>
                        <p>{page1p4[36]}</p>
                        <p>{page1p5[36]}</p>
                        <p>{page1p6[36]}</p>
                        <p>{page1p7[36]}</p>
                        <p>{page1p8[36]}</p>
                        <p><b>Source: </b>{page1Source[36]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[37] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[37]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[37]}</h3>
                            <p className="date">{page1Date[37]}, {page1Time[37]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[37]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[37]}</p>
                        <p>{page1p2[37]}</p>
                        <p>{page1p3[37]}</p>
                        <p>{page1p4[37]}</p>
                        <p>{page1p5[37]}</p>
                        <p>{page1p6[37]}</p>
                        <p>{page1p7[37]}</p>
                        <p>{page1p8[37]}</p>
                        <p><b>Source: </b>{page1Source[37]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[38] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[38]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[38]}</h3>
                            <p className="date">{page1Date[38]}, {page1Time[38]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[38]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[38]}</p>
                        <p>{page1p2[38]}</p>
                        <p>{page1p3[38]}</p>
                        <p>{page1p4[38]}</p>
                        <p>{page1p5[38]}</p>
                        <p>{page1p6[38]}</p>
                        <p>{page1p7[38]}</p>
                        <p>{page1p8[38]}</p>
                        <p><b>Source: </b>{page1Source[38]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[39] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[39]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[39]}</h3>
                            <p className="date">{page1Date[39]}, {page1Time[39]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[39]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[39]}</p>
                        <p>{page1p2[39]}</p>
                        <p>{page1p3[39]}</p>
                        <p>{page1p4[39]}</p>
                        <p>{page1p5[39]}</p>
                        <p>{page1p6[39]}</p>
                        <p>{page1p7[39]}</p>
                        <p>{page1p8[39]}</p>
                        <p><b>Source: </b>{page1Source[39]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }

            </div>
            <div class="container d-flex justify-content-center pages mb-3">
            <a href="latest-updates" className="btn btn-default" role="button">1</a>
            {   page1Heading[20] != null ?(
                <a style={{color:"#fff", background:"#897eec"}} href="latest-updates_2" className="btn btn-default" role="button">2</a>):<div></div>
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