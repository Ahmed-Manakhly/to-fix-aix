/* eslint-disable react/prop-types */
import {Link, useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux'; 
import { useDispatch} from 'react-redux'; 
import {authActions} from '../../store/Auth.-slice' ;
import {uiActions} from '../../store/UI-slice' ;
import classes from './Topbar.module.scss' ;
import {origin} from '../../lib/api'
import io from "socket.io-client";
const socket = io(origin);



function Topbar({txt_1 , txt_2 , txt_3 , txt_4}) {
  const navigate = useNavigate()
  const dispatch = useDispatch();   
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn) ;
  const userData = useSelector(state => state.auth.userData) ;
  const {org_username , role , id:userID , avatar , first_name} = userData;
  const logoutAction = ()=> {
    socket.emit("leavingRoom", userID);
    const toast = {status :'success',message: 'come back soon',title:'logged out'};
    dispatch(authActions.onLoginOut());
    dispatch(uiActions.notificationDataChanged(toast));
    dispatch(uiActions.showNotification(true));
    navigate('/') ;
  }
  //---------------------------------------------------------
    const pageActions = <> 
      <Link to="./auth?mode=login" className={`${classes["banner-btn"]} ${classes.signIn}`}>{txt_3}</Link>
      <Link to="./auth?mode=signup" className={`${classes["banner-btn"]} ${classes.signUp}`} >{txt_4}</Link>
    </>
  //---------------------------------------------------------
    const userActions = <> 
      {/* {============================================} */}
      <div className={classes['desktop-menu-category-list']}>
        <li className={` ${classes.container_} ${classes['menu-category']} `}>       
          <div  className={` ${classes.imgCon} ${classes['menu-title']} `} >
            {/* <img src={UserHolder} alt="UserHolder" /> */}
            {avatar &&<img src={origin+avatar} alt="Model Cover Image" crossOrigin="anonymous"  />}
            {!avatar &&  <div className={classes['UserHolder']} >{org_username&&org_username[0]?.toUpperCase()}</div>}
          </div>
          <ul className={classes["dropdown-list"]}>
            <li className={` ${classes.item_}   ${classes['dropdown-item']}`}>
              <div  className={` ${classes.imgCon} ${classes['menu-title']}  `} >
                {/* <img src={UserHolder} alt="UserHolder" /> */}
                {avatar &&<img src={origin+avatar}alt="Model Cover Image" crossOrigin="anonymous"  />}
                {!avatar &&  <div className={classes['UserHolder']} >{org_username&&org_username[0]?.toUpperCase()}</div>}
              </div>
             {first_name && <h4>{first_name?.toUpperCase()?.slice(0, 9)}</h4>}
             { !first_name && <h4>{org_username?.toUpperCase()?.slice(0, 9)}</h4>}
              <h6>{role}</h6>
            </li>
            <hr />
            <li className={` ${classes.item_2}   ${classes['dropdown-item']} `}>
              <Link to={`/profileSettings`}>Profile Settings</Link>
            </li>
            {role === 'DEVELOPER' && 
            <li className={` ${classes.item_2}  ${classes['dropdown-item']}`}>
              <Link to={`/dashboard-dev`} >My Dashboard</Link>
            </li>
            }
            {role === 'CLIENT' && 
            <li className={` ${classes.item_2}  ${classes['dropdown-item']}`}>
              <Link to={`/orders-client`} >My Orders</Link>
            </li>
            }
            <li className={` ${classes.item_2}   ${classes['dropdown-item']} `}>
              <Link to={`/profile/${userID}`}>My Profile</Link>
            </li>
            <hr />
            <li className={` ${classes.item_2} ${classes['dropdown-item']}`}>
              <button onClick={logoutAction} className={`${classes["banner-btn"]} ${classes.signUp}`}  >{'Logout'}</button>
            </li>
          </ul>
        </li>
      </div>
      {/* {============================================} */}
      {role === 'DEVELOPER' && 
      <Link to="/models/new" className={classes["banner-btn"]}> {'Create Model'} </Link>
      }
      {role === 'CLIENT' && 
      <Link to="/orders-client" className={classes["banner-btn"]}> {'My Orders'} </Link>
      }
    </>
  //---------------------------------------------------------
    return (
        <div className={classes["header-top"]} >
        <div className={classes["container"]}>
          <ul className={classes["header-social-container"]}>
            <li>
              <Link to="/" className={classes["social-link"]}>
                <ion-icon name="logo-facebook"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["social-link"]}>
                <ion-icon name="logo-twitter"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["social-link"]}>
                <ion-icon name="logo-instagram"></ion-icon>
              </Link>
            </li>
            <li>
              <Link to="/" className={classes["social-link"]}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </Link>
            </li>
          </ul>
          <div className={classes["header-alert-news"]}>
            <p >
                <b >{txt_1}</b>{' '}
                {txt_2}
            </p>
          </div>
          <div className={classes["header-top-actions"]}>
          {!isLoggedIn && pageActions}
          {isLoggedIn && userActions}
          </div>
        </div>
      </div>
    )
}

export default Topbar