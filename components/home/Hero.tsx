"use client";

import { ArrowUpRight, Check, ShieldCheck, Sparkles, Wind } from "lucide-react";
import { motion, MotionConfig } from "framer-motion";
import Button from "../ui/Button";
import { useGetPublicSettingsQuery } from "@/redux/features/api/admin/settingsApi";
import { fadeScale, fadeUp, staggerContainer } from "@/components/shared/motion";

const FALLBACK_HERO_IMAGE = "/images/services/service-hero.jpg";

export default function Hero() {
  const { data } = useGetPublicSettingsQuery();
  const heroImage = data?.landingHeroImageUrl || FALLBACK_HERO_IMAGE;

  return (
    <MotionConfig reducedMotion="user">
      <section className="relative isolate overflow-hidden border-b border-border bg-background">
        <div aria-hidden="true" className="pointer-events-none absolute -right-40 -top-40 h-[760px] w-[760px] rounded-full bg-accent/60 blur-3xl" />
        <div className="relative mx-auto max-w-[1320px] px-5 pb-14 pt-32 sm:px-8 sm:pb-20 sm:pt-36 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <motion.div className="flex flex-col items-start" variants={staggerContainer} initial="hidden" animate="visible">
              <motion.p variants={fadeUp} className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-primary sm:text-xs">
                <Sparkles size={14} className="text-brass" /> A cleaner home. A better everyday.
              </motion.p>
              <motion.h1 variants={fadeUp} className="max-w-[680px] text-[clamp(40px,5vw,68px)] font-extrabold leading-[1.08] tracking-[-0.045em] text-primary-dark">
                Powerful cleaning.<br />
                <span className="text-primary">Beautiful living.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="mt-6 max-w-[510px] text-base leading-relaxed text-muted-foreground sm:text-lg">
                Central vacuum systems that work quietly behind the scenes.
                Discover premium products, seamless installations, and expert care for a home that feels its best.
              </motion.p>
              <motion.div variants={fadeUp} className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Button href="/products" className="gap-3">Explore Products <ArrowUpRight size={18} /></Button>
                <Button href="/services" variant="outline">Request Service</Button>
              </motion.div>
              <motion.div variants={fadeUp} className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-primary/15 pt-6 text-xs font-medium text-muted-foreground sm:text-sm">
                {["Expert installation", "Reliable repairs", "Ongoing care"].map((item) => (
                  <span key={item} className="inline-flex items-center gap-2"><Check size={15} className="text-primary" />{item}</span>
                ))}
              </motion.div>
            </motion.div>

            <motion.div className="relative mx-auto w-full max-w-[540px] pb-7 pl-4 sm:pl-6" variants={fadeScale} initial="hidden" animate="visible" transition={{ delay: 0.15 }}>
              <div aria-hidden="true" className="absolute bottom-0 left-0 right-6 top-6 rounded-[32px] border border-primary/15 bg-accent sm:rounded-[44px]" />
              <div className="relative aspect-[4/4.3] overflow-hidden rounded-[28px] bg-secondary shadow-2xl shadow-primary/10 sm:rounded-[36px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={heroImage} alt="Expert care for a clean, comfortable home" className="h-full w-full object-cover" />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />
                <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-background/95 px-4 py-2 text-xs font-semibold text-primary shadow-sm"><Wind size={16} /> Built around your home</div>
                <div className="absolute bottom-7 left-6 right-6 text-white sm:bottom-9 sm:left-8">
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/75">Thoughtfully engineered</p>
                  <p className="font-heading text-2xl font-bold leading-tight sm:text-3xl">Less dust.<br />More room to breathe.</p>
                </div>
              </div>
              <div className="absolute -bottom-1 right-2 flex items-center gap-3 rounded-2xl border border-border bg-white px-5 py-4 shadow-xl shadow-primary/10 sm:-right-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brass-light text-brass"><ShieldCheck size={23} /></span>
                <div><p className="text-sm font-bold text-primary-dark">Care you can count on</p><p className="mt-0.5 text-xs text-muted-foreground">From the first fit to every fix.</p></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}
