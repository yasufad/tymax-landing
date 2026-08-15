"use client";

import {
  BroadcastIcon,
  CaretDownIcon,
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
  SidebarRail,
} from "@/components/ui/sidebar";

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
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Tymax home" render={<Link href="/" />}>
              <img className="size-7 shrink-0 invert" src="/img/tymax-logo.svg" alt="Tymax" />
              <span className="font-mono text-sm font-semibold tracking-[-0.05em] text-sidebar-foreground group-data-[collapsible=icon]:hidden">
                Tymax
              </span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu className="mt-4">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Switch organisation" render={<Link href="/dashboard/switcher" />}>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-[0.65rem] font-bold text-primary-foreground">
                KM
              </span>
              <span className="grid flex-1 text-left text-sm leading-tight group-data-[collapsible=icon]:hidden">
                <span className="truncate font-medium">K3 Media</span>
                <span className="truncate font-mono text-[0.65rem] text-muted-foreground">Organisation</span>
              </span>
              <CaretDownIcon className="ml-auto size-4 group-data-[collapsible=icon]:hidden" weight="bold" />
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
      <SidebarRail />
    </Sidebar>
  );
}

