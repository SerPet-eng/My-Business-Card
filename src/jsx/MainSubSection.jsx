import LinkedInLogo from '../assets/icons8-linkedin-48.png'
import GitHubLogo from '../assets/icons8-github-64.png'
import TwitterLogo from '../assets/icons8-twitter-48.png'

function MainSubSection() {
    return (
        <div className='main--sub-section'>
            <div className='sub-section1'>
                <img src={LinkedInLogo} alt="LinkedIn Logo" />
                <p>
                    <a href="https://www.linkedin.com/in/christian-de-guzman-b35b03279/" target='_blank' rel='noreferrer'>
                    https://www.linkedin.com/in/christian-de-guzman-b35b03279/</a>
                </p>
            </div>
            <div className='sub-section2'>
                <img src={GitHubLogo} alt="GitHub Logo" />
                <p>
                    <a href="https://github.com/SerPet-eng" target='_blank' rel='noreferrer'>
                    https://github.com/SerPet-eng</a>
                </p>
            </div>
            <div className='sub-section3'>
                <img src={TwitterLogo} alt="Twitter Logo" />
                <p>
                    <a href="https://twitter.com/dchristian796" target='_blank' rel='noreferrer'>
                    https://twitter.com/dchristian796</a>
                </p>
            </div>
        </div>
    )
}

export default MainSubSection