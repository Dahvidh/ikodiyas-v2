import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Work from "../pages/Work/Work";
import ProjectDetails from "../pages/Work/ProjectDetails";
export default function AppRouter() {
    return (<BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}/>

        <Route path="/work" element={<Work />}/>
        <Route path="/work/:projectID" element={<ProjectDetails />}/>

        {/* Temporary project route */}
        <Route path="/work/:projectId" element={<ProjectDetails />}/>
      </Routes>
    </BrowserRouter>);
}
function ProjectPlaceholder() {
    return (<main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">
        <p className="mb-4 text-xs uppercase tracking-[0.3em] text-amber-400">
          Project
        </p>

        <h1 className="text-5xl font-semibold">
          Project Details
        </h1>

        <p className="mt-4 text-white/40">
          The case study page is coming next.
        </p>
      </div>
    </main>);
}
