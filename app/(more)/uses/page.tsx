import { DashboardTab } from "@/components/misc/(uses)/dashboard-tab";
import type { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "efeatas // dashboard",
  description: "A dashboard of self-hosted applications and services.",
};

const usesPage = () => {
  return (
    <section>
      <div className="pb-5">
        <h1 className="text-2xl font-bold pb-8">Dashboard</h1>
        <p>
          Welcome to my personal infrastructure dashboard. Here you can find all the 
          self-hosted applications and services running on my homelab. Each service 
          is containerized and accessible through secure subdomains. Click on any 
          card to access the application directly.
        </p>
      </div>
      <DashboardTab />
    </section>
  );
};

export default usesPage;
