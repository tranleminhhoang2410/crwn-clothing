import { Outlet } from 'react-router-dom';

import Directory from '../../components/directory/directory.component';
import categories from '../../../categories.json';
const Home = () => {
    return (
        <div>
            <Outlet />
            <Directory categories={categories} />
        </div>
    );
};

export default Home;
