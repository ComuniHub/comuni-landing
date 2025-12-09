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
    <div className={`inline-flex h-12 items-center justify-center rounded-lg bg-white p-1 border border-[#cfcfcf] ${className}`}>
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
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md px-6 py-2 font-semibold transition-all
        ${isActive
          ? "bg-[#36d68a] text-white shadow-sm"
          : "text-[#6d6d6d] hover:bg-gray-100"
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
