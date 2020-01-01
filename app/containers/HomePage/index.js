/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Card from './components/Card/index';
import BKColor from './BK_Color';
import GrayColor from './GrayColor';
import Shirt from '../../images/shirt.png';
import ShowCardHover from './components/ShowCardHover/index';
import H4 from './H4';
import Footer from '../../components/Footer/index';

const key = 'home';

export function HomePage({ username, onSubmitForm }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="UModo homepage" />
      </Helmet>
      <BKColor>
        <div className="container_HomePage mt-3">
          <div className="Design_Your_Custom pt-5 mb-4">
            <h2 className="text-center font-weight-light">
              Design Your Own Custom T-Shirt Online With No Minimums
            </h2>
            <GrayColor className="text-center font-weight-light">
              Enjoy Excellent quality & Free Shipping
            </GrayColor>
          </div>
          <div className="ChooseTshirt">
            <div className="title">
              <H4 className="text-center pt-4 ml-5">
                Choose Your T-shirt Color
              </H4>
            </div>
            <div className="row">
              <div className="col-md-6 text-center">
                <img width="100%" src={Shirt} alt="Shirt" />
              </div>
              <div className="col-md-6 text-center">
                <div className="Select">
                  <h5 className="text-left">Select the color you like:</h5>
                </div>
                <div className="DesignButton">
                  <button type="button" className="btn btn-primary">
                    Design Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="Commuinty_Choice">
            <div className="title">
              <h4 className="text-center pt-4 mb-4 font-weight-bold">
                Community Choice
              </h4>
            </div>
            <div className="content">
              <div className="row">
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
                <div className="col-md-3 text-center">
                  <Card
                    title="Leica X2 APS-C Compact Camera"
                    type="Black"
                    price="499"
                  />
                  <ShowCardHover />
                </div>
              </div>
            </div>
          </div>
        </div>
      </BKColor>
      <Footer />
    </div>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
