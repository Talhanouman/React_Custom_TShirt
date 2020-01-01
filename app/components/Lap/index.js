import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './Wrapper';
import Dflex from './Dflex';
import Parent from './Parent';
import Center from './Center';
import BlBK from './BlBK';
import RedBK from './RedBK';
import Flex from './Flex';
import Content from './Content';
import Icon from './Icon';
import Notes from '../../assets/icons/Notes.png';
import Sleeve from '../../assets/icons/Sleeve.png';
import Save from '../../assets/icons/Save.png';
import Next from '../../assets/icons/Next.png';
import NextArrow from '../../assets/icons/NextArrow.png';
import Button from './Button';
import NextLink from './NextLink';
import Border from './Border';
import Label from './Label';
import CommonButton from './CommonButton';
import First from './First';

function Lap({ onSaveMyDesign, onNextStep, onAddNotes }) {
  return (
    <Wrapper>
      <div className="Lap">
        <Content>
          <Dflex>
            <Flex>
              <Border>
                <Center>
                  <Parent>
                    <Button onClick={onAddNotes}>
                      <Icon>
                        <img src={Notes} alt="Notes" />
                      </Icon>
                      <div className="title">
                        <Label>ADD Notes</Label>
                      </div>
                    </Button>
                  </Parent>
                </Center>
              </Border>
            </Flex>
            <Flex>
              <Center>
                <Parent>
                  <Button>
                    <Icon>
                      <img src={Sleeve} alt="Sleeve" />
                    </Icon>
                    <div className="title">
                      <Label>Sleeve</Label>
                    </div>
                  </Button>
                </Parent>
              </Center>
            </Flex>
          </Dflex>
          <Dflex>
            <Flex>
              <Center>
                <Parent>
                  <BlBK>
                    <Button onClick={onSaveMyDesign}>
                      <CommonButton>
                        <First>
                          <Icon>
                            <img src={Save} alt="Save" />
                          </Icon>
                        </First>
                        <div className="title">
                          <Label>Save</Label>
                        </div>
                      </CommonButton>
                    </Button>
                  </BlBK>
                </Parent>
              </Center>
            </Flex>
            <Flex>
              <Center>
                <Parent>
                  <RedBK>
                    <Button onClick={onNextStep}>
                      <CommonButton>
                        <First>
                          <Icon>
                            <img src={Next} alt="Next" />
                          </Icon>
                        </First>
                        <div className="title">
                          <Label>Next Step</Label>
                          <NextLink>
                            <img src={NextArrow} alt="NextArrow" />
                          </NextLink>
                        </div>
                      </CommonButton>
                    </Button>
                  </RedBK>
                </Parent>
              </Center>
            </Flex>
          </Dflex>
        </Content>
      </div>
    </Wrapper>
  );
}
Lap.propTypes = {
  onSaveMyDesign: PropTypes.func,
  onNextStep: PropTypes.func,
  onAddNotes: PropTypes.func,
};

export default Lap;
