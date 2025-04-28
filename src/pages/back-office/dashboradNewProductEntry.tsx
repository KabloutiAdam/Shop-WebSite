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
                const id = 72
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


        fetchWarehouseList()


        fetchStocks()
    }, [])


    return (
        <>
            <div className="w-full h-full flex justify-center items-center">
                <div className="w-[90%] h-[90%] bg-[#f5e4cd] p-10 overflow-y-scroll">

                    <div className="w-full h-40 flex justify-start flex-col items-start">
                        <table className="w-full">
                            <tr className="w-full h-20 flex  items-start">
                                <th className="w-[25%]">Lieu du dépôt</th>
                                <th className="w-[25%]">Quantité actuelle</th>
                                <th className="w-[25%]">Quantité à ajouter</th>
                                <th className="w-[25%]">Nouvelle Quantité</th>
                            </tr>

                            {warehouseList.map((warehouse) => {
                                const stock = stockList.find((stock) => stock.name === warehouse.name)
                                return (
                                    <>
                                        <tr className="w-full h-20 flex  items-start">
                                            <td className="w-[25%]">{warehouse.name}</td>
                                            <td className="w-[25%]">{stock ? stock.quantity : 0}</td>
                                            <td className="w-[25%]">
                                                <input
                                                    type="text"
                                                    className="w-[40%] bg-white" />
                                            </td>
                                            <td className="w-[25%]">15</td>

                                        </tr>


                                    </>
                                )
                            })

                            }

                        </table>
                    </div >


                </div>
            </div>

        </>
    );
}