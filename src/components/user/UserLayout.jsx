import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { LOGOUT } from '../../redux/actions/authAction';

const UserLayout = (props) => {
    const [open, setOpen] = useState('0');

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    const location = useLocation()
    // useEffect(() => {
    //     if(location.pathname === '/sales' || location.pathname === 'transactions') {
    //         setOpen('2')
    //     }else if(location.pathname === '/control-panel' || location.pathname === '/settings') {
    //         setOpen('1')
    //     }
    // }, [location.pathname])
    return (
        <div className='UserLayout'>

            <div className="row userNavbar">

                <div className="col-lg-3 px-3 navabarLeft">
                    <Link className='logo' to='/'>
                        <img src="assets/icon/logoFull.svg" alt="" />
                        {/* <span><img src="assets/image/logo.svg" alt="" /></span>
                        <span className='text'>O’zbekiston respublikasi ekologiya
                            va atrof muhitni muhofaza qilish
                            davlat qo’mitasi</span> */}
                    </Link>
                </div>
                <div className="col-lg-9 px-3 navbarRight">
                    <div className="inputWrap">
                        <input placeholder='Daraxt joylashuvi bo’yicha qidiruv' type="text" className="form-control" />
                        <span><img src="assets/icon/search.svg" alt="" /></span>
                    </div>
                    <Link to='/donate' className="btn myBtn">Xayriya qilish</Link>

                    <div className="phoneWrap">
                        <span><img src="assets/icon/phone.svg" alt="" /></span>
                        <div>
                            <a target={'_blank'} rel="noreferrer" href="tel:+998 98 800 77 19">+998 (98) 800 77 19</a>
                            <a target={'_blank'} rel="noreferrer" href="tel:+998 95 500 77 19">+998 (95) 500 77 19</a>
                        </div>
                    </div>

                    <select name="" id="">
                        <option value="">Uzb</option>
                        <option value="">Рус</option>
                        <option value="">Eng</option>
                    </select>

                    <div className="userWrap">
                        <h4>Yashil Daraxt</h4>
                        <h3>“OOO YASHIL DARAXT” </h3>
                    </div>
                </div>

            </div>

            <div className='row  userBottom'>

                <div className="col-lg-3 px-3 bottomLeft active">
                    <div>
                        <h6 className='d-none d-lg-block'> OOO YASHIL DARAXT</h6>

                        <Accordion className='service__list w-100 border2' open={open} toggle={toggle}>

                            {/* <AccordionItem className='wrap'>
                            <AccordionHeader targetId='1'>
                                <h5></h5>
                            </AccordionHeader>
                            <AccordionBody accordionId='1'>
                                <Link className={location.pathname === '/control-panel' ? 'active' : ''} to='/control-panel'>Boshqaruv paneli</Link>
                            </AccordionBody>
                        </AccordionItem> */}
                            <h6 className={`last ${location.pathname === '/control-panel' ? 'active' : ''}`}><Link to='/control-panel'><span className='icon icon-home'></span>Bosh sahifa</Link></h6>


                            <AccordionItem className='wrap'>
                                <AccordionHeader targetId='2'>
                                    <h5><span><img src="assets/icon/deal.svg" alt="" /></span> Savdolar va bitimlar</h5>
                                </AccordionHeader>
                                <AccordionBody accordionId='2'>
                                    <Link className={location.pathname === '/sales' ? 'active' : ''} to='/sales'>Savdolar</Link>
                                    <Link className={location.pathname === '/transactions' ? 'active' : ''} to='/transactions'>Bitimlar va AKTlar</Link>
                                </AccordionBody>
                            </AccordionItem>

                            <AccordionItem className='wrap'>
                                <AccordionHeader targetId='3'>
                                    <h5><span><img src="assets/icon/gardener.svg" alt="" /></span> Ekuvchi tashkilot ma’lumotlari</h5>
                                </AccordionHeader>
                                {/* <AccordionBody accordionId='3'>
                                <Link to='/'>Savdolar</Link>
                                <Link to='/'>Bitimlar</Link>
                            </AccordionBody> */}
                            </AccordionItem>

                            <AccordionItem className='wrap'>
                                <AccordionHeader targetId='4'>
                                    <h5><span><img src="assets/icon/location.svg" alt="" /></span> Daraxtlar joylashuvi </h5>
                                </AccordionHeader>
                                {/* <AccordionBody accordionId='4'>
                                <Link to='/'>Savdolar</Link>
                                <Link to='/'>Bitimlar</Link>
                            </AccordionBody> */}
                            </AccordionItem>

                            <AccordionItem className='wrap wrapLast'>
                                <AccordionHeader targetId='5'>
                                    <h5><span className='icon icon-file'></span>Hujjatlar </h5>
                                </AccordionHeader>
                                <AccordionBody accordionId='5'>
                                    <Link className={` ${location.pathname === '/documents' ? 'active' : ''}`} to='/documents'> Hujjatlar </Link>
                                    <Link className={` ${location.pathname === '/reports' ? 'active' : ''}`} to='/reports'>Xisobotlarim </Link>
                                </AccordionBody>
                            </AccordionItem>

                        </Accordion>

                        {/* <h6 ></h6> */}
                        {/* <h6 ></h6> */}
                        <h6 className={`last ${location.pathname === '/settings' ? 'active' : ''}`}><Link to='/settings'><span className='icon icon-setting'></span> Sozlamalar </Link></h6>
                    </div>

                    <div>
                        <div className="tree mb-2 text-center">
                            <img src="assets/image/tree.png" alt="" />
                        </div>
                        <div className="bottomPhone">
                            <div className="phoneWrap d-flex align-items-center justify-content-center mb-3">
                                <span className='me-3'><img src="assets/icon/phone.svg" alt="" /></span>
                                <div>
                                    <a className='d-block' target={'_blank'} rel="noreferrer" href="tel:+998 98 800 77 19">+998 (98) 800 77 19</a>
                                    <a className='d-block' target={'_blank'} rel="noreferrer" href="tel:+998 95 500 77 19">+998 (95) 500 77 19</a>
                                </div>
                            </div>
                        </div>
                        <h6 className='mb-3'><Link to='/donate' className="btn myBtn donate">Xayriya qilish</Link></h6>
                        <h6 onClick={() => dispatch(LOGOUT(navigate))} className="logout"><span><img src="assets/icon/logout.svg" alt="" /></span> Chiqish</h6>
                    </div>

                </div>
                <div className="col-lg-9 px-3 bottomRight">
                    {props.children}
                </div>

            </div>

        </div>
    )
}

export default UserLayout