import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
export function App() {

    return (
        //Is the same a reac.Fragment
        <div className='wd-component-sidebar'>
            <TwitterFollowCard
                userName='aleeks26'
                name='aleksander'
                initialIsFollowing={false}
            />
            <TwitterFollowCard
                userName='surpemekiller33'
                name='benshi'
                initialIsFollowing={false}
            />
            <TwitterFollowCard
                userName='OpiRulz'
                name='ez'
                initialIsFollowing
            />
        </div>
    )
}