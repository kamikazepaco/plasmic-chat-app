import "../styles/globals.css";
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import Head from "next/head";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  // 0. test auth helper
  // const router = useRouter();
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  // // 1. sub to onAuthStateChange
  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange(
  //     (event, session) => {
  //       updateSupabaseCookie(event, session);
  //     }
  //   );

  //   return () => {
  //     authListener?.subscription.unsubscribe();
  //   };
  // });

  // // 2. update to supabase auth cookie
  // async function updateSupabaseCookie(event, session) {
  //   let apiUrl = "/api/auth/set";
  //   if (event === "SIGNED_OUT") {
  //     apiUrl = "api/auth/remove";
  //   }

  //   await fetch(apiUrl, {
  //     method: "POST",
  //     headers: new Headers({ "Content-Type": "application/json" }),
  //     credentials: "same-origin",
  //     body: JSON.stringify({ event, session }),
  //   });
  // }

  // // 3. add wrapper for SSP for auth cookie
  // // 4. redirect

  return (
    <PlasmicRootProvider Head={Head}>
      <SessionContextProvider
        supabaseClient={supabaseClient}
        initialSession={pageProps.initialSession}
      >
        <Component {...pageProps} />
      </SessionContextProvider>
    </PlasmicRootProvider>
  );
}

export default MyApp;
