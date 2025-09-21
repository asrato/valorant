import useGetBuddies from "../../hooks/use-get-buddies";
import ErrorLayout from "../../layout/error";
import LoadingLayout from "../../layout/loading";
import Title from "../../layout/title";
import BuddyLink from "./components/buddy-link";

export default function MobileBuddiesView() {
  const { data, error, loading } = useGetBuddies();

  if (loading) return <LoadingLayout text="Loading buddies..." />;
  if (error) return <ErrorLayout text={error.message} />;
  if (!data) return <ErrorLayout text="No buddies available..." />;

  return (
    <>
      <Title content="Buddies" />
      <div className="w-full grid grid-cols-2 gap-4">
        {data
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((buddy) => (
            <BuddyLink
              image={buddy.displayIcon}
              key={buddy.uuid}
              label={buddy.displayName}
              url={`/buddy/${buddy.uuid}`}
            />
          ))}
      </div>
    </>
  );
}
