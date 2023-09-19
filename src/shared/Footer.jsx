import React from "react";

function Footer() {
  return (
    <>
      <div
        className="text-center text-white  mt-3"
        style={{ backgroundColor: "#84A0BA" }}
      >
        <div className=" container p-4 pb-0">
          <section className="">
            <p className="d-flex justify-content-center align-items-center">
              <span className="me-3 text-center">
                Thanks for visiting my github account
              </span>
            </p>
          </section>
        </div>

        <div className="text-center p-3 bg-primary">
          Copyright &copy; 2023 All right are reserved to :
          <a
            className="text-white"
            href="https://github.com/hajargithub/React-app-trainaing"
            target="_blank"
            rel="noreferrer"
          >
            Hajar's trainning
          </a>
        </div>
      </div>
    </>
  );
}

export default Footer;
