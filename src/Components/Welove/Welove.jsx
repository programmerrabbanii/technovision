import weicon1 from '../../assets/images/c1.png'
import weicon2 from '../../assets/images/c2.png'
import weicon3 from '../../assets/images/c3.png'
const Welove = () => {
    return (
        <div className='max-w-screen-lg mx-auto mt-28'>
            <h2 className='text-5xl py-2'>We love our customers and they love us too.</h2>
            <h3 className='text-2xl'>Here’s why our customers love us. It is a long established fact that a reader will be distracted. It is a long established fact that a reader will be distracted. z</h3>
            
            <div className="welove-main grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mt-28 gap-8">
                <div className="welove-box bg-[#F8FAFC] p-7">
                    <h2 className='text-5xl pb-12 font-bold'>66</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    <div className="welove-inner flex items-center gap-2 p-7">
                        <div className="welove-image">
                            <img className='w-14' src={weicon1} alt="" />
                        </div>
                        <div className="welove-name">
                            <h2> <span className="font-bold">Liela Ross</span>, Content Manager at PwerCorp</h2>
                        </div>
                    </div>
                </div>
                <div className="welove-box bg-[#F8FAFC] p-7">
                    <h2 className='text-5xl pb-12 font-bold'>66</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    <div className="welove-inner flex items-center gap-2 p-7">
                        <div className="welove-image">
                            <img className='w-14' src={weicon2} alt="" />
                        </div>
                        <div className="welove-name">
                            <h2> <span className="font-bold">Liela Ross</span>, Content Manager at PwerCorp</h2>
                        </div>
                    </div>
                </div>
                <div className="welove-box bg-[#F8FAFC] p-7">
                    <h2 className='text-5xl pb-12 font-bold'>66</h2>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>

                    <div className="welove-inner flex items-center gap-2 p-7">
                        <div className="welove-image">
                            <img className='w-14' src={weicon3} alt="" />
                        </div>
                        <div className="welove-name">
                            <h2> <span className="font-bold">Liela Ross</span>, Content Manager at PwerCorp</h2>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Welove;