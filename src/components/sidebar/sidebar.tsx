import SideBarContent from "./sidebarContent";
import SideBarFooter from "./sidebarFooter";
import SideBarGroup from "./sidebarGroup";
import SideBarHeader from "./sidebarHeader";
import SideBarItem from "./sidebarItem";






export default function SideBar() {


    return (
        <div className=" text-gray-800 mt-10 p-4 pt-0 h-full flex justify-start">
            <SideBarHeader />

            <SideBarContent>
                <SideBarGroup titre="Electronique">
                    <SideBarItem label="Ordinateur" url="computer" category="electronic"/>
                    <SideBarItem label="Téléviseur" url="tv" category="electronic"/>
                    <SideBarItem label="Téléphone mobile" url="mobilephone" category="electronic"/>
                    <SideBarItem label="Appareil Photo" url="camera" category="electronic"/>
                    <SideBarItem label="Périphérique" url="peripheric" category="electronic"/>
                </SideBarGroup>
                <SideBarGroup titre="Mobilier">
                    <SideBarItem label="Canapé" url="sofa" category="mobilier" />
                    <SideBarItem label="Lit" url="bed" category="mobilier"/>
                    <SideBarItem label="Table" url="table" category="mobilier"/>
                    <SideBarItem label="Chaise" url="chair" category="mobilier"/>
                    <SideBarItem label="Eclairage" url="light" category="mobilier"/>
                </SideBarGroup>



            </SideBarContent>

            <SideBarFooter />

        </div>
    )
}
