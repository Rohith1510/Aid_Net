import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, Gift, Users } from 'lucide-react';

const TokenCard = () => {
  return (
    <div className="min-h-screen bg-black p-8 flex items-center justify-center">
      <Card className="max-w-md w-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-0.5 rounded-2xl">
        <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-black p-6 h-full">
          <CardHeader className="space-y-1 px-0">
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text">
                AidNet Token (ANT)
              </CardTitle>
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                <Gift className="h-5 w-5 text-white" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6 px-0">
            {/* Token Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5">
                <p className="text-sm text-gray-400">Current Value</p>
                <p className="text-xl font-bold text-white">1000000.67 ANT</p>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-white/5">
                <p className="text-sm text-gray-400">24h Change</p>
                <div className="flex items-center space-x-1">
                  <TrendingUp className="h-4 w-4 text-green-400" />
                  <p className="text-xl font-bold text-green-400">+5.2%</p>
                </div>
              </div>
            </div>

            {/* Contribution Metrics */}
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 border border-white/5">
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-purple-400" />
                  <div>
                    <p className="text-sm text-gray-400">Total Contributors</p>
                    <p className="text-lg font-semibold text-white">12,458</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-400">Last 24h</p>
                  <p className="text-lg font-semibold text-green-400">+123</p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Button 
                className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white border-0"
              >
                Claim Rewards
              </Button>
              <Button 
                variant="outline" 
                className="border border-white/10 hover:bg-white/5 text-white"
              >
                View History
              </Button>
            </div>

            {/* Additional Info */}
            <div className="text-sm text-gray-400 text-center">
              Rewards are distributed based on contribution value and community impact
            </div>
          </CardContent>
        </div>
      </Card>
    </div>
  );
};

export default TokenCard;