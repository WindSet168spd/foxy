import { useEffect, useState } from "react";
import { os, type Os } from "../helpers/constants";

export default function FoxyProvider() {
  const [userOs, setUserOs] = useState<Os>();

  useEffect(() => {
    const isApplePlatform = /Mac|iPhone|iPad|iPod/.test(
      navigator.platform || navigator.userAgent,
    );
    setUserOs(isApplePlatform ? os.apple : os.normal);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("screamer");
    }, 1000);
    return () => clearInterval(interval);
  }, [userOs]);

  return <div>foxy-provider</div>;
}
