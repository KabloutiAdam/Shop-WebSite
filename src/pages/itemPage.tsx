import Header from "@/components/header/header";
import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "@/components/sidebar/sidebar";

const ItemPage: React.FC = () => {
    const { category, item } = useParams<{ category: string; item: string }>();

    return (
        <>
            <Header />
            <div className="grid grid-cols-[2fr_8fr_2fr] h-full">
                <SideBar />
                <main className="mt-10">

                    <div className="w-full h-full  mb-15">
                        <p>{category}</p>
                        <p>{item}</p>

                    </div>

                </main>

                <div className="bg-gray-800 text-white p-4">

                </div>

            </div>
        </>
    );
};

export default ItemPage;
