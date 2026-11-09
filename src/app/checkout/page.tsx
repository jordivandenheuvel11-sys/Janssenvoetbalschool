import { redirect } from "next/navigation";

type CheckoutPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

/** Oude /checkout-URL's blijven werken en gaan naar de inschrijfpagina. */
export default async function CheckoutPage({ searchParams }: CheckoutPageProps) {
  const params = await searchParams;
  const pakket = typeof params.pakket === "string" ? params.pakket : undefined;
  const qs = pakket ? `?pakket=${encodeURIComponent(pakket)}` : "";
  redirect(`/inschrijven${qs}`);
}
