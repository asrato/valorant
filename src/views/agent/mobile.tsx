import { useLocation } from "react-router-dom";

import useGetAgent from "../../hooks/use-get-agent";
import AgentAbilities from "./components/agent-abilities";
import AgentImage from "./components/agent-image";
import AgentInfo from "./components/agent-info";
import AgentBanner from "./components/agent-banner";
import AgentBackground from "./components/agent-background";
import ErrorLayout from "../../layout/error";
import LoadingLayout from "../../layout/loading";
import Title from "../../layout/title";

export default function AgentViewMobile() {
  const location = useLocation();
  const agentUUID = location.pathname.split("/").pop() || "";
  const { data, error, loading } = useGetAgent(agentUUID);

  if (loading) return <LoadingLayout text="Loading agent..." />;
  if (error) return <ErrorLayout text={error.message} />;
  if (!data) return <ErrorLayout text="No data available..." />;

  return (
    <>
      <Title
        content={data.displayName}
        goBack={{ label: "agents", to: "/agents" }}
      />
      <div className="w-full h-[464px] min-h-[464px] !overflow-x-visible relative -mt-4">
        <AgentBanner />
        <AgentBackground image={data.background} />
        <AgentImage image={data.fullPortraitV2 || data.fullPortrait} />
      </div>
      <AgentInfo
        codeName={data.developerName}
        description={data.description}
        role={data.role}
      />
      <AgentAbilities abilities={data.abilities} />
    </>
  );
}
