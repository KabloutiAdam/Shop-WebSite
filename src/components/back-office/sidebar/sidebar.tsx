
import SideBarFooter from "@/components/sidebar/sidebarFooter";

import SideBarHeader from "@/components/sidebar/sidebarHeader";

import { Collapsible, CollapsibleContent } from "@radix-ui/react-collapsible";

import {
    
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar"
import { CollapsibleTrigger } from "@/components/ui/collapsible";




export default function SideBar() {


    return (
        <div className=" mt-10 p-4 pt-0 h-fit flex justify-start">
            <SideBarHeader />

            <SidebarMenu>
                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                TABLEAU DE BORD
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                   Statistiques
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Paramètres
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>
                


                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                               PRODUIT
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Liste des produits
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Ajouter un produit
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>


                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                                CATEGORIES
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Liste des catégories
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Ajouter une catégorie
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>


                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                               PROMOTIONS
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Liste des promotions
                                </SidebarMenuSubItem>
                                <SidebarMenuSubItem>
                                    Ajouter une promotion
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>


                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                               CUSTOMERS
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Liste des clients
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>

                <Collapsible defaultOpen={false} className="group/collapsible">
                    <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                            <SidebarMenuButton>
                               ORDERS
                            </SidebarMenuButton>
                        </CollapsibleTrigger>

                        <CollapsibleContent>
                            <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    Liste des commandes 
                                </SidebarMenuSubItem>
                            </SidebarMenuSub>
                        </CollapsibleContent>
                    </SidebarMenuItem>
                </Collapsible>


            </SidebarMenu>


            <SideBarFooter />
            <SidebarRail />

        </div>
    )
}
