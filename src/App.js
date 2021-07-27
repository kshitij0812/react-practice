import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import Error404 from "./components/Error404";

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";    

function App() {
    return (
        <div className="App col-md-12">
            <Router basename={'/'}>
                <Header />
                <div className="container">
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/create">
                            <RestaurantCreate/>
                        </Route>
                        <Route exact path="/detail/:id" 
                            render={ props=>(
                                <RestaurantDetail {...props}/>
                            )}
                        ></Route>
                        <Route exact path="/list">
                            <RestaurantList title="Restaurant List"/>
                        </Route>
                        <Route exact path="/search">
                            <RestaurantSearch/>
                        </Route>
                        <Route exact path="/update/:id" 
                            render={ props=>(
                                <RestaurantUpdate {...props}/>
                            )}
                        >
                        </Route>
                        <Route component={Error404} />
                    </Switch>
                </div>

                <Footer />
            </Router>
        </div>
    );
}

export default App;
