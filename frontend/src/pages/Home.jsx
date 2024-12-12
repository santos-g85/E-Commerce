import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";

const Home = () => {
  const [products, setProduct] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      if (data && data.products) {
        setProduct(data.products);
      }
      console.log(data.products);
    } catch (error) {
      console.log("error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="grid  gap-x-14 gap-y-10 grid-cols-4  px-10 mx-auto max-w-screen">
      {products.map((product) => (
        <Card key={product.id} className="w-96">
          <CardHeader shadow={false} floated={false} className="h-96">
            <img
              src={product.thumbnail ? product.thumbnail : product.images}
              alt="product-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <div className="mb-2 flex items-center justify-between">
              <Typography color="blue-gray" className="font-medium">
                {product.title}
              </Typography>
              <Typography color="blue-gray" className="font-medium">
                {product.price}
              </Typography>
            </div>
            <Typography
              variant="small"
              color="gray"
              className="font-normal opacity-75"
            >
              {product.description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              ripple={false}
              fullWidth={true}
              className="bg-blue-500 text-white shadow-none hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800"
            >
              Add to Cart
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Home;
