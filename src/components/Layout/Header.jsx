import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export default function Header({ searchTerm, setSearchTerm, cartLength }) {
  return (
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
          <Button className="bg-blue-600 text-white">
            Cart ({cartLength})
          </Button>
        </div>
      </div>
    </header>
  );
}