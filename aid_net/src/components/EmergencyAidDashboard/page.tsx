import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data - replace with your actual data
const aidData = [
    { month: 'Jan', resourcesDistributed: 1200, beneficiaries: 450, responseTime: 25 },
    { month: 'Feb', resourcesDistributed: 1800, beneficiaries: 680, responseTime: 22 },
    { month: 'Mar', resourcesDistributed: 1400, beneficiaries: 520, responseTime: 20 },
    { month: 'Apr', resourcesDistributed: 2200, beneficiaries: 820, responseTime: 18 },
    { month: 'May', resourcesDistributed: 1900, beneficiaries: 720, responseTime: 21 },
    { month: 'Jun', resourcesDistributed: 2400, beneficiaries: 920, responseTime: 19 },
];

const resourceTypes = [
    { name: 'Medical Supplies', amount: 1200 },
    { name: 'Food', amount: 2500 },
    { name: 'Water', amount: 1800 },
    { name: 'Shelter', amount: 900 },
    { name: 'Clothing', amount: 700 },
];

const EmergencyAidDashboard = () => {
    return (
        <div className="w-full space-y-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="relative overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/40 via-indigo-400/40 to-purple-400/40" />
                    <div className="relative z-10">
                        <CardHeader>
                            <CardTitle className="text-gray-800">Total Resources Distributed</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={aidData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                                    <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                                    <YAxis stroke="rgba(0,0,0,0.7)" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="resourcesDistributed" stroke="#2563eb" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </div>
                </Card>

                {/* Beneficiaries Card */}
                <Card className="relative overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/40 via-teal-400/40 to-cyan-400/40" />
                    <div className="relative z-10">
                        <CardHeader>
                            <CardTitle className="text-gray-800">Beneficiaries Reached</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={aidData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                                    <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                                    <YAxis stroke="rgba(0,0,0,0.7)" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="beneficiaries" fill="#3b82f6" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </div>
                </Card>

                {/* Response Time Card */}
                <Card className="relative overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-rose-400/40 via-pink-400/40 to-fuchsia-400/40" />
                    <div className="relative z-10">
                        <CardHeader>
                            <CardTitle className="text-gray-800">Average Response Time (minutes)</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart data={aidData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                                    <XAxis dataKey="month" stroke="rgba(0,0,0,0.7)" />
                                    <YAxis stroke="rgba(0,0,0,0.7)" />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="responseTime" stroke="#ef4444" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </div>
                </Card>

                {/* Resource Distribution Card */}
                <Card className="relative overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg md:col-span-2 lg:col-span-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/40 via-orange-400/40 to-yellow-400/40" />
                    <div className="relative z-10">
                        <CardHeader>
                            <CardTitle className="text-gray-800">Resource Distribution by Type</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={resourceTypes}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
                                    <XAxis dataKey="name" stroke="rgba(0,0,0,0.7)" />
                                    <YAxis stroke="rgba(0,0,0,0.7)" />
                                    <Tooltip />
                                    <Legend />
                                    <Bar dataKey="amount" fill="#10b981" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default EmergencyAidDashboard;