import React from "react";

/**
 * PUBLIC_INTERFACE
 * AppBar shows app title and a calendar icon, styled for the TODO app.
 */
function AppBar() {
  return (
    <div className="app-bar">
      <span className="app-title">TODO APP</span>
      <img
        className="calendar-icon"
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62f55766-91f6-49e6-9934-586acd76dd3d"
        alt="Calendar"
      />
    </div>
  );
}

export default AppBar;
