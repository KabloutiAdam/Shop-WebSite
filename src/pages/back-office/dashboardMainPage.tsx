import SideBar from "@/components/back-office/sidebar/sidebar";
import HeaderAdmin from "@/components/header/headerAdmin";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet, useParams } from "react-router-dom";






export default function DashboardMainPage() {


  const {page} = useParams<{page:string}>()


  return (
    <>


      <SidebarProvider>
        <div className="w-full h-full min-h-screen grid grid-cols-[2fr_12fr]">
          <div className="h-full row-start-1 row-span-1 col-start-1 col-span-1 bg-gray-200 shadow-md">

            <SideBar>
              
            </SideBar>

          </div>
          <div className="h-full">

            <HeaderAdmin />


            <main className="w-full h-[88%]">

              <Outlet />
            </main>
          </div>


        </div>



      </SidebarProvider>

    </>
  );
}

