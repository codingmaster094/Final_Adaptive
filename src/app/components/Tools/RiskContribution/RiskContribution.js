'use client'
import React, { useState } from 'react';
import { FetchRiskContribution } from "@/app/api/FetchRiskContribution";
import CustomPopup from "@/app/components/Popup/Popup";
import AddUser from "@/app/components/AddUser/AddUser";
import TagManager from "react-gtm-module";
import { addZeroes } from "@/app/utilites/AddZeros";
import { portfolios } from "@/app/utilites/Constants";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import RiskContributionFAQ from './RiskContributionFAQ';
import RiskContributionGraph from '@/app/components/Tools/RiskContributionGraph/RiskContributionGraph';
import PageLoader from '@/app/components/PageLoader/PageLoader';
import TooltipComponent from '@/app/components/TooltipComponent/TooltipComponent';

function RiskContribution({ initPortfolio, initPortfolioValue }) {

    var currObj = {
        style: "currency",
        currency: "USD",
    };

    const [Flag, setFlag] = React.useState(false);
    const [bdopen, setBdOpen] = React.useState(true);
    const [GotData, setGotData] = React.useState(false);
    const [popupState, setPopupState] = React.useState(false);
    const [popupMessage, setPopupMessage] = React.useState("");
    const [alertType, setAlertType] = React.useState("");
    const [popupLoginRedierct, setPopupLoginRedirect] = React.useState(false);
    const [riskCOntributionTableData, setRiskCOntributionTableData] = React.useState([]);
    const [riskCOntributionGraphData, setRiskCOntributionGraphData] = React.useState([]);
    const [riskPortfolioKeyList, setRiskPortfolioKeyList] = React.useState([]);
    const [PortfolioMarketValue, setPortfolioMarketValue] = React.useState(0);
    const [PortfolioRisk, setPortfolioRisk] = React.useState(0);
    const [portfolio, setPortfolio] = React.useState(initPortfolio);
    const [FormatPortfolioValue, setFormatPortfolioValue] = React.useState(initPortfolioValue);
    const [PortfolioRows, setPortfolioRows] = React.useState([]);
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [show4, setShow4] = useState(false);
    const [totalIndividualRiskContribution, setTotalIndividualRiskContribution] = React.useState(0);
    const [maxNormalizedRisk, setMaxNormalizedRisk] = React.useState();
    const [minNormalizedRisk, setMinNormalizedRisk] = React.useState();
    const [HistoricalRisk, setHistoricalRisk] = React.useState(0);
    const [IndexRisk, setIndexRisk] = React.useState();
    const [selectedIndex, setSelectedIndex] = React.useState();
    const [selectedVixTicker, setSelectedVixTicker] = React.useState();

    const changePortfolio = (event) => {
        console.log(event.target.value)
        if (event.target.value === "") {
            setPopupState(true);
            setPopupMessage("Please select valid portfolio");
            setAlertType("warning");
            return;
        }
        setPortfolio(event.target.value);
        setBdOpen(true);
        setGotData(false);
        fetchRiskContribute(event.target.value, FormatPortfolioValue);
    };

    // async function GetPortfolioTable(data) {
    //     console.log(data)
    //     try {
    //         var lyst = [];
    //         for (let [key, value] of Object.entries(data)) {
    //             lyst.push({
    //                 symbol: key,
    //                 name: value["Name"],
    //                 weight: value["Allocation"],
    //                 mutual_fund_ticker: value["mutual_fund_ticker"],
    //                 mutual_fund_name: value["mutual_fund_name"],
    //             });
    //         }
    //         setPortfolioRows([...lyst])
    //     } catch (e) {
    //         console.log(e.message);
    //     }
    // }

    const totalSums = riskCOntributionTableData.reduce((acc, curr) => {
        acc.marketValue += curr.market_value;
        acc.marketWeight += (curr.market_value / PortfolioMarketValue) * 100;
        acc.marketContribution += curr.market_contribution;
        acc.idiosyncraticContribution += curr.idiosyncratic_portion;
        acc.totalRiskContribution += curr.risk_contributions;
        acc.diversifiedRisk += curr.isolated_risk;
        return acc;
    }, { marketValue: 0, marketWeight: 0, marketContribution: 0, idiosyncraticContribution: 0, totalRiskContribution: 0, diversifiedRisk: 0 });


    const fetchRiskContribute = (portfolio_name, portfolio_value) => {
        setBdOpen(true);
        FetchRiskContribution(portfolio_name, portfolio_value).then((data) => {
            const vix_data = data.result.graph_data['vix']['6mo']['closeprice'];
            const vix_value = parseFloat(vix_data[vix_data.length - 1]).toFixed(2);
            let lyst = [];
            let i = 1;
            let maxNormalizedRisk = 0;
            let minNormalizedRisk = 0;
            setRiskPortfolioKeyList(Object.keys(data.result));
            for (let [key, value] of Object.entries(data.result["risk_contribution"])) {
              const normalizedRisk = (parseFloat(value["isolated_risk"] + parseFloat(value["risk_contributions"])) / data.result.portfolio_risk) * 100;
              const normalizedMarketRisk = Math.max((parseFloat(value["market_contribution"]) / data.result["portfolio_risk"]) * 100,0)
              minNormalizedRisk = Math.min(minNormalizedRisk,normalizedMarketRisk)
              maxNormalizedRisk = Math.max(maxNormalizedRisk, normalizedRisk);
              lyst.push({
                sr: i,
                symbol: key,
                position_name: value["Name"],
                market_value: value["Market Value"],
                stock_volatility: value["individual stock_volatility"],
                risk_contributions: parseFloat(value["risk_contributions"]),
                market_contribution: Math.max(parseFloat(value["market_contribution"]),0),
                isolated_risk: parseFloat(value["isolated_risk"]),
                idiosyncratic_portion: parseFloat(value["idiosyncratic_portion"]),
                vix_value: vix_value,
                TradeDate: value["TradeDate"],
                normalizedMarketRisk: Math.max((parseFloat(value["market_contribution"]) / data.result["portfolio_risk"]) * 100,0),
                normalizedIdioRisk: (parseFloat(value["risk_contributions"]) / data.result["portfolio_risk"]) * 100,
                normalizedIsoRisk: (parseFloat(value["isolated_risk"] + parseFloat(value["risk_contributions"])) / data.result["portfolio_risk"]) * 100,
              });
              i++;
            }
            lyst.sort((a, b) => (b.risk_contributions+b.idiosyncratic_portion) - (a.risk_contributions + a.idiosyncratic_portion));
            setRiskCOntributionTableData([...lyst]);
            setRiskCOntributionGraphData([...lyst.slice(0, 10)]);
            setMaxNormalizedRisk(maxNormalizedRisk)
            setPortfolioMarketValue(data.result["portfolio_market_value"]);
            setMinNormalizedRisk(minNormalizedRisk);
            setPortfolioRisk(data.result["portfolio_risk"]);
            setHistoricalRisk(data.result["historical_market_risk"]);
            console.log("vix_value", vix_value)
            setIndexRisk(vix_value);
            setTotalIndividualRiskContribution(data.result['total_individual_risk_contribution']);
            // setTimeout(() => {
            //   captureAndDispatchData('Data Available', data, lyst ,data.result["historical_market_risk"], data.result["portfolio_risk"],data.result["portfolio_market_value"],vix_all_data);
            // }, 1000);
            const formattedVixTicker = `${data.result["vix_ticker"].slice(1)} [${data.result["selected_index"]} Volatility]`;
            setSelectedIndex(data.result["selected_index"]);
            setSelectedVixTicker(formattedVixTicker);
            setBdOpen(false);
        });
    }

    if (Flag === false) {
        setFlag(true);
        fetchRiskContribute(portfolio, FormatPortfolioValue);
    }

    return (
        <>
            {/* <PageLoader bdopen={bdopen} /> */}
            <CustomPopup
                trigger={popupState}
                setTrigger={setPopupState}
                title="Run Forward Test"
                alertType={alertType}
                content={popupMessage}
                loginRedirect={popupLoginRedierct}
            />
            <div className="risk-cell bg-dots_bg bg-cover bg-center bg-no-repeat">
                <div className="container">
                     <div className="banner bg-dots_bg bg-cover bg-center bg-no-repeat py-6 sm:py-[50px] lg:py-[64px]">
                    <div className="container">
                        <div className="inner">
                            <div className="inner-content flex flex-col lg:flex-row lg:space-y-0 space-y-[56px]">
                                <div className="hero-left w-full flex justify-start flex-col items-start text-left">
                                    <div className="hero-text sm:space-y-8 space-y-4 text-h5 font-inter text-black-100">
                                        <h1 className="text-h1 text-black font-ivy font-semibold">
                                           Secure Your Portfolio with Confidence. 
                                        </h1>
                                        <p>Market Shield provides advanced risk management solutions designed to protect your investments through intelligent strategies and real-time insights. </p>
                                    </div>
                                    <div className="button-area flex flex-wrap justify-start items-start lg:gap-12 gap-4 lg:mt-16 md:mt-8 mt-4">
                                        <div className="btn-link">
                                            <a href="#" role="link">Explore Market Shield Today</a>
                                        </div>
                                        <div className="btn-green">
                                            <a href="#" role="link">Sign up Today!</a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div> 
                    <div className="space-y-6">
                        <div className="sectiondivide pb0 sectioncol">
                        <div className="duration inputs">
                            <div className="flex flex-col gap-2 w-fit">
                                <label className='text-blue uppercase font-semibold'>Portfolio</label>
                                <select
                                    value={portfolio}
                                    onChange={changePortfolio}
                                    className="input-mui-lg border border-solid border-black-200 rounded-md p-4 bg-white-100 cursor-pointer w-[80%]"
                                >
                                    {portfolios.map((value, i) => (
                                        <option key={i} value={value.name}>{value.value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="sectiondivide pb0 sectioncol pt0i">
                        <div className="riskhead p0i">
                            <h2 className='text-blue text-h3 font-bold flex justify-start items-center md:flex-1 flex-[100%]'>Top 10 Risk Contribution</h2>
                            <div className="riskstate">
                                <h3 id="portfoliorisk" className="text-green text-h2 font-medium">{PortfolioRisk.toFixed(2)}</h3>
                                <div className="lblrisk">Portfolio Volatility
                                    <TooltipComponent id={'Portfolio Risk'} />
                                </div>
                            </div>
                            <div className="riskstate">
                                <h3 id="portfoliorisk" className="text-green text-h2 font-medium">{HistoricalRisk.toFixed(2)}</h3>
                                <div className="lblrisk">Index Volatility
                                    <>
                                        &nbsp;<img src="/img/risk-info.png" title={`Historical ${selectedIndex} Volatility`}></img>
                                    </>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sectiondivide pb0 sectioncol pt0i">
                        <div className="portfolio-table contributio-table">
                            {/* <div className='riskmodes'>
                                <div><span className='risk'></span>Risk Contribution 
                                    <TooltipComponent id={"Risk Contribution"}></TooltipComponent>
                                </div>
                                <div><span className='position'></span>Position Risk 
                                    <TooltipComponent id={"Position Risk"}></TooltipComponent>
                                </div>
                                <div><span className='vix'></span>VIX 
                                    <TooltipComponent id={"VIX"}></TooltipComponent>
                                </div>
                            </div> */}
                            {/* <img src="/app/Assets/riskchart.png" /> */}
                            <div className="riskchart">
                                <p className='chartlbl left'>Annualized Volatility</p>
                                <RiskContributionGraph
                                    data={riskCOntributionGraphData}
                                    maxNormalizedRisk={maxNormalizedRisk}
                                    minNormalizedRisk={minNormalizedRisk}
                                    totals={{
                                        marketContributionTotal: parseFloat(totalSums.marketContribution.toFixed(3)),
                                        idiosyncraticPortionTotal: parseFloat(totalSums.idiosyncraticContribution.toFixed(4)),
                                        isolatedRiskTotal: parseFloat(totalSums.diversifiedRisk.toFixed(3))
                                    }}
                                />
                                <p className='chartlbl right'>Pct Of Portfolio Volatility</p>
                            </div>
                            <div className="table_holder table_head risk">
                                <h3 className="flex text-body text-purple p-4 bg-[#F4DFF0] justify-between items-center font-medium" onClick={() => setShow(!show)}>Portfolio Details {show && <span className="minus border border-solid w-6 h-6 border-purple rounded-full flex justify-center items-center">-</span>} {!show && <span className="border border-solid w-6 h-6 border-purple rounded-full flex justify-center items-center">+</span>}</h3>
                                {show &&
                                    <TableContainer className="table_height mt-2">
                                        <Table stickyHeader aria-label="sticky table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell size="small">#</TableCell>
                                                    <TableCell>Symbol</TableCell>
                                                    <TableCell>Position Name</TableCell>
                                                    <TableCell>Stock Volatility
                                                        {/* <TooltipComponent id={'Stock Volatility'} /> */}
                                                    </TableCell>
                                                    <TableCell>Market Value</TableCell>
                                                    <TableCell>Market Weight</TableCell>
                                                    <TableCell>Market Contribution</TableCell>
                                                    <TableCell>Idiosyncratic Contribution</TableCell>
                                                    <TableCell>Total Risk Contribution </TableCell>
                                                    <TableCell>Diversified Risk</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            
                                            {/* <TableBody>
                                                {riskCOntributionTableData.map((value) => (
                                                    <TableRow key={value.sr}>
                                                        <TableCell>{value.sr}</TableCell>
                                                        <TableCell>{value.symbol}</TableCell>
                                                        <TableCell>{value.position_name}</TableCell>
                                                        <TableCell>{(value.stock_volatility).toFixed(2)}</TableCell>
                                                        <TableCell>
                                                            {Number(
                                                                addZeroes(Number(parseFloat(value.market_value).toFixed(2)))
                                                            ).toLocaleString("en-US", currObj)}
                                                        </TableCell>
                                                        <TableCell>{((value.market_value / PortfolioMarketValue) * 100).toFixed(2)}%</TableCell>
                                                        <TableCell>{value.market_contribution}</TableCell>
                                                        <TableCell>{value.idiosyncratic_portion}</TableCell>
                                                        <TableCell>{value.risk_contributions}</TableCell>
                                                        <TableCell>{value.isolated_risk}</TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody> */}
                                            <TableFooter>
                                                <TableRow>
                                                    <TableCell colSpan="3">Portfolio Total:</TableCell>
                                                    <TableCell></TableCell>
                                                    <TableCell>{Number(
                                                        addZeroes(Number(parseFloat(PortfolioMarketValue).toFixed(2)))
                                                    ).toLocaleString("en-US", currObj)}</TableCell>
                                                    <TableCell>100 %</TableCell>
                                                    <TableCell>{totalSums.marketContribution.toFixed(3)}</TableCell>
                                                    <TableCell>{totalSums.idiosyncraticContribution.toFixed(4)}</TableCell>
                                                    <TableCell>{Number(parseFloat(PortfolioRisk).toFixed(3))} </TableCell>
                                                    <TableCell>{totalSums.diversifiedRisk.toFixed(3)}</TableCell>
                                                </TableRow>
                                            </TableFooter>
                                        </Table>
                                    </TableContainer>
                                }
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
           
        </>
    );
}

export default React.memo(RiskContribution);
