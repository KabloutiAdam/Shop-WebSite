import SideBarContent from "@/components/back-office/sidebar/sidebarContent";
import SideBarFooter from "@/components/sidebar/sidebarFooter";
import SideBarGroup from "@/components/sidebar/sidebarGroup";
import SideBarHeader from "@/components/sidebar/sidebarHeader";
import SideBarItem from "@/components/sidebar/sidebarItem";
import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { CollapsibleTrigger } from "@/components/ui/collapsible";




export default function SideBar() {


    return (
        <div className=" text-gray-800 mt-10 p-4 pt-0 h-fit flex justify-start">
            <SideBarHeader />

            <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                Produits {/* 🔹 Ici tu mets ton label personnalisé */}
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Ajouter un produit {/* 🔸 Sous-menu personnalisé */}
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Voir les produits
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>

                    
                </Collapsible>


                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                Produits {/* 🔹 Ici tu mets ton label personnalisé */}
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Ajouter un produit {/* 🔸 Sous-menu personnalisé */}
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Voir les produits
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>

                    
                </Collapsible>


                <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                Produits {/* 🔹 Ici tu mets ton label personnalisé */}
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Ajouter un produit {/* 🔸 Sous-menu personnalisé */}
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Voir les produits
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>

                    
                </Collapsible>
            </SidebarMenu>


            <SideBarFooter />

        </div>
    )
}
