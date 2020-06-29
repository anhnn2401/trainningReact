import React from 'react';
import { Collapse } from 'react-collapse';
import Menu from './Menu';

function Example({isOpen}) {
  return (
    <Collapse isOpened={isOpen}>
      <Menu/>
    </Collapse>
  );
}
export default Example;