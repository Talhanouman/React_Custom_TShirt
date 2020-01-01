import React from 'react';
import ModuleCubeLogo from '../../../../assets/icons/ModuleCubeLogo.png';

function BottomList() {
  return (
    <div className="BottomList container_HomePage">
      <div className="row">
        <div className="col-md-3">
          <img width="50px" src={ModuleCubeLogo} alt="Moduel logo" />
        </div>
        <div className="col-md-5 align-items-center d-flex justify-content-center">
          <div className="list">
            <ul className="d-flex">
              <li>
                <a href="homePage">Shop</a>
              </li>
              <li>
                <a href="homePage">Service</a>
              </li>
              <li>
                <a href="homePage">Journal</a>
              </li>
              <li>
                <a href="homePage">About</a>
              </li>
              <li>
                <a href="homePage">Support</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-4 align-items-center d-flex justify-content-center">
          <p> &copy; 1823 — 2016 Great Simple Studio</p>
        </div>
      </div>
    </div>
  );
}

export default BottomList;
