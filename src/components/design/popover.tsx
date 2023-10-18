"use client";
import { useContext, createContext, useState, PropsWithChildren } from "react";

const PopoverContext = createContext<{
  isOpen: boolean;
} | null>(null);

type PopoverProps = {
  children: React.ReactNode;
  isOpen?: boolean;
};

export function Popover({ children, isOpen = false }: PopoverProps) {
  const [popoverContext, setPopoverContext] = useState({ isOpen });
  const value = { ...popoverContext, setPopoverContext };
  return (
    <PopoverContext.Provider value={value}>{children}</PopoverContext.Provider>
  );
}

type PopoverTriggerProps = {
  children: React.ReactNode;
};

export function PopoverTrigger({ children }: PopoverTriggerProps) {
  // const isOpen = useContext(PopoverContext);

  return <button aria-haspopup="dialog">{children}</button>;
}
