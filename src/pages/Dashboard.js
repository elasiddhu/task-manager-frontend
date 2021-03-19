// import React
import { useContext } from 'react'
import { Link } from 'react-router-dom'
// import layouts
import Header from '../layout/Header'
import Body from '../layout/Body'
import Footer from '../layout/Footer'
// import components
import NewTask from '../components/NewTask'
import TasksCard from '../components/TasksCard'
import ShowBy from '../components/ShowBy'
import SortBy from '../components/SortBy'
import TasksList from '../components/TasksList'
// import styles
// import contexts
import { GlobalStore } from '../contexts/StoreContext'

export default function Dashboard() {
  const { user } = useContext(GlobalStore)

  return (
    <div>
        <Header>
            <Link to="/profile">{user.user.name || 'Profile'}</Link>
        </Header>
        <Body>
          <NewTask />
          <TasksCard>
            <ShowBy />
            <SortBy />
            <TasksList />
          </TasksCard>
        </Body>
        <Footer />
    </div>
  );
}
