import React, { useContext } from 'react'
import UserContext from './UserContexr';

const Page3: React.FC = () => {

    const userName = useContext(UserContext);
    
        return (
            <div className="page page3">
                Hello Toto
                <h3>{userName}</h3>
            </div>
        );
}

export default Page3;