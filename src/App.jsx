import { 
    useEffect, 
    useState, 
    useContext 
} from 'react'
import getMonth from './utils/dateUtils'
import GlobalContext from './context/GlobalContext'
import CalendarHeader from './components/CalendarHeader'
import Sidebar from './components/CalendarSidebar'
import Month from './components/CalendarMonth'
import EventModal from './components/CalendarEventModal'

const App = () => {
    const [currentMonth, setCurrentMonth] = useState(getMonth())
    const { monthIndex, showEventModal } = useContext(GlobalContext)

    useEffect(() => setCurrentMonth(getMonth(monthIndex)), [monthIndex])

    return (
        <>
            {showEventModal && <EventModal />}

            <div className="h-screen flex flex-col">
                <CalendarHeader />
                <div className="flex flex-1">
                    <Sidebar />
                    <Month month={currentMonth} />
                </div>
            </div>
        </>
    )
}

export default App
