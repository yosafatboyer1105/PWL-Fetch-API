import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Container, Carousel, Button, ButtonGroup } from "react-bootstrap";
import Loaders from "../../Utilities/loaders";


const Collection = () => {
  const [datas, setDatas] = useState([]);
  const [limit, setLimit] = useState(5);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isCancel = false
    if(isCancel === false) {
      setLoading(true)
      
      console.log(process.env.REACT_APP_BASEURL);
      Axios({
        method: "GET",
        url: `${process.env.REACT_APP_BASEURL}/photos?_limit=${limit}`,
      }).then((result) => setDatas(result.data)).catch((err) => console.log(err)).finally(() => setLoading(false));
    }
    
    //cleanup render
    return () => { isCancel = true }
  }, [limit]);

  const handleLimit = (option) => {
    option === "+" ? setLimit((prev) => prev + 1) : setLimit((prev) => prev - 1)
  }

  if (loading) {
    return(
      <Loaders/>
    )
  }

  console.log(datas[0]);
  return (
    <div>
      <React.Fragment>
        <Container className="mt-2">
            <h3>{limit} collection</h3>
          <Carousel>
            {datas.map((data, i) => {
              return (
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={data.url}
                    alt="First slide"
                    height={450}
                    width={450}
                  />
                  <Carousel.Caption>
                    <h3>{data.title}</h3>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}

            {/* carousel items end */}
          </Carousel>
          <ButtonGroup className="d-flex justify-content-center align-items-center mt-2">
            <Button className="btn btn-outline-success" onClick={() => handleLimit("+")}>+</Button>
            {limit > 1 &&
              <Button className="btn btn-outline-danger" onClick={() => handleLimit("-")}>-</Button>
            }
          </ButtonGroup>
        </Container>
      </React.Fragment>
    </div>
  );
};

export default Collection;
