import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import HomePage from "./pages/HomePage";
import GroteKerkPage from "./pages/GroteKerkPage";

import MolenDeAdriaanPage from "./pages/MolenDeAdriaanPage";
import SchedulePage from "./pages/SchedulePage";
import MapPage from "./pages/MapPage";
import AuthPage from "./pages/AuthPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="*" element={
            <Layout>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/grote-kerk" element={<GroteKerkPage />} />
                <Route path="/molen-de-adriaan" element={<MolenDeAdriaanPage />} />
                <Route path="/schedule" element={<SchedulePage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
