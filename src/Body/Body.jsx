import React from 'react';
import {
    MDBNavbar,
    MDBContainer,
    MDBBreadcrumb,
    MDBBreadcrumbItem
} from 'mdb-react-ui-kit';
const Body=(props)=>{
    return(
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <nav  aria-label='breadcrumb'>
                        <MDBBreadcrumb>
                            <MDBBreadcrumbItem>
                                <a href='/currentWeather'>Current Weather</a>
                            </MDBBreadcrumbItem>
                            <MDBBreadcrumbItem>
                                <a href='/Weather'>Weather</a>
                            </MDBBreadcrumbItem>
                        </MDBBreadcrumb>
                    </nav>
                </MDBContainer>
            </MDBNavbar>
        );
}
export default Body