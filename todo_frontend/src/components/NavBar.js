import React from "react";

/**
 * PUBLIC_INTERFACE
 * NavBar provides icon-based and tab-based navigation for the todo view.
 */
function NavBar({ currentTab, onTabChange }) {
  return (
    <div className="nav-bar">
      <button className={`nav-icon${currentTab === "all" ? " active" : ""}`}>
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a23ebc39-fd24-4242-9b59-ce325d4044f6"
          alt="Playlist"
        />
      </button>
      <button className={`nav-icon${currentTab === "completed" ? " active" : ""}`}>
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29c79191-0ca8-43fc-be66-d34401647090"
          alt="Tick"
        />
      </button>
      <span
        className={`tab all${currentTab === "all" ? " active" : ""}`}
        onClick={() => onTabChange("all")}
        style={{ cursor: "pointer" }}
      >
        All
      </span>
      <span
        className={`tab completed${currentTab === "completed" ? " active" : ""}`}
        onClick={() => onTabChange("completed")}
        style={{ cursor: "pointer" }}
      >
        Completed
      </span>
    </div>
  );
}

export default NavBar;
