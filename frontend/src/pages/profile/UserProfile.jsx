import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from "@material-tailwind/react";
import { UserContext } from "../../context/UserContext";
import { NavbarSimple } from "../../components/Navbar";

const UserProfile = () => {
  const { user } = useContext(UserContext);

  return (
    <>
      <NavbarSimple />
      <div className="mt-6 ml-14">
        {user ? (
          <Card className="w-96">
            <CardHeader floated={false} className="h-80">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                alt="profile-picture"
              />
            </CardHeader>
            <CardBody className="text-center">
              <Typography variant="h4" color="blue-gray" className="mb-2">
              {user.name.firstname}<span className="ml-2">{user.name.lastname} </span>
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Username:<span className="ml-2">{user.username}
                  </span>
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Email:<span className="ml-2">{user.email}
                  </span>
              </Typography>
              <Typography
                color="blue-gray"
                className="font-medium"
                textGradient
              >
                Contact no:<span className="ml-2">{user.phone}
                  </span>
              </Typography>
            </CardBody>
          </Card>
        ) : (
          <p>Please log in to see your profile.</p>
        )}
      </div>
    </>
  );
};

export default UserProfile;

