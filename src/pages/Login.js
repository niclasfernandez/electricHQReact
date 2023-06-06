import LoginRegisterContainer from '../components/LoginRegisterContainer/LoginRegisterContainer'
import "../App.scss"

const Login=({title}) =>{
    return(
        <div className="main">
           <LoginRegisterContainer title ="Welcome to Electric HQ" />
        </div> 
    )
    
}

export default Login
