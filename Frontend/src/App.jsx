
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignup from './pages/CaptainSignup'
import Start from './pages/Start'
import UserProtectedWrapper from './pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout'
import Captainhome from './pages/Captainhome'
import CaptainProtectWrapper from './pages/CaptainProtectWrapper'
import Captainlogout from './pages/Captainlogout'
import RideStart from './pages/RideStart'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignup />} />
        <Route path='/user-riding' element={
          <UserProtectedWrapper>
            <RideStart/>
          </UserProtectedWrapper>
        }>

        </Route>
        <Route path='/home' element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
        <Route path='/users/logout' element={
          <UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
        } />
        <Route path='/captain-home' element={
        <CaptainProtectWrapper>
          <Captainhome/>
        </CaptainProtectWrapper>
       }/>
       <Route  path='/captain/logout' element={
        <CaptainProtectWrapper>
          <Captainlogout/>
        </CaptainProtectWrapper>
       }/>
      </Routes>
    </div>
  )
}

export default App;
