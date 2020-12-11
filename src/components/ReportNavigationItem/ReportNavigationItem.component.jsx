// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./ReportNavigationItem.elements";

// Component: ReportNavigationItem
export default function ReportNavigationItem({ isActive, children }) {
  return <Container isActive={isActive}>{children}</Container>;
}
