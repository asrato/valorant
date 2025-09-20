import type { ReactNode } from "react";
import useDeviceAgent from "../hooks/use-device-agent";

interface ResponsiveProps {
  mobile?: ReactNode | ReactNode[];
  desktop?: ReactNode | ReactNode[];
}

export default function Responsive(props: ResponsiveProps) {
  const { mobile, desktop } = props;
  const { isMobile } = useDeviceAgent();

  return isMobile ? mobile : desktop;
}
