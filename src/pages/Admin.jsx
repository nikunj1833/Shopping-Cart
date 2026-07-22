import React, { useEffect, useState } from "react";
import { getOrders, getUsers } from "../services/admin";
import {
    Users,
    ShoppingBag,
    IndianRupee,
    Search,
    BadgeCheck,
    Clock3,
} from "lucide-react";

const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const allOrders = await getOrders();
        const allUsers = await getUsers();

        setOrders(allOrders);
        setUsers(allUsers);
    };

    const revenue = orders.reduce(
        (sum, item) => sum + Number(item.total || 0),
        0
    );

    const filteredOrders = orders.filter((order) =>
        (order.customerName || "")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gray-950 text-white p-8">

            <h1 className="text-4xl font-black mb-10 text-orange-400">
                📊 Admin Dashboard
            </h1>

            {/* Cards */}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-400">Total Users</p>

                            <h2 className="text-4xl font-bold mt-2">
                                {users.length}
                            </h2>

                        </div>

                        <Users className="w-12 h-12 text-orange-400" />

                    </div>

                </div>

                <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-400">Total Orders</p>

                            <h2 className="text-4xl font-bold mt-2">
                                {orders.length}
                            </h2>

                        </div>

                        <ShoppingBag className="w-12 h-12 text-orange-400" />

                    </div>

                </div>

                <div className="bg-gray-900 border border-orange-500/30 rounded-2xl p-6 shadow-xl hover:shadow-orange-500/20 transition-all">

                    <div className="flex justify-between items-center">

                        <div>

                            <p className="text-gray-400">Revenue</p>

                            <h2 className="text-4xl font-bold mt-2">
                                ₹{revenue}
                            </h2>

                        </div>

                        <IndianRupee className="w-12 h-12 text-orange-400" />

                    </div>

                </div>

            </div>

            {/* Search */}

            <div className="mb-8">

                <div className="relative max-w-md">

                    <Search className="absolute left-4 top-3 text-gray-400" />

                    <input
                        type="text"
                        placeholder="Search Customer..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-12 pr-4 py-3 rounded-xl bg-gray-900 border border-orange-500/30 outline-none focus:border-orange-400"
                    />

                </div>

            </div>

            {/* Table */}

            <div className="overflow-x-auto rounded-2xl border border-orange-500/20">

                <table className="w-full">

                    <thead>

                        <tr className="bg-orange-500/10">

                            <th className="p-4">Customer</th>
                            <th className="p-4">City</th>
                            <th className="p-4">Amount</th>
                            <th className="p-4">Payment</th>
                            <th className="p-4">Order</th>

                        </tr>

                    </thead>

                    <tbody>

                        {filteredOrders.length === 0 ? (

                            <tr>

                                <td
                                    colSpan={5}
                                    className="text-center py-10 text-gray-500"
                                >
                                    No Orders Found
                                </td>

                            </tr>

                        ) : (

                            filteredOrders.map((order) => (

                                <tr
                                    key={order.id}
                                    className="border-b border-gray-800 text-center hover:bg-gray-900 transition"
                                >

                                    <td className="p-4 font-semibold">
                                        {order.customerName}
                                    </td>

                                    <td className="p-4">
                                        {order.city}
                                    </td>

                                    <td className="p-4 font-bold text-orange-400">
                                        ₹{order.total}
                                    </td>

                                    <td className="p-4">

                                        {order.paymentStatus === "Paid" ? (

                                            <span className="inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-3 py-1 rounded-full">

                                                <BadgeCheck size={16} />

                                                Paid

                                            </span>

                                        ) : (

                                            <span className="inline-flex items-center gap-2 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">

                                                <Clock3 size={16} />

                                                Pending

                                            </span>

                                        )}

                                    </td>

                                    <td className="p-4">

                                        <span className="bg-orange-500/20 text-orange-300 px-3 py-1 rounded-full">

                                            {order.orderStatus}

                                        </span>

                                    </td>

                                </tr>

                            ))

                        )}

                    </tbody>

                </table>

            </div>

        </div>
    );
};

export default Admin;