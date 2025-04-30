import { productInterface } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";


type Warehouse = {
    id: number;
    name: string;
};
type Stock = {
    name: string;
    quantity: number;
};
export default function DashboardNewProductEntry() {


    const [warehouseList, setWarehouseList] = useState<Warehouse[]>([])
    const [stockList, setStockList] = useState<Stock[]>([])
    const [productList, setProductList] = useState<productInterface[]>([])

    const [quantitiesToAdd, setQuantitiesToAdd] = useState<{ [warehouseName: string]: number }>({});
    const [newQuantity, setNewQuantity] = useState<{ [warehouseName: string]: number }>({});
    const [idProductSearch, setIdProductSearch] = useState();
    const [isProductDropdownDisplayed, setIsProductDropdownDisplayed] = useState(false)
    const [productSelected, setProductSelected] = useState<productInterface>()


    useEffect(() => {
        const fetchWarehouseList = async () => {

            try {
                const res = await axios.get("/api/warehouse/");
                setWarehouseList(res.data)
            } catch (error) {
                console.error(error)
            }
        }

        const fetchStocks = async () => {
            try {
                const id = productSelected?.id || 0
                const res = await axios.get("/api/products/productStock", {
                    params: { id }
                });
                setStockList(res.data)
            } catch (error) {
                console.error(error)
            }
        }

        const fetchProductList = async () => {
            if (idProductSearch) {

                try {
                    const query = idProductSearch
                    const res = await axios.get("/api/products/getProductById", {
                        params: { query }
                    });
                    
                    setProductList(res.data)
                } catch (error) {
                    console.error(error)
                }
            }
            else {
                const res = await axios.get("/api/products/getProductById");
                setProductList(res.data)
            }
        }


        fetchProductList()
        fetchWarehouseList()
        fetchStocks()
       
    }, [idProductSearch, productSelected])


    const handleInputChange = (event: any) => {
        setIdProductSearch(event.target.value);

    };

    const TableCell = ({ children }: { children: React.ReactNode }) => (
        <td className="pl-12 text-sm text-gray-700">{children}</td>
    );

    const MetaCell = ({ children }: { children: React.ReactNode }) => (
        <th className="pl-12 ">{children}</th>
    );



    return (
        <>
            <div className="w-full h-[10%] flex justify-start items-center">
                <div>
                    <label
                        htmlFor=""
                        className="ml-5">Id du produit : </label>
                    <input
                        className="w-52 bg-[#f5e4cd] text-[#000000] text-[14px] font-bold outline-none"
                        type="text"
                        onChange={handleInputChange}
                        onSelect={() => { setIsProductDropdownDisplayed(true) }}
                        onBlur={() => setTimeout(() => setIsProductDropdownDisplayed(false), 200)}
                    />
                    <table className={`absolute w-250 ml-35 ${isProductDropdownDisplayed && "border-1 border-gray-500"}`} >
                        {isProductDropdownDisplayed &&
                            <tbody >
                                
                                <tr>
                                    <MetaCell>id</MetaCell>
                                    <MetaCell>Nom produit</MetaCell>
                                    <MetaCell>Nom fabricant</MetaCell>
                                    <MetaCell>Prix unitaire</MetaCell>
                                    <MetaCell>Quantité</MetaCell>
                                </tr>


                                {productList.map((product, index) => {
                                    const stock = stockList.find((stock) => stock.name === product.name);
                                    return (
                                        <>
                                            <tr 
                                                className={`border-1 border-gray-500 hover:cursor-pointer hover:bg-gray-100 ${index % 2 === 0 ? "bg-[#f5e4cd]" : "bg-white"}`} 
                                                key={index}
                                                onClick={() => {setProductSelected(product)}}

                                                >
                                                <TableCell>{product.id}</TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>{product.brand_name}</TableCell>
                                                <TableCell>{product.price}</TableCell>
                                                <TableCell>{stock?.quantity ?? 0}</TableCell>
                                            </tr>

                                        </>

                                    )
                                })

                                }
                            </tbody>
                        }
                    </table>
                </div>

            </div>


            <div className="w-full h-[90%] flex justify-center items-center">
                <div className="w-[90%] h-[90%] bg-[#f5e4cd] p-10 overflow-y-scroll">

                    <div className="w-full h-40 flex justify-start flex-col items-start">
                        <table className="w-full">
                            <tbody>
                                <tr className="w-full h-10 flex  items-start">
                                    <th className="w-[25%]">Lieu du dépôt</th>
                                    <th className="w-[25%]">Quantité actuelle</th>
                                    <th className="w-[25%]">Quantité à ajouter</th>
                                    <th className="w-[25%]">Nouvelle Quantité</th>
                                </tr>

                                {warehouseList.map((warehouse) => {
                                    const stock = stockList.find((stock) => stock.name === warehouse.name)
                                    return (
                                        <>
                                            <tr className="w-full h-10 flex  items-start">
                                                <td className="w-[25%]">{warehouse.name}</td>
                                                <td className="w-[25%]">{stock ? stock.quantity : 0}</td>
                                                <td className="w-[25%]">
                                                    <input
                                                        type="text"
                                                        className="w-[40%] bg-white"
                                                        value={quantitiesToAdd[warehouse.name] || 0}
                                                        onChange={(e) => {
                                                            const value = parseInt(e.target.value) || 0;
                                                            setQuantitiesToAdd((prev) => ({
                                                                ...prev,
                                                                [warehouse.name]: value,
                                                            }));
                                                            setNewQuantity((prev) => ({
                                                                ...prev,

                                                                [warehouse.name]: (stock?.quantity ?? 0) + value,
                                                            }))
                                                        }} />
                                                </td>
                                                <td className="w-[25%]">{newQuantity[warehouse.name] || stock?.quantity || 0}</td>

                                            </tr>


                                        </>
                                    )
                                })

                                }
                            </tbody>
                        </table>
                        <div className="w-full h-20 flex justify-center items-center">
                            <button
                                type="submit"
                                className="bg-white text-black mb-5 font-bold py-2 px-4 rounded-2xl hover:bg-gray-200 hover:text-black hover:cursor-pointer hover:shadow-lg  "
                            >Valider</button>
                        </div>

                    </div >


                </div>
            </div>

        </>
    );
}