import React from 'react';
import Navbar from '../NavBar/Navbar';
import Logout from '../common/Logout';
import Name from '../common/Name';

const walletData = {
    totalRTBalance: '1,250.00',
    rtToBTT: '500.00',
    bttBalance: '1,000.00',
    totalBTTWithdrawal: '300.00',
    travelIncentivePoints: '200'
};

export default function Wallet() {
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-black via-blue-900 to-neonBlue text-white relative overflow-hidden">
            <div className='absolute top-6 left-4'>
                <Name />
            </div>
            <div className='absolute top-6 right-4'>
                <Logout />
            </div>

            <div className="flex-grow p-4">
                <div className="flex justify-center items-center mt-10">
                    <div className="bg-gradient-to-r from-blue-800 to-blue-500 p-4 rounded-lg text-center text-neonBlue shadow-xl animate-bounce">
                        <h1 className="text-3xl font-bold animate-text">Wallet Overview</h1>
                    </div>
                </div>

                <div className="mt-10 flex justify-center">
                    <div className="w-full max-w-4xl bg-gradient-to-b from-blue-700 to-blue-500 p-6 rounded-lg shadow-xl">
                        <table className="w-full table-auto text-center">
                            <thead>
                                <tr>
                                    <th className="py-4 px-6 text-xl font-semibold text-neonBlue">Category</th>
                                    <th className="py-4 px-6 text-xl font-semibold text-neonBlue">Amount</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(walletData).map(([key, value], index) => (
                                    <tr key={index} className={`animate-slide-in ${index % 2 === 0 ? 'bg-blue-800' : 'bg-blue-700'}`}>
                                        <td className="py-4 px-6 text-lg">{formatLabel(key)}</td>
                                        <td className="py-4 px-6 text-lg">{value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <div className="mb-8">
                <Navbar />
            </div>
        </div>
    );
}

function formatLabel(key) {
    const labels = {
        totalRTBalance: 'Total RT Balance',
        rtToBTT: 'RT to Swap for BTT',
        bttBalance: 'Bittoken (BTT) Balance',
        totalBTTWithdrawal: 'Total BTT Withdrawal',
        travelIncentivePoints: 'Travel Incentive Points'
    };
    return labels[key] || key;
}
