import React from "react";
import propTypes from "prop-types";
import styles from "./Filter.module.css";
import actions from "../../redux/actions";
import { connect } from "react-redux";

function Filter({ value, onChange }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          className={styles.inputFilter}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </>
  );
}

Filter.propTypes = {
  // value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  value: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (event) => dispatch(actions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
