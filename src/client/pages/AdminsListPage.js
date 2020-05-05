import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchAdmins } from "../actions";
import requireAuth from "../components/hocs/requireAuth";

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map((admin) => (
      <li key={admin.id}>{admin.name}</li>
    ));
  }

  render() {
    return (
      <div>
        List of admins:
        <ul>{this.renderAdmins()}</ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  admins: state.admins,
});

const loadData = (store) => {
  // console.log("USerlist loading some data");
  return store.dispatch(fetchAdmins());
};

export default {
  loadData,
  component: connect(mapStateToProps, { fetchAdmins })(requireAuth(AdminsList)),
};
