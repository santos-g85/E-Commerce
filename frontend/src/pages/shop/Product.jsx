import React, { useContext } from 'react';
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

export const Product = (props) => {
    const {id,thumbnail,images,title,description,price} = props.data;

    return (
    <Card key={id} className="w-96">
    <CardHeader shadow={false} floated={false} className="h-96">
      <img
        src={thumbnail ? thumbnail : images}
        alt="product-image"
        className="h-full w-full object-cover"
      />
    </CardHeader>
    <CardBody>
      <div className="mb-2 flex items-center justify-between">
        <Typography color="blue-gray" className="font-medium">
          {title}
        </Typography>
        <Typography color="blue-gray" className="font-medium">
          {price}
        </Typography>
      </div>
      <Typography
        variant="small"
        color="gray"
        className="font-normal opacity-75"
      >
        {description}
      </Typography>
    </CardBody>
    <CardFooter className="pt-0">
      <Button
        onClick={()=>addToCart(id)}
        ripple={false}
        fullWidth={true}
        className="bg-blue-500 text-white shadow-none hover:bg-blue-600 focus:bg-blue-700 active:bg-blue-800"
      >
        Add to Cart
      </Button>
    </CardFooter>
  </Card>
  )
}
