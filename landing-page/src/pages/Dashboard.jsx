import Menu from '../components/Dashboard/Menu.jsx'
import Settings from '../components/Dashboard/Settings.jsx';
import './dashboard.css'

function Dashboard() {
  return (
    <div className='dashboard'>
        <Menu />
        <Settings />
    </div>
  )
}
export default Dashboard