import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";

//Components
import StoreForm from "./StoreForm";

// lodash
import _ from "lodash";

// actions
import { fetchStore, updateStore } from "../../../redux/store/actions";

const EditStoreForm = (props) => {
  useEffect(() => {
    props.fetchStore(props.match.params.id);
  }, []);

  const onSubmit = (storeData) => {
    storeData.id = props.store.id;
    props.updateStore(storeData);
  };

  return (
    <StoreForm
      {...props.store}
      loading={props.loading}
      onSubmitForm={onSubmit}
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    store: state.store.currentStore,
    loading: state.store.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStore: (storeId) => {
      dispatch(fetchStore(storeId));
    },
    updateStore: (storeData) => {
      dispatch(updateStore(storeData));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditStoreForm);
