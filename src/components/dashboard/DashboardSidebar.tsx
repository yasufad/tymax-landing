"use client";

import {
  BroadcastIcon,
  CaretDownIcon,
  ChartLineUpIcon,
  CreditCardIcon,
  GearIcon,
  HouseIcon,
  UserCircleIcon,
} from "@phosphor-icons/react";
import Link from "next/link";
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

const navigationItems = [
  { label: "Overview", href: "/dashboard", icon: HouseIcon, active: true },
  { label: "Channels", icon: BroadcastIcon },
  { label: "Usage", icon: ChartLineUpIcon },
  { label: "Billing", icon: CreditCardIcon },
  { label: "Settings", icon: GearIcon },
];

export default function DashboardSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border px-3 py-4">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Tymax home" render={<Link href="/" />}>
              <img className="size-7 shrink-0 invert" src="/img/tymax-logo.svg" alt="" />
              <span className="font-mono text-sm font-semibold tracking-[-0.05em] text-sidebar-foreground">Tymax</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>

        <SidebarMenu className="mt-6">
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Workspace" disabled>
              <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary font-mono text-[0.65rem] font-bold text-primary-foreground">YC</span>
              <span className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">Your channel</span>
                <span className="truncate font-mono text-[0.65rem] text-muted-foreground">Workspace</span>
              </span>
              <CaretDownIcon className="ml-auto size-4" weight="bold" />
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Workspace</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => {
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton
                      isActive={item.active}
                      tooltip={item.label}
                      disabled={!item.href}
                      render={item.href ? <Link href={item.href} /> : undefined}
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
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border p-3">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" tooltip="Your account" disabled>
              <UserCircleIcon weight="regular" />
              <span>Your account</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
