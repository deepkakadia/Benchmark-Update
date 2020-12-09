import React, { Component } from "react";

import Table from "./OutputTable";
import NavBarHome from "./NavBar/NavBarHome";

class Submit extends Component {
  state = {
    data: [],
  };

  render() {
    return (
      <div>
        <NavBarHome />
        
        <Table
          data={this.state.data}
          header={[
            {
              name: "First name",
              prop: "firstName",
            },
            {
              name: "Last name",
              prop: "lastName",
            },
            {
              name: "Email",
              prop: "email",
            },
          ]}
        />{" "}
      </div>
    );
  }
}

export default Submit;
