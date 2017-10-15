import React from 'react';
import PropTypes from 'prop-types';
import Col from '../../commons/col/Col';
import { translate } from 'react-polyglot';
import './VehicleDetail.scss';
import Modal from 'react-modal';
import { ModalCustomStyles } from '../../commons/modal/ModalCustomStyles';

class VehicleDetail extends React.Component {
  constructor(props) {
    super(props);

    this._openModal = this._openModal.bind(this);
    this._closeModal = this._closeModal.bind(this);

    this.state = {
      modalIsOpen: false
    };
  }

  _openModal() {
    this.setState({ modalIsOpen: true });
  }

  _closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const { t, brand, img, colors } = this.props;
    const vehicleColors = colors.map((color, index) => {
      return (
        <i className={`color-${color}`} key={index}></i>
      );
    });
    const imgBg = {
      backgroundImage: `url("${img}")`,
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      width: '100%',
      height: '100%'
    };

    return (
      <Col>
        <div className="vehicle-info" onClick={this._openModal}>
          <div className="vehicle-info-brand">
            <div className="vehicle-info-colors">{vehicleColors}</div>
            {brand}
          </div>
        </div>
        <div className="vehicle-info-img" title={brand} style={imgBg}></div>

        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this._closeModal}
          style={ModalCustomStyles}
          shouldCloseOnOverlayClick={true}
          contentLabel="Vehicle detail">
          <img src={img} title={brand} onClick={this._closeModal} style={ModalCustomStyles.modalImage} />
          <button style={ ModalCustomStyles.modalClose } onClick={this._closeModal}>{t('MODAL.CLOSE')}</button>
        </Modal>
      </Col>
    );
  }
}

VehicleDetail.propTypes = {
  t: PropTypes.func.isRequired,
  brand: PropTypes.string,
  colors: PropTypes.array,
  img: PropTypes.string
};

export default translate()(VehicleDetail);