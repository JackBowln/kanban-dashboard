"use client"
import { useState } from "react";
import CreateCardModal from "@/app/components/CardFormModal"
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
import Logo from "@/app/assets/Logo";
import { useRouter } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { push } = useRouter();

  function logout() {
    localStorage.removeItem("token")
    push("/login")
  }

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand className="flex gap-4">
          <Logo />
          <p className="font-bold text-inherit">Kanban</p>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex text-black cursor-pointer" onClick={logout}>
          Logout
        </NavbarItem>
        <NavbarItem>
          <CreateCardModal />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
