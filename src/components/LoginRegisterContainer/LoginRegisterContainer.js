

import UserLogin from "../UserLogin/UserLogin";


const LoginRegisterContainer = ({title}) => {
  return (
    <div className='LoginRegisterContainer'>
      <div className='title'>
        <h1 >{title}</h1>
      </div>
      <UserLogin title="Log in to your account" />
    </div>

  );
};

export default LoginRegisterContainer;