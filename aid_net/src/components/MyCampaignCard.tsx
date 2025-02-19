import { client } from "@/app/client";
import Link from "next/link";
import { getContract } from "thirdweb";
import { baseSepolia } from "thirdweb/chains";
import { useReadContract } from "thirdweb/react";

type MyCampaignCardProps = {
    contractAddress: string;
};

export const MyCampaignCard: React.FC<MyCampaignCardProps> = ({ contractAddress }) => {
    const contract = getContract({
        client: client,
        chain: baseSepolia,
        address: contractAddress,
    });

    // Get Campaign Name
    const { data: name } = useReadContract({
        contract,
        method: "function name() view returns (string)",
        params: []
    });

    const { data: description } = useReadContract({
        contract,
        method: "function description() view returns (string)",
        params: []
    });

    return (
        <div className="relative flex flex-col justify-between max-w-sm p-6 rounded-lg shadow-lg overflow-hidden
        backdrop-blur-md bg-white/20 border border-white/30
        before:absolute before:inset-0 before:bg-gradient-to-br 
        before:from-purple-400/30 before:via-pink-400/30 before:to-blue-400/30">
            <div className="relative z-10">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-800">{name}</h5>
                <p className="mb-3 font-normal text-gray-700">{description}</p>
            </div>

            <Link
                href={`/campaign/${contractAddress}`}
                passHref={true}
            >
                <p className="relative z-10 inline-flex items-center px-3 py-2 text-sm font-medium text-center
          text-white bg-gradient-to-r from-blue-600 to-blue-800
          rounded-lg transition-all duration-300
          hover:from-blue-700 hover:to-blue-900
          focus:ring-4 focus:outline-none focus:ring-blue-300">
                    View Campaign
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </p>
            </Link>
        </div>
        )
};