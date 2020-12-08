import React from 'react';
import styles from './users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/user.jpg'


class Users extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${this.props.currentPage}
        &count=${this.props.pageSize}`)
            .then(response => {
                console.log(response.data);
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            })

    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?
        page=${pageNumber}&count=${this.props.pageSize}
        `)
            .then(response => {
                this.props.setUsers(response.data.items)
            })
    }


    render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    console.log(this.props.pageSize)
    console.log(this.props.totalUsersCount)
    let pages = [];
    for (let i=0; i <= pagesCount; i++) {
        if (i < 30) {pages.push(i)}

    }
    console.log(pages)
        return <div>
                <div>
                    <div>
                        { pages.map( p => {
                            return <span className={this.props.currentPage ===  p && styles.selectedPage }
                                         onClick={(e) => { this.onPageChanged(p); }}>{p}</span>
                        })}
                    </div>
                </div>

            {
                this.props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={ u.photos.small !== null ? u.photos.small : userPhoto } className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                this.props.unfollow(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                this.props.follow(u.id)
                            }}>Follow</button>}

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city' }</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    }
}

export default Users;