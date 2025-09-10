"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLinkIcon, ServerIcon, DatabaseIcon, WorkflowIcon, TerminalIcon, MonitorIcon } from "lucide-react";

interface DashboardApp {
  name: string;
  url: string;
  description: string;
  category: string;
  icon: React.ReactNode;
  status: "online" | "offline" | "maintenance";
}

const dashboardApps: DashboardApp[] = [
  {
    name: "Dozzle",
    url: "https://dozzle.efeatas.dev/",
    description: "Real-time Docker container logs viewer",
    category: "Monitoring",
    icon: <TerminalIcon className="w-6 h-6" />,
    status: "online"
  },
  {
    name: "NextCloud",
    url: "https://next.efeatas.dev/login",
    description: "Nextcloud data storage via cloud services",
    category: "Data Storage",
    icon: <MonitorIcon className="w-6 h-6" />,
    status: "online"
  },
  {
    name: "TED Scheduler",
    url: "https://ted.efeatas.dev/",
    description: "TED University Lecture Planner",
    category: "Project",
    icon: <ServerIcon className="w-6 h-6" />,
    status: "online"
  },
  {
    name: "Coolify",
    url: "https://coolify.efeatas.dev/",
    description: "Self-hosted application deployment platform",
    category: "DevOps",
    icon: <DatabaseIcon className="w-6 h-6" />,
    status: "online"
  },
  {
    name: "n8n",
    url: "https://n8n.efeatas.dev/home/workflows",
    description: "Workflow automation and integration platform",
    category: "Automation",
    icon: <WorkflowIcon className="w-6 h-6" />,
    status: "online"
  }
];

const getStatusColor = (status: string) => {
  switch (status) {
    case "online":
      return "bg-green-500";
    case "offline":
      return "bg-red-500";
    case "maintenance":
      return "bg-yellow-500";
    default:
      return "bg-gray-500";
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Monitoring":
      return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
    case "Development":
      return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200";
    case "Productivity":
      return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
    case "DevOps":
      return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
    case "Automation":
      return "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200";
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
  }
};

export const DashboardTab = () => {
  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dashboardApps.map((app, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-zinc-300 dark:hover:border-zinc-700"
          >
            {/* Status indicator */}
            <div className="absolute top-4 right-4">
              <div className={`w-3 h-3 rounded-full ${getStatusColor(app.status)}`} />
            </div>

            {/* App icon and category */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                  {app.icon}
                </div>
              </div>
              <Badge className={getCategoryColor(app.category)} variant="secondary">
                {app.category}
              </Badge>
            </div>

            {/* App info */}
            <div className="mb-4">
              <h3 className="font-semibold text-lg mb-2 text-zinc-900 dark:text-zinc-100">
                {app.name}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {app.description}
              </p>
            </div>

            {/* Action button */}
            <Button
              className="w-full group-hover:bg-zinc-900 group-hover:text-white dark:group-hover:bg-zinc-100 dark:group-hover:text-zinc-900 transition-all duration-200"
              variant="outline"
              onClick={() => window.open(app.url, '_blank')}
            >
              <span>Open Application</span>
              <ExternalLinkIcon className="w-4 h-4 ml-2" />
            </Button>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-zinc-50/5 dark:to-zinc-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* Stats section */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900/30">
          <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
            {dashboardApps.length}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Applications
          </div>
        </div>
        <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900/30">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400 mb-2">
            {dashboardApps.filter(app => app.status === "online").length}
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Online Services
          </div>
        </div>
        <div className="text-center p-6 rounded-lg bg-zinc-50 dark:bg-zinc-900/30">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-2">
            100%
          </div>
          <div className="text-sm text-zinc-600 dark:text-zinc-400">
            Uptime
          </div>
        </div>
      </div>

      {/* Infrastructure info */}
      <div className="mt-8 p-6 rounded-lg bg-gradient-to-r from-zinc-50 to-zinc-100 dark:from-zinc-900/30 dark:to-zinc-800/30 border border-zinc-200 dark:border-zinc-800">
        <h3 className="font-semibold text-lg mb-3 text-zinc-900 dark:text-zinc-100">
          Infrastructure Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Hosting: </span>
            <span className="text-zinc-600 dark:text-zinc-400">Self-hosted on Rasperry Pi 5 8GB</span>
          </div>
          <div>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">OS: </span>
            <span className="text-zinc-600 dark:text-zinc-400">Ubuntu Server</span>
          </div>
          <div>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Deployment: </span>
            <span className="text-zinc-600 dark:text-zinc-400">Docker Containers</span>
          </div>
          <div>
            <span className="font-medium text-zinc-900 dark:text-zinc-100">Proxy: </span>
            <span className="text-zinc-600 dark:text-zinc-400">Nginx/Traefik</span>
          </div>
        </div>
      </div>
    </div>
  );
};
