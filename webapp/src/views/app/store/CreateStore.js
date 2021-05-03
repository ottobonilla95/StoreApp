import React from "react";

// components
import StoreForm from "./StoreForm";

// actions
import { saveStore } from "../../../redux/store/actions";

// redux
import { connect } from "react-redux";

const CreateStore = (props) => {
  const onSubmit = (storeData) => {
    storeData.user_id = props.user.user_id;
    props.saveStore(storeData);
  };
  return (
    <StoreForm
      onSubmitForm={onSubmit}
      loading={props.loading}
      newStore={true}
    />
  );
};

const mapStateToProps = (state) => {
  return { user: state.user, loading: state.store.loading };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveStore: (storeData) => {
      dispatch(saveStore(storeData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateStore);
