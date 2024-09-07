import { FaArrowCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";

const Testimonials = () => {
    return (
        <div className="bg-[#FAFAFA] text-all-color pb-8 pt-10">
            <h1 className="text-center text-5xl text-all-color font-bold">Testimonials</h1>

            {/* card  */}
            <div className="grid lg:grid-cols-3 mx-20 gap-10 mt-10 md:grid-cols-2 grid-cols-1 justify-items-center">
                {/* card-1  */}
                <div className="card  border w-96  hover:shadow-xl">
                    <div className="rating flex justify-center mt-10">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                    </div>
                    <div className="card-body text-center">

                        <p className="font-semibold">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure.</p>
                        <div className="card-actions justify-center mt-10">
                            <div className="avatar">
                                <div className="w-12 flex rounded-full">
                                    <img src="https://img.freepik.com/premium-photo/indian-student-portrait-with-white-background_758367-201173.jpg" />

                                </div>
                            </div>
                            <div className="ml-2">
                                <p className="font-semibold">Serhiy Hipskyy</p>
                                <p>CEO Universal</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* card-2  */}
                <div className="card  border w-96  hover:shadow-xl">
                    <div className="rating flex justify-center mt-10">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                    </div>
                    <div className="card-body text-center">

                        <p className="font-semibold">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus.</p>
                        <div className="card-actions justify-center mt-10">
                            <div className="avatar">
                                <div className="w-12 flex rounded-full">
                                    <img src="https://static.vecteezy.com/system/resources/thumbnails/005/346/410/small_2x/close-up-portrait-of-smiling-handsome-young-caucasian-man-face-looking-at-camera-on-isolated-light-gray-studio-background-photo.jpg" />

                                </div>
                            </div>
                            <div className="ml-2">
                                <p className="font-semibold">Justus Menke</p>
                                <p>CEO Eronaman</p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* card-3  */}
                <div className="card  border w-96  hover:shadow-xl">
                    <div className="rating flex justify-center mt-10">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-[#FE8B75] w-5 h-5" />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                        <input
                            type="radio"
                            name="rating-2"
                            className="mask mask-star-2 bg-[#FE8B75] w-5 h-5"
                            defaultChecked />
                    </div>
                    <div className="card-body text-center">

                        <p className="font-semibold">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores.</p>
                        <div className="card-actions justify-center mt-10">
                            <div className="avatar">
                                <div className="w-12 flex rounded-full">
                                    <img src="https://media.istockphoto.com/id/1364917563/photo/businessman-smiling-with-arms-crossed-on-white-background.jpg?s=612x612&w=0&k=20&c=NtM9Wbs1DBiGaiowsxJY6wNCnLf0POa65rYEwnZymrM=" />

                                </div>
                            </div>
                            <div className="ml-2">
                                <p className="font-semibold">Britain Eriksen</p>
                                <p>CEO Universal</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="flex justify-center gap-4 mt-14 mb-10">
                <a href=""><FaRegArrowAltCircleLeft className="w-10  h-10" /></a>
                <a href=""><FaArrowCircleRight className="w-10  h-10" /></a>
            </div>
        </div>
    );
};

export default Testimonials;