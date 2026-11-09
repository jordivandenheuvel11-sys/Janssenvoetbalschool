"use client";

import { useEffect } from "react";
import {
  useContactModal,
  type ContactAanvraagType,
} from "./ContactModalContext";

/** Opent de contact-popup één keer bij laden van de pagina (deep links). */
export default function OpenContactOnMount({
  type,
  subject,
}: {
  type?: ContactAanvraagType;
  subject?: string;
}) {
  const { openContactModal } = useContactModal();

  useEffect(() => {
    openContactModal({ type, subject });
  }, [openContactModal, type, subject]);

  return null;
}
