import React, {  Component } from 'react'
import './Nav.sass'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import getUser from '../../redux/actions/user/getUser';

class  Nav extends Component {
    componentDidMount(){
        this.props.getUser()
    }
    render(){
   
    console.log('GET USER INFO FROM NAV:', this.props.user.user)
    const result = this.props.user.user? 'true': 'false';
    console.log(result)
    return(
        <header className="Nav">
            <Link to='/'><div className="logo">BestMovies</div></Link>
            <div className="search-bar">
                <input type="text" placeholder='Search...'/>
                <i className="fas fa-search"></i>
            </div>
            <nav>
                <ul>
                    <Link to='/'><li><i className="fas fa-home"></i></li></Link>
                    {this.props.user.user? <p>holaaaaaaaaaaaaaaa</p>:
                        <Link to='/login'><li><i className="fas fa-user-circle"></i></li></Link>
                    }
                    <Link to='/discover'><li><i className="fas fa-search"></i></li></Link>
                </ul>
            </nav>
                    <p style={{ color: 'white', fontSize: '5rem'}}>{result.email}</p>
        </header>
    )
                }
}
const mapStateToProps = state => ({
	user: state.userReducer
})

    export default connect(mapStateToProps, {getUser})(Nav) 