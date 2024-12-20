import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="mb-0 text-center">
        <div className="d-flex align-items-center justify-content-center pb-5">
          <div className="col-md-6">
            <p className="mb-3 mb-md-0">Made with ❤️ by {" "}
              <a  href="https://www.linkedin.com/in/devesh-magre-003924283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-decoration-underline text-dark fs-5" target="_blank" rel="noreferrer">Devesh Magre</a>
            </p>
            <a className="text-dark fs-4" href="https://github.com/DeveshMagre" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
