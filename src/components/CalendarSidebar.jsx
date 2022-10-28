import React from 'react'
import CreateEventButton from './CalendarCreateEventButton'
import SmallCalendar from './CalendarSmall'
import Labels from './CalendarLabels'

const Sidebar = () => {
    return (
        <aside className='border p-5 w-64'>
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
        </aside>
    )
}

export default Sidebar