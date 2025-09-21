import { useNavigate } from "react-router-dom";

import Title from "../../layout/title";
import Button from "../../shared/button";

export default function HomeViewDesktop() {
  const navigate = useNavigate();

  return (
    <>
      <Title content="Home" />
      <div className="w-full grid grid-cols-3 gap-4">
        <Button
          className="col-span-1"
          label="Agents"
          onClick={() => navigate("/agents")}
        />
      </div>
    </>
  );
}
