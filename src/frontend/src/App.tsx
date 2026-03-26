import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Toaster } from "@/components/ui/sonner";
import { AboutPage } from "@/pages/AboutPage";
import { CinematicPage } from "@/pages/CinematicPage";
import { ContactPage } from "@/pages/ContactPage";
import { GalleryPage } from "@/pages/GalleryPage";
import { HomePage } from "@/pages/HomePage";
import { PropertiesPage } from "@/pages/PropertiesPage";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Link,
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";

const queryClient = new QueryClient();

// Root layout — decides whether to show chrome based on route
function RootLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Outlet />
    </QueryClientProvider>
  );
}

// Main layout with nav + footer
function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const rootRoute = createRootRoute({ component: RootLayout });

// Pathless layout route for main pages
const mainLayoutRoute = createRoute({
  getParentRoute: () => rootRoute,
  id: "main",
  component: MainLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/",
  component: HomePage,
});

const propertiesRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/properties",
  component: PropertiesPage,
});

const galleryRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/gallery",
  component: GalleryPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/about",
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => mainLayoutRoute,
  path: "/contact",
  component: ContactPage,
});

// Cinematic route — no nav/footer chrome
const cinematicRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/cinematic",
  component: CinematicPage,
});

const routeTree = rootRoute.addChildren([
  mainLayoutRoute.addChildren([
    indexRoute,
    propertiesRoute,
    galleryRoute,
    aboutRoute,
    contactRoute,
  ]),
  cinematicRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}

export { Link };
