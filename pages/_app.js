import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { useState } from "react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  return (
    <PlasmicRootProvider Head={Head}>
      {/* <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      > */}
      <Component {...pageProps} />
      {/* </SessionContextProvider> */}
    </PlasmicRootProvider>
  );
}

export default MyApp;
