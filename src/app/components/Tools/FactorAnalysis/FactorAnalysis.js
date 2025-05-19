import React, { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableFooter from '@mui/material/TableFooter';
import CustomPopup from "@/app/components/Popup/Popup";
import TagManager from "react-gtm-module";
import { addZeroes } from "@/app/utilites/AddZeros";
import { portfolios } from "@/app/utilites/Constants";
import PageLoader from '@/app/components/PageLoader/PageLoader';
import { FetchFactorAnalysis } from "@/app/api/FetchFactorAnalysis";
import PortfolioDetailsTable from "@/app/components/PortfolioDetailsTable/PortfolioDetailsTable";
import TooltipComponent from '@/app/components/TooltipComponent/TooltipComponent';

function FactorAnalysis({initPortfolio,initPortfolioValue,version}) {

    var currObj = {
        style: "currency",
        currency: "USD",
    };

    const [portfolio, setPortfolio] = React.useState(initPortfolio);
    const [show, setShow] = useState(true);
    const [show1, setShow1] = useState(true);
    const [show2, setShow2] = useState(true);
    const [faqshow,setfaqShow] = useState(false);
    const [faqshow2,setfaqShow2] = useState(false);
    const [faqshow3,setfaqShow3] = useState(false);
    const [faqshow4,setfaqShow4] = useState(false);
    const [Flag, setFlag] = React.useState(false);
    const [bdopen, setBdOpen] = React.useState(false);
    const [GotData, setGotData] = React.useState(false);
    const [popupState, setPopupState] = React.useState(false);
    const [popupMessage, setPopupMessage] = React.useState("");
    const [alertType, setAlertType] = React.useState("");
    const [FATable, setFATable] = React.useState([]);
    const [FactorTable, setFactorTable] = React.useState([]);
    const [HedgeableData, sethedgeabledata] = React.useState([]);
    const [UnhedgeableData, setunhedgeabledata] = React.useState([]);
    const [tabletabvalue, setTableTabValue] = React.useState("Hedgeable Assets");
    const [factortabvalue, setFactorTabValue] = React.useState("Factor Analysis");
    const [R2Benchmark, setR2Benchmark] = React.useState(0);
    const [R2Factor, setR2Factor] = React.useState(0);
    const [BetaBenchmark, setBetaBenchmark] = React.useState(0);
    const [BetaFactor, setBetaFactor] = React.useState([]);
    const [TEBenchmark, setTEBenchmark] = React.useState(0);
    const [TEFactor, setTEFactor] = React.useState(0);
    const [R2BenchmarkNum, setR2BenchmarkNum] = React.useState(25);
    const [R2FactorNum, setR2FactorNum] = React.useState(25);
    const [PortfolioTotalValue, setPortfolioTotalValue] = React.useState(Number(
        addZeroes(
            Number(parseFloat(initPortfolioValue).toFixed(2))
        )
        ).toLocaleString("en-US", currObj));
    const [FormatPortfolioValue, setFormatPortfolioValue] = React.useState(initPortfolioValue);
    const [DisableRunButton, setDisableRunButton] = React.useState(true);
    const [PortfolioRows, setPortfolioRows] = React.useState([]);
    const [ApiCount, setApiCount] = React.useState(0);
    const [showTooltip, setShowTooltip] = useState(false);


    const changePortfolio = (event) => {
        if (event.target.value === "") {
            setPopupState(true);
            setPopupMessage("Please select valid portfolio");
            setAlertType("warning");
            return;
        }
        setPortfolio(event.target.value);
        setBdOpen(true);
        setGotData(false);
        fetchFactorAnalysis(event.target.value,FormatPortfolioValue)
    };

    function changeValue(event, value) {
      let trimmedValue = value.trim();
      if (event.key === "Enter") {
        setShowTooltip(false);
            if (trimmedValue === "") {
                setPopupMessage(
                    "Please enter a valid value to proceed further."
                );
                setAlertType("ERROR");
                setPopupState(true);
                return;
            } else {
              let float_value = parseFloat(value.replace(/,/g, ''));
              if (float_value === 0 || isNaN(float_value)) {
                  setBdOpen(false);
                  setPopupMessage(
                      "Please enter a valid value to proceed further."
                  );
                  setAlertType("ERROR");
                  setPopupState(true);
                  return;
              }
            setBdOpen(true);
            setFormatPortfolioValue(float_value);
            setPortfolioTotalValue((Number(
                addZeroes(
                    Number(parseFloat(float_value).toFixed(2))
                )
            ).toLocaleString("en-US", currObj)));
            fetchFactorAnalysis(portfolio,float_value);
        }
      }
    }

    function handleChangeValue(event, value) {
        let text = event.target.value.replace(/[^\d\.]/gi, '');
        let lastCharIsAdot = text.substr(text.length - 1, 1) === ".";

        if (isNaN(text) || text === "0") {
            event.target.classList.remove('valid');
            event.target.classList.add('invalid');

        } else if (event.target.value === "") {
            setPortfolioTotalValue("");
        }
        else {
            event.target.classList.remove('invalid');
            event.target.classList.add('valid');
            event.target.value = Number(text).toLocaleString("en-US");
            if (lastCharIsAdot) event.target.value += ".";
            setPortfolioTotalValue(event.target.value);
            let float_value = parseFloat(event.target.value.replace(/,/g, ''));
            setFormatPortfolioValue(float_value);
        }
        setShowTooltip(true);
    }

    function GetPortfolioTable(data) {
        try {
            var portfolio_lyst = [];
            for (let [key, value] of Object.entries(data)) {
                portfolio_lyst.push([
                    value.Ticker,
                    value.Name,
                    value.Allocation,
                    value.mutual_fund_ticker,
                    value.mutual_fund_name,
                    Number(addZeroes(Number(parseFloat(value['Market Value']).toFixed(2)))).toLocaleString("en-US", currObj)
                ]);
            }
            setPortfolioRows([...portfolio_lyst])
        } catch (e) {
        }
    }

    const fetchFactorAnalysis = (portfolio, FormatPortfolioValue) => {
        setBdOpen(true);
        FetchFactorAnalysis(portfolio, FormatPortfolioValue).then((data) => {
          if (data !== false && data !== 0 && data !== undefined && data !== 401) {
            setGotData(true);
            setFATable(data['factor_analysis']);
            setFactorTable(data['factor']);
            sethedgeabledata(data['recognised']);
            setunhedgeabledata(data['unrecognised']);
            setR2Benchmark(data['r2_benchmark'] === "N.A." ? data['r2_benchmark'] : (data['r2_benchmark'] * 100).toFixed(2) + "%");
            setR2BenchmarkNum(data['r2_benchmark'] * 100);
            setR2Factor(data['r2_factor'] === "N.A." ? data['r2_factor'] : (data['r2_factor'] * 100).toFixed(2) + "%");
            if (data['r2_factor'] !== 'N.A.') {
              console.log('data', data['r2_factor'])
              setR2FactorNum(data['r2_factor'] * 100);
            }
            setBetaBenchmark(parseFloat(data['beta_benchmark']).toFixed(2));
            formatBetaFactor(data['beta_factor']);
            setTEBenchmark(data['te_benchmark'] === "N.A." ? data['te_benchmark'] : (data['te_benchmark'] * 100).toFixed(2) + "%");
            setTEFactor(data['te_factor'] === "N.A." ? data['te_factor'] : (data['te_factor'] * 100).toFixed(2) + "%");
            GetPortfolioTable(data["recognised"]);
            TagManager.dataLayer({
              dataLayer: {
                event: 'User used Factor Analytics',
                selectedPortfolio: portfolio
              },
            });
            setBdOpen(false);
          } else if (data === false) {
            setBdOpen(false);
            setPopupState(true);
            setPopupMessage(
              "Unable to fetch data"
            );
            setAlertType("error");
          } else if (data === 0 || data === undefined) {
            setBdOpen(false);
            setPopupState(true);
            setPopupMessage(
              "We are facing issues connecting our servers, please try again later"
            );
            setAlertType("error");
            return;
          }
        });
      }

      if (Flag === false) {
        setFlag(true);
        fetchFactorAnalysis(portfolio, FormatPortfolioValue);
        }

      function handleTableTabChange(tabletabvalue) {
        setTableTabValue(tabletabvalue);
      }
    
      function handleFactorTableTabChange(tabletabvalue) {
        setFactorTabValue(tabletabvalue);
      }
    
      const headers = ["", "Portfolio", "Benchmark", "Factor"];
      const factor_headers = ["#", "Factor", "Weight", "Category"];
    
      const formatBetaFactor = (value) => {
        const formattedValue = value.split(',').map((num) => parseFloat(num).toFixed(2)).join(', ');
        setBetaFactor(formattedValue);
      };
    
      const updatedData = Object.entries(FATable).map(([key, value]) => {
        const updatedValue = Object.entries(value).reduce((acc, [k, v]) => {
          const newKey = k === "imp_vol" ? "Implied Volatility" : k === "hist_vol" ? "Historical Volatility" : k === "symbol" ? "Symbol" : k;
          if (newKey === "Implied Volatility" || newKey === "Historical Volatility") {
            v = v === "N.A." ? "N.A." : (parseFloat(v) * 100).toFixed(2) + "%";
          }
          return { ...acc, [newKey]: v };
        }, {});
        const newValue = { Symbol: value.Symbol || portfolio, ...updatedValue }
        return { [key]: newValue };
      });
    
      const uniqueKeys = Array.from(new Set(updatedData.flatMap(obj => Object.keys(obj[Object.keys(obj)[0]]))));
    
    
      const TwoCircles = ({ apart = 22 }) => {
        const svgWidth = 200;
        const circleRadius = 40;
    
        const circle1X = (svgWidth - apart) / 2;
        const circle2X = (svgWidth - apart) / 2 + apart;
    
        return (
          <svg width={svgWidth} height="100" xmlns="http://www.w3.org/2000/svg">
            <circle cx={circle1X} cy="45" r={circleRadius} fill="#60034c" stroke="#666666" strokeWidth="5" />
            <circle cx={circle2X} cy="45" r={circleRadius} fill="#60034c" stroke="#666666" strokeWidth="5" />
            <path
              d={`M${circle1X},45
                  m-${circleRadius},0
                  a${circleRadius},${circleRadius} 0 1,0 ${circleRadius * 2},0
                  a${circleRadius},${circleRadius} 0 1,0 -${circleRadius * 2},0
                  M${circle2X},45
                  m-${circleRadius},0
                  a${circleRadius},${circleRadius} 0 1,1 ${circleRadius * 2},0
                  a${circleRadius},${circleRadius} 0 1,1 -${circleRadius * 2},0`}
              fill="#ffffff"
              fill-rule="evenodd"
            />
          </svg>
        );
      };
    
    return (
        <>
            <PageLoader bdopen = {bdopen} />
            <CustomPopup
                trigger={popupState}
                setTrigger={setPopupState}
                title="Factor Analysis"
                content={popupMessage}
                alertType={alertType}
            />
            <div className="sectiondivide pb0 section-col">
                <div className="duration inputs">
                    <div>
                        <label>Model Portfolio <TooltipComponent id={"Model Portfolio"}></TooltipComponent></label>
                        <select type="text"
                            value={portfolio}
                            className="input-mui-lg"
                            onChange={changePortfolio}>
                            {portfolios.map((value, i) => (
                                <option key={i} value={value.name}>{value.value}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label>Portfolio Value <TooltipComponent id={"Portfolio Value"}></TooltipComponent></label>
                        <div className="input-container">
                            <input type="text" className="input-gray" placeholder=""
                                required
                                onChange={handleChangeValue}
                                // onChange={(event) => setPortfolioTotalValue(event.target.value)}
                                value={PortfolioTotalValue}
                                onKeyUp={(event) =>
                                    changeValue(event, event.target.value)
                                }
                            />
                            {showTooltip && <div className="custom-tooltip">Please hit Enter to proceed</div>}
                        </div>
                    </div>
                </div>
            </div>
            {GotData && (
                <>
                <div className="sectiondivide pb0 section-col">
                <div className="risk-cont portfolio_page-holder factoranalysis">
                <div className='factorexposure'>
                  <div className="portfolio-table contributio-table factortbl1">
                    <div className="table_holder table_head">
                      <div className="tabheader">
                        <ul className="subnavbar-menu fixed">
                          <li>
                            <a className={factortabvalue === "Factor Analysis" ? "SUBITEM-selected " : "SUBITEM"} onClick={() => handleFactorTableTabChange('Factor Analysis')}>Factor Analysis </a>
                          </li>
                          <li>
                            <a className={factortabvalue === "Factor" ? "SUBITEM-selected" : "SUBITEM"} onClick={() => handleFactorTableTabChange('Factor')}>Factor</a>
                          </li>
                        </ul> {show && <span onClick={() => setShow(!show)} className="minus">-</span>} {!show && <span onClick={() => setShow(!show)}>+</span>}
                      </div>
                      {show &&
                        <>
                          {factortabvalue === "Factor Analysis" &&
                            <TableContainer className="table_height">
                              <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                  <TableRow>
                                    {headers.map((header, index) => (
                                      <TableCell key={index}>{header}</TableCell>
                                    ))}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {uniqueKeys.map((key, index) => (
                                    <TableRow key={index}>
                                      <TableCell>{key}</TableCell>
                                      {updatedData.map((obj, i) => {
                                        const subObj = obj[Object.keys(obj)[0]];
                                        return <TableCell key={i}>{subObj[key]}</TableCell>;
                                      })}
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                              <TableFooter>
                                <TableRow>
                                </TableRow>
                              </TableFooter>
                            </TableContainer>
                          }
                          {factortabvalue === "Factor" &&
                            <TableContainer className="table_height">
                              <Table stickyHeader aria-label="sticky table">
                                <TableHead>
                                  <TableRow>
                                    {factor_headers.map((header, index) => (
                                      <TableCell key={index}>{header}</TableCell>
                                    ))}
                                  </TableRow>
                                </TableHead>
                                <TableBody>
                                  {Object.values(FactorTable).map((item, index) => (
                                    <TableRow key={item.number}>
                                      <TableCell>{index + 1}</TableCell>
                                      <TableCell>{item.Ticker}</TableCell>
                                      <TableCell>{(parseFloat(item.Weight) * 100).toFixed(2) + "%"}</TableCell>
                                      <TableCell>{item.Description}</TableCell>
                                    </TableRow>
                                  ))}
                                </TableBody>
                              </Table>
                              <TableFooter>
                                <TableRow>
                                </TableRow>
                              </TableFooter>
                            </TableContainer>
                          }
                        </>
                      }
                    </div>
                  </div>
                  <div className="portriskgrid">
                    <h3 onClick={() => setShow1(!show1)}>Benchmark & Factor Analysis {show1 && <span className="minus">-</span>} {!show1 && <span>+</span>}</h3>
                    {show1 &&
                      <div className='errorgrid'>
                        <div className='trackingerror'>
                          <h3>Benchmark Portfolio</h3>
                          <TwoCircles apart={(100 - R2BenchmarkNum)} />
                          <div className='errolist'>
                            <div className='tagspan'>
                              <h4>R-Squared</h4>
                              <span className='tag primary'>{R2Benchmark}</span>
                            </div>
                            <div className='tagspan'>
                              <h4>Tracking Error</h4>
                              <span className='tag secondary'>{TEBenchmark}</span>
                            </div>
                            <div className='tagspan'>
                              <h4>Beta</h4>
                              <span className='tag gray'>{BetaBenchmark}</span>
                            </div>
                          </div>
                        </div>
                        <div className='trackingerror'>
                          <h3>Factor Portfolio</h3>
                          <TwoCircles apart={100 - R2FactorNum} />
                          <div className='errolist'>
                            <div className='tagspan'>
                              <h4>R-Squared</h4>
                              <span className='tag primary'>{R2Factor}</span>
                            </div>
                            <div className='tagspan'>
                              <h4>Tracking Error</h4>
                              <span className='tag secondary'>{TEFactor}</span>
                            </div>
                            <div className='tagspan'>
                              <h4>Beta</h4>
                              <span className='tag gray'>{BetaFactor}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    }
                  </div>
                </div>
                </div>
                </div>
                <div className="sectiondivide pt0 pb0 section-col">
                    <PortfolioDetailsTable PortfolioRows={PortfolioRows} />
                </div>
                </>
            )}
        </>
    )
}
export default React.memo(FactorAnalysis);