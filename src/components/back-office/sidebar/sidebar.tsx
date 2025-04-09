
import SideBarFooter from "@/components/sidebar/sidebarFooter";

import SideBarHeader from "@/components/sidebar/sidebarHeader";

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";
import { cn } from "@/lib/utils"
import {

    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarRail,
    SidebarSeparator,
} from "@/components/ui/sidebar"
import { CollapsibleTrigger } from "@/components/ui/collapsible";


const sideCategoriesList = [
    {
        title: "TABLEAU DE BORD",
        children: [
            { name: "Statistiques", path: "/admin-dashboard/statistiques" },
            { name: "Paramètres", path: "/admin-dashboard/parametres" }
        ]
    },
    {
        title: "PRODUIT",
        children: [
            { name: "Liste des produits", path: "/admin-dashboard/produits" },
            { name: "Ajouter un produit", path: "/admin-dashboard/ajouter-produit" }
        ]
    },
    {
        title: "CATEGORIES",
        children: [
            { name: "Liste des catégories", path: "/admin-dashboard/categories" },
            { name: "Ajouter une catégorie", path: "/admin-dashboard/ajouter-categorie" }
        ]
    },
    {
        title: "PROMOTIONS",
        children: [
            { name: "Liste des promotions", path: "/admin-dashboard/promotions" },
            { name: "Ajouter une promotions", path: "/admin-dashboard/ajouter-promotion" }
        ]
    },
    {
        title: "CUSTOMER",
        children: [
            { name: "Liste des client", path: "/admin-dashboard/clients" },
        ]
    }, {
        title: "ORDER",
        children: [
            { name: "Liste des commandes", path: "/admin-dashboard/commandes" },
        ]
    }
];

export default function SideBar() {


    return (
        <div className=" mt-10 p-4 pt-0 h-fit flex justify-start">
            <SideBarHeader />

            <SidebarMenu>

                {sideCategoriesList.map((category, index) => {
                    return (
                        <Collapsible defaultOpen={false} className="group/collapsible">
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    <SidebarMenuButton>
                                        {category.title}
                                    </SidebarMenuButton>
                                </CollapsibleTrigger>
                                <CollapsibleContent className={cn("text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2")}>
                                    <SidebarMenuSub>
                                        {category.children.map((item, index) => {
                                            return (
                                                <SidebarMenuSubItem>
                                                    {item.name}
                                                </SidebarMenuSubItem>
                                            )
                                        })
                                        }
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}

            </SidebarMenu>


            <SideBarFooter />


        </div>
    )
}
