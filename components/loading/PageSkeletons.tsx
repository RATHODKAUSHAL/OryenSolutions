import { Skeleton } from "@/components/loading/Skeleton";

function NavbarSkeleton() {
  return (
    <div className="border-b border-[#7DA0CA]/20 bg-white/90">
      <div className="mx-auto flex h-18 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Skeleton className="h-9 w-36 rounded-full" />
        <div className="hidden items-center gap-3 md:flex">
          <Skeleton className="h-10 w-20 rounded-full" />
          <Skeleton className="h-10 w-20 rounded-full" />
          <Skeleton className="h-10 w-20 rounded-full" />
          <Skeleton className="h-10 w-24 rounded-full" />
        </div>
        <Skeleton className="h-10 w-28 rounded-full" />
      </div>
    </div>
  );
}

function FooterSkeleton() {
  return (
    <footer className="border-t border-[#7DA0CA]/20 bg-[#f8fbff] py-12">
      <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-4 lg:px-8">
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
        <Skeleton className="h-28 w-full" />
      </div>
    </footer>
  );
}

function SectionIntroSkeleton({ centered = false }: { centered?: boolean }) {
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <Skeleton className="h-8 w-36 rounded-full" />
      <Skeleton className="mt-5 h-14 w-full max-w-2xl" />
      <Skeleton className="mt-3 h-14 w-11/12 max-w-xl" />
      <Skeleton className="mt-6 h-6 w-full max-w-2xl" />
      <Skeleton className="mt-3 h-6 w-10/12 max-w-xl" />
    </div>
  );
}

function CardGridSkeleton({ count, columns = "md:grid-cols-2 lg:grid-cols-3" }: { count: number; columns?: string }) {
  return (
    <div className={`grid gap-5 ${columns}`}>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="rounded-[2rem] border border-[#7DA0CA]/20 bg-white/80 p-6 shadow-[0_10px_24px_rgba(84,131,179,0.08)]">
          <Skeleton className="h-14 w-14 rounded-2xl" />
          <Skeleton className="mt-6 h-8 w-3/4" />
          <Skeleton className="mt-4 h-5 w-full" />
          <Skeleton className="mt-2 h-5 w-11/12" />
          <Skeleton className="mt-2 h-5 w-4/5" />
        </div>
      ))}
    </div>
  );
}

export function HomePageSkeleton() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <NavbarSkeleton />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Skeleton className="h-11 w-28 rounded-full" />
            <Skeleton className="h-11 w-32 rounded-full" />
            <Skeleton className="h-11 w-30 rounded-full" />
          </div>
          <Skeleton className="mt-12 h-16 w-full rounded-2xl" />
        </div>
      </section>
      <section className="bg-[#f4f8fd] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full rounded-3xl" />
            ))}
          </div>
          <div className="mt-14">
            <CardGridSkeleton count={6} />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <CardGridSkeleton count={6} />
        </div>
      </section>
      <section className="bg-[#f8fbff] py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
          <div className="mt-12 space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-28 w-full rounded-3xl" />
            ))}
          </div>
        </div>
      </section>
      <FooterSkeleton />
    </main>
  );
}

export function StandardContentPageSkeleton() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <NavbarSkeleton />
      <section className="bg-[#f4f8fd] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <CardGridSkeleton count={3} />
        </div>
      </section>
      <section className="bg-[#f8fbff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-2">
            <Skeleton className="h-96 w-full rounded-[2rem]" />
            <Skeleton className="h-96 w-full rounded-[2rem]" />
          </div>
        </div>
      </section>
      <FooterSkeleton />
    </main>
  );
}

export function ServicePageSkeleton() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <NavbarSkeleton />
      <section className="bg-[#f4f8fd] py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <SectionIntroSkeleton />
          <Skeleton className="h-[360px] w-full rounded-[2rem]" />
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Skeleton className="h-[420px] w-full rounded-[2rem]" />
          <div className="space-y-6">
            <Skeleton className="h-52 w-full rounded-[2rem]" />
            <div className="grid grid-cols-2 gap-4">
              <Skeleton className="h-36 w-full rounded-[1.5rem]" />
              <Skeleton className="h-36 w-full rounded-[1.5rem]" />
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#f8fbff] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <Skeleton key={index} className="h-32 w-full rounded-3xl" />
            ))}
          </div>
        </div>
      </section>
      <FooterSkeleton />
    </main>
  );
}

export function ContactPageSkeleton() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <NavbarSkeleton />
      <section className="bg-[#f4f8fd] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Skeleton className="h-[360px] w-full rounded-[2rem]" />
          <Skeleton className="h-[420px] w-full rounded-[2rem]" />
        </div>
      </section>
      <FooterSkeleton />
    </main>
  );
}

export function CareersPageSkeleton() {
  return (
    <main className="min-h-screen bg-white text-[#021024]">
      <NavbarSkeleton />
      <section className="bg-[#f4f8fd] py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntroSkeleton centered />
        </div>
      </section>
      <section className="py-20 sm:py-24">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            <Skeleton className="h-[520px] w-full rounded-[2rem] lg:col-span-2" />
            <div className="space-y-6">
              <Skeleton className="h-60 w-full rounded-[2rem]" />
              <Skeleton className="h-52 w-full rounded-[2rem]" />
            </div>
          </div>
        </div>
      </section>
      <FooterSkeleton />
    </main>
  );
}
