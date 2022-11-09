import React from 'react'

const UserLayout = (props) => {
    return (
        <div className='UserLayout'>

            <div className="row">

                <div className="col-lg-3 px-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti totam itaque dolorem, velit fugiat sunt. In, reiciendis corrupti consectetur quae eum repellat eligendi similique amet magnam! Repudiandae et dignissimos modi?
                </div>
                <div className="col-lg-9 px-3">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam, voluptas sint, eligendi provident eaque quod debitis dignissimos esse numquam animi, quas quis necessitatibus? Porro voluptate possimus ut similique? Non, voluptas?
                </div>
            
            </div>

            <div className='row mt-5'>

                <div className="col-lg-3 px-3">
                    Lorem ipsum dolor sit amet.
                </div>
                <div className="col-lg-9 px-3">
                    {props.children}
                </div>

            </div>

        </div>
    )
}

export default UserLayout