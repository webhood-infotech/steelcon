import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";
export function NavSupportSetting({ items }) {
  return (
    <SidebarGroup className="pb-6 border-b-[1px] border-b-[#305679] ">
      <SidebarMenu className="gap-0">
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger
                className=" active:bg-[#305679] active:text-white hover:bg-[#305679] hover:text-white gap-[12px] data-[active=true]:bg-[#305679]  data-[active=true]:text-white data-[state=open]:hover:bg-[#305679] data-[state=open]:hover:text-white"
                asChild
              >
                <SidebarMenuButton
                  className="text-base font-semibold hover:bg-[#305679] h-auto py-2 px-3 "
                  tooltip={item.title}
                >
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[20px] h-[20px]"
                    />
                  )}
                  <span>{item.title}</span>
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub className="px-0 border-0 mx-0 ">
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem className="w-full " key={subItem.title}>
                      <SidebarMenuSubButton
                        className="active:bg-[#305679] active:text-white  text-white text-base font-semibold hover:text-white hover:bg-[#305679] h-auto py-2 px-2 "
                        asChild
                      >
                        <Link to={subItem.url}>
                          <span className="pl-10">{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
