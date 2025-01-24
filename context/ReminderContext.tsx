import { createContext, ReactNode, useContext, useState } from "react";

type reminderType = {
  reminderIds: number[];
  onAddReminder: (id: number) => void;
  onRemoveReminder: (id: number) => void;
};

// const initialState = {
//     remindedIds: [],
//     setReminder: (id: number) => {},
// }

const ReminderContext = createContext<reminderType>({
  reminderIds: [],
  onAddReminder: (id) => {},
  onRemoveReminder: (id) => {},
});

export const ReminderProvider = function ({
  children,
}: {
  children: ReactNode;
}) {
  const [reminderIds, setReminderIds] = useState<number[]>([]);
  const handleAddToReminder = (id: number) => {
    setReminderIds((prev: number[]) => {
      return [...prev, id];
    });
  };
  const handleRemoveFromReminder = function (id: number) {
    setReminderIds((prev) => prev.filter((currentId) => currentId !== id));
  };
  const value = {
    reminderIds,
    onAddReminder: handleAddToReminder,
    onRemoveReminder: handleRemoveFromReminder,
  };
  return (
    <ReminderContext.Provider value={value}>
      {children}
    </ReminderContext.Provider>
  );
};

export const useReminder = function () {
  const context = useContext(ReminderContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
