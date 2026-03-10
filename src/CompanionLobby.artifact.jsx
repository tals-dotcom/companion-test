import { Send, Mic, User, Users, Sparkles, ChevronRight, AudioLines } from "lucide-react";

// ============================================================
// COMPANION LOBBY - Artifact-Ready Single File
// Paste this entire file into Claude chat to iterate visually.
// Works with Claude Artifacts (React + Tailwind sandbox).
// ============================================================

// -- Session schedule data (trimmed to 2 days for artifact size) --
const SCHEDULE = [
  {
    title: "Today",
    sessions: [
      { day: "Sunday", time: "4 pm", sessionTitle: "Restoring Emotional Balance and Inner Safety", facilitator: "Maya" },
      { day: "Sunday", time: "5 pm", sessionTitle: "Reclaiming Yourself: Healing After Narcissistic Abuse", facilitator: "Serena" },
      { day: "Sunday", time: "6 pm", sessionTitle: "When Love Hurts: Making Sense of Narcissistic Relationships", facilitator: "Serena" },
      { day: "Sunday", time: "7 pm", sessionTitle: "Walking on Eggshells: Living With Constant Tension and Control", facilitator: "Serena" },
      { day: "Sunday", time: "8 pm", sessionTitle: "Doubting Yourself: Gaslighting, Confusion, and Lost Self-Trust", facilitator: "Serena" },
    ],
  },
  {
    title: "Tomorrow",
    sessions: [
      { day: "Monday", time: "12 am", sessionTitle: "When Love Hurts: Making Sense of Narcissistic Relationships", facilitator: "Serena" },
      { day: "Monday", time: "1 am", sessionTitle: "Reclaiming Yourself: Healing After Narcissistic Abuse", facilitator: "Serena" },
      { day: "Monday", time: "2 am", sessionTitle: "Trying to Keep the Peace: People-Pleasing and Self-Silencing", facilitator: "Maya" },
      { day: "Monday", time: "7:30 am", sessionTitle: "Restoring Emotional Balance and Inner Safety", facilitator: "Maya" },
      { day: "Monday", time: "10 am", sessionTitle: "From Invisible to Valued: Honoring Your Inner Experience", facilitator: "Maya" },
    ],
  },
];

// -- Color tokens --
const C = {
  bg: "#F3F0EB",
  card: "#F0EAE4",
  white: "#FFFFFF",
  headline: "#4A4036",
  dark: "#2D2A26",
  muted: "#78716C",
  body: "#57534E",
  accent: "#9B6C5B",
  separator: "#B79580",
  stone700: "#44403C",
};

// -- Facilitator avatar placeholder --
function Avatar({ name, size = 40 }) {
  const initial = name.charAt(0);
  return (
    <div
      className="rounded-full flex items-center justify-content-center shrink-0 overflow-hidden"
      style={{
        width: size,
        height: size,
        background: `linear-gradient(135deg, ${C.accent}, ${C.separator})`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <span className="text-white font-serif font-semibold" style={{ fontSize: size * 0.4 }}>
        {initial}
      </span>
    </div>
  );
}

// -- Session thumbnail placeholder --
function Thumbnail({ title }) {
  const initial = title.charAt(0);
  return (
    <div
      className="rounded-xl shrink-0 flex items-center justify-center overflow-hidden"
      style={{
        width: 102,
        height: 102,
        background: `linear-gradient(145deg, ${C.card}, #D4B5A0)`,
      }}
    >
      <span className="font-serif font-semibold text-2xl" style={{ color: C.accent }}>
        {initial}
      </span>
    </div>
  );
}

// -- The Sky: Companion Atmosphere --
function AtmosphereSection() {
  const hour = new Date().getHours();
  let greeting = "Good evening";
  if (hour < 12) greeting = "Good morning";
  else if (hour < 17) greeting = "Good afternoon";

  return (
    <div className="relative pt-16 px-6 pb-10 text-center flex flex-col items-center">
      {/* Breathing aura */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          top: "45%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 380,
          height: 380,
          background:
            "radial-gradient(circle, rgba(250,220,184,0.65) 0%, rgba(250,225,195,0.45) 25%, rgba(248,235,215,0.25) 45%, rgba(243,240,235,0) 70%)",
          filter: "blur(35px)",
          animation: "breathe 5s ease-in-out infinite",
        }}
      />

      {/* The voice */}
      <div className="relative z-10 max-w-[320px] mb-7">
        <p className="font-serif text-base leading-snug mb-2" style={{ color: C.muted }}>
          {greeting}, Sarah.
        </p>
        <h1
          className="font-serif font-semibold leading-tight mb-3"
          style={{ fontSize: 32, letterSpacing: "-0.02em", color: C.headline }}
        >
          Can't sleep either?
        </h1>
        <p className="font-sans text-sm leading-relaxed" style={{ color: C.muted }}>
          There's a Circle open right now if you want company. Or we can just talk.
        </p>
      </div>

      {/* Input CTA */}
      <button
        className="relative z-10 w-full max-w-[340px] flex items-center justify-between gap-3 bg-white border-none rounded-full cursor-pointer"
        style={{
          padding: "14px 14px 14px 20px",
          boxShadow:
            "0 8px 32px rgba(74,66,56,0.12), 0 4px 12px rgba(74,66,56,0.08), 0 2px 4px rgba(74,66,56,0.04)",
        }}
      >
        <span className="font-sans text-sm" style={{ color: C.muted }}>
          Type or tap to speak...
        </span>
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white shrink-0"
          style={{ background: C.body }}
        >
          <Mic size={16} strokeWidth={2} />
        </div>
      </button>
    </div>
  );
}

// -- Live Session Card --
function LiveSessionCard() {
  return (
    <div
      className="w-full overflow-hidden flex flex-col"
      style={{
        background: C.card,
        borderRadius: 16,
        padding: 4,
        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
      }}
    >
      {/* Top: badge + avatar */}
      <div className="relative w-full flex flex-col items-center" style={{ padding: "37px 12px 16px", background: C.card }}>
        {/* Support group badge */}
        <div
          className="absolute flex items-center gap-1.5 px-3"
          style={{ top: 12, right: 12, height: 30, borderRadius: 25, background: "#F9F6F3" }}
        >
          <Mic size={16} className="shrink-0" style={{ color: C.dark }} />
          <span className="font-sans font-medium text-xs whitespace-nowrap" style={{ color: C.dark }}>
            Support group
          </span>
        </div>

        {/* Facilitator image */}
        <div className="mt-7">
          <Avatar name="Maya" size={151} />
        </div>
      </div>

      {/* Bottom: title + footer */}
      <div className="flex flex-col p-4 gap-4 items-center flex-1 justify-between" style={{ background: C.card }}>
        <p
          className="font-serif font-semibold text-center"
          style={{
            fontSize: 18,
            lineHeight: 1.4,
            color: C.dark,
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          From Invisible to Valued: Honoring Your Inner Experience
        </p>

        {/* Footer row */}
        <div className="flex items-center w-full justify-between">
          {/* Facilitator */}
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-sans text-xs text-center" style={{ color: C.body }}>
              Group Facilitator
            </span>
            <div className="flex items-center justify-center gap-1.5">
              <Sparkles size={12} style={{ color: C.accent }} />
              <span className="font-sans font-semibold text-xs" style={{ color: C.accent }}>
                Maya
              </span>
            </div>
          </div>

          {/* Separator */}
          <div
            className="shrink-0"
            style={{
              width: 1,
              height: 40,
              background: `linear-gradient(rgba(183,149,128,0), ${C.separator}, rgba(183,149,128,0))`,
            }}
          />

          {/* Participants */}
          <div className="flex flex-col gap-1 flex-1">
            <span className="font-sans text-xs text-center" style={{ color: C.body }}>
              Participants
            </span>
            <div className="flex items-center justify-center gap-1.5">
              <Users size={12} style={{ color: C.dark }} />
              <span className="font-sans font-semibold text-sm" style={{ color: C.dark }}>
                1
              </span>
            </div>
          </div>
        </div>

        {/* Join button */}
        <button
          className="w-full border-none rounded-full font-sans font-semibold text-sm text-white cursor-pointer flex items-center justify-center gap-2"
          style={{ padding: "12px 24px", background: C.dark, height: 40 }}
        >
          <AudioLines size={20} className="shrink-0" />
          <span>Join Circle</span>
        </button>
      </div>
    </div>
  );
}

// -- Room Card (schedule item) --
function RoomCard({ session }) {
  return (
    <div className="w-full flex gap-2 items-center relative mb-4 cursor-pointer last:mb-0">
      <div className="flex flex-1 gap-4 items-center min-w-0">
        <Thumbnail title={session.sessionTitle} />
        <div className="flex flex-1 flex-col gap-2 min-w-0">
          <div className="flex flex-col gap-1 w-full">
            {/* Time */}
            <div className="flex items-center gap-1 font-sans font-medium text-xs" style={{ color: C.muted }}>
              <span>{session.day}</span>
              <span>·</span>
              <span className="truncate">{session.time}</span>
            </div>
            {/* Title */}
            <p
              className="font-sans font-semibold text-sm w-full"
              style={{
                color: C.dark,
                lineHeight: "20px",
                minHeight: 40,
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {session.sessionTitle}
            </p>
          </div>
          <div className="flex flex-col gap-0.5 w-full">
            <p className="font-sans font-medium text-xs" style={{ color: C.stone700 }}>
              {session.facilitator}
            </p>
            <div className="flex items-center gap-1">
              <Sparkles size={12} style={{ color: C.accent }} />
              <span className="font-sans font-semibold text-xs truncate" style={{ color: C.accent }}>
                AI Group Facilitator
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="shrink-0 flex items-center justify-center" style={{ width: 7, height: 12 }}>
        <ChevronRight size={12} style={{ color: C.stone700 }} />
      </div>
    </div>
  );
}

// -- Session Section (day group) --
function SessionGroup({ section }) {
  return (
    <div className="mb-8 last:mb-0">
      <p className="font-sans font-semibold text-base mb-3" style={{ color: C.dark, lineHeight: "24px" }}>
        {section.title}
      </p>
      {section.sessions.map((s, i) => (
        <RoomCard key={i} session={s} />
      ))}
    </div>
  );
}

// ============================================================
// ROOT COMPONENT
// ============================================================
export default function CompanionLobby() {
  return (
    <>
      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.85; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.06); }
        }
        @keyframes pulse-dot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.9); }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: ui-sans-serif, system-ui, -apple-system, sans-serif; }
      `}</style>

      <main
        className="relative flex flex-col overflow-y-auto"
        style={{ minHeight: "100dvh", background: C.bg, WebkitOverflowScrolling: "touch" }}
      >
        {/* THE SKY */}
        <div className="relative shrink-0">
          <AtmosphereSection />
        </div>

        {/* THE SHEET */}
        <div
          className="relative flex-1 bg-white"
          style={{
            borderRadius: "40px 40px 0 0",
            marginTop: 24,
            padding: "28px 16px 32px",
            boxShadow: "0 -4px 24px rgba(74,66,56,0.06)",
          }}
        >
          {/* Live now */}
          <div className="mb-7">
            <h2 className="font-sans font-semibold text-base mb-4 px-1" style={{ color: C.dark, lineHeight: "24px" }}>
              LIVE NOW
            </h2>
            <LiveSessionCard />
          </div>

          {/* Upcoming circles */}
          <div>
            <div className="flex items-center justify-between mb-4 px-1">
              <h2 className="font-sans font-semibold text-base" style={{ color: C.dark, lineHeight: "24px" }}>
                Upcoming circles
              </h2>
              <button
                className="font-sans font-medium border-none bg-transparent cursor-pointer p-0"
                style={{ fontSize: 13, color: C.accent }}
              >
                View all
              </button>
            </div>
            {SCHEDULE.map((section, i) => (
              <SessionGroup key={i} section={section} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
