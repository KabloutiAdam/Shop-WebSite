import { productInterface } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";




type Props = {

    product: productInterface;
}
type Warehouse = {
    id: number;
    name: string;
};
type Stock = {
    name: string;
    quantity: number;
};


export default function WarehouseProductDropdown({ product }: Props) {


    const [warehouseList, setWarehouseList] = useState<Warehouse[]>([])
    const [stockList, setStockList] = useState<Stock[]>([])


    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const id = product.id
                console.log(id)
                const res = await axios.get("/api/products/productStock", {
                    params: { id }
                });
                console.log(res.data)
                setStockList(res.data)

            } catch (error) {
                console.error(error)
            }
        }

        const fetchWarehouseList = async () => {

            try {
                const res = await axios.get("/api/warehouse/");

                setWarehouseList(res.data)

                console.log(warehouseList)

            } catch (error) {
                console.error(error)

            }

        }


        fetchWarehouseList()
        fetchStocks()


    }, [product])


    return (
        <>

            <div className="w-full h-fit border-2 border-orange-200 border-dotted bg-white shadow-lg shadow-orange-100 rounded-lg">
                <p className="text-start font-bold pl-5 mt-3">Liste des stocks de produit :</p>
                <div className="flex flex-wrap mt-1">
                    {warehouseList.map((warehouse, index) => {
                        const stock = stockList.find(s => s.name === warehouse.name);
                        let color = "text-red-500"
                        if(stock !== undefined){
                            switch(true){
                                case stock.quantity <= 5 && stock.quantity > 0:
                                        color = "text-yellow-500"
                                    break
                                case stock.quantity > 5:
                                        color = "text-green-500"
                                    break
                                
                            }
                        }
                        return (
                            <>
                                <div className="w-50 flex flex-row h-fit pl-2 my-2">
                                    <p className="text-start " key={index}>{warehouse.name} : </p> <span className={`${color} font-bold`}> {stock ? stock.quantity : 0}</span>
                                </div>

                            </>
                        )
                    })}
                </div>

            </div>



        </>
    )
}

