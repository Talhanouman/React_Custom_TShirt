import React from 'react';
import Wrapper from './Wrapper';
import Dflex from './Dflex';
import Title from './Title';
import Content from './Content';
import H2 from './H2';
import Links from './Links';
import FontSize from './FontSize';
import TextArea from './TextArea';

function AddClipart() {
  return (
    <Wrapper>
      <Title>
        <H2>Add Clipart</H2>
      </Title>
      <Content>
        <div className="or">
          Or{' '}
          <Links href="home">
            <FontSize>Upload Your Own Image</FontSize>
          </Links>
        </div>
        <div className="choose">
          <p>Choose from 5000 Clipart Designs! </p>
        </div>
        <div className="textarea">
          <TextArea />
        </div>
        <Dflex>
          <div className="left">
            <Links href="home">Animals</Links>
          </div>
          <div className="right">
            <Links href="home">Games</Links>
          </div>
        </Dflex>
        <Dflex>
          <div className="left">
            <Links href="home">Designs</Links>
          </div>
          <div className="right">
            <Links href="home">Music</Links>
          </div>
        </Dflex>
        <Dflex>
          <div className="left">
            <Links href="home">Flags</Links>
          </div>
          <div className="right">
            <Links href="home">Nature</Links>
          </div>
        </Dflex>
        <Dflex>
          <div className="left">
            <Links href="home">Food</Links>
          </div>
          <div className="right">
            <Links href="home">Office</Links>
          </div>
        </Dflex>
        <Dflex>
          <div className="left">
            <Links href="home">Holidays</Links>
          </div>
          <div className="right">
            <Links href="home">Shapes</Links>
          </div>
        </Dflex>
        <Dflex>
          <div className="left">
            <Links href="home">Jobs</Links>
          </div>
          <div className="right">
            <Links href="home">Sports</Links>
          </div>
        </Dflex>
      </Content>
    </Wrapper>
  );
}

export default AddClipart;
