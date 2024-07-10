"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useHasMounted } from "@/hooks/use-has-mounted";
import { useEffect, useState } from "react";
import {
  AllTabs,
  BrowserTab,
  CodingTab,
  EverydayTab,
  SoftwareTab,
  WebsiteTab,
} from "@/components/misc/(uses)/uses-tabs-comps";

type TabKey =
  | "all"
  | "everyday"
  | "software"
  | "browser"
  | "coding"
  | "website";

const tabs: Array<{ id: TabKey; title: string }> = [
  { id: "all", title: "All" },
  { id: "everyday", title: "Everyday" },
  { id: "software", title: "Software" },
  { id: "browser", title: "Browser" },
  { id: "coding", title: "Coding" },
  { id: "website", title: "Website" },
] as const;

const tabContent: Record<TabKey, React.ReactNode> = {
  all: <AllTabs />,
  everyday: <EverydayTab />,
  software: <SoftwareTab />,
  browser: <BrowserTab />,
  coding: <CodingTab />,
  website: <WebsiteTab />,
};

export const UsesTabs = () => {
  const hasMounted = useHasMounted();
  //@ts-ignore
  const [currentTab, setCurrentTab] = useState<TabKey>(() => {
    try {
      const tabId = (window.location.hash || "#").substring(1);
      return tabs.some((tab) => tab.id === tabId) ? (tabId as TabKey) : "all";
    } catch (error) {}
  });

  useEffect(() => {
    if (hasMounted) {
      const tabId = (window.location.hash || "#").substring(1);
      try {
        if (tabs.some((tab) => tab.id === tabId)) {
          setCurrentTab(tabId as TabKey);
        } else {
          setCurrentTab("all");
        }
      } catch (error) {}
    }
  }, [hasMounted]);

  return (
    <Tabs defaultValue={currentTab}>
      <div className="max-w-full overflow-x-auto overflow-y-auto">
        <TabsList>
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.id}
              href={tab.id === "all" ? "#" : `#${tab.id}`}
              onClick={() => {
                setCurrentTab(tab.id);
              }}
              value={tab.id}
            >
              {tab.title}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>
      <TabsContent value={currentTab}>{tabContent[currentTab]}</TabsContent>
    </Tabs>
  );
};
