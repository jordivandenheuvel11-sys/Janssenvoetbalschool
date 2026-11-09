"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import ContactModal from "./ContactModal";

export type ContactAanvraagType =
  | "contact"
  | "proefles"
  | "mini-voetbalschool";

export type OpenContactOptions = {
  type?: ContactAanvraagType;
  subject?: string;
  message?: string;
};

type ContactModalContextValue = {
  openContactModal: (options?: OpenContactOptions) => void;
  closeContactModal: () => void;
  isOpen: boolean;
};

const ContactModalContext = createContext<ContactModalContextValue | null>(
  null,
);

export function ContactModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OpenContactOptions>({});

  const openContactModal = useCallback((next?: OpenContactOptions) => {
    setOptions(next ?? {});
    setIsOpen(true);
  }, []);

  const closeContactModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  const value = useMemo(
    () => ({ openContactModal, closeContactModal, isOpen }),
    [openContactModal, closeContactModal, isOpen],
  );

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal
        open={isOpen}
        onClose={closeContactModal}
        initialType={options.type}
        initialSubject={options.subject}
        initialMessage={options.message}
      />
    </ContactModalContext.Provider>
  );
}

export function useContactModal() {
  const ctx = useContext(ContactModalContext);
  if (!ctx) {
    throw new Error("useContactModal must be used within ContactModalProvider");
  }
  return ctx;
}
