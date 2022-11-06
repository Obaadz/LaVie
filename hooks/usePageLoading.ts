import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default (delayTime: number = 0) => {
  const router = useRouter();
  const [pageLoading, setPageLoading] = useState(false);

  function setPageLoadingWithDelayTime(value: boolean, delayTime: number) {
    setTimeout(() => setPageLoading(value), delayTime);
  }

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setPageLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && delayTime > 0
        ? setPageLoadingWithDelayTime(false, delayTime)
        : setPageLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return function cleanup() {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return pageLoading;
};
