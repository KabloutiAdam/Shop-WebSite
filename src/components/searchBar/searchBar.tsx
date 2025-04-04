
import { Input } from "@/components/formItems/input"

import { useEffect, useState } from "react"
import { productInterface } from "@/interfaces"
import DropdownResult from "./dropdownResult";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {

  const [query, setQuery] = useState("")
  const [filteredProducts, setFilteredProducts] = useState<productInterface[]>([]);
 
  const [showDropdown, setShowDropdown] = useState(false);



  useEffect(() => {
    const fetchFilteredProducts = async () => {
      if (query.length > 0) {
        try {
          const res = await axios.get("/api/products", {
            params: { query },
          });
  
          setFilteredProducts(res.data);
          setShowDropdown(res.data.length > 0);
        } catch (error) {
          console.error("Erreur lors de la recherche :", error);
        }
      } else {
        setFilteredProducts([]);
        setShowDropdown(false);
      }
    };
  
    fetchFilteredProducts();
  }, [query])
  
  const navigate = useNavigate();
  const search = async () => {
    if (query.length > 0) {
      setShowDropdown(false);
      navigate(`/search?query=${query}`);

    }
};

  return (
    <>

      <div className="flex items-center w-full space-x-2 rounded-lg border border-gray-300 bg-gray-50 dark:bg-gray-900 px-3.5 py-2">
        <SearchIcon className="h-4 w-4" />
        <Input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="search"
          placeholder="Rechercher un produit"
          className="w-full border-0 h-8 font-semibold"
          onKeyDown={
            (e) => {
                if (e.key === "Enter") {
                    (search())
                }
            }
        } />
          
      </div>

      {showDropdown && (<DropdownResult
        filteredProducts={filteredProducts}
        showDropdown={showDropdown}
        onSelect={() => setShowDropdown(false)} 
        />)}

    </>
  )
}

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}