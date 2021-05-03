import React, { useEffect } from "react";

// redux
import { connect } from "react-redux";

// semantic-ui-react
import { Grid, Image, Item, Message } from "semantic-ui-react";

// history
import history from "../../../utils/history";

// image
import defaultImage from "../../../assets/images/defaultImage.png";
import itemImage from "../../../assets/images/item.png";

// components
import StoreDetailPlaceHolder from "../../../components/placeholder/StoreDetailPlaceHolder";
import ConfirmModal from "../../../components/modals/ConfirmModal";

// actions
import { fetchStore, deleteStore } from "../../../redux/store/actions";

// react-i18next
import { useTranslation } from "react-i18next";

const StoreDetail = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.fetchStore(props.match.params.id);
  }, []);

  const deleteStore = (id) => {
    props.deleteStore(id);
  };

  if (props.loading || !props.store) {
    return <StoreDetailPlaceHolder />;
  }

  const { id, name, description, image } = props.store;

  const renderItems = (items) => {
    if (items.length) {
      return items.map((item) => {
        return (
          <Item key={item.id}>
            {item.image && <Image size="tiny" src={item.image} rounded />}
            {!item.image && <Image size="tiny" src={itemImage} rounded />}
            <Item.Content>
              <Item.Header>{item.name}</Item.Header>
              <Item.Meta>
                <span className="price">${item.price}</span>
              </Item.Meta>
              <Item.Description>{item.description}</Item.Description>
            </Item.Content>
          </Item>
        );
      });
    } else {
      return (
        <Message>
          <Message.Header>Not items Found!</Message.Header>
          <p>This store does not have items.</p>
        </Message>
      );
    }
  };

  return (
    <>
      <Grid divided>
        <Grid.Row>
          <Grid.Column width={8}>
            {image && <Image src={image} rounded />}
            {!image && <Image src={defaultImage} rounded />}
          </Grid.Column>
          <Grid.Column width={8}>
            <h1>{name}</h1>
            <div className="ui divider"></div>

            {description}

            <h3>Items</h3>
            <div className="ui divider"></div>
            <Item.Group link>{renderItems(props.store.items)}</Item.Group>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={16}>
            <button
              className="ui button positive"
              style={{
                float: "right",
                display:
                  props.user.user_id === props.store.user_id ? "" : "none",
              }}
              onClick={() => {
                history.push(`/dashboard/app/store/edit/${props.store.id}`);
              }}
            >
              <i className="edit left icon"></i>
              {t("form.buttons.edit", "Edit")}
            </button>
            <ConfirmModal
              onAccept={() => deleteStore(props.store.id)}
              tittle="Remove Store"
              description="Are you sure you want to remove this store ?"
            >
              <button
                className="ui button negative"
                style={{
                  float: "right",
                  display:
                    props.user.user_id === props.store.user_id ? "" : "none",
                }}
              >
                <i className="trash left icon"></i>
                {t("form.buttons.delete", "Delete")}
              </button>
            </ConfirmModal>
            <button
              className="ui button"
              style={{ float: "right" }}
              onClick={() => {
                history.push(`/dashboard/app/store`);
              }}
            >
              <i className="arrow left icon"></i>
              {t("form.buttons.back", "Back")}
            </button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    store: state.store.currentStore,
    loading: state.store.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStore: (storeId) => {
      dispatch(fetchStore(storeId));
    },
    deleteStore: (storeId) => {
      dispatch(deleteStore(storeId));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StoreDetail);
