import { useCallback, useEffect, useState, type ReactNode } from "react";
import videoSourceNormal from "../assets/foxy.webm";
import styles from "./foxy-provider.module.css";
import { FoxyContext } from "../context/foxy-context";

export interface FoxyProviderProps {
  enableRandomFoxyJumpscare?: boolean;
  interval?: number;
  probability?: number;
  children?: ReactNode;
}

const isApplePlatform = /Mac|iPhone|iPad|iPod/.test(navigator.userAgent);

export default function FoxyProvider({
  interval = 1000,
  probability = 0.0005,
  enableRandomFoxyJumpscare = true,
  children,
}: FoxyProviderProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  const trigger = useCallback(() => {
    setIsPlaying(true);
  }, [setIsPlaying]);

  useEffect(() => {
    if (enableRandomFoxyJumpscare) {
      const foxyInterval = setInterval(() => {
        if (Math.random() < probability) trigger();
      }, interval);
      return () => clearInterval(foxyInterval);
    }
  }, [enableRandomFoxyJumpscare, trigger, interval, probability]);

  return (
    <FoxyContext.Provider value={{ trigger }}>
      {isPlaying && (
        <video
          className={styles.foxyVideo}
          autoPlay
          onEnded={() => setIsPlaying(false)}
        >
          <source
            src={isApplePlatform ? "" : videoSourceNormal}
            type="video/webm"
          />
        </video>
      )}
      {children}
    </FoxyContext.Provider>
  );
}
