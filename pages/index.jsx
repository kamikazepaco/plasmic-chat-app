// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import { PlasmicHomepage } from "../components/plasmic/plasmic_chat_app/PlasmicHomepage";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabase";
import enforceAuth from "../lib/auth/enforceAuth";
import { withPageAuth } from "@supabase/auth-helpers-nextjs";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";

function Homepage({ customProp }) {
  const router = useRouter();
  const session = useSession();
  const supabase = useSupabaseClient();

  return (
    <ph.PageParamsProvider
      params={useRouter()?.query}
      query={useRouter()?.query}
    >
      <PlasmicHomepage
        logoutButton={{
          onClick: async () => {
            await supabase.auth.signOut();
          },
        }}
      />
    </ph.PageParamsProvider>
  );
}

export default Homepage;
