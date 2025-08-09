import React from "react";

/**
 * PUBLIC_INTERFACE
 * StatusBar component displays a typical mobile-style status bar with icons and time.
 */
function StatusBar() {
  return (
    <div className="status-bar">
      <img
        className="icon"
        src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02684a85-6702-4627-9755-0d7b52a40704"
        alt="Notch"
      />
      <div className="status-bar-icons">
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/977d2ad4-c42c-4709-8d71-23e534a53986"
          alt="Network"
        />
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24d16658-3118-4cc6-97c7-bc6e7cb79148"
          alt="WiFi"
        />
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5fb7fb12-85cb-4ab2-822f-5f31cba992eb"
          alt="Battery"
        />
      </div>
      <div className="status-time">
        <img
          src="https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c3daff48-5c1b-4fa6-9e25-4b1fc9c6501d"
          alt="Time"
        />
      </div>
    </div>
  );
}

export default StatusBar;
