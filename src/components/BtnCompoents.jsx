"use client";
import React from "react";
import { Button } from "./ui/button";

const BtnComponents = () => {
  return (
    <div className="flex justify-start sm:justify-center flex-wrap gap-2 items-center">
      <Button
        variant="default"
        onClick={() => {
          alert("default variant");
        }}
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        click me
      </Button>
      <Button
        variant="destructive"
        onClick={() => {
          alert("this is destructive varient");
        }}
      >
        destructive
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          alert("this is outline varient");
        }}
      >
        outline
      </Button>
      <Button
        variant="secondary"
        onClick={() => {
          alert("this is secondary varient");
        }}
      >
        secondary
      </Button>
      <Button className="px-10" size="lg">
        icons
      </Button>
      <Button className="px-10 mx-1" size="sm">
        small
      </Button>
    </div>
  );
};

export default BtnComponents;
