import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-[#7DA0CA]/45 bg-[#f8fcff] px-8 py-14 shadow-[0_10px_28px_rgba(84,131,179,0.1)] sm:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <h2 className="max-w-xl text-balance text-4xl font-bold tracking-tight text-[#021024]">Discover the Full Scale of Oryen Solutions Capabilities</h2>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/contact-us">
              <Button className="h-12 cursor-pointer rounded-2xl bg-[#0077b6] px-7 text-white hover:bg-[#005f92]">Connect to Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
