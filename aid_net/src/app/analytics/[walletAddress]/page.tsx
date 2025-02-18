'use client';

import EmergencyAidDashboard from "@/components/EmergencyAidDashboard/page";
import WorldMap from "@/components/ui/world-map";

const dots = [
    {
        start: { lat: 37.7749, lng: -122.4194, label: "San Francisco" },
        end: { lat: 40.7128, lng: -74.006, label: "New York" },
    },
    {
        start: { lat: 51.5074, lng: -0.1278, label: "London" },
        end: { lat: 48.8566, lng: 2.3522, label: "Paris" },
    },
    {
        start: { lat: 20.5937, lng: 78.9629, label: "India" },
        end: { lat: 61.524, lng: 105.3188, label: "Russia" },
    },
    {
        start: { lat: -1.9403, lng: 49.8739, label: "Africa" },
        end: { lat: 25.276987, lng: 59.296249, label: "UAE" },
    },
    {
        start: { lat: 35.6762, lng: 139.6503, label: "Japan" }, // Tokyo, Japan
        end: { lat: -33.8688, lng: 159.2093, label: "Australia" }, // Sydney, Australia
    },
];

// const Analytics=()=>{

// return(
//     <div className="">
//         <h1 className="text-center text-2xl sticky">A Transparent World's Datas</h1>
//         <WorldMap dots={dots} lineColor="#ff5733" />

//         <EmergencyAidDashboard/>
//     </div>

// )
// }
// export default Analytics;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Dot {
    start: { lat: number; lng: number; label: string };
    end: { lat: number; lng: number; label: string };
}

interface AnalyticsProps {
    dots: Dot[];
}

const Analytics = () => {
    return (
        <div className="p-4">
            <h1 className="text-center font-bold text-2xl sticky mb-6">A Transparent World's Datas</h1>

            <Card className="w-full relative overflow-hidden backdrop-blur-md bg-white/30 border border-white/20 shadow-xl 
      transition-all duration-500 ">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 pointer-events-none 
        transition-opacity duration-500 " />
                <div className="relative z-10">
                    <CardHeader>
                        <CardTitle className="text-gray-800">Global Distribution Map</CardTitle>
                    </CardHeader>
                    <CardContent className="p-6">
                        <WorldMap dots={dots} lineColor="#ff5733" />
                    </CardContent>
                </div>
            </Card>

            <div className="mt-6">
                <EmergencyAidDashboard />
            </div>
        </div>
    );
};

export default Analytics;