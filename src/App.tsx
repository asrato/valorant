import { HashRouter, Route, Routes } from "react-router-dom";

import MainLayout from "./layout/main-layout";
import HomeView from "./views/home";
import AgentsView from "./views/agents";
import AgentView from "./views/agent";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomeView />} />
          <Route path="agents" element={<AgentsView />} />
          <Route path="agent/:uuid" element={<AgentView />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
