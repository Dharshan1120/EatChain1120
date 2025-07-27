import React, { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { FiSearch as Search } from "react-icons/fi";

const categorizedItems = {
  "Staples & Grains": [
    { name: "All-purpose flour (Maida)", use: "Pav, Bhature, Momos" },
    { name: "Semolina (Rava/Sooji)", use: "Pani Puri, Jalebi" },
    { name: "Rice (Idli Rice, Raw Rice)", use: "Idli, Dosa" },
    { name: "Flattened Rice (Poha)", use: "Poha, Dosa" },
    { name: "Puffed Rice (Murmura)", use: "Bhel Puri" },
    { name: "Gram Flour (Besan)", use: "Vada Pav, Samosa" },
    { name: "Whole Wheat Flour (Atta)", use: "Kathi Rolls" }
  ],
  "Vegetables & Fruits": [
    { name: "Potatoes", use: "Vada Pav, Samosa" },
    { name: "Onions", use: "Pav Bhaji, Samosa" },
    { name: "Tomatoes", use: "Pav Bhaji, Chole Bhature" },
    { name: "Coriander Leaves", use: "Garnish" },
    { name: "Mint Leaves", use: "Chutneys" }
  ],
  "Dairy & Fats": [
    { name: "Butter", use: "Pav Bhaji, Dosa" },
    { name: "Yogurt", use: "Lassi, Chaat" },
    { name: "Paneer", use: "Momos, Bhaji" },
    { name: "Milk", use: "Chai" }
  ],
  "Spices & Seasonings": [
    { name: "Cumin Seeds", use: "All dishes" },
    { name: "Turmeric Powder", use: "Curries" },
    { name: "Chaat Masala", use: "Bhel, Aloo Tikki" },
    { name: "Garam Masala", use: "Curries" }
  ]
};

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white border-b shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">StreetSupply</h1>
          <div className="flex gap-3 items-center">
            <Input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="w-52"
            />
            <Search className="text-gray-600" />
            <Button variant="outline">Login</Button>
            <Button className="bg-blue-600 text-white">Cart ({cart.length})</Button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">Raw Materials</h2>
        {Object.entries(categorizedItems).map(([category, items]) => {
          const filteredItems = items.filter((item) =>
            (item.name + item.use).toLowerCase().includes(searchTerm.toLowerCase())
          );

          if (filteredItems.length === 0) return null;

          return (
            <div key={category} className="mb-10">
              <h3 className="text-xl font-semibold mb-4">{category}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {filteredItems.map((item, index) => (
                  <Card key={index} className="rounded-xl border hover:shadow-md">
                    <CardContent className="p-4">
                      <h4 className="text-lg font-medium">{item.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">Used in: {item.use}</p>
                      <Button
                        onClick={() => handleAddToCart(item)}
                        className="bg-blue-600 text-white w-full hover:bg-blue-700"
                      >
                        Add to Cart
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          );
        })}
      </main>

      <footer className="bg-white border-t py-6 text-center text-sm text-gray-500">
        © 2025 StreetSupply · Empowering local food businesses
      </footer>
    </div>
  );
}
