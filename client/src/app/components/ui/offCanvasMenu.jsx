import React from 'react';
import { Offcanvas } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Menu from './menu';
import PageTitle from '../common/pageTitle';

const OffCanvasMenu = ({ show, onHide, topBarHeight }) => {
  return (
    <Offcanvas show={show} onHide={onHide}>
      <Offcanvas.Header
        className="bg-dark"
        closeButton
        closeVariant="white"
        style={{ height: topBarHeight }}
      >
        <PageTitle title="Habit Tracker" />
      </Offcanvas.Header>
      <Offcanvas.Body className="p-3 bg-dark">
        <Menu onHide={onHide} />
      </Offcanvas.Body>
    </Offcanvas>
  );
};
OffCanvasMenu.propTypes = {
  topBarHeight: PropTypes.string,
  show: PropTypes.bool,
  onHide: PropTypes.func
};

export default OffCanvasMenu;
