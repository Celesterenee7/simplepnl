import React from 'react';
// import { Link } from 'react-router-dom';

function MegHeader(props){

  return (
    <div className="megHeader">
      <div className="megPictureDiv">
        <div className="megBubble">I'm Meg!
        </div>
      </div>

      <style>
        {`
          .megHeader {
            color: #222222;
            overflow: hidden;
            text-align: center;
          }

          .megPictureDiv {
            margin: auto;
            background: url("meg.png");
            background-size: 300px 184px;
            background-position: -100px -195px;
            height: 100px;
            width: 100px;
            border-radius: 100%;
            margin-top: 20px;
          }

          .megBubble {
            background-color: white;
            position: relative;
            left: 75px;
            top: 10px;
            border-radius: 100%;
            color: #ea475b;
            border: 3px solid #e9f5fb;
            padding: 10px;
            font-weight: 600;
            font-style: italic;
            transform: rotateZ(15deg);
          }


          `}
        </style>


      </div>
    );
  }

  export default MegHeader;
