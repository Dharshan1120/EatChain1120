import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const categorizedItems = {
  "Spices & Seasonings": [
    { name: "Cumin Seeds" },
    { name: "Turmeric Powder" },
    { name: "Chaat Masala" },
    { name: "Garam Masala" }
  ],
  "Dairy & Fats": [
    { name: "Butter" },
    { name: "Yogurt" },
    { name: "Paneer" },
    { name: "Milk" }
  ],
  "Staples & Grains": [
    { name: "All-purpose flour (Maida)" },
    { name: "Semolina (Rava/Sooji)" },
    { name: "Rice (Idli Rice, Raw Rice)" },
    { name: "Flattened Rice (Poha)" },
    { name: "Puffed Rice (Murmura)" },
    { name: "Gram Flour (Besan)" },
    { name: "Whole Wheat Flour (Atta)" }
  ],
  "Vegetables & Fruits": [
    { name: "Potatoes" },
    { name: "Onions" },
    { name: "Tomatoes" },
    { name: "Coriander Leaves" },
    { name: "Mint Leaves" }
  ]
};

export default function rawmaterials() {
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState([]);

  const handleAddToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const filteredItems = (items) =>
    items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* Header */}
      <header className="bg-white border-b shadow-sm p-4 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">StreetSupply</h1>
          <div className="flex gap-3 items-center">
            <Input
              placeholder="Search materials..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-64"
            />
            <Search className="w-4 h-4 text-gray-600" />
            <Button variant="outline">Login</Button>
            <Button className="bg-blue-600 text-white">Cart ({cart.length})</Button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-7xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-semibold mb-6">🛒 Raw Materials List</h2>

        {Object.entries(categorizedItems).map(([category, items]) => (
          <div key={category} className="mb-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4">{category}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredItems(items).map((item, index) => (
                <Card key={index} className="rounded-xl border hover:shadow-md">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                    <Button
                      onClick={() => handleAddToCart(item)}
                      className="mt-2 bg-blue-600 text-white hover:bg-blue-700 w-full"
                    >
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-10 py-4 text-center text-gray-500 text-sm">
        © 2025 StreetSupply · Empowering Local Food Businesses
      </footer>
    </div>
  );
}
