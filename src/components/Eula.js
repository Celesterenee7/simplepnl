import React from 'react';
import { Link } from 'react-router-dom';
import MegHeader from './MegHeader';
import EulaText from './EulaText';
import { EulaContainer, EulaHeader, EulaButton, EulaButtonContainer, EulaFadeContainer } from '../styles/components';


function Eula() {
  return (
    <EulaContainer>
      <MegHeader />
      <EulaHeader>End-User License Agreement (&quot;EULA&quot;)</EulaHeader>
      <EulaText />
      <EulaButtonContainer>
        <Link to="/reports">
          <EulaButton>
            <span className="EulaButtonGo">I Agree</span>
          </EulaButton>
        </Link>
      </EulaButtonContainer>
      <EulaFadeContainer />

      <style>
        {
          `

          .EulaButtonReady {
            font-size: 1rem;
            font-weight: 500;
          }

          .EulaButtonGo {
            font-size: 1rem;
            font-weight: 800;
          }

          `
        }
      </style>
    </EulaContainer>
  );
}

export default Eula;
