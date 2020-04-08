import React from 'react';
import { Link } from 'react-router-dom';

import ReportItem from './ReportItem';


function ReportsList(props){
  return (
    <div className="ReportsList">

      <div className="reportsHeader">PNL REPORTS</div>
      <div className="reportsPlus"><Link to="/newpnl"><div className="reportsPlusSign">+</div></Link></div>

      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />
      <ReportItem />

      <style>
        {
          `
          .reportsDemoSelector {
            position: absolute;
            left: 10px;

            float: left;
          }
          .ReportsList {
            color: #555555;
            background-color: white;
            border-radius: 5px;
            // overflow: hidden;
            min-height: 20vh;
            text-align: center;
            padding: 20px 50px;
          }

          .reportsHeader {
            // padding-top: 20px;
            margin: 0px;
            font-size: 25px;
            font-weight: 900;
            color: #ea475b;
            text-align: left;
            border-bottom: 2px solid #ea475b;
          }

          .reportsPlus{
            position: relative;
            top: -32px;
            left: 90%;
            background-color: #ea475b;
            width: 60px;
            height: 60px;
            border-radius: 100%;
          }
          .reportsPlusSign {
            position: relative;
            top: -32px;
            font-weight: 200;
            color: #e9f5fb;
            font-size: 82px;
          }

          `
        }
      </style>
    </div>
  );
}

export default ReportsList;