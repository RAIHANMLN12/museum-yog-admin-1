import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import { EnterCode, ForgotPassword, Login, NewPassword, SignUp, CmsPage, Dashboard, EditInformationScreen, AddInformationScreen, EventOverview, TicketOverview, MuseumCollection, SettingEvent, ReviewScreen } from "./pages";

// Define routes with the correct redirection for the root path
const router = createBrowserRouter([
  { path: "/", element: <Login />},
  { path: "login", element: <Login /> },
  { path: "signup", element: <SignUp /> },
  { path: "forgot_password", element: <ForgotPassword /> },
  { path: "code_verification", element: <EnterCode /> },
  { path: "new_password", element: <NewPassword /> },
  { path: "dashboard", element: <Dashboard />},
  { path: "cms_page", element: <CmsPage />},
  { path: "edit_information", element: <EditInformationScreen />},
  { path: "add_information", element: <AddInformationScreen />},
  { path: "events", element: <EventOverview />},
  { path: "ticket", element: <TicketOverview />},
  { path: "museum_collection", element: <MuseumCollection /> },
  { path: "setting_event", element: <SettingEvent /> },
  { path: "*", element: <Navigate to="/" /> },
  { path: "review_screen", element: <ReviewScreen />}
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
