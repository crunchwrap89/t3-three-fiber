import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import ScienceIcon from "@mui/icons-material/Science";

import { api } from "../utils/api";

import "../styles/globals.css";
import { useState } from "react";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [value, setValue] = useState("");
  const router = useRouter();
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, route) => {
          setValue(route);
          router.push(route);
        }}
        className="rounded-md"
      >
        <BottomNavigationAction label="Home" value="/" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Lab 1"
          value="/lab1"
          icon={<BiotechIcon />}
        />
        <BottomNavigationAction
          label="Lab 2"
          value="/lab2"
          icon={<ScienceIcon />}
        />
      </BottomNavigation>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
