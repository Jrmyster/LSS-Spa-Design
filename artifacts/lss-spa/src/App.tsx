import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import BookingConfirmed from "@/pages/BookingConfirmed";
import CryoskinResults from "@/pages/CryoskinResults";
import ServiceMenu from "@/pages/ServiceMenu";
import NotFound from "@/pages/not-found";
import { BackToTop } from "@/components/BackToTop";
import AdminStats from "@/pages/AdminStats";
import { usePageTracking } from "@/hooks/useAnalytics";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

function Router() {
  usePageTracking();
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/booking-confirmed" component={BookingConfirmed} />
      <Route path="/cryoskin-results" component={CryoskinResults} />
      <Route path="/menu" component={ServiceMenu} />
      <Route path="/admin-stats" component={AdminStats} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
        <BackToTop />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
