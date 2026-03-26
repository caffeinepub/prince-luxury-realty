import { Link } from "@tanstack/react-router";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  Pause,
  Play,
  Volume2,
  VolumeX,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const SCENES = [
  {
    id: 1,
    image: "/assets/generated/scene1-drone-villa-sunrise.dim_1920x1080.jpg",
    headline: "Yeh sirf ek ghar nahi hai\u2026",
    subtitle: "Yeh ek lifestyle hai.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 2,
    image: "/assets/generated/scene2-grand-entrance-gates.dim_1920x1080.jpg",
    headline: "Jahaan har subah\u2026",
    subtitle: "Shuruaat hoti hai luxury ke saath.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 3,
    image: "/assets/generated/scene3-luxury-living-room.dim_1920x1080.jpg",
    headline: "Aur har shaam\u2026",
    subtitle: "Khatam hoti hai sukoon ke saath.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 4,
    image: "/assets/generated/scene4-premium-bedroom.dim_1920x1080.jpg",
    headline: "World-class design\u2026",
    subtitle: "Premium locations. Unmatched comfort.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 5,
    image: "/assets/generated/scene5-infinity-pool-sunset.dim_1920x1080.jpg",
    headline: "Aur ek aisi zindagi\u2026",
    subtitle: "Jo sirf kuch log jeete hain.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 6,
    image: "/assets/generated/scene6-balcony-skyline-night.dim_1920x1080.jpg",
    headline: "Prince Luxury Realty",
    subtitle: "Jahaan sapne sirf dekhe nahi jaate\u2026 jeeye jaate hain.",
    duration: 5000,
    kenBurns: true,
    isLogoScene: false,
  },
  {
    id: 7,
    image: "/assets/generated/scene7-logo-reveal.dim_1920x1080.jpg",
    headline: null as string | null,
    subtitle: null as string | null,
    duration: 7000,
    kenBurns: false,
    isLogoScene: true,
  },
];

export function CinematicPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressStartRef = useRef<number>(Date.now());
  const touchStartX = useRef<number | null>(null);
  const controlsTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const currentScene = SCENES[currentIndex];

  const clearTimers = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  }, []);

  const goToScene = useCallback(
    (index: number) => {
      if (transitioning) return;
      clearTimers();
      setTransitioning(true);
      setTextVisible(false);
      setProgress(0);
      setTimeout(() => {
        setCurrentIndex(index);
        setTransitioning(false);
      }, 200);
    },
    [transitioning, clearTimers],
  );

  const nextScene = useCallback(() => {
    goToScene((currentIndex + 1) % SCENES.length);
  }, [currentIndex, goToScene]);

  const prevScene = useCallback(() => {
    goToScene((currentIndex - 1 + SCENES.length) % SCENES.length);
  }, [currentIndex, goToScene]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: currentScene.duration is derived from currentIndex
  useEffect(() => {
    setTextVisible(false);
    setProgress(0);
    progressStartRef.current = Date.now();

    const textTimer = setTimeout(() => setTextVisible(true), 800);

    if (isPlaying) {
      const dur = currentScene.duration;

      progressRef.current = setInterval(() => {
        const elapsed = Date.now() - progressStartRef.current;
        setProgress(Math.min((elapsed / dur) * 100, 100));
      }, 30);

      timerRef.current = setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % SCENES.length);
      }, dur);
    }

    return () => {
      clearTimeout(textTimer);
      clearTimers();
    };
  }, [currentIndex, isPlaying, clearTimers]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      delta > 0 ? nextScene() : prevScene();
    }
    touchStartX.current = null;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimerRef.current) clearTimeout(controlsTimerRef.current);
    controlsTimerRef.current = setTimeout(() => setShowControls(false), 3000);
  };

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied!", {
        description: "Share this cinematic tour with others.",
      });
    } catch {
      toast.error("Could not copy link");
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black overflow-hidden"
      onMouseMove={handleMouseMove}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      data-ocid="cinematic.canvas_target"
    >
      {/* Scene images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        >
          <div
            className={`absolute inset-0 ${
              currentScene.kenBurns ? "ken-burns-zoom" : ""
            }`}
          >
            <img
              src={currentScene.image}
              alt={`Scene ${currentScene.id}`}
              className="w-full h-full object-cover"
            />
          </div>

          {!currentScene.isLogoScene && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
          )}
          {currentScene.isLogoScene && (
            <div className="absolute inset-0 bg-black/55" />
          )}
        </motion.div>
      </AnimatePresence>

      {/* ── Scene 7: Logo + Urdu CTA overlay ── */}
      {currentScene.isLogoScene && (
        <AnimatePresence>
          {textVisible && (
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center z-20 px-6 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Brand name */}
              <motion.h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2rem, 5.5vw, 5.5rem)",
                  fontWeight: 700,
                  color: "transparent",
                  backgroundImage:
                    "linear-gradient(135deg, #8B6914 0%, #C9A84C 30%, #F5D98B 50%, #C9A84C 70%, #8B6914 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  letterSpacing: "0.04em",
                  filter: "drop-shadow(0 0 28px rgba(201,168,76,0.45))",
                  lineHeight: 1.15,
                }}
              >
                Prince Luxury Realty
              </motion.h1>

              {/* Urdu tagline lines */}
              <motion.p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
                  color: "#C9A84C",
                  marginTop: "1.5rem",
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                  fontStyle: "italic",
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.7 }}
              >
                &ldquo;Jahaan sapne sirf dekhe nahi jaate&hellip;"
              </motion.p>
              <motion.p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1rem, 2.2vw, 1.6rem)",
                  color: "#C9A84C",
                  marginTop: "0.4rem",
                  letterSpacing: "0.02em",
                  textShadow: "0 2px 16px rgba(0,0,0,0.9)",
                  fontStyle: "italic",
                }}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.7 }}
              >
                Jeeye jaate hain."
              </motion.p>

              {/* Gold divider */}
              <motion.div
                style={{
                  width: "5rem",
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, #C9A84C, transparent)",
                  margin: "1.5rem auto",
                }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.7 }}
              />

              {/* CTA button */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                <Link
                  to="/contact"
                  data-ocid="cinematic.primary_button"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#C9A84C",
                    color: "#0a0a0a",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.78rem",
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    padding: "0.9rem 2.5rem",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition:
                      "background-color 0.25s ease, transform 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    (
                      e.currentTarget as HTMLAnchorElement
                    ).style.backgroundColor = "#F5D98B";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (
                      e.currentTarget as HTMLAnchorElement
                    ).style.backgroundColor = "#C9A84C";
                    (e.currentTarget as HTMLAnchorElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  Book Your Private Tour Today
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* ── Scenes 1–6: Urdu caption overlay ── */}
      {!currentScene.isLogoScene && (
        <AnimatePresence>
          {textVisible && (
            <motion.div
              className="absolute bottom-24 left-8 md:left-16 z-20 max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.65rem",
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#C9A84C",
                  marginBottom: "0.75rem",
                }}
              >
                Scene {currentScene.id} of {SCENES.length}
              </p>
              <h2
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(1.75rem, 4vw, 3.5rem)",
                  fontWeight: 600,
                  color: "#C9A84C",
                  lineHeight: 1.25,
                  marginBottom: "0.75rem",
                  textShadow: "0 2px 20px rgba(0,0,0,0.9)",
                  fontStyle: "italic",
                }}
              >
                {currentScene.headline}
              </h2>
              <p
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(0.9rem, 1.6vw, 1.15rem)",
                  color: "rgba(255,255,255,0.9)",
                  letterSpacing: "0.03em",
                  textShadow: "0 1px 10px rgba(0,0,0,0.9)",
                  fontStyle: "italic",
                }}
              >
                {currentScene.subtitle}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      )}

      {/* Top-left scene title */}
      <motion.div
        className="absolute top-6 left-6 md:top-8 md:left-10 z-30"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.65rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "rgba(201,168,76,0.9)",
          }}
        >
          {currentScene.isLogoScene
            ? "Prince Luxury Realty"
            : currentScene.headline}
        </p>
      </motion.div>

      {/* Top-right: mute + share */}
      <motion.div
        className="absolute top-6 right-6 md:top-8 md:right-10 z-30 flex items-center gap-3"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="button"
          onClick={handleShare}
          data-ocid="cinematic.secondary_button"
          className="flex items-center gap-2 px-3 py-2 border border-white/20 bg-black/40 backdrop-blur-sm hover:border-white/40 transition-colors"
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.7)",
          }}
        >
          <Copy size={12} />
          <span
            className="hidden sm:inline"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              textTransform: "uppercase",
            }}
          >
            Share
          </span>
        </button>
        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          data-ocid="cinematic.toggle"
          className="w-9 h-9 flex items-center justify-center border border-white/20 bg-black/40 backdrop-blur-sm text-white/70 hover:border-white/40 transition-colors"
          aria-label={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <VolumeX size={14} /> : <Volume2 size={14} />}
        </button>
      </motion.div>

      {/* Center play/pause */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <button
          type="button"
          onClick={() => setIsPlaying(!isPlaying)}
          data-ocid={
            currentScene.isLogoScene
              ? "cinematic.toggle"
              : "cinematic.primary_button"
          }
          className="w-16 h-16 flex items-center justify-center rounded-full border-2 bg-black/30 backdrop-blur-sm text-white hover:bg-black/50 transition-all pointer-events-auto"
          style={{ borderColor: "rgba(201,168,76,0.6)" }}
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isPlaying ? (
            <Pause size={22} />
          ) : (
            <Play size={22} className="ml-1" />
          )}
        </button>
      </motion.div>

      {/* Prev / Next arrows */}
      <motion.button
        type="button"
        onClick={prevScene}
        data-ocid="cinematic.pagination_prev"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 hover:border-white/40 transition-all"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Previous scene"
      >
        <ChevronLeft size={20} />
      </motion.button>

      <motion.button
        type="button"
        onClick={nextScene}
        data-ocid="cinematic.pagination_next"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 w-12 h-12 flex items-center justify-center border border-white/20 bg-black/30 backdrop-blur-sm text-white/70 hover:border-white/40 transition-all"
        animate={{ opacity: showControls ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        aria-label="Next scene"
      >
        <ChevronRight size={20} />
      </motion.button>

      {/* Bottom: scene dots + progress bar */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        <div className="flex items-center justify-center gap-2 pb-5">
          {SCENES.map((scene, i) => (
            <button
              key={scene.id}
              type="button"
              onClick={() => goToScene(i)}
              data-ocid="cinematic.tab"
              aria-label={`Go to scene ${i + 1}`}
              className="transition-all duration-300"
              style={{
                width: i === currentIndex ? "24px" : "7px",
                height: "7px",
                backgroundColor:
                  i === currentIndex ? "#C9A84C" : "rgba(201,168,76,0.35)",
                borderRadius: i === currentIndex ? "4px" : "50%",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>
        <div className="w-full h-[2px] bg-white/10">
          <div
            className="h-full"
            style={{
              width: `${progress}%`,
              backgroundColor: "#C9A84C",
              boxShadow: "0 0 8px rgba(201,168,76,0.7)",
              transition: "none",
            }}
            data-ocid="cinematic.loading_state"
          />
        </div>
      </div>
    </div>
  );
}
