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
      <SidebarHeader className="flex min-h-[4.2rem] items-center justify-center border-b border-sidebar-border px-3 py-1">
        <SidebarMenu className="w-full">
          <SidebarMenuItem className="flex w-full items-center">
            <SidebarMenuButton size="lg" className="flex h-12 w-full items-center px-2 hover:bg-transparent" tooltip="Tymax home" render={<Link href="/" />}>
              <span className={`${alexBrush.className} text-5xl leading-none text-sidebar-foreground group-data-[collapsible=icon]:hidden`}>
                Tymax
              </span>
              <span className={`${alexBrush.className} hidden text-4xl leading-none text-sidebar-foreground group-data-[collapsible=icon]:inline-block`}>
                T
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
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

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              tooltip="Your account"
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

