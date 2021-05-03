import React, { useState, useEffect } from "react";

// redux
import { connect } from "react-redux";

// react-router-dom
import { NavLink } from "react-router-dom";

// history
import history from "../utils/history";
// semantic-ui-react
import { Menu, Dropdown, Icon, Button } from "semantic-ui-react";

// actions
import { signInSuccess, signOut } from "../redux/auth/actions";

// components
import ErrorModal from "../components/modals/ErrorModal";

// react-i18next
import { useTranslation } from "react-i18next";

const NavMenu = (props) => {
  const { t } = useTranslation();

  if (localStorage.getItem("user") && !props.user.isLoggedIn) {
    props.signInSuccess(JSON.parse(localStorage.getItem("user")));
  }

  const onSignOut = () => {
    props.signOut();
  };

  const [errorModal, setErrorModal] = useState(false);

  useEffect(() => {
    if (props.user.loginError) {
      setErrorModal(true);
    }
  }, [props.user.loginError]);

  const closeErrorModal = () => {
    setErrorModal(false);
  };

  return (
    <>
      <ErrorModal
        Message={props.user.loginError}
        open={errorModal}
        closeErrorModal={() => {
          closeErrorModal();
        }}
      />

      <Menu inverted className="nav-menu">
        <NavLink
          className="item"
          to="/dashboard/app/home"
          activeClassName="active"
        >
          {t("modules.navbar.home", "Home")}
        </NavLink>
        <NavLink
          className="item"
          to="/dashboard/app/store"
          activeClassName="active"
        >
          {t("modules.navbar.store", "Store")}
        </NavLink>
        <Menu.Menu position="right">
          {props.user.isLoggedIn && (
            <Dropdown item text={props.user.username}>
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    history.push("/dashboard/app/account/basicinfo");
                  }}
                >
                  <Icon name="user" /> {t("modules.navbar.account", "Account")}
                </Dropdown.Item>
                <Dropdown.Item onClick={onSignOut}>
                  <Icon name="log out" />
                  {t("modules.navbar.logout", "Log out")}
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          )}

          {props.user.isLoggedIn !== true && (
            <Menu.Item>
              <Button
                primary
                onClick={() => {
                  history.push("/dashboard/user/signin");
                }}
              >
                {t("modules.navbar.signin", "Sign In")}
              </Button>
            </Menu.Item>
          )}

          {props.user.isLoggedIn !== true && (
            <Menu.Item>
              <Button
                onClick={() => {
                  history.push("/signup");
                }}
              >
                {t("modules.navbar.signup", "Sign up")}
              </Button>
            </Menu.Item>
          )}
        </Menu.Menu>
      </Menu>
      {props.children}
    </>
  );
};

const mapStateToProps = (state) => {
  return { user: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    signInSuccess: (user) => dispatch(signInSuccess(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavMenu);
