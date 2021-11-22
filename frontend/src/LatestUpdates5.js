import React, {useEffect, useState} from 'react'
import axios from 'axios';
import './LatestUpdates.css';
import {Link} from 'react-router-dom';

function LatestUpdates5(props) {

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
            <center><hr style={{width: "52%"}}/></center>
           <div className="container-fluid mt-4">   
           {
            page1Heading[80] != null ? 
            (<div className="latest_updates">
                <div className="news-container">
                    <img src={page1Images[80]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                    <div>
                        <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[80]}</h3>
                        <p className="date">{page1Date[80]}, {page1Time[80]}</p>
                        <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                        <p className="note">{page1Note[80]}</p>
                        <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                    </div>
                </div>
                <div className="brif_news container-fluid mt-4">
                {readMore && <div>
                    <p>{page1p1[80]}</p>
                    <p>{page1p2[80]}</p>
                    <p>{page1p3[80]}</p>
                    <p>{page1p4[80]}</p>
                    <p>{page1p5[80]}</p>
                    <p>{page1p6[80]}</p>
                    <p>{page1p7[80]}</p>
                    <p>{page1p8[80]}</p>
                    <p><b>Source: </b>{page1Source[80]}</p>
                </div>}
                </div>
                <hr/>
            </div>):<h1 className="text-center">Updates Are Not Available</h1>
            }
            {
                page1Heading[81] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[81]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[81]}</h3>
                            <p className="date">{page1Date[81]}, {page1Time[49]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[81]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[81]}</p>
                        <p>{page1p2[81]}</p>
                        <p>{page1p3[81]}</p>
                        <p>{page1p4[81]}</p>
                        <p>{page1p5[81]}</p>
                        <p>{page1p6[81]}</p>
                        <p>{page1p7[81]}</p>
                        <p>{page1p8[81]}</p>
                        <p><b>Source: </b>{page1Source[81]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[82] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[82]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[82]}</h3>
                            <p className="date">{page1Date[82]}, {page1Time[50]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[82]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[82]}</p>
                        <p>{page1p2[82]}</p>
                        <p>{page1p3[82]}</p>
                        <p>{page1p4[82]}</p>
                        <p>{page1p5[82]}</p>
                        <p>{page1p6[82]}</p>
                        <p>{page1p7[82]}</p>
                        <p>{page1p8[82]}</p>
                        <p><b>Source: </b>{page1Source[82]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[83] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[83]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[83]}</h3>
                            <p className="date">{page1Date[83]}, {page1Time[51]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[83]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[83]}</p>
                        <p>{page1p2[83]}</p>
                        <p>{page1p3[83]}</p>
                        <p>{page1p4[83]}</p>
                        <p>{page1p5[83]}</p>
                        <p>{page1p6[83]}</p>
                        <p>{page1p7[83]}</p>
                        <p>{page1p8[83]}</p>
                        <p><b>Source: </b>{page1Source[83]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[84] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[84]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[84]}</h3>
                            <p className="date">{page1Date[84]}, {page1Time[52]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[84]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[84]}</p>
                        <p>{page1p2[84]}</p>
                        <p>{page1p3[84]}</p>
                        <p>{page1p4[84]}</p>
                        <p>{page1p5[84]}</p>
                        <p>{page1p6[84]}</p>
                        <p>{page1p7[84]}</p>
                        <p>{page1p8[84]}</p>
                        <p><b>Source: </b>{page1Source[84]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[85] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[85]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[85]}</h3>
                            <p className="date">{page1Date[85]}, {page1Time[53]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[85]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[85]}</p>
                        <p>{page1p2[85]}</p>
                        <p>{page1p3[85]}</p>
                        <p>{page1p4[85]}</p>
                        <p>{page1p5[85]}</p>
                        <p>{page1p6[85]}</p>
                        <p>{page1p7[85]}</p>
                        <p>{page1p8[85]}</p>
                        <p><b>Source: </b>{page1Source[85]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[86] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[86]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[86]}</h3>
                            <p className="date">{page1Date[86]}, {page1Time[54]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[86]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[86]}</p>
                        <p>{page1p2[86]}</p>
                        <p>{page1p3[86]}</p>
                        <p>{page1p4[86]}</p>
                        <p>{page1p5[86]}</p>
                        <p>{page1p6[86]}</p>
                        <p>{page1p7[86]}</p>
                        <p>{page1p8[86]}</p>
                        <p><b>Source: </b>{page1Source[86]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[87] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[87]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[87]}</h3>
                            <p className="date">{page1Date[87]}, {page1Time[55]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[87]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[87]}</p>
                        <p>{page1p2[87]}</p>
                        <p>{page1p3[87]}</p>
                        <p>{page1p4[87]}</p>
                        <p>{page1p5[87]}</p>
                        <p>{page1p6[87]}</p>
                        <p>{page1p7[87]}</p>
                        <p>{page1p8[87]}</p>
                        <p><b>Source: </b>{page1Source[87]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[88] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[88]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[88]}</h3>
                            <p className="date">{page1Date[88]}, {page1Time[56]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[88]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[88]}</p>
                        <p>{page1p2[88]}</p>
                        <p>{page1p3[88]}</p>
                        <p>{page1p4[88]}</p>
                        <p>{page1p5[88]}</p>
                        <p>{page1p6[88]}</p>
                        <p>{page1p7[88]}</p>
                        <p>{page1p8[88]}</p>
                        <p><b>Source: </b>{page1Source[88]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[89] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[89]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[89]}</h3>
                            <p className="date">{page1Date[89]}, {page1Time[57]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[89]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[89]}</p>
                        <p>{page1p2[89]}</p>
                        <p>{page1p3[89]}</p>
                        <p>{page1p4[89]}</p>
                        <p>{page1p5[89]}</p>
                        <p>{page1p6[89]}</p>
                        <p>{page1p7[89]}</p>
                        <p>{page1p8[89]}</p>
                        <p><b>Source: </b>{page1Source[89]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[90] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[90]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[90]}</h3>
                            <p className="date">{page1Date[90]}, {page1Time[58]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[90]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[90]}</p>
                        <p>{page1p2[90]}</p>
                        <p>{page1p3[90]}</p>
                        <p>{page1p4[90]}</p>
                        <p>{page1p5[90]}</p>
                        <p>{page1p6[90]}</p>
                        <p>{page1p7[90]}</p>
                        <p>{page1p8[90]}</p>
                        <p><b>Source: </b>{page1Source[90]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[91] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[91]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[91]}</h3>
                            <p className="date">{page1Date[91]}, {page1Time[59]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[91]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[91]}</p>
                        <p>{page1p2[91]}</p>
                        <p>{page1p3[91]}</p>
                        <p>{page1p4[91]}</p>
                        <p>{page1p5[91]}</p>
                        <p>{page1p6[91]}</p>
                        <p>{page1p7[91]}</p>
                        <p>{page1p8[91]}</p>
                        <p><b>Source: </b>{page1Source[91]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[92] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[92]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[92]}</h3>
                            <p className="date">{page1Date[92]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[92]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[92]}</p>
                        <p>{page1p2[92]}</p>
                        <p>{page1p3[92]}</p>
                        <p>{page1p4[92]}</p>
                        <p>{page1p5[92]}</p>
                        <p>{page1p6[92]}</p>
                        <p>{page1p7[92]}</p>
                        <p>{page1p8[92]}</p>
                        <p><b>Source: </b>{page1Source[92]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[93] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[93]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[93]}</h3>
                            <p className="date">{page1Date[93]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[93]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[93]}</p>
                        <p>{page1p2[93]}</p>
                        <p>{page1p3[93]}</p>
                        <p>{page1p4[93]}</p>
                        <p>{page1p5[93]}</p>
                        <p>{page1p6[93]}</p>
                        <p>{page1p7[93]}</p>
                        <p>{page1p8[93]}</p>
                        <p><b>Source: </b>{page1Source[93]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[94] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[94]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[94]}</h3>
                            <p className="date">{page1Date[94]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[94]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[94]}</p>
                        <p>{page1p2[94]}</p>
                        <p>{page1p3[94]}</p>
                        <p>{page1p4[94]}</p>
                        <p>{page1p5[94]}</p>
                        <p>{page1p6[94]}</p>
                        <p>{page1p7[94]}</p>
                        <p>{page1p8[94]}</p>
                        <p><b>Source: </b>{page1Source[94]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[95] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[95]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[95]}</h3>
                            <p className="date">{page1Date[95]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[95]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[95]}</p>
                        <p>{page1p2[95]}</p>
                        <p>{page1p3[95]}</p>
                        <p>{page1p4[95]}</p>
                        <p>{page1p5[95]}</p>
                        <p>{page1p6[95]}</p>
                        <p>{page1p7[95]}</p>
                        <p>{page1p8[95]}</p>
                        <p><b>Source: </b>{page1Source[95]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[96] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[96]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[96]}</h3>
                            <p className="date">{page1Date[96]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[96]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[96]}</p>
                        <p>{page1p2[96]}</p>
                        <p>{page1p3[96]}</p>
                        <p>{page1p4[96]}</p>
                        <p>{page1p5[96]}</p>
                        <p>{page1p6[96]}</p>
                        <p>{page1p7[96]}</p>
                        <p>{page1p8[96]}</p>
                        <p><b>Source: </b>{page1Source[96]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[97] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[97]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[97]}</h3>
                            <p className="date">{page1Date[97]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[97]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[97]}</p>
                        <p>{page1p2[97]}</p>
                        <p>{page1p3[97]}</p>
                        <p>{page1p4[97]}</p>
                        <p>{page1p5[97]}</p>
                        <p>{page1p6[97]}</p>
                        <p>{page1p7[97]}</p>
                        <p>{page1p8[97]}</p>
                        <p><b>Source: </b>{page1Source[97]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[98] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[98]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[98]}</h3>
                            <p className="date">{page1Date[98]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[98]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[98]}</p>
                        <p>{page1p2[98]}</p>
                        <p>{page1p3[98]}</p>
                        <p>{page1p4[98]}</p>
                        <p>{page1p5[98]}</p>
                        <p>{page1p6[98]}</p>
                        <p>{page1p7[98]}</p>
                        <p>{page1p8[98]}</p>
                        <p><b>Source: </b>{page1Source[98]}</p>
                    </div>}
                    </div>
                    <hr/>
                </div>):<div></div>
            }
            {
                page1Heading[99] != null ? 
                (<div className="latest_updates">
                    <div className="news-container">
                        <img src={page1Images[99]} alt="faulty-image" className="col-lg-4 col-sm-12 col-md-5" onClick={()=>{setReadMore(!readMore)}}></img>
                        <div>
                            <h3 onClick={()=>{setReadMore(!readMore)}}>{page1Heading[99]}</h3>
                            <p className="date">{page1Date[99]}, {page1Time[47]}</p>
                            <center><hr class="clearfix w-50 d-lg-none d-md-none"/></center>
                            <p className="note">{page1Note[99]}</p>
                            <a style={{color: "blue"}} className="read_more_less btn btn-default" data-toggle="collapse" role="button"  onClick={()=>{setReadMore(!readMore)}}>{linkName}</a>
                        </div>
                    </div>
                    <div className="brif_news container-fluid mt-4">
                    {readMore && <div>
                        <p>{page1p1[99]}</p>
                        <p>{page1p2[99]}</p>
                        <p>{page1p3[99]}</p>
                        <p>{page1p4[99]}</p>
                        <p>{page1p5[99]}</p>
                        <p>{page1p6[99]}</p>
                        <p>{page1p7[99]}</p>
                        <p>{page1p8[99]}</p>
                        <p><b>Source: </b>{page1Source[99]}</p>
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
                    <a href="latest-updates_4" className="btn btn-default" role="button">4</a>):<div></div>
                }
                {   page1Heading[80] != null ?(
                    <a href="latest-updates_5" style={{color:"#fff", background:"#897eec"}} className="btn btn-default" role="button">5</a>):<div></div>              
                }             
            </div>
            
        </div>
    )
}

export default LatestUpdates5




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