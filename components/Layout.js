// Layout Component which wraps Navbar with Content
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
        </div>
    );
}

export default Layout;