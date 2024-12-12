import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";

const LoginForm = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    useEffect(()=>{
        setName("");
        setPassword("");
    },[]);

    const handleSubmit= async (e)=>{
      e.preventDefault(); 
      console.log("Form submitted");
        try{
            const res = await fetch('https://dummyjson.com/auth/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                
                username: name,
                password: password,
                expiresInMins: 30, 
              }),
            });
            const data= await res.json();
            console.log("data:",data);

            if(data){
              localStorage.setItem("ACCESSTOKEN",data.accessToken);
              localStorage.setItem("REFRESHTOKEN",data.refreshToken);
              navigate("/home");
            }
            else{
              alert("login not successful");
              navigate("/register")
            }
        }catch(error){
          console.log("error loggin in:",error);
        }
    };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="self-center ">
        <Card  shadow={true} className="p-6 min-w-[400px] w-auto max-w-[500px]">
          <Typography variant="h4" color="blue-gray">
           Sign In 
          </Typography>
          <Typography color="gray" className="mt-1 font-normal">
            Nice to meet you! Enter your details to log in.
          </Typography>
          <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" autoComplete="off"
           onSubmit={handleSubmit}>

            <div className="mb-1 flex flex-col gap-6">              
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Name
              </Typography>
              <Input
                size="lg"
                value={name}
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Button className="mt-6" color="blue" fullWidth>
              sign in
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/register" className="font-medium text-gray-900">
                Sign Up
              </a>
            </Typography>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginForm;
