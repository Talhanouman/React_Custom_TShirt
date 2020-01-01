import React from 'react';
import List from './component/List/index';
import BottomList from './component/BottomList/index';
import Facebook from '../../assets/icons/Facebook.png';
import Twitter from '../../assets/icons/Twitter.png';
import RSS from '../../assets/icons/RSS.png';
import Instagram from '../../assets/icons/Instagram.png';
import Google from '../../assets/icons/Google.png';
import Send from '../../assets/icons/Send.png';

function Footer() {
  return (
    <div className="footer">
      <div className="container_HomePage">
        <div className="list-items">
          <div className="row">
            <div className="col-md-3">
              <List
                title="Who We Are"
                item1="About Us"
                item2="Careers"
                item3="Feature Tour"
                item4="Presentation"
              />
            </div>
            <div className="col-md-3">
              <List
                title="Support"
                item1="Knowledge Base"
                item2="Video Guides"
                item3="Report a Bug"
                item4="Terms of Use"
              />
            </div>
            <div className="col-md-3">
              <List
                title="Contact Us"
                item1="hello@module.com"
                item2="Studio M, 4th Floor8 Lower Manchester street, M1 5QF"
                item3="+38 976 0875 9922"
              />
            </div>
            <div className="col-md-3">
              <List
                title="Newsletter"
                item1="Subscribe to the newsletter and get some crispy stuff every week."
              />
              <div className="Newsletter">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Enter your e-mail here"
                />
                <div className="Sendicon">
                  <span>
                    <img width="12px" height="12px" src={Send} alt="Facebook" />
                  </span>
                </div>
              </div>
              <div className="icons">
                <ul>
                  <li>
                    <span>
                      <img
                        width="7px"
                        height="7px"
                        src={Facebook}
                        alt="Facebook"
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        width="16px"
                        height="16px"
                        src={Twitter}
                        alt="Facebook"
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        width="14px"
                        height="14px"
                        src={RSS}
                        alt="Facebook"
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        width="14px"
                        height="14px"
                        src={Instagram}
                        alt="Facebook"
                      />
                    </span>
                  </li>
                  <li>
                    <span>
                      <img
                        width="14px"
                        height="14px"
                        src={Google}
                        alt="Facebook"
                      />
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <BottomList />
    </div>
  );
}

export default Footer;
