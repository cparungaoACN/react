import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../Demo.css";
import Container from "react-bootstrap/Container";

function Demo() {
  return (
    <Container className="Demo">
      <div className="p-5 mb-4 rounded-3">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">Demo</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc nisi
            ligula, rhoncus sit amet facilisis eu, scelerisque eget metus. Donec
            nec consectetur dui. Integer ut imperdiet magna. Donec volutpat
            pulvinar velit, quis consequat lacus pellentesque eu.
          </p>
          <p>
            Vestibulum ac vestibulum ex, sed gravida augue. Suspendisse potenti.
            Ut est lacus, placerat quis auctor eget, feugiat sed felis.Quisque
            quis dictum ex, a tempor quam. Vestibulum vel ornare orci.
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Demo;
