// this file is a little bit messy, if you can read it, good for you xD
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useAudio } from "react-use";
import fetcher from "src/lib/fetcher";
import useSWR from "swr";

type Song = {
  songUrl: string;
  artist: string;
  title: string;
  imageUrl: string;
  previewUrl: string;
};

type TopTracks = {
  tracks: Song[];
};

export default function TopTrackSpotify() {
  const { data } = useSWR<TopTracks>("/api/spotify/top-track", fetcher);
  const [selected, setselected] = useState(-1);
  return (
    <div>
      <div className="mb-6 ">
        <h3 className="text-2xl font-bold">Top tracks this month</h3>
        <p className="text-lg text-subtle">
          I love listening to music, Click to the number to listen to the preview 🎼
        </p>
      </div>
      <div className="space-y-3">
        {data?.tracks.map((track, index) => (
          <Track
            key={track.title}
            selected={selected}
            setselected={setselected}
            track={track}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function Audio({
  url,
  cstate,
  setState,
  setselected,
}: {
  url: string;
  cstate: "default" | "loading" | "playing";
  setState: (state: "default" | "loading" | "playing") => void;
  setselected: (index: number) => void;
}) {
  const [audio, state, controls, ref] = useAudio({
    src: url,
    autoPlay: false,
  });

  useEffect(() => {
    if (cstate === "playing") return;
    if (state.duration > 0) setTimeout(() => setState("playing"), 300);
  }, [state]);

  useEffect(() => {
    if (ref.current) {
      ref.current.onended = () => {
        setState("default");
        setselected(-1);
      };
    }
  }, []);

  useEffect(() => {
    if (cstate == "playing") {
      controls.volume(0.3);
      controls.play();
    } else {
      controls.pause();
    }
  }, [cstate]);

  return audio;
}

function Track({
  track,
  index,
  setselected,
  selected,
}: {
  track: Song;
  index: number;
  selected: number;
  setselected: (index: number) => void;
}) {
  const [state, setstate] = useState<"default" | "loading" | "playing">(
    "default"
  );
  function togglePlay() {
    if (state === "playing") {
      setselected(-1);
    } else {
      setselected(index);
    }
  }
  useEffect(() => {
    if (selected === index) {
      setstate("loading");
    } else {
      setstate("default");
    }
  }, [selected]);
  return (
    <div
      onClick={togglePlay}
      className="relative flex items-center gap-4 p-1 cursor-pointer"
    >
      {state != "default" && (
        <Audio
          url={track.previewUrl}
          setselected={setselected}
          setState={setstate}
          cstate={state}
        />
      )}
      <AnimatePresence>
        {state != "default" && (
          <motion.div
            initial={{ width: 0, borderRadius: 0 }}
            animate={{ width: "100%", borderRadius: 9999 }}
            exit={{ width: 0, borderRadius: 0 }}
            transition={{ duration: 1 }}
            className="absolute -left-2 h-full bg-gradient-to-r from-[#B4CCE7]/50"
          />
        )}
      </AnimatePresence>
      <div className="relative w-10 overflow-hidden font-mono text-4xl text-center rounded-full">
        <motion.div
          animate={{
            opacity: state != "default" ? 0 : 1,
            scale: state != "default" ? 0 : 1,
          }}
          transition={{ duration: 0.6 }}
        >
          {index + 1}
        </motion.div>
        <AnimatePresence>
          {state == "loading" && (
            <motion.div
              key="loading"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-full rounded-full"
            >
              <motion.div
                className="absolute w-full h-full border-4 rounded-full"
                animate={{
                  borderColor: [
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 0.7)",
                    "rgba(255, 255, 255, 0.4)",
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(255, 255, 255, 0)",
                  ],
                  scale: [0.1, 0.3, 0.5, 0.7, 0.9],
                }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
              <motion.div
                className="absolute w-full h-full border-4 rounded-full"
                animate={{
                  borderColor: [
                    "rgba(255, 255, 255, 1)",
                    "rgba(255, 255, 255, 0.7)",
                    "rgba(255, 255, 255, 0.4)",
                    "rgba(255, 255, 255, 0.2)",
                    "rgba(255, 255, 255, 0)",
                  ],
                  scale: [0.1, 0.3, 0.5, 0.7, 0.9],
                }}
                transition={{
                  repeat: Infinity,
                  delay: 0.5,
                  duration: 1,
                  ease: "linear",
                }}
              />
            </motion.div>
          )}
          {state == "playing" && (
            <motion.div
              key="img"
              className="absolute top-0 left-0 w-full h-full rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 1.3 }}
            >
              <motion.img
                className="w-full h-full rounded-full "
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                src={track.imageUrl}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className="relative flex-1 truncate">
        <a
          rel="noopener noreferrer"
          href={track.songUrl}
          target="_blank"
          className="text-lg font-bold"
        >
          {track.title}
        </a>
        <p className="text-subtle">{track.artist}</p>
      </div>
    </div>
  );
}
