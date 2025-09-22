import useGetBuddies from "../../hooks/use-get-buddies";
import ErrorLayout from "../../layout/error";
import LoadingLayout from "../../layout/loading";
import Title from "../../layout/title";
import BuddyImage from "./components/buddy-image";

export default function MobileBuddiesView() {
  const { data, error, loading } = useGetBuddies();

  if (loading) return <LoadingLayout text="Loading buddies..." />;
  if (error) return <ErrorLayout text={error.message} />;
  if (!data) return <ErrorLayout text="No buddies available..." />;

  return (
    <>
      <Title content="Buddies" />
      <div className="w-full flex flex-col items-center gap-4">
        {data
          .sort((a, b) => a.displayName.localeCompare(b.displayName))
          .map((buddy) => (
            <BuddyImage
              image={buddy.displayIcon}
              key={buddy.uuid}
              label={buddy.displayName}
            />
          ))}
      </div>
    </>
  );
}
