import React, { useEffect } from 'react'
import UserLayout from '../components/user/UserLayout'
import { useDispatch, useSelector } from 'react-redux';
import { ALLREPORTS } from '../redux/actions/tradesAction';

const Documents = () => {
    const { allReports, isLoading } = useSelector(state => state.trades)
    const dispatch = useDispatch()
    console.log(allReports[1]);

    useEffect(() => {
        dispatch(ALLREPORTS())
    }, []);

    return (
        <div className='Documents'>
            <UserLayout>
                <div className="row align-items-center">
                    <div className="col-lg-3">
                        <button className="btn myBtn w-100"><span className="me-2"><img src="assets/icon/plus.svg" alt="" /></span> yaratish</button>

                    </div>

                    <div className="col-lg-4 ms-auto rightWrap me-2">
                        <input placeholder='Kontragent bo’yicha qidiruv' type="text" className="form-control" />
                        <img src="assets/icon/search.svg" alt="" />
                    </div>
                </div>

                <div className="circleWrap">
                    <h5> Barcha holatlar <span className='ms-2'><img src="assets/icon/circle/silver.svg" alt="" /></span></h5>
                    <h5> Hamkoringiz imzosi kutilmoqda <span className='ms-2'><img src="assets/icon/circle/blue.svg" alt="" /></span></h5>
                    <h5> Agent imzosini kutmoqda <span className='ms-2'><img src="assets/icon/circle/purple.svg" alt="" /></span></h5>
                    <h5> Imzolangan <span className='ms-2'><img src="assets/icon/circle/green.svg" alt="" /></span></h5>
                    <h5> Rad etilgan <span className='ms-2'><img src="assets/icon/circle/red.svg" alt="" /></span></h5>
                    <h5> O’chirilgan <span className='ms-2'><img src="assets/icon/circle/black.svg" alt="" /></span></h5>
                </div>

                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>hujjat</th>
                            <th>yangilandi</th>
                            <th>Hamkor</th>
                            <th>SHARTNOMA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isLoading && <>
                            <tr>
                                <th><input type="checkbox" name="" className='' id="" /></th>
                                <th><span className="d-flex align-items-center"><img className='me-2' src="assets/icon/circle/blue.svg" alt="" /> loading...</span></th>
                                <th>
                                    <h5>loading...</h5>
                                    <h6>loading...</h6>
                                </th>
                                <th>
                                    <h4>loading...</h4>
                                    <h3>loading...</h3>
                                </th>
                                <th>
                                    <p>loading...</p>
                                </th>
                            </tr>
                        </>}
                        {allReports && allReports[1] && allReports[1].map((item, index) => (
                            <tr key={index}>
                                <th><input type="checkbox" name="" className='' id="" /></th>
                                <th><span className="d-flex align-items-center"><img className='me-2' src="assets/icon/circle/blue.svg" alt="" /> {item.contract_date}</span></th>
                                <th>
                                    <h5>12.11.2022</h5>
                                    <h6>Erkin hujjat</h6>
                                </th>
                                <th>
                                    <h4>{item.company_name}</h4>
                                    <h3>{item.contract_number}</h3>
                                </th>
                                <th>
                                    <p>{item.created_at.slice(8, 10) + `.` + item.created_at.slice(5, 7) + `.` + item.created_at.slice(0, 4)} dan</p>
                                </th>
                            </tr>
                        ))}
                        {allReports && allReports[2] && allReports[2].map((item, index) => (
                            <tr key={index}>
                                <th><input type="checkbox" name="" className='' id="" /></th>
                                <th><span className="d-flex align-items-center"><img className='me-2' src="assets/icon/circle/purple.svg" alt="" /> {item.contract_date}</span></th>
                                <th>
                                    <h5>12.11.2022</h5>
                                    <h6>Erkin hujjat</h6>
                                </th>
                                <th>
                                    <h4>{item.company_name}</h4>
                                    <h3>{item.contract_number}</h3>
                                </th>
                                <th>
                                    <p>{item.created_at.slice(8, 10) + `.` + item.created_at.slice(5, 7) + `.` + item.created_at.slice(0, 4)} dan</p>
                                </th>
                            </tr>
                        ))}
                        {allReports && allReports[3] && allReports[3].map((item, index) => (
                            <tr key={index}>
                                <th><input type="checkbox" name="" className='' id="" /></th>
                                <th><span className="d-flex align-items-center"><img className='me-2' src="assets/icon/circle/green.svg" alt="" /> {item.contract_date}</span></th>
                                <th>
                                    <h5>12.11.2022</h5>
                                    <h6>Erkin hujjat</h6>
                                </th>
                                <th>
                                    <h4>{item.company_name}</h4>
                                    <h3>{item.contract_number}</h3>
                                </th>
                                <th>
                                    <p>{item.created_at.slice(8, 10) + `.` + item.created_at.slice(5, 7) + `.` + item.created_at.slice(0, 4)} dan</p>
                                </th>
                            </tr>
                        ))}
                        {allReports && allReports[4] && allReports[4].map((item, index) => (
                            <tr key={index}>
                                <th><input type="checkbox" name="" className='' id="" /></th>
                                <th><span className="d-flex align-items-center"><img className='me-2' src="assets/icon/circle/red.svg" alt="" /> {item.contract_date}</span></th>
                                <th>
                                    <h5>12.11.2022</h5>
                                    <h6>Erkin hujjat</h6>
                                </th>
                                <th>
                                    <h4>{item.company_name}</h4>
                                    <h3>{item.contract_number}</h3>
                                </th>
                                <th>
                                    <p>{item.created_at.slice(8, 10) + `.` + item.created_at.slice(5, 7) + `.` + item.created_at.slice(0, 4)} dan</p>
                                </th>
                            </tr>
                        ))}
                   
                    </tbody>
                </table>
            </UserLayout>
        </div>
    )
}

export default Documents