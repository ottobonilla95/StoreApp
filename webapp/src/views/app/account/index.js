import React, { useEffect } from "react";

// router
import { Route } from "react-router-dom";

// semantic ui react
import { Menu, Grid, Segment } from "semantic-ui-react";

// redux
import { connect } from "react-redux";

// router
import { NavLink } from "react-router-dom";

// components
import BasicInfoAccountPlaceHolder from "../../../components/placeholder/BasicInfoAccountPlaceHolder";

// actions
import {
  changeName,
  changeEmail,
  changePassword,
  deleteAccount,
  getUserInfo,
} from "../../../redux/account/actions";

// react-i18next
import { useTranslation } from "react-i18next";

// routes
const BasicInfo = React.lazy(() => import("./BasicInfo"));
const Security = React.lazy(() => import("./Security"));
const AccountConfiguration = React.lazy(() => import("./AccountConfiguration"));

const Account = (props) => {
  const { t } = useTranslation();

  useEffect(() => {
    props.getUserInfo();
  }, []);

  return (
    <>
      <Grid>
        <Grid.Column width={4}>
          <Menu fluid vertical tabular>
            <NavLink
              className="item"
              to={`${props.match.path}/basicinfo`}
              activeClassName="active"
            >
              {t("modules.account.basic-info.itemlabel", "Basic Info")}
            </NavLink>
            <NavLink
              className="item"
              to={`${props.match.path}/security`}
              activeClassName="active"
            >
              {t("modules.account.security.itemlabel", "Security")}
            </NavLink>
            <NavLink
              className="item"
              to={`${props.match.path}/account`}
              activeClassName="active"
            >
              {t("modules.account.account.itemlabel", "Account")}
            </NavLink>
          </Menu>
        </Grid.Column>

        <Grid.Column stretched width={12}>
          <Segment>
            <Route path={`${props.match.path}/basicinfo`}>
              {props.account.accounBasictInfo && (
                <BasicInfo
                  ChangeName={props.changeName}
                  ChangeEmail={props.changeEmail}
                  account={props.account}
                />
              )}
              {!props.account.accounBasictInfo && (
                <BasicInfoAccountPlaceHolder />
              )}
            </Route>
            <Route path={`${props.match.path}/security`}>
              <Security
                ChangePassword={props.changePassword}
                account={props.account}
              />
            </Route>
            <Route path={`${props.match.path}/account`}>
              <AccountConfiguration
                deleteAccount={props.deleteAccount}
                account={props.account}
              />
            </Route>
          </Segment>
        </Grid.Column>
      </Grid>
    </>
  );
};

const mapStateToProps = (state) => {
  return { account: state.account };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserInfo: () => dispatch(getUserInfo()),
    changeName: (newName) => dispatch(changeName(newName)),
    changeEmail: (newEmail) => dispatch(changeEmail(newEmail)),
    changePassword: (newPassword) => dispatch(changePassword(newPassword)),
    deleteAccount: () => dispatch(deleteAccount()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
