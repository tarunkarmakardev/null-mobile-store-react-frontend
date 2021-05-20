import React, { Component } from "react";
import MenuButton from "./MenuButton";
import NavButton from "./NavButton";
import NavLinkItem from "./NavLinkItem";
import NavText from "./NavText";

export default class NavBar extends Component {
  state = {
    openMenu: false,
  };
  renderLinks = () => {
    const {
      signInState: { isSignedIn },
    } = this.props;
    return (
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {isSignedIn && <NavLinkItem to="/admin" name="Admin" />}

        <NavLinkItem to="/listing" name="Listing" />
      </ul>
    );
  };
  renderButtons = () => {
    const {
      signInState: { isSignedIn, data },
      requestSignOut,
    } = this.props;
    return (
      <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">
        {isSignedIn ? (
          <>
            <NavText text={`Hello, ${data.current_user}`} />
            <NavButton name="Sign Out" onClick={() => requestSignOut()} />
          </>
        ) : (
          <>
            <NavButton to="/signup" name="Sign Up" />
            <NavButton to="/signin" name="Sign In" />
          </>
        )}
      </ul>
    );
  };
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand">Mobile Store</span>
          <MenuButton
            onClick={() => this.setState({ openMenu: !this.state.openMenu })}
          />
          <div
            className={`collapse navbar-collapse ${
              this.state.openMenu && "show"
            }`}
          >
            {this.renderLinks()}
            {this.renderButtons()}
          </div>
        </div>
      </nav>
    );
  }
}
