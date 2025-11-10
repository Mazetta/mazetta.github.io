import { CONFIG } from "site.config"
import { useEffect } from "react"
import styled from "@emotion/styled"
import useScheme from "src/hooks/useScheme"
import { useRouter } from "next/router"
import { useRef } from "react"

const [scheme] = useScheme()
const theme = `github-${scheme}`

function Utterances() {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const scriptElement = document.createElement('script');
    scriptElement.async = true;
    scriptElement.crossOrigin = 'anonymous';
    scriptElement.src = 'https://utteranc.es/client.js';

    scriptElement.setAttribute('issue-term', 'pathname');
    scriptElement.setAttribute('label', 'comment');
    scriptElement.setAttribute(
      'repo',
      'Mazetta/mazeriio.net',
    );
    scriptElement.setAttribute(
      'theme',
      theme,
    );

    ref.current?.appendChild(scriptElement);
  }, []);

  return <div ref={ref} />;
}

export default Utterances