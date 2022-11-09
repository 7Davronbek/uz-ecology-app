import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';
import { Link } from 'react-router-dom'

const UserLayout = (props) => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
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
                                Yashil makon loyihasi nima?
                            </AccordionHeader>
                            <AccordionBody accordionId='1'>
                                <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                            </AccordionBody>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="col-lg-9 px-3 bottomRight">
                    {props.children}
                </div>

            </div>

        </div>
    )
}

export default UserLayout