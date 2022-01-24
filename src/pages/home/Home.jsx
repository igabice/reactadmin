import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import WidgetSm from '../../components/widgetSmall/WidgetSm'
import WidgetLg from '../../components/widgetLarge/WidgetLg'
import './home.css'
import {userData} from '../../dummyData'

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" dataKey="Active Users" grid={true} />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}
