import { useState, createContext, useContext } from "react";

const TabsContext = createContext();

const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabsList = ({ children, className = "" }) => {
  return (
    <div className={`inline-flex h-12 items-center justify-center rounded-lg bg-white p-1 border border-[#cfcfcf] gap-0 overflow-hidden ${className}`}>
      {children}
    </div>
  );
};

const TabsTrigger = ({ value, children, className = "" }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`inline-flex items-center justify-center whitespace-nowrap px-6 py-2 font-semibold transition-all h-full flex-1 first:rounded-l-md last:rounded-r-md
        ${isActive
          ? "bg-[#36d68a] text-white"
          : "bg-white text-[#6d6d6d]"
        } ${className}`}
    >
      {children}
    </button>
  );
};

const TabsContent = ({ value, children, className = "" }) => {
  const { activeTab } = useContext(TabsContext);

  if (activeTab !== value) return null;

  return <div className={className}>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
