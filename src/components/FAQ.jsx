import React, { useState } from 'react'
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem,
} from 'reactstrap';

const FAQ = () => {
    const [open, setOpen] = useState('0');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };
    return (
        <div className='FAQ'>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Ko’p beriladigan savollar</h1>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <Accordion className='service__list w-100 border2' open={open} toggle={toggle}>
                                <AccordionItem className='wrap'>
                                    <AccordionHeader targetId='1'>
                                        <div className='burger'>
                                            <div className="burger1"></div>
                                            <div className="burger2"></div>
                                        </div>
                                        Yashil makon loyihasi nima?
                                    </AccordionHeader>
                                    <AccordionBody accordionId='1'>
                                        <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='wrap'>
                                    <AccordionHeader targetId='2'>
                                        <div className='burger'>
                                            <div className="burger1"></div>
                                            <div className="burger2"></div>
                                        </div>
                                        Yashil makon loyihasi nima?
                                    </AccordionHeader>
                                    <AccordionBody accordionId='2'>
                                        <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='wrap'>
                                    <AccordionHeader targetId='3'>
                                        <div className='burger'>
                                            <div className="burger1"></div>
                                            <div className="burger2"></div>
                                        </div>
                                        Yashil makon loyihasi nima?
                                    </AccordionHeader>
                                    <AccordionBody accordionId='3'>
                                        <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='wrap'>
                                    <AccordionHeader targetId='4'>
                                        <div className='burger'>
                                            <div className="burger1"></div>
                                            <div className="burger2"></div>
                                        </div>
                                        Yashil makon loyihasi nima?
                                    </AccordionHeader>
                                    <AccordionBody accordionId='4'>
                                        <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                                    </AccordionBody>
                                </AccordionItem>
                                <AccordionItem className='wrap'>
                                    <AccordionHeader targetId='5'>
                                        <div className='burger'>
                                            <div className="burger1"></div>
                                            <div className="burger2"></div>
                                        </div>
                                        Yashil makon loyihasi nima?
                                    </AccordionHeader>
                                    <AccordionBody accordionId='5'>
                                        <p>Daraxtlar. Ular havodagi zararli karbonat angidridni yutib, o‘rniga kislorod ishlab chiqaradi va bizning nafas olishimizga yordam beradi. Ular issiqda salqinlik beradi, atrof-muhitni shovqinlardan himoya qiladi.</p>
                                    </AccordionBody>
                                </AccordionItem>
                            </Accordion>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ