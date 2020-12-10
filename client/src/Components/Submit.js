import React, { Component } from 'react';
import FileUpload from './FileUpload';

import NavBarHome from './NavBar/NavBarHome';

class Submit extends Component {
  render() {
    return (
      <div>
        <NavBarHome />
        <FileUpload />
      </div>
    );
  }
}

export default Submit;
