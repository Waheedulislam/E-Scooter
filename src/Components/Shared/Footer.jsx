import { FaFacebook } from "react-icons/fa6";
import { AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import footerImage from '../../assets/footer-image.png'
const Footer = () => {
    return (
        <div className="bg-[#42454A]  text-white ">
            <footer className="footer px-10  pt-10">
                <aside>
                    <img className="-mt-32 -ml-10" src={footerImage} alt="" />
                </aside>
                <nav>
                    <h6 className="footer-title m-4 font-semibold">About</h6>
                    <a className="link link-hover m-4 font-semibold">Company</a>
                    <a className="link link-hover m-4 font-semibold">Teams</a>
                    <a className="link link-hover m-4 font-semibold">Profile</a>
                    <a className="link link-hover m-4 font-semibold">Careers</a>
                </nav>
                <nav>
                    <h6 className="footer-title m-4 font-semibold">Resources</h6>
                    <a className="link link-hover m-4 font-semibold">Contact </a>
                    <a className="link link-hover m-4 font-semibold">Application </a>
                    <a className="link link-hover m-4 font-semibold">FQA Features </a>
                </nav>
                <nav>
                    <h6 className="footer-title m-4 font-semibold">Legal</h6>
                    <a className="link link-hover m-4 font-semibold">Copyright Privacy </a>
                    <a className="link link-hover m-4 font-semibold">Policy Disclaimer  Terms</a>
                    <a className="link link-hover m-4 font-semibold">Policy Disclaimer  Terms</a>

                    {/* social  */}
                    <div className="flex gap-3 mt-2">
                        <a href=""><FaFacebook className="w-8 h-8" /></a>
                        <a href=""><AiFillTwitterCircle className="w-9 h-9" /> </a>
                        <a href=""><AiFillInstagram className="w-9 h-9" /></a>
                    </div>
                </nav>
            </footer>
            <p className="text-center pb-4">© Copyright 2021. All rights reserved.</p>

        </div>
    );
};

export default Footer;