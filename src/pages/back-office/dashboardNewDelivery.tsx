import { productInterface } from "@/interfaces";
import axios from "axios";
import { Warehouse } from "lucide-react";
import { useEffect, useState } from "react";




type Warehouse = {
    idWarehouse: number;
    name: string;
};
type Stock = {
    name: string;
    quantity: number;
};

export default function DashboardNewDelivery() {


    const [warehouseList, setWarehouseList] = useState<Warehouse[]>([])
    //@ts-ignore
    const [stockList, setStockList] = useState<Stock[]>([])
    const [productList, setProductList] = useState<productInterface[]>([])

    const [idProductSearch, setIdProductSearch] = useState();
    const [isProductDropdownDisplayed, setIsProductDropdownDisplayed] = useState(false)
    const [isWarehouseDropdownDisplayed, setIsWarehouseDropdownDisplayed] = useState(false)
    const [productSelected, setProductSelected] = useState<productInterface>()
    const [warehouseSelected, setWarehouseSelected] = useState<Warehouse>()


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
        <th className="pl-12 bg-white">{children}</th>
    );

    return (
        <>
            <div className="w-full h-[10%] flex flex-col justify-center items-start ">
                <div className="flex items-center">
                    <div>
                        <label
                            htmlFor=""
                            className="ml-5">Dépot : </label>
                        <input
                            className="w-52 bg-[#f5e4cd] text-[#000000] text-[14px] font-bold outline-none"
                            type="text"
                            onChange={handleInputChange}
                            onSelect={() => { setIsWarehouseDropdownDisplayed(true) }}
                            onBlur={() => setTimeout(() => setIsWarehouseDropdownDisplayed(false), 200)}
                        />
                        <table className={`absolute w-250 ml-35 ${isWarehouseDropdownDisplayed && "border-1 border-gray-500"}`} >
                            {isWarehouseDropdownDisplayed &&
                                <tbody >

                                    <tr>
                                        <MetaCell>id</MetaCell>
                                        <MetaCell>Lieu du dépot</MetaCell>
                                    </tr>


                                    {warehouseList.map((warehouse, index) => {
                                        
                                        return (
                                            <>
                                                <tr
                                                    className={`border-1 border-gray-500 hover:cursor-pointer hover:bg-gray-100 ${index % 2 === 0 ? "bg-[#f5e4cd]" : "bg-white"}`}
                                                    key={index}
                                                    onClick={() => { if (warehouse != warehouseSelected) { setWarehouseSelected(warehouse) } }}

                                                >
                                                    <TableCell>{warehouse.idWarehouse}</TableCell>
                                                    <TableCell>{warehouse.name}</TableCell>
                                                </tr>

                                            </>

                                        )
                                    })

                                    }
                                </tbody>
                            }
                        </table>
                    </div>

                    {/* <div className="h-10 flex justify-start items-center ml-10">
                        {productSelected &&
                            <div className="flex flex-row">
                                <p className="italic text-gray-500 mr-4">{productSelected.id}</p>
                                <p className="italic text-gray-500 mr-4">{productSelected.name}</p>
                                <p
                                    className="text-red-600 font-bold hover:cursor-pointer"
                                    onClick={() => { setProductSelected(undefined) }}
                                >X</p>
                            </div>
                        }
                    </div> */}
                </div>
                <div className="flex flex-row items-center">
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
                                        <MetaCell><p></p></MetaCell>
                                    </tr>


                                    {productList.map((product, index) => {
                                        
                                        return (
                                            <>
                                                <tr
                                                    className={`border-1 border-gray-500 hover:cursor-pointer hover:bg-gray-100 ${index % 2 === 0 ? "bg-[#f5e4cd]" : "bg-white"}`}
                                                    key={index}
                                                    onClick={() => { if (product != productSelected) { setProductSelected(product) } }}

                                                >
                                                    <TableCell>{product.id}</TableCell>
                                                    <TableCell>{product.name}</TableCell>
                                                    <TableCell>{product.brand_name}</TableCell>
                                                    <TableCell>{product.price}</TableCell>
                                                    <TableCell><p className="text-20 font-bold text-red-700">+</p></TableCell>
                                                </tr>

                                            </>

                                        )
                                    })

                                    }
                                </tbody>
                            }
                        </table>
                    </div>

                    {/* <div className="h-10 flex justify-start items-center ml-10">
                        {productSelected &&
                            <div className="flex flex-row">
                                <p className="italic text-gray-500 mr-4">{productSelected.id}</p>
                                <p className="italic text-gray-500 mr-4">{productSelected.name}</p>
                                <p
                                    className="text-red-600 font-bold hover:cursor-pointer"
                                    onClick={() => { setProductSelected(undefined) }}
                                >X</p>
                            </div>
                        }
                    </div> */}
                </div>
            </div>


            <div className="w-full h-[90%] flex justify-center items-center">
                <div className="w-[90%] h-[90%] bg-[#f5e4cd] p-10 overflow-y-scroll">




                </div>
            </div>
        </>

    )

}


