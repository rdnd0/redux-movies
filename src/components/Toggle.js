import React from "react";
import { connect } from "react-redux";
import { toggleMessage, getMovies } from "../actions";
import { bindActionCreators } from "redux";

const Toggle = ({ messageVisibility, toggleMessage, getMovies }) => {
  return (
    <div>
      {messageVisibility && <p>available if redux action is toggled</p>}
      <button onClick={toggleMessage}>Toggle Me</button>
      <button onClick={getMovies}>Get movies</button>
    </div>
  );
};

//include dispatch in a function so the code gets clearner, we can add as many actions as we have here

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      toggleMessage,
      getMovies
    },
    dispatch
  );

//pick which items from the store go into the component

const mapStateToProps = state => ({
  messageVisibility: state.message.messageVisibility
});

//messageVisibility is now part of the component's props

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Toggle);
