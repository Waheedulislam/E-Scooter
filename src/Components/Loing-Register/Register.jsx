import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/Firebase.config";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import GoogleLogin from "../Auth/GoogleLogin";
import GithubLogin from "../Auth/GithubLogin";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const Register = () => {
    // axios public
    const axiosPublic = useAxiosPublic();
    // password show
    const [showPassword, setShowPassword] = useState(false);

    // Create Email and password.
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // use from
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const location = useLocation();
    const navigate = useNavigate();

    // location path condition
    const formLocation = location?.state?.from?.pathname || '/';

    const onSubmit = async (data) => {

        // firebase addition can not provide the name field. So I took the name field from to from
        const name = data?.name;
        createUserWithEmailAndPassword(data.email, data.password, data.name)

            .then((data) => {
                if (data?.user?.email) {
                    const userInfo = {
                        name: name,
                        email: data?.user?.email,
                    }
                    console.log(userInfo)
                    axiosPublic.post('/users', userInfo)
                }

            })


    }


    useEffect(() => {
        if (user) {
            navigate(formLocation, { replace: true });
        }
    }, [formLocation, user, navigate])

    return (
        <div className="mb-20 pt-20 text-all-color">
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <img src="https://rurutek.com/jio/assets/img/login-animate.gif" alt="" />

                    </div>
                    <div className="card shrink-0 w-full max-w-lg max-h-lg shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <h1 className="text-4xl font-bold text-center ">Sign Up now...!</h1>

                            {/* Name  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="name"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                    {...register("name")} />
                            </div>

                            {/* Email  */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                    {...register("email")} />
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
                                        })} />

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

                            {/* error massage  */}
                            {
                                error && <p style={{ color: 'red' }} className="text-start font-semibold">{error?.message?.slice(10, 44)}</p>
                            }
                            <div className="flex justify-center ">
                                <p className="font-semibold">Already have an account ?</p>
                                <Link to={'/login'} className="mr-52 font-bold hover:text-teal-600">Login </Link>
                            </div>


                            <div className="form-control mt-6">
                                <button type="submit" disabled={loading} className="btn rounded-full bg-[#42454A] text-white border-white border-2 hover:text-[#42454A] hover:border-[#42454A] hover:bg-white text-lg "> {loading ? 'Loading...' : 'Register'}</button>
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

export default Register;