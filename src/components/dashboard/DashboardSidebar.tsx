"use client";

import { Alex_Brush } from "next/font/google";
import {
  BroadcastIcon,
  ChartBarIcon,
  ChartLineUpIcon,
  CreditCardIcon,
  DesktopTowerIcon,
  FilmReelIcon,
  GearIcon,
  HouseIcon,
  PlugsConnectedIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  UsersThreeIcon,
  VideoCameraIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const alexBrush = Alex_Brush({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const navigationGroups = [
  {
    label: "Operations",
    items: [
      { label: "Overview", href: "/dashboard", icon: HouseIcon },
      { label: "Channels", href: "/dashboard/channels", icon: BroadcastIcon },
    ],
  },
  {
    label: "Content",
    items: [
      { label: "Media", href: "/dashboard/media", icon: FilmReelIcon },
      { label: "Recordings", href: "/dashboard/recordings", icon: VideoCameraIcon },
    ],
  },
  {
    label: "Insights",
    items: [
      { label: "Analytics", href: "/dashboard/analytics", icon: ChartBarIcon },
      { label: "Usage", href: "/dashboard/usage", icon: ChartLineUpIcon },
    ],
  },
  {
    label: "Organisation",
    items: [
      { label: "Members", href: "/dashboard/members", icon: UsersThreeIcon },
      { label: "Roles", href: "/dashboard/roles", icon: ShieldCheckIcon },
      { label: "Integrations", href: "/dashboard/integrations", icon: PlugsConnectedIcon },
      { label: "Nodes", href: "/dashboard/nodes", icon: DesktopTowerIcon },
      { label: "Billing", href: "/dashboard/billing", icon: CreditCardIcon },
      { label: "Settings", href: "/dashboard/settings", icon: GearIcon },
    ],
  },
];

export default function DashboardSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="flex h-[4.2rem] min-h-[4.2rem] flex-row items-center border-b border-sidebar-border px-4 py-0 group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-0">
        <Link href="/" className="flex flex-row items-center gap-2 overflow-visible no-underline group-data-[collapsible=icon]:w-full group-data-[collapsible=icon]:justify-center">
          <span
            className="text-sidebar-foreground group-data-[collapsible=icon]:hidden"
            style={{
              fontFamily: alexBrush.style.fontFamily,
              fontSize: "3.2rem",
              lineHeight: 1,
            }}
          >
            Tymax
          </span>
          <span
            className="hidden text-sidebar-foreground group-data-[collapsible=icon]:inline-block"
            style={{
              fontFamily: alexBrush.style.fontFamily,
              fontSize: "2.5rem",
              lineHeight: 1,
            }}
          >
            T
          </span>
        </Link>
      </SidebarHeader>

      <SidebarContent>
        {navigationGroups.map((group) => (
          <SidebarGroup key={group.label}>
            <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {group.items.map((item) => {
                  const Icon = item.icon;

                  return (
                    <SidebarMenuItem key={item.label}>
                      <SidebarMenuButton
                        isActive={item.href === "/dashboard" ? pathname === item.href : pathname.startsWith(item.href)}
                        tooltip={item.label}
                        render={<Link href={item.href} />}
                      >
                        <Icon weight="regular" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3 group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:p-1.5">
        <SidebarMenu className="group-data-[collapsible=icon]:items-center">
          <SidebarMenuItem className="group-data-[collapsible=icon]:flex group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:w-full">
            <SidebarMenuButton
              size="lg"
              tooltip="Your account"
              className="group-data-[collapsible=icon]:size-9.5! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:rounded-lg group-data-[collapsible=icon]:justify-center"
              isActive={pathname.startsWith("/dashboard/account")}
              render={<Link href="/dashboard/account" />}
            >
              <UserCircleIcon weight="regular" />
              <span className="group-data-[collapsible=icon]:hidden">Your account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}

