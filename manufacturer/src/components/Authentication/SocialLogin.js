import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    // const [userInfo, setUserInfo] = useState(null);
    // const [token] = useCreateUserToken([gUser, userInfo]);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    // console.log(userInfo);

    let signInError;
    if (gError) {
        signInError = <p className='text-error'><small>{gError?.message}</small></p>
    }

    if (gUser) {
        // console.log(gUser);
        // navigate('/');
        navigate(from, {replace: true});
    }

    const handleSignInWithGoogle = () => {
        // setUserInfo({ role: "user" });
        signInWithGoogle();
    }

    return (
        <div>
            <button
                onClick={() => handleSignInWithGoogle()}
                className='btn btn-primary rounded-none focus:border-primary focus:outline-none btn-sm w-full max-w-xs mt-3 h-10'
            >Continue with Google</button>
            {gLoading && <span className="loading text-info loading-infinity loading-lg"></span>}
            {signInError}
            <div className="divider text-info before:bg-info after:bg-info mt-4 mb-1 mx-auto w-full max-w-xs">OR</div>
        </div>
    );
};

export default SocialLogin;