import { Link, useLocation, useNavigate } from "react-router-dom";
import GithubLogin from "../Auth/GithubLogin";
import GoogleLogin from "../Auth/GoogleLogin";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../Firebase/Firebase.config";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const Login = () => {
    // show password 
    const [showPassword, setShowPassword] = useState(false);
    // use from
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm()
    // sign in email and password
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    // reset password
    const [email, setEmail] = useState('');
    console.log(email)
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );

    const location = useLocation();
    const navigate = useNavigate();

    // location path condition
    const formLocation = location?.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        console.log(data)
        signInWithEmailAndPassword(data.email, data.password)
    }

    useEffect(() => {
        if (user) {
            navigate(formLocation, { replace: true });
        }
    }, [formLocation, user, navigate])


    const handleResetPassword = async () => {
        const email = getValues("email");
        const success = await sendPasswordResetEmail(
            email
        );

        if (success) {
            alert('Please Check your email.')
            toast.success('Sent email.')
        }
    };


    return (
        <div className='mb-20 pt-20 text-all-color'>
            <div className="hero min-h-screen ">

                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-4xl font-bold text-center">Login now...!</h1>

                            {/* Email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    placeholder="Email"
                                    name="email"
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="input input-bordered"
                                    required
                                    {...register("email")}
                                />
                            </div>

                            {/* password  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative ">
                                    <input type={showPassword ? 'text' : "password"}//note: show password true hole 'text' are wrong hole 'password'
                                        name='password'
                                        placeholder="password"
                                        className="input input-bordered w-full"
                                        required
                                        {...register("password", {
                                            required: true, minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                                        })}
                                    />
                                    <span className="absolute pt-4  right-4" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEyeSlash className="w-5 h-5"></FaEyeSlash> : <FaEye className="w-5 h-5" />
                                        }
                                    </span>
                                    {errors.password?.type === "required" && (
                                        <p className="text-red-600 mt-2">Password is required</p>
                                    )}
                                    {errors.password?.type === "minLength" && (
                                        <p className="text-red-600 mt-2">Password must be 6 characters</p>
                                    )}
                                    {errors.password?.type === "maxLength" && (
                                        <p className="text-red-600 mt-2">Password must be less then 20 characters</p>
                                    )}
                                    {errors.password?.type === "pattern" && (
                                        <p className="text-red-600 mt-2">Password must one upper case, one lower case, one number, one special characters</p>
                                    )}
                                </div>
                            </div>

                            <label className="label">
                                <a onClick={handleResetPassword} href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            {/* error massage  */}

                            {
                                error && <p style={{ color: 'red' }} className="text-start font-semibold">{error?.message?.slice(10)}</p>
                            }

                            <div className="flex justify-center ">
                                <p className="font-semibold">Do not have any account ?</p>
                                <Link to={'/register'} className="mr-48 font-bold hover:text-teal-600">Register</Link>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" disabled={loading} className="btn rounded-full bg-[#42454A] text-white border-white border-2 hover:text-[#42454A] hover:border-[#42454A] hover:bg-white text-lg "> {loading ? 'Loading...' : 'Logins'}</button>
                            </div>
                        </form>
                        <div className="flex flex-col w-full">
                            <div className="divider divider-neutral mx-8">OR</div>
                        </div>
                        <div className="w-full mb-5">
                            <GoogleLogin></GoogleLogin>
                            <GithubLogin></GithubLogin>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;