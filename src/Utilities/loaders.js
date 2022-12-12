import { Spinner } from "react-bootstrap";

const Loaders = () => {
  return (
    <div className="d-flex justify-content-center align-items-center" style={{minHeight: "100vh"}}> 
      <div>
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="warning" />
      </div>
    </div>
  );
};

export default Loaders;
