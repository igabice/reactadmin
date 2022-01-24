import './sidebar.css';
import { LineStyle, Timeline, TrendingUp, FeedbackOutlined, MessageOutlined, MailOutlined, MoneyOutlined, PieChartOutlined, AccountBoxOutlined, BookmarkBorderOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className='sidebarList'>
                        <Link to='/' className='sidebarLink'>
                            <li className="sidebarListItem active">
                                <LineStyle className='sidebarIcon' />
                                Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className='sidebarIcon' />
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className='sidebarIcon' />
                            Sales
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className='sidebarList'>
                        <li className="sidebarListItem ">
                            <MailOutlined className='sidebarIcon' />
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className='sidebarIcon' />
                            Feedbak
                        </li>
                        <li className="sidebarListItem">
                            <MessageOutlined className='sidebarIcon' />
                            Nessages
                        </li>
                    </ul>
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className='sidebarList'>
                    <Link to='/users' className='sidebarLink'>
                        <li className="sidebarListItem ">
                            <AccountBoxOutlined className='sidebarIcon' />
                                Users
                        </li>
                    </Link>
                        <Link to="/products" className='sidebarLink'>
                            <li className="sidebarListItem">
                            <BookmarkBorderOutlined className='sidebarIcon' />
                            Products
                        </li>
                    </Link>
                        <li className="sidebarListItem">
                            <MoneyOutlined className='sidebarIcon' />
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <PieChartOutlined className='sidebarIcon' />
                            Reports
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    )
}
