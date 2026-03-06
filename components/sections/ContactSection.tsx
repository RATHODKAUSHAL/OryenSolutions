import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto w-full max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-emerald-950 sm:text-4xl">Get in Touch</h2>
        <p className="mt-3 text-lg text-slate-600">Ahmedabad, India</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Input placeholder="Get in Touch" className="h-12 rounded-xl border-slate-300 bg-white" />
          <Button className="h-12 rounded-xl bg-[#0077b6] px-8 text-white hover:bg-[#005f92]">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
}
