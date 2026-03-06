import { Badge } from "@/components/ui/badge";

const specs = ["Tekla Structures Automation", "BIM Solutions", "Engineering + IT Integration"] as const;

export function SpecializationSection() {
  return (
    <section id="specialization" className="py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-900 to-emerald-700 p-8 text-white shadow-lg sm:p-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Specialization</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            {specs.map((item) => (
              <Badge key={item} className="rounded-xl border border-emerald-300/40 bg-white/10 px-4 py-2 text-sm font-medium text-white">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
