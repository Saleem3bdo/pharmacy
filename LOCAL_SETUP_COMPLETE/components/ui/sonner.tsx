"use client";

import { useColorScheme } from "react-native";
import { Toaster as Sonner, ToasterProps } from "sonner";

const Toaster = ({ ...props }: ToasterProps) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? "dark" : "light";

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      {...props}
    />
  );
};

export { Toaster };
