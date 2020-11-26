import React, { useState } from 'react';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Authenticate = ({ onSignIn, onSignUp, isRequestPending, isRequestFailed }) => {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <>
      {isSignUp && (
        <SignUp
          onSignUp={onSignUp}
          isSignUpPending={isRequestPending}
          hasError={isRequestFailed}
          navToSignIn={() => setIsSignUp(false)}
        />
      )}
      {!isSignUp && (
        <SignIn
          onSignIn={onSignIn}
          isSignInPending={isRequestPending}
          hasError={isRequestFailed}
          navToSignUp={() => setIsSignUp(true)}
        />
      )}
    </>
  );
};

export default Authenticate;
