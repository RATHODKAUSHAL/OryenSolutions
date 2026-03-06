"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function FeaturesSection() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge className="label-font rounded-full border border-[#7DA0CA]/70 bg-[#eaf4fd] px-4 py-1 uppercase tracking-[0.14em] text-[var(--primary)]">Features</Badge>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-[#021024] sm:text-5xl">Latest advanced technologies to ensure everything your business needs</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-body)]">
            Maximize your team&apos;s productivity with our affordable, user-friendly IT and engineering automation solutions.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true, amount: 0.2 }}>
            <Card className="h-full rounded-3xl border-[#7DA0CA]/45 bg-[#f8fcff] shadow-[0_10px_28px_rgba(84,131,179,0.12)]">
              <CardContent className="grid gap-6 p-6 lg:grid-cols-2">
                <div>
                  <CardHeader className="p-0">
                    <CardTitle className="text-3xl">Dynamic Dashboard</CardTitle>
                  </CardHeader>
                  <p className="mt-4 text-[var(--text-body)]">
                    Oryen Solutions delivers real-time dashboards for project tracking, BIM data visualization, and business analytics - giving you complete visibility to make faster, smarter decisions.
                  </p>
                  <Button className="mt-8 rounded-2xl bg-[#0077b6] px-6 text-white hover:bg-[#005f92]">Explore All</Button>
                </div>
                <div className="rounded-2xl border border-[#7DA0CA]/35 bg-white p-4">
                  <div className="grid h-52 grid-cols-8 items-end gap-2">
                    {[30, 58, 40, 70, 38, 62, 44, 52].map((h, i) => (
                      <div key={i} className={`rounded-md ${i === 3 ? "bg-[var(--primary)]" : "bg-slate-300"}`} style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true, amount: 0.2 }}>
              <Card className="rounded-3xl border-[#7DA0CA]/45 bg-[#f8fcff] shadow-[0_10px_28px_rgba(84,131,179,0.12)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Smart Notifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--text-body)]">Stay updated with intelligent alerts for project milestones, Tekla model changes, CRM updates, and task deadlines - delivered via email, SMS, or in-app.</p>
                  <div className="mt-6 space-y-3 rounded-2xl border border-[#7DA0CA]/35 bg-white p-4 text-sm">
                    {[
                      "Email notification",
                      "New messages, comment, or replies",
                      "Announcements and Update",
                      "Reminders",
                    ].map((item, i) => (
                      <div key={item} className="flex items-center justify-between border-b border-slate-100 pb-2 last:border-0 last:pb-0">
                        <span>{item}</span>
                        <span className={`h-2.5 w-10 rounded-full ${i % 2 === 0 ? "bg-[var(--primary)]" : "bg-slate-200"}`} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 20 }} viewport={{ once: true, amount: 0.2 }}>
              <Card className="rounded-3xl border-[#7DA0CA]/45 bg-[#f8fcff] shadow-[0_10px_28px_rgba(84,131,179,0.12)]">
                <CardHeader>
                  <CardTitle className="text-2xl">Task Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--text-body)]">Assign tasks, track Tekla deliverables, manage development sprints, and collaborate with your team - all in one workspace.</p>
                  <div className="mt-6 space-y-3 rounded-2xl border border-[#7DA0CA]/35 bg-white p-4 text-sm">
                    <div className="rounded-lg border border-slate-100 p-3">Bill Sanders: Hello @Rajesh</div>
                    <div className="rounded-lg border border-slate-100 p-3">Jane Cooper: Uploaded new contract</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
