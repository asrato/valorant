import useGetAgents from "../../hooks/use-get-agents";
import ErrorLayout from "../../layout/error";
import LoadingLayout from "../../layout/loading";
import Title from "../../layout/title";
import AgentLink from "./components/agent-link";

export default function AgentsViewMobile() {
  const { data, error, loading } = useGetAgents();

  if (loading) return <LoadingLayout text="Loading agents..." />;
  if (error) return <ErrorLayout text={error.message} />;
  if (!data) return <ErrorLayout text="No agents available..." />;

  return (
    <>
      <Title content="Agents" />
      <div className="w-full grid grid-cols-2 gap-4">
        {data
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((agent) => (
            <AgentLink
              image={agent.killfeedPortrait}
              key={agent.uuid}
              label={agent.displayName}
              url={`/agent/${agent.uuid}`}
            />
          ))}
      </div>
    </>
  );
}
