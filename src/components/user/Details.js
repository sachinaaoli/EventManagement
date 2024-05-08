
import React from "react";
import { useAppContext } from "../ContextApi";
import { Button, Rate } from "antd";
import TextArea from "antd/es/input/TextArea";
import OurServices from "./dashboard/OurServices";

const Details = () => {
  const { appState } = useAppContext();
  console.log(appState);
  return (
    <div>
      <div className="flex justify-evenly">
        <div>
          <img src={appState?.data.image} alt="Product" className="h-80" />
        </div>
        <section className="mt-3">
          <div>{appState?.data?.name} </div>
          <div className="text-blue-300 font-bold">
            {appState?.data?.discription}{" "}
          </div>
          <div className="font-bold gap-x-2">price:{appState?.data?.price} </div>
          <div className="font-bold gap-x-2">brand:{appState?.data?.brand} </div>
          <div className="gap-x-2"> stock: {appState?.data?.stock} </div>
          <div className="gap-x-2">view: {appState?.data?.view} </div>
          <div>
            {" "}
            <Rate allowHalf defaultValue={4.5} />
          </div>
          <TextArea />
          <Button className="bg-blue-800 text-white "> Buy Now</Button>

          <Button className="bg-black text-white "> Add to Card</Button>
        </section>
      </div>
      <div>
        <OurServices/>
      </div>
    </div>
  );
};

export default Details;