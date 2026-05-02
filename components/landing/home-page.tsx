import type { ReactNode } from "react";
import {
  ArrowRight,
  AudioLines,
  Ear,
  HeartHandshake,
  Languages,
  LockKeyhole,
  MessageCircleMore,
  Mic,
  MoveRight,
  ShieldPlus,
  Sparkles,
  StepForward,
} from "lucide-react";
import { HeroMockup } from "@/components/landing/hero-mockup";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const trustBadges = [
  { label: "Private", icon: LockKeyhole },
  { label: "Native-language support", icon: Languages },
  { label: "Gentle guidance", icon: HeartHandshake },
];

const problemCards = [
  {
    title: "You may not want solutions right away",
    body: "Sometimes the first need is simple: let the weight come out without being pushed, fixed, or judged.",
    icon: MessageCircleMore,
  },
  {
    title: "Feelings sound different in your own language",
    body: "The words that hold grief, stress, or loneliness often arrive more honestly when they feel familiar.",
    icon: Languages,
  },
  {
    title: "Emotional overload needs a softer pace",
    body: "When the mind is tired, even a kind pause can help you breathe, slow down, and gather yourself.",
    icon: Sparkles,
  },
  {
    title: "Privacy matters when life feels messy",
    body: "People open up more easily when the space feels discreet, calm, and free of performance.",
    icon: LockKeyhole,
  },
];

const steps = [
  {
    title: "Tell us how you feel",
    body: "Start with a mood, a sentence, or silence you are trying to name.",
    icon: HeartHandshake,
  },
  {
    title: "Choose what you need",
    body: "Pick a support intent like just listen to me, calm me down, motivate me, or help me think clearly.",
    icon: Ear,
  },
  {
    title: "Pick text or call",
    body: "Type when you want privacy and distance, or choose a voice call when holding it in feels too hard.",
    icon: AudioLines,
  },
  {
    title: "Leave feeling lighter",
    body: "Step away with more space in your chest, a soft summary, and one small next step if it helps.",
    icon: StepForward,
  },
];

const qualities = [
  {
    title: "Listens without judgment",
    body: "There is no pressure to sound calm, wise, or put together before you begin.",
    icon: Ear,
  },
  {
    title: "Responds in your language",
    body: "You do not have to translate your emotions into something neat or formal first.",
    icon: Languages,
  },
  {
    title: "Helps you slow down",
    body: "The conversation gently eases the pace when your thoughts feel too loud or too fast.",
    icon: Sparkles,
  },
  {
    title: "Offers gentle next steps",
    body: "If it helps, Buddy can offer a soft summary, one grounding action, or a gentle next step instead of a long list of advice.",
    icon: MoveRight,
  },
];

const modes = [
  {
    title: "Text support",
    body: "For private moments when you want room to think, pause, rewrite, or say the hard thing quietly.",
    note: "Best for privacy, clarity, and going at your own pace.",
    icon: MessageCircleMore,
    accent: "var(--accent)",
    surface:
      "bg-[linear-gradient(180deg,rgba(238,247,244,0.92),rgba(255,255,255,0.94))]",
  },
  {
    title: "Voice call support",
    body: "For moments when speaking feels more natural than typing and you want Buddy to call your registered number so you can let it out more naturally.",
    note: "Best for presence, emotional release, and feeling accompanied.",
    icon: Mic,
    accent: "var(--amber-strong)",
    surface:
      "bg-[linear-gradient(180deg,rgba(252,244,231,0.96),rgba(255,255,255,0.94))]",
  },
];

function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={[
        "max-w-3xl space-y-4",
        align === "center" ? "mx-auto text-center" : "",
      ].join(" ")}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
        {eyebrow}
      </p>
      <h2 className="font-serif-display text-4xl leading-none tracking-[-0.03em] text-[color:var(--foreground)] sm:text-5xl">
        {title}
      </h2>
      <p className="text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg">
        {body}
      </p>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  body,
  children,
}: {
  icon: ReactNode;
  title: string;
  body: string;
  children?: ReactNode;
}) {
  return (
    <Card className="h-full border-white/80 bg-white/86 backdrop-blur">
      <CardContent className="h-full space-y-5">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
          {icon}
        </div>
        <div className="space-y-3">
          <h3 className="text-xl font-medium tracking-tight text-[color:var(--foreground)]">
            {title}
          </h3>
          <p className="text-base leading-7 text-[color:var(--muted-foreground)]">
            {body}
          </p>
        </div>
        {children}
      </CardContent>
    </Card>
  );
}

export function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-12rem] top-[-6rem] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(88,141,134,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute right-[-8rem] top-[20rem] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(233,185,121,0.16),transparent_68%)] blur-3xl" />
        <div className="absolute bottom-[16rem] left-[18%] h-[18rem] w-[18rem] rounded-full bg-[radial-gradient(circle,rgba(188,197,183,0.14),transparent_70%)] blur-3xl" />
      </div>

      <section className="mx-auto max-w-7xl px-6 pb-18 pt-6 sm:px-8 lg:px-12 lg:pt-8">
        <header className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/66 px-4 py-3 shadow-[0_18px_45px_rgba(53,56,51,0.06)] backdrop-blur sm:px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              <HeartHandshake className="h-5 w-5" />
            </div>
            <div>
              <p className="font-serif-display text-2xl leading-none tracking-tight text-[color:var(--foreground)]">
                Buddy
              </p>
              <p className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                Emotional support companion
              </p>
            </div>
          </div>
          <ButtonLink href="#start" variant="secondary" className="hidden sm:inline-flex">
            Open Buddy
          </ButtonLink>
        </header>

        <div className="mx-auto mt-12 grid max-w-6xl gap-12 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="animate-rise space-y-8">
            <Badge className="bg-[color:var(--surface)] px-4 py-2 text-[0.72rem] uppercase tracking-[0.2em]">
              For emotionally heavy moments
            </Badge>

            <div className="space-y-6">
              <h1 className="max-w-3xl font-serif-display text-5xl leading-[0.92] tracking-[-0.045em] text-[color:var(--foreground)] sm:text-6xl lg:text-7xl">
                When your mind feels heavy, speak in the language that feels
                like home.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[color:var(--muted-foreground)] sm:text-xl">
                Buddy is a calm emotional support companion for the moments when
                you need to let things out. Choose text or a voice call, speak
                naturally in your own language, and leave with a little more
                space inside.
              </p>
            </div>

            <div id="start" className="flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#text-voice" variant="primary" size="lg">
                Start with Text
                <ArrowRight className="h-4 w-4" />
              </ButtonLink>
              <ButtonLink href="#text-voice" variant="secondary" size="lg">
                Try Voice Support
                <Mic className="h-4 w-4" />
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-3">
              {trustBadges.map(({ label, icon: Icon }) => (
                <Badge key={label}>
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Badge>
              ))}
            </div>
          </div>

          <div className="animate-rise [animation-delay:120ms]">
            <HeroMockup />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="Why it helps"
            title="Not every hard moment needs a fix. Some moments need room."
            body="A lot of people are not looking for answers the second they open up. They want a private place to exhale, untangle what they feel, and be met gently before the world asks them to move on."
          />

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {problemCards.map(({ title, body, icon: Icon }, index) => (
              <FeatureCard
                key={title}
                icon={<Icon className="h-5 w-5" />}
                title={title}
                body={body}
              >
                <div
                  className="h-1.5 w-16 rounded-full"
                  style={{
                    background:
                      index % 2 === 0
                        ? "linear-gradient(90deg, rgba(88,141,134,0.85), rgba(88,141,134,0.12))"
                        : "linear-gradient(90deg, rgba(214,157,84,0.85), rgba(214,157,84,0.12))",
                  }}
                />
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.8),rgba(244,240,232,0.74))] px-6 py-10 shadow-[0_20px_60px_rgba(53,56,51,0.08)] sm:px-8 lg:px-10 lg:py-12">
          <SectionHeading
            eyebrow="How it works"
            title="A simple path from emotional noise to a little more steadiness."
            body="Every step is designed to reduce pressure. You do not need to explain everything perfectly before you begin, and you can choose the kind of support you need in the moment."
            align="center"
          />

          <div className="relative mt-12 grid gap-5 lg:grid-cols-4">
            <div className="absolute left-[12.5%] right-[12.5%] top-11 hidden h-px bg-[linear-gradient(90deg,rgba(89,105,102,0.1),rgba(89,105,102,0.4),rgba(89,105,102,0.1))] lg:block" />
            {steps.map(({ title, body, icon: Icon }, index) => (
              <Card
                key={title}
                className="relative border-white/75 bg-white/88 backdrop-blur"
              >
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--surface-muted)] text-[color:var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-[color:var(--muted-foreground)]">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium tracking-tight text-[color:var(--foreground)]">
                    {title}
                  </h3>
                  <p className="text-base leading-7 text-[color:var(--muted-foreground)]">
                    {body}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="The feeling"
            title="Support that feels calm, caring, and grounded."
            body="Buddy is designed to feel less like a tool and more like a pause you can lean on. Warm language, a steady pace, and gentle clarity sit at the center of the experience."
          />

          <div className="grid gap-5 md:grid-cols-2">
            {qualities.map(({ title, body, icon: Icon }) => (
              <FeatureCard
                key={title}
                icon={<Icon className="h-5 w-5" />}
                title={title}
                body={body}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="text-voice"
        className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12"
      >
        <div className="mx-auto max-w-6xl space-y-12">
          <SectionHeading
            eyebrow="Text or voice"
            title="Two ways to open up, depending on what the moment asks from you."
            body="Some days you want quiet and distance. Other days you need to hear yourself say it. Buddy gives you both paths without changing the warmth of the support."
          />

          <div className="grid gap-5 lg:grid-cols-2">
            {modes.map(({ title, body, note, icon: Icon, accent, surface }) => (
              <Card key={title} className={`overflow-hidden border-white/70 ${surface}`}>
                <CardContent className="space-y-6">
                  <div className="flex items-start justify-between gap-4">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-[1.4rem]"
                      style={{
                        backgroundColor:
                          title === "Text support"
                            ? "rgba(88,141,134,0.12)"
                            : "rgba(214,157,84,0.14)",
                        color: accent,
                      }}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge className="bg-white/80">
                      {title === "Text support" ? "Quiet and private" : "Present and releasing"}
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-3xl font-serif-display leading-none tracking-[-0.03em] text-[color:var(--foreground)]">
                      {title}
                    </h3>
                    <p className="text-lg leading-8 text-[color:var(--muted-foreground)]">
                      {body}
                    </p>
                  </div>
                  <div className="rounded-[1.5rem] border border-white/80 bg-white/72 p-4">
                    <p className="text-sm leading-7 text-[color:var(--foreground)]">
                      {note}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-18 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-[rgba(214,157,84,0.24)] bg-[linear-gradient(180deg,rgba(252,247,239,0.95),rgba(247,242,232,0.88))] p-8 shadow-[0_18px_45px_rgba(53,56,51,0.05)] sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div className="space-y-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-[1.4rem] bg-white/80 text-[color:var(--amber-strong)]">
                <ShieldPlus className="h-6 w-6" />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[color:var(--muted-foreground)]">
                Safety and care
              </p>
              <h2 className="font-serif-display text-4xl leading-none tracking-[-0.03em] text-[color:var(--foreground)]">
                Warm support, with clear boundaries.
              </h2>
            </div>
            <div className="space-y-4 text-base leading-8 text-[color:var(--muted-foreground)] sm:text-lg">
              <p>
                Buddy is built for emotional support in everyday heavy moments.
                It is not therapy, diagnosis, or crisis care.
              </p>
              <p>
                If someone sounds deeply overwhelmed, panicked, or unsafe, the
                experience can become slower, more grounding, and more careful.
                In crisis situations, it should stop acting like a casual
                companion and clearly guide the person toward urgent human help.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 pt-18 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.25rem] border border-[color:var(--border-soft)] bg-[color:var(--ink)] px-6 py-12 text-[color:var(--surface)] shadow-[0_28px_80px_rgba(37,44,47,0.24)] sm:px-10 sm:py-14 lg:px-14">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/60">
                Begin gently
              </p>
              <h2 className="max-w-3xl font-serif-display text-4xl leading-[0.96] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                You do not have to sit with everything alone.
              </h2>
              <p className="max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                When the day feels too full, Buddy gives you a private place to
                let some of it breathe.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-stretch">
              <ButtonLink href="#text-voice" variant="primary" size="lg" className="justify-center">
                Start with Text
              </ButtonLink>
              <ButtonLink
                href="#text-voice"
                variant="secondary"
                size="lg"
                className="justify-center border-white/20 bg-white/8 text-white hover:bg-white/14"
              >
                Try Voice Support
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
