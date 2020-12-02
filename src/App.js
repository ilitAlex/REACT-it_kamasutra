import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route
                        path='/dialogs'
                        render={() => <DialogsContainer
                            store={props.store}/>
                        }
                    />
                    <Route
                        path='/profile'
                        render={ () => <Profile
                            // state={props.state.profilePage}
                            // dispatch={props.dispatch}
                            store={props.store}
                        />
                        }
                    />
                </div>
            </div>
        </BrowserRouter>)
}

export default App;