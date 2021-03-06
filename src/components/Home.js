import React from 'react';
import { connect } from 'react-redux';
import { MainContainer, HomeHeader, HomeText, SignIn } from '../styles/components';
import MegHeader from './MegHeader';
import OAuth from './OAuth';

function Home({ currentUser, isSignedIn }) {
  console.log(isSignedIn);
  return (
    <MainContainer>
      <MegHeader />
      <HomeHeader>
        {' '}
        {currentUser ? `Welcome back, ${currentUser}!` : 'Hello there!'}{' '}
      </HomeHeader>
      <HomeText>
        {`
        SIMPLEPNL is a simple tool designed for all of you gig slingers to
        quickly organize your bank statements into different categories. It's
        free to use and it can help you maximize your tax benefits!`}
      </HomeText>
      <SignIn>
        {isSignedIn ? <OAuth /> : <OAuth />}
      </SignIn>
    </MainContainer>
  );
}

const mapStateToProps = (state) => ({
  isSignedIn: state.oauthReducer.isSignedIn,
  currentUser: state.oauthReducer.currentUser,
});

export default connect(mapStateToProps)(Home);
