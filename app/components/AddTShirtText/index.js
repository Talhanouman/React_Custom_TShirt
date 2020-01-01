import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CounterInput from 'react-counter-input';
// import { SketchPicker } from 'react-color';
import Wrapper from './Wrapper';
import Title from './Title';
import H2 from './H2';
import Content from './Content';
import AnchorLink from './AnchorLink';
import Details from './Details';
import Dflex from './Dflex';
import Label from './Label';
import LabelIcon from './LabelIcon';
import Iconrow from './Iconrow';
import Flex from './Flex';
import Button from './Button';
import Duplicate from '../../assets/icons/Duplicate.png';
import Flipv from '../../assets/icons/Flipv.png';
import FlipH from '../../assets/icons/FlipH.png';
import { useInput, useForm } from '../Forms/hook';
import { Input } from '../Forms/input';
// import CustomColorPicker from '../CustomColorPicker';

function AddTShirtText({ onXChange }) {
  console.log(onXChange);
  // console.log(onTexttextInputInputChange);
  // const [x, setX] = useState(0);
  // const [y, setY] = useState(0);
  // const [width, setWidth] = useState(300);
  // const [angle, setAngle] = useState(0);
  // const [scaleToFit, setScaleToFit] = useState(false);
  // const [textAnchor, setTextAnchor] = useState('start');
  // const [verticalAnchor, setVerticalAnchor] = useState('start');
  // const [fontSize, setFontSize] = useState('1em');
  // const [fontFamily, setFontFamily] = useState('Arial');
  // const [lineHeight, setLineHeight] = useState('1em');
  // const [resizeSvg, setResizeSvg] = useState(true);

  const form = useForm();
  const textInput = useInput(
    {
      name: 'addText',
      label: '',
      validation: {
        maxLength: 20,
        required: true,
      },
    },
    form,
  );

  const onChange = e => {
    alert(e);
    // alert(Object.keys(textInput[name]))
    // alert(Object.keys(e))
  };

  // const handleColorChange = ({ hex }) => alert(hex);

  // const styles = {
  //   range: {
  //     marginLeft: 25,
  //     width: 275,
  //   },
  // };

  return (
    <Wrapper>
      <Title>
        <H2>Add Text</H2>
      </Title>
      <Content>
        <Form
          onSubmit={e => {
            e.preventDefault();
            if (form.isValid()) {
              console.log('submit', form.values);
            }
          }}
        >
          {textInput.value}

          <AnchorLink title="Add New Text" />
          <Input
            onChange={e => {
              onChange(e);
            }}
            {...textInput}
          />
        </Form>
        <div className="mt-3">
          <Details title="Font" type="Arial" />
          <Details title="Color" type="Black" />
          <Details title="Outline" type="None" />
        </div>
        <Dflex className="ParentCounter">
          <Flex className="text-center addborder">
            <Label>Arc</Label>
            <CounterInput
              min={0}
              max={10}
              onCountChange={count => console.log(count)}
            />
          </Flex>
          <Flex className="text-center addborder">
            <Label>Spacing</Label>
            <CounterInput
              min={0}
              max={10}
              onCountChange={count => console.log(count)}
            />
          </Flex>
        </Dflex>
        <Dflex className="ParentCounter">
          <Flex className="text-center addborder">
            <Label>Size</Label>
            <CounterInput
              min={0}
              max={10}
              onCountChange={count => console.log(count)}
            />
          </Flex>
          <Flex className="text-center addborder">
            <Label>Rotate</Label>
            <CounterInput
              min={0}
              max={10}
              onCountChange={count => console.log(count)}
            />
          </Flex>
        </Dflex>
        <Dflex>
          <Button>
            <Iconrow className="iconrow text-center">
              <div className="icon">
                <img width="20%" src={Duplicate} alt="Duplicate" />
              </div>
              <div className="title">
                <LabelIcon>DUPLICATE</LabelIcon>
              </div>
            </Iconrow>
          </Button>
          <Button>
            <Iconrow className="iconrow text-center">
              <div className="icon">
                <img width="20%" src={Flipv} alt="Flipv" />
              </div>
              <div className="title">
                <LabelIcon>PROPORTION</LabelIcon>
              </div>
            </Iconrow>
          </Button>
          <Button>
            <Iconrow className="iconrow text-center">
              <div className="icon">
                <img width="50%" src={Flipv} alt="Flipv" />
              </div>
              <div className="title">
                <LabelIcon>FLIP V</LabelIcon>
              </div>
            </Iconrow>
          </Button>
          <Button>
            <Iconrow className="iconrow text-center">
              <div className="icon">
                <img width="50%" src={FlipH} alt="FlipH" />
              </div>
              <div className="title">
                <LabelIcon>FLIP H</LabelIcon>
              </div>
            </Iconrow>
          </Button>
        </Dflex>
        {/* <CustomColorPicker
          color="orange"
          onChangeComplete={handleColorChange}
        /> */}
        {/* <div>
        x:
        <input
          type="range"
          style={styles.range}
          min="0"
          max="300"
          value={x}
          onChange={e => {
            setX(Number(e.target.value));
            onXChange(Number(e.target.value));
          }}
        />
      </div>

      <div>
        y:
        <input
          type="range"
          style={styles.range}
          min="0"
          max="200"
          value={y}
          onChange={e => setY(Number(e.target.value))}
        />
      </div>

      <div>
        width:
        <input
          type="range"
          style={styles.range}
          min="25"
          max="300"
          value={width}
          onChange={e => setWidth(Number(e.target.value))}
        />{' '}
        {width}
      </div>

      <div>
        textAnchor:
        <label>
          <input
            type="radio"
            value="start"
            onChange={e => setTextAnchor(e.target.value)}
            checked={textAnchor === 'start'}
          />{' '}
          start
        </label>
        <label>
          <input
            type="radio"
            value="middle"
            onChange={e => setTextAnchor(e.target.value)}
            checked={textAnchor === 'middle'}
          />{' '}
          middle
        </label>
        <label>
          <input
            type="radio"
            value="end"
            onChange={e => setTextAnchor(e.target.value)}
            checked={textAnchor === 'end'}
          />{' '}
          end
        </label>
      </div>

      <div>
        verticalAnchor:
        <label>
          <input
            type="radio"
            value="start"
            onChange={e => setVerticalAnchor(e.target.value)}
            checked={verticalAnchor === 'start'}
          />{' '}
          start
        </label>
        <label>
          <input
            type="radio"
            value="middle"
            onChange={e => setVerticalAnchor(e.target.value)}
            checked={verticalAnchor === 'middle'}
          />{' '}
          middle
        </label>
        <label>
          <input
            type="radio"
            value="end"
            onChange={e => setVerticalAnchor(e.target.value)}
            checked={verticalAnchor === 'end'}
          />{' '}
          end
        </label>
      </div>

      <div>
        fontSize:
        <input
          type="text"
          value={fontSize}
          onChange={e => setFontSize(e.target.value)}
        />
      </div>

      <div>
        fontFamily:
        <input
          type="text"
          value={fontFamily}
          onChange={e => setFontFamily(e.target.value)}
        />
      </div>

      <div>
        lineHeight:
        <input
          type="text"
          value={lineHeight}
          onChange={e => setLineHeight(e.target.value)}
        />
      </div>

      <div>
        angle:
        <input
          type="range"
          min="0"
          max="360"
          value={angle}
          onChange={e => setAngle(Number(e.target.value))}
        />
      </div>

      <div>
        <label>
          scaleToFit:
          <input
            type="checkbox"
            onChange={e => setScaleToFit(!scaleToFit)}
            checked={scaleToFit}
          />
        </label>
      </div>

      <div>
        <label>
          resize svg (container):
          <input
            type="checkbox"
            onChange={e => setResizeSvg(!resizeSvg)}
            checked={resizeSvg}
          />
        </label>
      </div>
     */}
      </Content>
    </Wrapper>
  );
}

AddTShirtText.propTypes = {
  onTextInputChange: PropTypes.func,
  onXChange: PropTypes.func,
  onYChange: PropTypes.func,
  onWidthChange: PropTypes.func,
  onAngleChange: PropTypes.func,
  onScaleToFitChange: PropTypes.func,
  onTextAnchorChange: PropTypes.func,
  onVerticalAnchorChange: PropTypes.func,
  onFontSizeChange: PropTypes.func,
  onFontFamilyChangeChange: PropTypes.func,
  onLineHeightChange: PropTypes.func,
  onResizeSVGChange: PropTypes.func,
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  input,
  button {
    margin: 10px;
  }
`;

export default AddTShirtText;
