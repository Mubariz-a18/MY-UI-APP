function UserDez({user}) {
    return ( <>
        <img className='img img-thumbnail' src={user.avatar_url} width='100px'eight="100px"></img>
        <h5>{user.login} </h5>
        <hr/>
    </> );
}

export default UserDez;