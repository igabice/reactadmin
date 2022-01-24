import './widgetLg.css'
import img from '../../img/img.png';

export default function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={'widgetLgButton ' +type}>{type}</button>;
    }   
    


    return (
        <div className='widgetLg'>
            <h3 className="widgetLgTitle">
                Latest transactions
            </h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th className="widgetLgTh">Customer</th>
                    <th className="widgetLgTh">Date</th>
                    <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={img} alt="" 
                        className="widgetLgImg" />
                        
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAmount">$1,200</td>
                    <td className="widgetLgStatus">
                        <Button type="Approved" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={img} alt="" 
                        className="widgetLgImg" />
                        
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAmount">$1,200</td>
                    <td className="widgetLgStatus">
                        <Button type="Pending" />
                    </td>
                </tr>
                <tr className="widgetLgTr">
                    <td className="widgetLgUser">
                        <img src={img} alt="" 
                        className="widgetLgImg" />
                        
                        <span className="widgetLgName">Susan Carol</span>
                    </td>
                    <td className="widgetLgDate">2 Jun 2022</td>
                    <td className="widgetLgAmount">$1,200</td>
                    <td className="widgetLgStatus">
                        <Button type="Rejected" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
