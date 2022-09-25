import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Accueil from "./pages/Accueil";
import Apropos from "./pages/Apropos";
import Erreur from "./pages/Erreur";
import LogementsDetails from "./pages/LogementDetails";

export const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { 
            index: true, 
            element: <Accueil /> 
        },
        {
          path: "fiche-logement/:id",
          element: <LogementsDetails />,
        },
        {
          path: "apropos",
          element: <Apropos />,
        },
        { 
            path: "*", 
            element: <Erreur /> 
        },
      ],
    },
  ];

  function Layout() {
    return (
        <>
            <Header />{/*Faire appel le header dans le components et le mettre en place */}
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </>
    )
  }