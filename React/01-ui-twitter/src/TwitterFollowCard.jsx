import { useState } from "react";

export function TwitterFollowCard({userName,name, initialIsFollowing}){

    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

    const text = (isFollowing) ? 'Following' : 'Follow';

    const styleButtonFollow = (isFollowing) ? 'wd-button-following' : 'wd-button-follow';

    const changeFollow = () => {
        setIsFollowing(!isFollowing)
    }
    return (
        <article className='wd-article-follow'>
            <header className='wd-header'>
                <img className='wd-img-avatar' src="https://unavatar.io/duckduckgo/gummibeer.dev" alt="" />
                <div className='wd-data-user'>
                    <strong>{name}</strong>
                    <span>@{userName}</span>
                </div>
            </header>
            <aside>
                <button className={styleButtonFollow} onClick={changeFollow}>
                    <span className="wb-button-quit-text">{text}</span>
                    <span className="wb-button-unfollow">Unfollow</span>
                </button>
            </aside>
        </article>
    )
}
