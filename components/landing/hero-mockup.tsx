import {
  AudioLines,
  HeartPulse,
  Languages,
  MessageSquareText,
  Mic,
  MoonStar,
  Sparkles,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const moodTags = ["Overwhelmed", "Restless", "Need to vent"];
const supportModes = [
  "Just listen to me",
  "Calm me down",
  "Motivate me",
  "Help me think clearly",
];

export function HeroMockup() {
  return (
    <Card className="relative overflow-hidden border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.94),rgba(246,242,234,0.9))]">
      <div className="absolute inset-x-10 top-0 h-28 rounded-full bg-[radial-gradient(circle,rgba(238,183,113,0.18),transparent_68%)] blur-2xl" />
      <CardContent className="relative p-4 sm:p-5">
        <div className="rounded-[1.6rem] border border-white/80 bg-[#fffdfa]/90 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] sm:p-5">
          <div className="flex items-center justify-between gap-3 border-b border-[color:var(--border-soft)] pb-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-foreground)]">
                Buddy
              </p>
              <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                Support that meets you softly
              </p>
            </div>
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
              <HeartPulse className="h-5 w-5" />
            </div>
          </div>

          <div className="mt-4 grid gap-4">
            <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[color:var(--foreground)]">
                    Mood check-in
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                    What feels closest right now?
                  </p>
                </div>
                <MoonStar className="h-4 w-4 text-[color:var(--accent)]" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {moodTags.map((tag) => (
                  <Badge key={tag} className="bg-[color:var(--surface-muted)]">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--foreground)]">
                      Choose support
                    </p>
                    <p className="text-sm text-[color:var(--muted-foreground)]">
                      Vent, reflect, or steady your thoughts
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-white p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[color:var(--amber-soft)] text-[color:var(--amber-strong)]">
                    <Languages className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-[color:var(--foreground)]">
                      Speak your language
                    </p>
                    <p className="text-sm text-[color:var(--muted-foreground)]">
                      Start in the words that feel natural
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-[color:var(--border-soft)] bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-[color:var(--foreground)]">
                    Pick what you need
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--muted-foreground)]">
                    Start with the kind of support that feels right
                  </p>
                </div>
                <Sparkles className="h-4 w-4 text-[color:var(--amber-strong)]" />
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {supportModes.map((mode) => (
                  <Badge key={mode} className="bg-[color:var(--surface)]">
                    {mode}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="rounded-[1.6rem] border border-[color:var(--border-soft)] bg-[color:var(--ink)] p-4 text-[color:var(--surface)]">
              <div className="flex items-center gap-2 text-sm font-medium text-white/90">
                <MessageSquareText className="h-4 w-4" />
                Example conversation
              </div>
              <div className="mt-4 grid gap-3 text-sm leading-7">
                <div className="ml-auto max-w-[85%] rounded-[1.35rem] rounded-br-md bg-white/10 px-4 py-3 text-white/88">
                  I do not want advice right now. I just need to say everything
                  out loud.
                </div>
                <div className="max-w-[90%] rounded-[1.35rem] rounded-bl-md bg-white px-4 py-3 text-[color:var(--foreground)]">
                  That is okay. You can let it come as it is. I am here, and we
                  can take it one thought at a time.
                </div>
              </div>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5 text-sm text-white/78">
                  <div className="flex items-center gap-2">
                    <AudioLines className="h-4 w-4" />
                    Voice call available
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/8 px-3 py-2.5 text-sm text-white/78">
                  <div className="flex items-center gap-2">
                    <Mic className="h-4 w-4" />
                    Soft summary before you leave
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
