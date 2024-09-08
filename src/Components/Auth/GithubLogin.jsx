import githubIcon from '../../assets/github.png'

const GithubLogin = () => {
    return (
        <div>
            <div className="mx-8 mt-6">
                <button className="  btn rounded-full border-[#42454A] bg-white text-[#42454A]  border-2 hover:text-white hover:border-[#42454A] hover:bg-[#42454A] text-lg  w-full ">
                    <img className='w-10 h-10 ' src={githubIcon} alt="" />Login With Github</button>
            </div>
        </div>
    );
};

export default GithubLogin;