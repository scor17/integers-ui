import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Authenticate = () => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      {isSignUp && <SignUp navToSignIn={() => setIsSignUp(false)} />}
      {!isSignUp && <SignIn navToSignUp={() => setIsSignUp(true)} />}
    </>
  );
};

export default Authenticate;
