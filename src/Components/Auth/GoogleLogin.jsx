import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import googleIcon from '../../assets/google.png'
import auth from '../Firebase/Firebase.config';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const GoogleLogin = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation()
    const navigate = useNavigate();

    const formLocation = location?.state?.from?.pathname || '/'

    const handleSignInGoogle = () => {
        signInWithGoogle()
    }

    useEffect(() => {
        if (user) {
            navigate(formLocation, { replace: true })
        }
    }, [formLocation, user, navigate])
    return (
        <div>
            <div className="mx-8 mt-6">
                <button onClick={handleSignInGoogle} className="btn rounded-full border-[#42454A] bg-white text-[#42454A]  border-2 hover:text-white hover:border-[#42454A] hover:bg-[#42454A] text-lg  w-full ">
                    <img className='w-8 h-8 ' src={googleIcon} alt="" />Login With Google
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;