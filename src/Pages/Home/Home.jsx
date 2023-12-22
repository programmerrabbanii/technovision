import Advantage from "../../Components/Advantage/Advantage";
import BannarBottom from "../../Components/Bannar-bottom/BannarBottom";
import Bannar from "../../Components/Bannar/Bannar";
import Customer from "../../Components/Customer/Customer";
import Member from "../../Components/Members/Member";
import Welove from "../../Components/Welove/Welove";

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <BannarBottom></BannarBottom>
            <Advantage></Advantage>
            <Customer></Customer>
            <Welove></Welove>
            <Member></Member>
            
        </div>
    );
};

export default Home; 