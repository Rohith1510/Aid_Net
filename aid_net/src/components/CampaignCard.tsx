import { client } from "@/app/client";
import Link from "next/link";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";

type CampaignCardProps = {
    campaignAddress: string;
};

export const CampaignCard: React.FC<CampaignCardProps> = ({ campaignAddress }) => {
    const contract = getContract({
        client: client,
        chain: baseSepolia,
        address: campaignAddress,
    });

    // Get Campaign Name
    const {data: campaignName} = useReadContract({
        contract: contract,
        method: "function name() view returns (string)",
        params: []
    });

    // Get Campaign Description
    const {data: campaignDescription} = useReadContract({
        contract: contract,
        method: "function description() view returns (string)",
        params: []
    });

    // Goal amount of the campaign
    const { data: goal, isLoading: isLoadingGoal } = useReadContract({
        contract: contract,
        method: "function goal() view returns (uint256)",
        params: [],
    });

    // Total funded balance of the campaign
    const { data: balance, isLoading: isLoadingBalance } = useReadContract({
        contract: contract,
        method: "function getContractBalance() view returns (uint256)",
        params: [],
    });

    // Calulate the total funded balance percentage
    const totalBalance = balance?.toString();
    const totalGoal = goal?.toString();
    let balancePercentage = (parseInt(totalBalance as string) / parseInt(totalGoal as string)) * 100;

    // If balance is greater than or equal to goal, percentage should be 100
    if (balancePercentage >= 100) {
        balancePercentage = 100;
    }

    return (
            <div className="relative max-w-sm group">
            <div className="relative p-[1px] rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-400 hover:via-purple-400 hover:to-pink-400 transition-colors duration-300">

              <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

              <div className="relative flex flex-col justify-between p-6 h-full rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out bg-gradient-to-br from-black/90 to-black/80 backdrop-blur-md hover:backdrop-blur-lg group-hover:scale-[1.01]">
                <div>
                
                  {!isLoadingBalance && (
                    <div className="mb-4">
                      <div className="relative w-full h-6 bg-black/30 backdrop-blur-sm rounded-full overflow-hidden">
                        <div 
                          className="h-6 bg-gradient-to-r from-blue-500/60 to-blue-600/70 backdrop-blur-sm rounded-full flex items-center justify-end" 
                          style={{ width: `${balancePercentage?.toString()}%` }}
                        >
                          <p className="text-white text-xs px-2">${balance?.toString()}</p>
                        </div>
                        <p className="absolute top-0 right-0 text-white text-xs p-1">
                          {balancePercentage >= 100 ? "" : `${balancePercentage?.toString()}%`}
                        </p>
                      </div>
                    </div>
                  )}
                                    
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-white group-hover:text-blue-200 transition-colors duration-300">{campaignName}</h5>
                  <p className="mb-3 font-normal text-gray-300 group-hover:text-gray-200 transition-colors duration-300">{campaignDescription}</p>
                </div>
                
                
                <Link
                  href={`/campaign/${campaignAddress}`}
                  passHref={true}
                >
                  <p className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-blue-600/50 to-purple-600/50 border border-blue-500/30 rounded-lg transition-all duration-300 backdrop-blur-sm hover:from-blue-500/60 hover:to-purple-500/60 hover:border-blue-400/50 focus:ring-2 focus:outline-none focus:ring-blue-500/50">
                    View Campaign
                    <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                  </p>
                </Link>

                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>
            </div>
          </div>
    )
};