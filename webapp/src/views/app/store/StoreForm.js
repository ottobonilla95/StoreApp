import React, { useState, useEffect } from "react";

// semantic-ui-react
import { Grid, Image, Item, Divider } from "semantic-ui-react";

// react-hook-form
import { useForm } from "react-hook-form";

// history
import history from "../../../utils/history";

// images
import defaultImage from "../../../assets/images/defaultImage.png";
import itemImage from "../../../assets/images/item.png";

// components
import PhotoUploadModal from "../../../components/modals/PhotoUploadModal";
import ItemForm from "./Item/ItemForm";

// react-i18next
import { useTranslation } from "react-i18next";

const StoreForm = (props) => {
  const { t } = useTranslation();

  const { register, handleSubmit, errors } = useForm();
  const [image, setImage] = useState(undefined);
  const [itemFormOpen, setItemFormOpen] = useState(false);
  const [item, setItem] = useState({});

  useEffect(() => {
    setImage(props.image);
  }, [props.image]);

  const saveImage = (image) => {
    setImage(image);
  };

  const onSubmit = (data) => {
    if (image !== props.image) {
      data.image = image;
    }
    props.onSubmitForm(data);
  };
  const editItem = (itemToEdit) => {
    setItemFormOpen(true);
    if (itemToEdit) {
      setItem(itemToEdit);
    } else {
      setItem({});
    }
  };

  const renderTittle = (props) => {
    if (!props.name) {
      return <h1>New</h1>;
    } else {
      return <h1>Edit</h1>;
    }
  };

  const renderItems = (items, editItem, loading) => {
    if (!items) {
      return <div></div>;
    }

    let storeItems = items.map((item) => {
      return (
        <Item key={item.id}>
          {item.image && <Item.Image size="tiny" src={item.image} rounded />}
          {!item.image && <Item.Image size="tiny" src={itemImage} rounded />}

          <Item.Content>
            <Item.Header>{item.name}</Item.Header>
            <Item.Meta>
              <span className="price">${item.price}</span>
            </Item.Meta>
            <Item.Description>{item.description}</Item.Description>
            <Item.Extra>
              <button
                onClick={() => {
                  editItem(item);
                }}
                className="ui icon button"
                type="button"
                style={{ float: "right" }}
                disabled={loading}
              >
                <i className="edit icon"></i>
              </button>
            </Item.Extra>
          </Item.Content>
        </Item>
      );
    });

    return (
      <>
        {storeItems}
        <Item>
          <Item.Content verticalAlign="middle">
            <Item.Extra>
              <button
                onClick={() => {
                  editItem();
                }}
                className="ui icon button"
                type="button"
                style={{ float: "right" }}
                disabled={loading}
              >
                {t("form.buttons.new", "New")}
                <i className="plus icon"></i>
              </button>
            </Item.Extra>
          </Item.Content>
        </Item>
      </>
    );
  };

  return (
    <>
      <ItemForm
        open={itemFormOpen}
        item={item}
        closeModal={() => {
          setItemFormOpen(false);
        }}
        storeId={props.id}
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={`ui form ${errors && "error"}`}
      >
        <Grid divided>
          <Grid.Row>
            <Grid.Column width={8}>
              <Grid celled="internally">
                <Grid.Row>
                  <Grid.Column>
                    {image && <Image src={image} rounded />}
                    {!image && <Image src={defaultImage} rounded />}
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                  <Grid.Column>
                    <PhotoUploadModal
                      tittle="Select a Photo"
                      saveImage={saveImage}
                    >
                      <button
                        className="ui icon button green"
                        type="button"
                        style={{ float: "right" }}
                        disabled={props.loading}
                      >
                        <i className="upload icon"></i>
                      </button>
                    </PhotoUploadModal>

                    <button
                      className="ui icon button negative"
                      type="button"
                      style={{ float: "right" }}
                      onClick={() => {
                        setImage("");
                      }}
                      disabled={props.loading}
                    >
                      <i className="trash icon"></i>
                    </button>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
            <Grid.Column width={8}>
              {renderTittle(props)}
              <div className="ui divider"></div>

              <div className="field">
                <label>{t("modules.store.form.label.name", "Name")}</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={props.name || ""}
                  ref={register({ required: true })}
                  disabled={props.loading}
                />
              </div>
              {errors.name && errors.name.type === "required" && (
                <div className="ui error message">
                  <div className="header">
                    {t(
                      "form.validationmessages.actionforbidden",
                      "Action forbidden"
                    )}
                  </div>
                  <p>
                    {t(
                      "form.validationmessages.requiredfield",
                      "This field is required"
                    )}
                  </p>
                </div>
              )}

              <div className="field">
                <label>
                  {t("modules.store.form.label.description", "Description")}
                </label>
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  defaultValue={props.description || ""}
                  ref={register({ required: true })}
                  disabled={props.loading}
                />
              </div>

              {errors.description && errors.description.type === "required" && (
                <div className="ui error message">
                  <div className="header">
                    {t(
                      "form.validationmessages.actionforbidden",
                      "Action forbidden"
                    )}
                  </div>
                  <p>
                    {t(
                      "form.validationmessages.requiredfield",
                      "This field is required"
                    )}
                  </p>
                </div>
              )}

              {!props.newStore && (
                <>
                  <h3>Items</h3>
                  <Divider />

                  <Item.Group link divided>
                    {renderItems(props.items, editItem, props.loading)}
                  </Item.Group>
                </>
              )}
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={16}>
              <button
                className={`ui button positive ${
                  props.loading ? "loading" : ""
                }`}
                style={{
                  float: "right",
                }}
                type="submit"
                disabled={props.loading}
              >
                {t("form.buttons.save", "Save")}
              </button>
              <button
                className="ui button"
                style={{
                  float: "right",
                }}
                onClick={() => {
                  history.push(`/dashboard/app/store`);
                }}
                disabled={props.loading}
              >
                <i className="arrow left icon"></i>
                {t("form.buttons.back", "Back")}
              </button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </form>
    </>
  );
};

export default StoreForm;
