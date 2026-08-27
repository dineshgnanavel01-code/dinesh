import { Outlet, useLocation } from "react-router-dom";
import BottomNav from "./BottomNav";
export default function AppLayout(){const {pathname}=useLocation();const hideNav=pathname.startsWith("/tickets/")&&pathname!=="/tickets";return <div className="flex min-h-screen flex-col"><main className="flex-1"><Outlet/></main>{!hideNav&&<BottomNav/>}</div>}