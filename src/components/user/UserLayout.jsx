import React from 'react'
import { Link } from 'react-router-dom'

const UserLayout = (props) => {
    return (
        <div className='UserLayout'>

            <div className="row userNavbar">

                <div className="col-lg-3 px-3 navabarLeft">
                    <Link className='logo' to='/'>
                        <span><img src="assets/image/logo.svg" alt="" /></span>
                        <span className='text'>O’zbekiston respublikasi ekologiya
                            va atrof muhitni muhofaza qilish
                            davlat qo’mitasi</span>
                    </Link>
                </div>
                <div className="col-lg-9 px-3 navbarRight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptas sint, eligendi provident eaque quod debitis dignissimos esse numquam animi, quas quis necessitatibus? Porro voluptate possimus ut similique? Non, voluptas?
                </div>

            </div>

            <div className='row  userBottom'>

                <div className="col-lg-3 px-3 bottomLeft">
                    <h6><span><img src="assets/icon/home.svg" alt="" /></span> OOO YASHIL DARAXT</h6>
                </div>
                <div className="col-lg-9 px-3 bottomRight">
                    {props.children}
                </div>

            </div>

        </div>
    )
}

export default UserLayout