import Profile from '../assets/Tantan.png'
import MainSubSection from './MainSubSection'
import MainFooter from './MainFooter'

function Main() {

    return (
        <>
            <main className='main--container'>
                <img src={Profile} className='main--profile-picture' alt='Christian Profile Picture'/>
                <div className='vertical-line'></div>
                <section className='main--section'>
                    <h4>Hi! My Name is</h4>
                    <h1>Christian U. de Guzman</h1>
                    <h3>Front-End Web Developer</h3>
                    <MainSubSection />
                </section>
            </main>
            <MainFooter />
        </>
    )
}

export default Main