"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import CustomPopup from "@/app/components/Popup/Popup";
import VixDial from "@/app/components/Tools/VixDial/VixDial";
import VIXGraph from "@/app/components/Tools/VIXGraph/VIXGraph";
import AddUser from "@/app/components/AddUser/AddUser";
import { addZeroes } from "@/app/utilites/AddZeros";
import { newConvertDate } from "@/app/utilites/ConvertDate";
import { GetRiskColor, GetRiskHeaderColor } from "@/app/utilites/RiskColor";
// import PageLoader from '@/app/components/PageLoader/PageLoader';

function RiskWeather({ data }) {

    const [bdopen, setBdOpen] = useState(true);
    const [popupState, setPopupState] = useState(false);
    const [popupMessage, setPopupMessage] = useState("");
    const [popupTitle, setPopupTitle] = useState("");
    const [alertType, setAlertType] = useState("");
    const [vixData, setVixData] = useState();
    const [GraphData, setGraphData] = useState([]);
    const [selectedPeriod, setSelectedPeriod] = useState("1_month");
    const [LowerBound, setLowerBound] = useState();
    const [MesgStatus, setMesgStatus] = useState();
    const [MesgContent, setMesgContent] = useState();
    const [MesgHeader, setMesgHeader] = useState();
    const [headerColor, setHeaderColor] = useState();
    const [statusColor, setStatusColor] = useState();
    const [VixClosePrice, setVixClosePrice] = useState(0);
    const [DialColor, setDialColor] = useState();
    const [selectedPeriodContent, setSelectedPeriodContent] = useState("one month");
    const [MesgDscUp, setMesgDscUp] = useState();
    const [MesgDscDown, setMesgDscDown] = useState();
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [show5, setShow5] = useState(false);
    const [show6, setShow6] = useState(false);

    const option = [
        { value: "1_week", label: "1 Week", content: "one week" },
        { value: "1_month", label: "1 Month", content: "one month" },
        { value: "3_month", label: "3 Months", content: "three months" },
        { value: "6_month", label: "6 Months", content: "six months" },
        { value: "12_month", label: "1 Year", content: "one year" },

    ];

    const [updates, setUpdates] = useState({
        dailyUpdates: false,
        statusUpdates: false
    });

    useEffect(() => {
    }, [updates]);

    const handleUpdatesChange = (e) => {
        const value =
            e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setUpdates({ ...updates, [e.target.name]: value });
    };

    const refreshPage = () => {
        window.location.reload();
    };

    function changePropsStatus(val) {
        if (val) {
            refreshPage()
        }
    }

    const changePeriod = (period, content) => {
        setSelectedPeriod(period);
        setSelectedPeriodContent(content)
        setVixData(GraphData[period]["risk_value"]);
        setLowerBound(Math.min(...GraphData[period]["risk_value"]["closeprice"]));
        setMesgStatus(GraphData[period]["message_status"]);
        setMesgContent(GraphData[period]["message_text"]);
        setStatusColor(GetRiskColor(GraphData[period]["message_status"]));
    };

    useEffect(() => {
        if (data && data[selectedPeriod]) {
            setGraphData(data);
            setVixData(data[selectedPeriod]["risk_value"]);
            const lastClosePrice = data[selectedPeriod]["risk_value"]["closeprice"].slice(-1)[0];
            const status = GetRiskHeaderColor(lastClosePrice);

            setLowerBound(Math.min(...data[selectedPeriod]["risk_value"]["closeprice"]));
            setMesgStatus(data[selectedPeriod]["message_status"]);
            setMesgContent(data[selectedPeriod]["message_text"]);
            setMesgHeader(status["status_text"]);
            setMesgDscUp(status["status_description_up"]);
            setMesgDscDown(status["status_description_down"]);
            setVixClosePrice(lastClosePrice);
            setHeaderColor(status["status_color"]);
            setDialColor(status["color_hash"]);
            setStatusColor(GetRiskColor(data[selectedPeriod]["message_status"]));
            setBdOpen(false);
        } else if (data === false) {
            setBdOpen(false);
            setPopupMessage("Unable to show the data. Please try again later");
            setPopupTitle("ERROR");
            setAlertType("ERROR");
            setPopupState(true);
        } else if (data === 0) {
            setBdOpen(false);
            setPopupState(true);
            setPopupTitle("ERROR");
            setAlertType("ERROR");
            setPopupMessage(
                "This is a technology preview. The service is not available during some market data updates. Please try again in 30 minutes."
            );
        }
    }, [data, selectedPeriod]);


    return (
        <>
            {/* <PageLoader bdopen={bdopen} /> */}
            <CustomPopup
                trigger={popupState}
                setTrigger={setPopupState}
                title={popupTitle}
                content={popupMessage}
                alertType={alertType}
            />
              <div className="risk-cell bg-dots_bg bg-cover bg-center bg-no-repeat py-6 sm:py-[50px] lg:py-[64px]">
                <div className="container">
                    <div className="banner bg-dots_bg bg-cover bg-center bg-no-repeat ">
                    <div className="container">
                        <div class="inner">
                            <div class="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
                                <div class="hero-left w-full flex justify-start flex-col items-start text-left">
                                    <div class="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                                        <h1 class="text-h1 text-black font-ivy font-semibold">
                                           Secure Your Portfolio with Confidence. 
                                        </h1>
                                        <p>Market Shield provides advanced risk management solutions designed to protect your investments through intelligent strategies and real-time insights. </p>
                                    </div>
                                    <div class="button-area flex flex-wrap justify-start items-start lg:gap-12 gap-4 lg:mt-16 md:mt-8 mt-4">
                                        <div class="btn-link">
                                            <a href="#" role="link">Explore Market Shield Today</a>
                                        </div>
                                        <div class="btn-green">
                                            <a href="#" role="link">Sign up Today!</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    </div>
                <VixDial VixClosePrice={addZeroes(Number(parseFloat(VixClosePrice).toFixed(2)))}
                headerColor={headerColor}
                MesgHeader={MesgHeader}
                DialColor={DialColor} />

                
                <div className="weatherstat flex max-w-[1024px] flex-col justify-center items-center text-center mx-auto my-6">
                    <div className="stat !text-h3 !font-medium">
                        <h3>Risk Weather is <span style={headerColor}>{MesgHeader}</span></h3>
                    </div>
                    <p>
                        <span>
                            {MesgDscUp}<br></br>{MesgDscDown} <a className="ai-link !underline !text-blue !font-bold" href="#faq1">Learn more</a>.
                        </span>
                    </p>
                </div>

                <div className="sectiondivide sectioncol ptsec pb0">
                    <div className="sec-title flex justify-between items-center font-bold gap-6">
                        <h3 class="sec-head small left text-h3 text-blue flex-1 mb-4">CBOE Volatility Index (VIX) Chart</h3>
                        <span className="indicator text-h3 text-blue">{addZeroes(Number(parseFloat(VixClosePrice).toFixed(2)))}</span>
                    </div>
                </div>
                <div className="sectiondivide sectioncol ptsec pt0">
                    <div className="duration flex lg:gap-8 gap-3 flex-wrap">
                        {option.map((value, i) => (
                            <button className={selectedPeriod === value.value ? "selected" : ""}
                                value={value.value}
                                key={i}
                                onClick={(event) => changePeriod(event.target.value, value.content)}>{value.label}</button>
                        ))}
                    </div>
                    <div className="GraphHolder">
                        {GraphData.length === 0 ?
                            (<></>
                            ) : (
                                <VIXGraph GraphData={vixData} />
                            )}
                    </div>
                    <br/>
                    <div className="weatherstat warning *:text-blue *:italic">
                        <p>All price quotes as of market close. Most recent price quote is for previous trading day</p>
                    </div>
                    <div className="weatherstat part2 flex flex-col justify-start">
                        <h4 className="text-h4 font-medium text-black mt-7 mb-3">Risk weather is <span>{MesgStatus?.toLowerCase()}</span> relative to {selectedPeriodContent} ago.</h4>
                        <p>{MesgContent}</p>
                    </div>
                    <div className="signupalert p-8 bg-white flex flex-col items-center mb-6 shadow-[1px_10px_60px_rgba(0,0,0,0.06)]" id="setalert">
                        <h3 className="text-h3 font-bold mb-2">Set an alert now</h3>
                        <p>We will tell you when Market Risk changes straight to your inbox.</p>
                        <div className="reminder my-3 md:flex-row flex-col">
                            <h4 className="font-bold">Daily Updates</h4>
                            <p>Receive daily email about VIX movement and its effect on protection costs</p>
                            <label class="checkcon">
                                <input type="checkbox" name="dailyUpdates" defaultChecked={updates.dailyUpdates} onChange={(e) => handleUpdatesChange(e)} />
                                <span class="checkmark absolute top-0 left-0 h-6 w-6 box-border rounded-md border border-solid border-black-100"></span>
                            </label>
                        </div>
                        <div className="reminder md:flex-row flex-col">
                            <h4 className="font-bold">Status UPDATES</h4>
                            <p>Receive an email when the Risk Weather status changes</p>
                            <label class="checkcon">
                                <input type="checkbox" name="statusUpdates" defaultChecked={updates.statusUpdates} onChange={(e) => handleUpdatesChange(e)} />
                                <span class="checkmark absolute top-0 left-0 h-6 w-6 box-border rounded-md border border-solid border-black-100"></span>
                            </label>
                        </div>
                        <AddUser singupFor="risk" updates={updates} onChange={changePropsStatus} buttonText="Get Risk Alerts" />
                    </div>
                    <div className="text-center">
<p>This is NOT investment advice. Consult a licensed broker for options trading information and approvals.</p>
                    </div>
                    
                </div>
           </div> 
        </div> 
        </>
    );
}

export default React.memo(RiskWeather);