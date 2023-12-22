
import happy from '../../assets/images/happy_girl.png'
const Customer = () => {
    return (
        <div>
            <div className="customer-main flex flex-col lg:flex-row items-center mt-24 max-w-screen-lg mx-auto gap-11 bg-[#23ACD1]  px-10">
                <div className="customer-text">
                    <h1 className='text-3xl font-bold py-2'>We love our customers and they love us too.</h1>
                    <p>We love our customers and they love us too. It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distr</p>

                    <button className='border-2 border-white rounded-full  mt-3 text-white py-2  px-8'> Kearn More</button>
                </div>
                <div className="customer-img">
                    <img   src={happy} alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Customer;