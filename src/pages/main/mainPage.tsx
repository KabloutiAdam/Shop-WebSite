

import Header from "@/components/header/header";
import SideBar from "@/components/sidebar/sidebar";



export default function MainPage() {

    

    return (
        <>
            <Header />

            <div className="grid grid-cols-[2fr_8fr_2fr] h-full">
               <SideBar />
                <main className="mt-10">
                    
                    <div className="w-full h-full  mb-15">
                        <img className="w-180 justify-self-center" src="/images/homePageAdd.jpg" alt=""/>

                    </div>
                    
                </main>

                <div className="bg-gray-800 text-white p-4">

                </div>

            </div>

            



        </>
    )
}

