import SideBar from "@/components/back-office/sidebar/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";






export default function DashboardMainPage() {
  return (
    <>
      <SidebarProvider>
        <div className="w-full h-full min-h-screen grid grid-cols-[2fr_12fr]">
          <div className="h-full row-start-1 row-span-1 col-start-1 col-span-1 bg-gray-300">
           
            <SideBar>

            </SideBar>

          </div>


        </div>


      </SidebarProvider>

    </>
  );
}

