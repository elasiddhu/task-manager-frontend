// import React

// import layouts
import Header from '../layout/Header'
import Body from '../layout/Body'
import Footer from '../layout/Footer'
// import components
import ProfileCard from '../components/ProfileCard'
// import styles


export default function Profile() {
    return (
        <div>
            <Header />
            <Body>
                <ProfileCard />
            </Body>
            <Footer />
        </div>
    )
}
