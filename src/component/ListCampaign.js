import React from "react";
import useCampaign from "../hooks/useCampaign";
import Image from "../assets/crowd.jpeg";

const ListCampaign = () => {
  const campaigns = useCampaign();
  return (
    <>
      <h1 className="text-7xl text-red-500 text-center font-bold underline mb-8">
        Campaigns
      </h1>
      <div className="grid grid-cols-3 gap-5 max-w-[80%] mx-auto">
        {campaigns.map((item, index) => (
          <div
            key={index}
            className="border-2 border-blue-500 py-5 px-5 hover:bg-blue-500 hover:text-white"
          >
            <div className="w-full mx-auto">
              <img src={Image} className="w-full" />
            </div>
            <div className="grid gap-y-3 mt-5">
              <h1 className="text-5xl font-bold">
                Campaign: <br />
                <span className="text-red-500 text-4xl">{item[0]}</span>
              </h1>
              <p className="text-2xl font-semibold">
                Owner: <br />
                <span className="text-red-500 text-lg">{item[2]}</span>
              </p>
              <p className="text-2xl font-semibold">
                Funding Goal:{" "}
                <span className="text-red-500">{item[1].toString()}</span> ETH
              </p>
              <p className="text-2xl font-semibold">
                Duration Time:{" "}
                <span className="text-red-500">{item[3].toString()}</span>{" "}
                seconds
              </p>
              <p className="text-2xl font-semibold">
                Is Active:{" "}
                <span className="text-red-500">{item[4] ? "Yes" : "No"}</span>
              </p>
              <p className="text-2xl font-semibold">
                Funding Balance:{" "}
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
