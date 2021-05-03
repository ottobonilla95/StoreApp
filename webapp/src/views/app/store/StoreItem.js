import React from "react";

// history
import history from "../../../utils/history";

// redux
import { connect } from "react-redux";

// actions
import { setCurrentStore } from "../../../redux/store/actions";

// moment
import moment from "moment";

// image
import defaultImage from "../../../assets/images/defaultImage.png";

const StoreItem = (props) => {
  const renderEditButton = () => {
    if (props.user.user_id === props.store.user_id) {
      return <i className="right floated user icon"></i>;
    }
  };
  return (
    <div
      className="ui card"
      onClick={() => {
        history.push(`store/detail/${props.store.id}`);
        props.setCurrentStore(props.store);
      }}
    >
      <div className="image">
        {props.store.image && <img src={props.store.image} alt="" />}
        {!props.store.image && <img src={defaultImage} alt="" />}
      </div>
      <div className="content">
        {renderEditButton()}

        <div className="header">{props.store.name}</div>
        <div className="description">{props.store.description}</div>
      </div>
      <div className="extra content">
        <span className="right floated">
          Created in {moment(props.store.creation_date).year()}
        </span>
        <span>
          <i className="box icon"></i>
          {props.store.items.length} Items
        </span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

export default connect(mapStateToProps, { setCurrentStore })(StoreItem);
