import { useLocation } from "react-router";
import useGetAgent from "../../hooks/use-get-agent";
import AgentBanner from "./components/agent-banner";
import AgentBackground from "./components/agent-background";
import AgentImage from "./components/agent-image";
import AgentInfo from "./components/agent-info";
import AgentAbilities from "./components/agent-abilities";
import ErrorLayout from "../../layout/error";
import LoadingLayout from "../../layout/loading";
import Title from "../../layout/title";

export default function AgentViewDesktop() {
  const location = useLocation();
  const agentUUID = location.pathname.split("/").pop() || "";
  const { data, error, loading } = useGetAgent(agentUUID);

  if (loading) return <LoadingLayout text="Loading agent..." />;
  if (error)
    return <ErrorLayout text={`Error loading agent: ${error.message}`} />;
  if (!data) return <ErrorLayout text="Agent not found" />;

  return (
    <>
      <Title
        content={data.displayName}
        goBack={{ label: "agents", to: "/agents" }}
      />
      <div className="w-full flex flex-row gap-2 items-start">
        <div className="w-80 aspect-portrait relative">
          <AgentBanner />
          <AgentBackground image={data.background} />
          <AgentImage image={data.fullPortraitV2 || data.fullPortrait} />
        </div>
        <div className="w-[calc(100%-328px)] flex flex-col gap-2">
          <AgentInfo
            codeName={data.developerName}
            description={data.description}
            role={data.role}
          />
          <AgentAbilities abilities={data.abilities} />
        </div>
      </div>
    </>
  );
}
