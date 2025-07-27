import React, { useEffect, useState } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase/firebaseConfig"; // make sure this points to your config
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import dayjs from "dayjs";

export default function InventoryDashboard() {
  const [inventory, setInventory] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "inventory"), (snapshot) => {
      const items = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setInventory(items);
    });

    return () => unsubscribe(); // Clean up listener
  }, []);

  const getStatus = (item) => {
    const daysLeft = dayjs(item.expiryDate).diff(dayjs(), "day");

    if (daysLeft < 0) return <Badge variant="destructive">Expired</Badge>;
    if (item.quantity <= 2) return <Badge variant="warning">Low</Badge>;
    return <Badge variant="default">In Stock</Badge>;
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">📊 Live Inventory Dashboard</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {inventory.map((item) => (
          <Card key={item.id} className="rounded-xl border hover:shadow-md">
            <CardContent className="p-4 space-y-2">
              <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
              <p className="text-sm text-gray-600">Qty: {item.quantity} kg</p>
              <p className="text-sm text-gray-600">Expiry: {item.expiryDate}</p>
              <p className="text-sm text-gray-600">Hygiene: {item.hygieneStatus}</p>
              {getStatus(item)}
              <Button variant="outline" className="mt-2 w-full text-sm">
                Edit Stock
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
