import React from "react";
import useCampaign from "../hooks/useCampaign";
import Image from "../assets/crowdfunding.jpg";
import { shortenAccount } from "../utils";

const ListCampaign = () => {
  const campaigns = useCampaign();
  return (
    <>
      <div className="grid grid-cols-3 gap-5 max-w-[80%] mx-auto">
        {campaigns.map((item, index) => (
          <div
            key={index}
            className="border-2 border-black py-5 px-5 hover:bg-black hover:text-white"
          >
            <div className="w-full mx-auto">
              <img src={Image} className="w-full" />
            </div>
            <div className="grid gap-y-3 mt-5">
              <h1 className="text-4xl font-bold">
                {item[0]}
              </h1>
              <p className="text-2xl font-semibold">
                Owner: <span className="text-red-500 text-lg">{shortenAccount(item[2])}</span>
              </p>
              <p className="text-2xl font-semibold">
                Goal:{" "}
                <span className="text-red-500">{item[1].toString()}</span> ETH
              </p>
              <p className="text-2xl font-semibold">
                Duration:{" "}
                <span className="text-red-500">{item[3].toString()}</span>{" "}
                seconds
              </p>
              <p className="text-2xl font-semibold">
                Active:{" "}
                <span className="text-red-500">{item[4] ? "Yes" : "No"}</span>
              </p>
              <p className="text-2xl font-semibold">
                Funds:{" "}
                <span className="text-red-500">{item[5].toString()} </span>ETH
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListCampaign;
