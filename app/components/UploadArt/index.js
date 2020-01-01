import React from 'react';
import Wrapper from './Wrapper';
import Title from './Title';
import Content from './Content';
import H2 from './H2';
import H6 from './H6';
import P from './P';
import Button from './Button';
import Upload from '../../assets/icons/Upload.png';
import Img from './Img';
import GlobalStyle from '../../global-styles';

function UploadArt() {
  return (
    <Wrapper className="UploadArt">
      <Title>
        <H2>Upload Art</H2>
      </Title>
      <Content>
        <div className="all-files">
          <H6>All file types accepted</H6>
        </div>
        <div className="file-input">
          <input type="file" id="file" accept="image/*" />
          <label htmlFor="file">Browse</label>
        </div>
        <div className="upload-button">
          <Button className="btn btn-primary w-100">
            <Img width="17px" src={Upload} alt="Upload" />
            <span>upload Now</span>
          </Button>
        </div>
        <div className="description">
          <P>
            By uploading your artwork, you agree that you <br />
            take full respnsibilityand have full rights to
            <br />
            utilize the logo or mark on customized products.
          </P>
        </div>
      </Content>
      <GlobalStyle />
    </Wrapper>
  );
}

export default UploadArt;
