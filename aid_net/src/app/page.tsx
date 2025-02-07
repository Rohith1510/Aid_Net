"use client";
import { baseSepolia } from "thirdweb/chains";
import { getContract } from "thirdweb";
import { CROWDFUNDING_FACTORY } from "./constants/contracts";
import { client } from "./client";
import { useReadContract } from "thirdweb/react";
import { CampaignCard } from "@/components/CampaignCard";
import HeroSection from "@/components/Herosection";

export default function Home() {

  const contract = getContract({
    client: client,
    chain: baseSepolia,
    address: CROWDFUNDING_FACTORY,
  });

  // Get all campaigns deployed with CrowdfundingFactory
  // const {data: campaigns, isLoading: isLoadingCampaigns, refetch: refetchCampaigns } = useReadContract({
  //   contract: contract,
  //   method: "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name)[])",
  //   params: []
  // });


  const { data:campaigns, isLoading: isLoadingCampaigns, refetch: refetchCampaigns } = useReadContract({
    contract: contract,
    method:
      "function getAllCampaigns() view returns ((address campaignAddress, address owner, string name, uint256 creationTime)[])",
    params: [],
  });
console.log(campaigns);

  return (
    // <main className="mx-auto max-w-7xl px-4 mt-0 sm:px-6 lg:px-8">
    <main className="mx-auto  max-w-full  mt-0 ">
      <HeroSection/>
      <div id="campaigns" className="py-10 px-4 bg-black">
        
        <h1 className="text-4xl font-bold mb-4 text-white ">Campaigns:</h1>
        <div className="grid grid-cols-3 gap-4 ">
          {!isLoadingCampaigns && campaigns && (
            campaigns.length > 0 ? (
              campaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.campaignAddress}
                  campaignAddress={campaign.campaignAddress}
                />
              ))
            ) : (
              <p>No Campaigns</p>
            )
          )}
        </div>

        
      </div>
    </main>
  );
}





