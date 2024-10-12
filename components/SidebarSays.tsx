import React, { ReactNode } from "react";

interface SidebarSaysProps {
  maxContent?: ReactNode;
  remainingContent?: ReactNode;
}

const SidebarSays: React.FC<SidebarSaysProps> = ({
  maxContent,
  remainingContent,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[25%_1fr]">
      {/* First column taking 25% of the grid (50% of its initial 50%) */}
      <div className="overflow-hidden bg-yellow-100">
        <div className="px-4 py-5 sm:p-6">
          {maxContent || <p>Min: 100px / Max: 25%</p>}
        </div>
      </div>
      {/* Second column taking the remaining space */}
      <div className="overflow-hidden bg-blue-100">
        <div className="px-4 py-5 sm:p-6">
          {remainingContent || (
            <p>
              This element now takes up 75% of the space (the remaining 3fr).
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SidebarSays;
