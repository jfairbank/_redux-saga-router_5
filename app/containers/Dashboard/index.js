/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import makeSelectDashboard from './selectors';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { loading, services } = this.props.Dashboard;

    return (
      <div>
        {loading ?
          'Loading...' :
          `Got services. foo = ${services.foo}`
        }
      </div>
    );
  }
}

Dashboard.propTypes = {
  Dashboard: PropTypes.shape({
    loading: PropTypes.bool,
    services: PropTypes.object,
  }),
};

const mapStateToProps = createStructuredSelector({
  Dashboard: makeSelectDashboard(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
