import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { Link, useLocation } from 'react-router-dom'

const UserLayout = (props) => {
    const [open, setOpen] = useState('0');
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
                        <span><img src="assets/image/logo.svg" alt="" /></span>
                        <span className='text'>O’zbekiston respublikasi ekologiya
                            va atrof muhitni muhofaza qilish
                            davlat qo’mitasi</span>
                    </Link>
                </div>
                <div className="col-lg-9 px-3 navbarRight">
                    <h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse et ullam assumenda porro dolorum aliquam tempora consectetur voluptatum nemo qui.</h5>
                </div>

            </div>

            <div className='row  userBottom'>

                <div className="col-lg-3 px-3 bottomLeft">
                    <h6><span><img src="assets/icon/home.svg" alt="" /></span> OOO YASHIL DARAXT</h6>

                    <Accordion className='service__list w-100 border2' open={open} toggle={toggle}>

                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId='1'>
                                <h5><span><img src="assets/icon/filter.svg" alt="" /></span> Bosh sahifa</h5>
                            </AccordionHeader>
                            <AccordionBody accordionId='1'>
                                <Link className={location.pathname === '/control-panel' ? 'active' : ''} to='/control-panel'>Boshqaruv paneli</Link>
                                <Link className={location.pathname === '/' ? 'active' : ''} to='/'>Sozlamalar</Link>
                            </AccordionBody>
                        </AccordionItem>

                        <AccordionItem className='wrap'>
                            <AccordionHeader targetId='2'>
                                <h5><span><img src="assets/icon/deal.svg" alt="" /></span> Savdolar va bitimlar</h5>
                            </AccordionHeader>
                            <AccordionBody accordionId='2'>
                                <Link className={location.pathname === '/sales' ? 'active' : ''} to='/sales'>Savdolar</Link>
                                <Link className={location.pathname === '/transactions' ? 'active' : ''} to='/transactions'>Bitimlar</Link>
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

                    </Accordion>

                    <h6 className={`last ${location.pathname === '/reports' ? 'active' : ''}`}><Link to='/reports'><span><img src="assets/icon/infoSquare.svg" alt="" /></span> Xisobotlarim </Link></h6>

                </div>
                <div className="col-lg-9 px-3 bottomRight">
                    {props.children}
                </div>

            </div>

        </div>
    )
}

export default UserLayout