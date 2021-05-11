import React, { useState, useEffect } from "react";
import Axios from "axios";
import { random, commerce, datatype } from "faker";
import { Container, Col, Row } from "reactstrap";
import CartItem from "./CartItem";

const APIKEY = "563492ad6f91700001000001a83a91b2ad994e089f2aa6334b719657"; // "INSERT_YOUR_KEY_HERE";

const URL = "https://api.pexels.com/v1/search?query=laptop&per_page=6&page=1";
const LOCAL_URL = "https://mocki.io/v1/bcc108b4-7073-4f4b-a6f4-3ae2dc2f732c";

const BuyPage = ({ addInCart }) => {
  const [product, setProduct] = useState([]);
  const fetchPhotos = async () => {
    const { data } = await Axios.get(URL, {
      headers: {
        Authorization: APIKEY,
      },
    });
    // console.log("response:", data);
    const { photos } = data;

    const allProduct = photos.map((photo) => ({
      smallImage: photo.src.medium,
      tinyImage: photo.src.tiny,
      productName: random.word(),
      productPrice: commerce.price(),
      id: random.uuid(), // datatype.uuid,
    }));

    setProduct(allProduct);
  };
  //   const fetchPhotos = async () => {
  //     const { data } = await Axios.get(LOCAL_URL);

  //     const { photos } = data;

  //     const allProduct = photos.map((photo) => ({
  //       smallImage: photo.src.medium,
  //       tinyImage: photo.src.tiny,
  //       productName: random.word(),
  //       productPrice: commerce.price(),
  //       id: random.uuid(), // datatype.uuid,
  //     }));

  //     setProduct(allProduct);
  //   };
  useEffect(() => {
    fetchPhotos();
  }, []);

  return (
    <Container>
      <h1 className="text-success text-center">Buy Page</h1>
      <Row>
        {product.map((product) => (
          <Col md={4} Key={product.id}>
            <CartItem product={product} addInCart={addInCart} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default BuyPage;
