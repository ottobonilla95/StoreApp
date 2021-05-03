import React, { useEffect } from "react";

// react-hook-form
import { useForm, Controller } from "react-hook-form";

// semantic ui
import { Form, Input } from "semantic-ui-react";

// redux
import { connect } from "react-redux";

// actions
import { sendConfirmationEmail } from "../../../redux/auth/actions";

// react-i18next
import { useTranslation } from "react-i18next";

// history
import history from "../../../utils/history";

const ResendConfirmationEmail = (props) => {
  // react-i18next
  const { t } = useTranslation();

  // form
  const { handleSubmit, errors, control } = useForm();

  const onSubmit = (data) => {
    props.sendConfirmationEmail({ userData: data });
  };

  return (
    <div className="form-container">
      <h2>{t("modules.resendemail.tittle", "Resend confirmaion email")}</h2>
      <div className="ui divider"></div>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          as={
            <Form.Field
              control={Input}
              label={t("modules.resendemail.form.label.email", "Email")}
              placeholder={t("modules.resendemail.form.label.email", "Email")}
              disabled={props.user.loading}
              error={
                errors.email && {
                  content: errors.email.message,
                  pointing: "below",
                }
              }
            />
          }
          name="email"
          control={control}
          rules={{
            required: t(
              "form.validationmessages.requiredfield",
              "This field is required"
            ),
          }}
          defaultValue=""
        />
        <Controller
          as={
            <Form.Field
              control={Input}
              label={t("modules.resendemail.form.label.password", "Password")}
              placeholder={t(
                "modules.resendemail.form.label.password",
                "Password"
              )}
              disabled={props.user.loading}
              type="password"
              error={
                errors.password && {
                  content: errors.password.message,
                  pointing: "below",
                }
              }
            />
          }
          name="password"
          control={control}
          rules={{
            required: t(
              "form.validationmessages.requiredfield",
              "This field is required"
            ),
            minLength: { value: 8, message: "Minlength is 8" },
          }}
          defaultValue=""
        />
        <div style={{ textAlign: "center" }}>
          <button
            className={`ui button positive ${
              props.user.loading ? "loading" : ""
            }`}
            style={{ marginTop: "6px" }}
            type="submit"
            disabled={props.user.loading}
          >
            {t("modules.resendemail.form.buttons.sendemail", "Send Email")}
          </button>
          <button
            type="button"
            className="ui button"
            onClick={() => {
              history.push("/dashboard/user/signin");
            }}
            disabled={props.user.loading}
          >
            {t("form.buttons.back", "Back")}
          </button>
        </div>
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendConfirmationEmail: (userData) =>
      dispatch(sendConfirmationEmail(userData)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ResendConfirmationEmail);
