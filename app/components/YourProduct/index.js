import React from 'react';
import Wrapper from './Wrapper';
import Title from './Title';
import Content from './Content';
import H2 from './H2';
import Dflex from './Dflex';
import Right from './Right';
import Links from './Links';
import LinksParent from './LinksParent';
import LinksChild from './LinksChild';
import SelectedChild from './SelectedChild';
import PickedColors from './PickedColors';
import Text from './Text';
import LinksFont from './LinksFont';
import H4 from './H4';
import ProductImg from '../../images/ProductImg.png';

function AddClipart() {
  return (
    <Wrapper>
      <Title>
        <H2>Your Product</H2>
      </Title>
      <Content>
        <Dflex>
          <div className="left">
            <img src={ProductImg} alt="Product Img" />
          </div>
          <Right>
            <Text className="text">
              <p>
                .A100 Adult men Ultra Cotton <br />
                Tshirt By Glidan
              </p>
            </Text>
            <LinksParent>
              <LinksChild>
                <LinksFont href="#">Product Detials</LinksFont>
              </LinksChild>
              <LinksChild>
                <Links href="#">Change Product</Links>
              </LinksChild>
            </LinksParent>
          </Right>
        </Dflex>
        <div className="SelectedColors">
          <SelectedChild className="content">
            <H4>Selected Colors</H4>
          </SelectedChild>
          <PickedColors>Color Picker</PickedColors>
        </div>
      </Content>
    </Wrapper>
  );
}

export default AddClipart;
