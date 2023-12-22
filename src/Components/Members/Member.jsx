import member1 from '../../assets/images/popsada-bpthumb (1).jpg'
import member2 from '../../assets/images/wewew-bpthumb.jpg'
import member3 from '../../assets/images/rrrerer-bpthumb.jpg'
import member4 from '../../assets/images/manger_thumb-bpthumb.jpg'
const Member = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <h2 className='text-4xl py-5'>Our Recent team members</h2>
            <div className="members-main grid grdi-cols-1 md:grid-cols-2 lg:grid-cols-4">
                <div className="members-inner">
                    <img className='w-[233px]' src={member1} alt="" />
                    <small>Seniors</small>
                    <h2 className='font-bold'>Kanak Chara </h2>

                    <span>Management</span>
    
                </div>
                <div className="members-inner">
                    <img className='w-[233px]' src={member2} alt="" />
                    <small>Seniors</small>
                    <h2 className='font-bold'>Kanak Chara </h2>

                    <span>Management</span>

                </div>
                <div className="members-inner">
                    <img className='w-[233px]' src={member3} alt="" />
                    <small>Seniors</small>
                    <h2 className='font-bold'>mikra enpa </h2>

                    <span>Management</span>

                </div>
                <div className="members-inner">
                    <img className='w-[233px]' src={member4} alt="" />
                    <small>Seniors</small>
                    <h2 className='font-bold'>sadia </h2>

                    <span>Management</span>

                </div>
            </div>
            
        </div>
    );
};

export default Member;