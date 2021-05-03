import React from "react";

// semantic ui
import { Divider } from "semantic-ui-react";

// components
import ConfrimModal from "../../../components/modals/ConfirmModal";

// react-i18next
import { useTranslation } from "react-i18next";

const AccountConf = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <h3>{ t("modules.account.account.tittle", "Account")}</h3>
      <Divider />
      <ConfrimModal
        tittle="Delete Account"
        description="Are you sure you want yo delete your account!"
        onAccept={() => {
          props.deleteAccount();
        }}
      >
        <button
          className={`ui button negative ${
            props.account.loading ? "loading" : ""
          }`}
          type="submit"
          disabled={props.account.loading}
        >
          { t("modules.account.account.form.buttons.delete-account", "Delete Account")}
        </button>
      </ConfrimModal>
    </>
  );
};

export default AccountConf;
