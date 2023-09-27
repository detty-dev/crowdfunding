import { useEffect, useState } from "react";
import { useConnection } from "../context/connection";
import { Contract, ethers } from "ethers";
import { campaignCA } from "../utils";
import { abi } from "../utils/abi";

const useCampaign = () => {
  const [allCampaigns, setAllCampaigns] = useState([]);
  const [fetched, setFetched] = useState(false);

  const provider = new ethers.BrowserProvider(window.ethereum);

  const { isActive } = useConnection();
  const crowFundContract = new Contract(campaignCA, abi, provider);

  const getCampaignCount = async () => {
    try {
      const result = await crowFundContract.id();
      return ethers.formatUnits(result, 0);
    } catch (error) {}
  };
  const getCampaigns = async (count) => {
    try {
      const d = [];
      for (let index = 1; index <= count[0]; index++) {
        const result = await crowFundContract.crowd(index);
        d.push(result);
      }
      return d;
    } catch (error) {}
  };

  const getAll = async () => {
    Promise.all([getCampaignCount()])
      .then((count) => getCampaigns(count))
      .then((data) => {
        setAllCampaigns(data);
        setFetched(true);
        console.log(data[0]);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    if (!isActive || !provider) {
      return;
    }
    if (!fetched) {
      getAll();
    }
  }, [isActive, provider]);

  return allCampaigns;
};

export default useCampaign;
