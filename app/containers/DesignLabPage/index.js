import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Bkcolor from './Bkcolor';
import MenuItemsSelector from '../../components/MenuItemsSelector';
import Arrows from '../../components/Arrows';
import Lap from '../../components/Lap';
import TShirtReloadIcon from '../../components/TShirtReloadIcon';
import TShirt from '../../images/TShirt.svg';
import Center from './Center';
import UploadArt from '../../components/UploadArt/index';
import AddTShirtText from '../../components/AddTShirtText';
import AddClipart from '../../components/AddClipart';
import YourProduct from '../../components/YourProduct';
import SaveDesignModal from './components/modals/SaveDesignModal';
import AddTShirtSizesModal from './components/modals/AddTShirtSizesModal';
import MyProductsListingModal from './components/modals/MyProductsListingModal';
import TShirtText from '../../components/TShirtText';

export default function DesignLabPage() {
  const styles = {
    svg: {
      position: 'absolute',
      border: '1px solid #aaa',
      right: 200,
      top: 200,
    },
  };

  const [x, setX] = useState(0);
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
  // const [textInput, setTextInput] = useState('');

  const [showSaveDesignModal, setShowSaveDesignModal] = useState(false);
  const [showAddTShirtSizeModal, setShowAddTShirtSizeModal] = useState(false);
  const [showMyProductsListingModal, setShowMyProductsListingModal] = useState(
    false,
  );
  const [showYourProductMenu, setShowYourProductMenu] = useState(false);
  const [showAddTextMenu, setShowAddTextMenu] = useState(false);
  const [showClipArtMenu, setShowClipArtMenu] = useState(false);
  const [showUploadArtMenu, setShowUploadArtMenu] = useState(false);

  const onXChange = xAxisValue => {
    alert(xAxisValue);
    setX(xAxisValue);
  };

  const onTextInputChange = text => {
    alert(text);
  };

  const onSaveMyDesign = () => {
    setShowSaveDesignModal(true);
  };

  const onSaveDesignModalClose = () => {
    setShowSaveDesignModal(false);
  };

  const onNextStep = () => {
    setShowMyProductsListingModal(true);
  };
  const onProductsListingClose = () => {
    setShowMyProductsListingModal(false);
  };

  const onAddNotes = () => {
    setShowAddTShirtSizeModal(true);
  };

  const onAddTShirtSizeModalClose = () => {
    setShowAddTShirtSizeModal(false);
  };
  const handleShowYourProductMenu = () => {
    setShowYourProductMenu(true);
    setShowAddTextMenu(false);
    setShowClipArtMenu(false);
    setShowUploadArtMenu(false);
  };
  const handleShowAddTextMenu = () => {
    setShowAddTextMenu(true);
    setShowYourProductMenu(false);
    setShowClipArtMenu(false);
    setShowUploadArtMenu(false);
  };
  const handleShowClipArtMenu = () => {
    setShowClipArtMenu(true);
    setShowYourProductMenu(false);
    setShowUploadArtMenu(false);
    setShowAddTextMenu(false);
  };
  const handleShowUploadArtMenu = () => {
    setShowUploadArtMenu(true);
    setShowClipArtMenu(false);
    setShowYourProductMenu(false);
    setShowAddTextMenu(false);
  };
  return (
    <Bkcolor>
      <Helmet>
        <title>Design Lab Page</title>
        <meta name="description" content="Desgin lab of UModo" />
      </Helmet>
      <Center>
        <img width="70%" src={TShirt} alt="Tshirt" />
      </Center>

      <MenuItemsSelector
        onYourProductClick={handleShowYourProductMenu}
        onAddTextClick={handleShowAddTextMenu}
        onAddClipArtClick={handleShowClipArtMenu}
        onUploadArtClick={handleShowUploadArtMenu}
      />
      <Arrows />
      <Lap
        onSaveMyDesign={onSaveMyDesign}
        onNextStep={onNextStep}
        onAddNotes={onAddNotes}
      />
      <TShirtReloadIcon />
      <SaveDesignModal
        show={showSaveDesignModal}
        handleClose={onSaveDesignModalClose}
      />
      <AddTShirtSizesModal
        showAddTShirtSizeModal={showAddTShirtSizeModal}
        onAddTShirtSizeModalClose={onAddTShirtSizeModalClose}
      />
      <MyProductsListingModal
        showProductsListing={showMyProductsListingModal}
        onProductsListingClose={onProductsListingClose}
      />

      {showUploadArtMenu && <UploadArt />}

      {/* <AddClipart /> */}

      {/* <AddTShirtText
        onTextInputChange={onTextInputChange}
        onXChange={onXChange}
      /> */}
      {showClipArtMenu && <AddClipart />}
      {showYourProductMenu && <YourProduct />}
      {showAddTextMenu && (
        <AddTShirtText
          onTextInputChange={onTextInputChange}
          onXChange={onXChange}
        />
      )}

      <svg style={styles.svg}>
        <TShirtText
          textInput={x}
          // y={y}
          // width={width}
          // textAnchor={textAnchor}
          // verticalAnchor={verticalAnchor}
          // lineHeight={lineHeight}
          // scaleToFit={scaleToFit}
          // angle={angle}
          // style={{
          //   fontSize,
          //   fontFamily,
          // }}
          // textInput={textInput}
        />
      </svg>
    </Bkcolor>
  );
}

// DesignLabPage.propTypes = {
//   onXChange: PropTypes.func,
//   onYChange: PropTypes.func,
//   onWidthChange: PropTypes.func,
// };
