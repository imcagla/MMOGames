import Home from "./components/Home"
import Games from "./components/Games"
import About from "./components/About"
import GameDetail from "./components/GameDetail"
import GameSearch from "./components/GameSearch"
import NotFound from "./components/NotFound"


const routes = [
    {title: "Home", pathname: "/", element: Home, isNav:true},
    {title: "Games", pathname: "games", element: Games, isNav:true},
    {title: "About", pathname: "about", element: About, isNav:true},
    {title: "Game Detail", pathname: "/games/:gameId", element: GameDetail, isNav:false},
    {title: "Game Search", pathname: "search", element: GameSearch, isNav:false},
    { title: 'NotFound', pathname: '*', element: NotFound, isNav: false },
]

export default routes