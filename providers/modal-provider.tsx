"use client";

import StoreModal from "@/components/modals/store-modal";
import { useEffect, useState } from "react";

// ModalProvider: Component that prevents hydration errors by waiting for the DOM to be fully rendered
export const ModalProvider = () => {
  // State to check if the component is mounted
  const [isMounted, setIsMounted] = useState(false);

  // Side effect to update the state when the component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // If the component is not mounted, render nothing to avoid hydration errors
  if (!isMounted) {
    return null;
  }

  // Render the StoreModal component once the DOM is fully rendered
  return (
    <>
      <StoreModal />
    </>
  );
};
