import React, { useState, useEffect, useRef } from 'react'
import '/home/nayan/Desktop/Molicule/frontend2/src/Component/page3.css'
import Home from './Home'
import { Link } from 'react-router-dom'

const Report_gen = () => {

    const [showMenu, setShowMenu] = useState(false);
    const [showMenu1, setShowMenu1] = useState(false);
    const [showMenu2, setShowMenu2] = useState(false);
    const [showMenu3, setShowMenu3] = useState(false);

    const dropdownRef = useRef(null); 
    const dropdownRef1 = useRef(null)
    const dropdownRef2 = useRef(null)
    const dropdownRef3 = useRef(null)// Create a reference for the dropdown

    const handleToggleMenu = () => {
        setShowMenu(prev => !prev);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleToggleMenu1 = () => {
        setShowMenu1(prev => !prev);
    };

    const handleClickOutside1 = (event) => {
        if (dropdownRef1.current && !dropdownRef1.current.contains(event.target)) {
            setShowMenu1(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside1);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside1);
        };
    }, []);

    const handleToggleMenu2 = () => {
        setShowMenu2(prev => !prev);
    };

    const handleClickOutside2 = (event) => {
        if (dropdownRef2.current && !dropdownRef2.current.contains(event.target)) {
            setShowMenu2(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside2);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside2);
        };
    }, []);

    const handleToggleMenu3 = () => {
        setShowMenu3(prev => !prev);
    };

    const handleClickOutside3 = (event) => {
        if (dropdownRef3.current && !dropdownRef3.current.contains(event.target)) {
            setShowMenu3(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside3);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside3);
        };
    }, []);
    return (
        <div className='divA'>


            <div className='divmain'>

                <div className='divB'


                >


                    <nav
                        className="navbar navbar-expand-lg w-100"
                        style={{ backgroundColor: "transparent", border: "none" }}
                    >
                        <a className="navbar-brand" href="#" style={{ color: "yellow", fontSize: 20 }}>
                            Molecule
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                            style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
                        >
                            <span
                                className="navbar-toggler-icon"
                                style={{
                                    backgroundImage:
                                        "url('data:image/svg+xml;charset=utf8,%3Csvg viewBox=0 0 30 30 xmlns=http://www.w3.org/2000/svg%3E%3Cpath stroke=rgba(255, 255, 255, 0.5) stroke-width=2 stroke-linecap=round stroke-miterlimit=10 d=M4 7h22M4 15h22M4 23h22/%3E%3C/svg%3E')",
                                }}
                            ></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to={Home} style={{ color: "white" }}>
                                        Home <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "yellow" }}>
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#" style={{ color: "yellow" }}>
                                        Contact
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link"
                                        href="#"
                                        tabIndex="-1"
                                        // aria-disabled="true"
                                        style={{ color: "white" }}
                                    >
                                        TryMind
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </nav>



                    {/* <h1>Report Card</h1> */}



                </div>
                <div className='divC'>

                    {/* First Inner Div */}
                    <div className='inner-div'>


                        <div className='table_info'>


                            <div className='image-box'>
                                <img src='https://cdn.rcsb.org/images/structures/2aox_assembly-1.jpeg   ' alt='Placeholder' className='image11' />





                                <div className='structure'  >CNc1nc(NCCCCc2ccc(OC(=O)N3CCOCC3)cc2)nc2scc(F)c12</div>


                            </div>
                            <div className='comb'>

                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Status :-</th>
                                            <th style={{ color: "green" }}  >Ready for Test</th>
                                        </tr>
                                    </thead>

                                </table>


                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Verify :-</th>
                                            <th style={{ color: "blue" }}  ><a href='https://tox.charite.de/protox3/index.php?site=compound_input'>click to Verify </a> </th>
                                        </tr>
                                    </thead>

                                </table>

                            </div>

                            <table className='info-table'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Molweight</td>
                                        <td>455</td>
                                    </tr>
                                    <tr>
                                        <td>Number of bonds</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>Molecular refractivity</td>
                                        <td>126.98</td>
                                    </tr>
                                </tbody>
                            </table>






                            {/* Three dots menu */}
                            <div className="three-dot-menu" onClick={handleToggleMenu} style={{ color: 'white', fontSize: '24px', cursor: 'pointer', position: 'relative' }}>
                                &#x2026; {/* This will render as "…" */}
                            </div>

                            {/* Dropdown Menu */}
                            {showMenu && (
                                <div ref={dropdownRef} className="menu" style={{ position: 'absolute', background: 'white', color: 'black', borderRadius: '5px', padding: '10px' }}>
                                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", }} onClick={() => alert('Print option clicked')}>Print</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Verify</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Save</li>
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Second Inner Div */}
                    <div className='inner-div'>



                        <div className='table_info'>


                            <div className='image-box'>
                                <img src='https://i.guim.co.uk/img/media/9be88a8fbd44edbd1d57a656afb9105b3d1199d2/0_0_2000_1200/master/2000.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8402e5090eb467e24338915b022b4bb0' alt='Placeholder' className='image11' />





                                <div className='structure'  >CNc1nc(NCCCCc2ccc(OC(=O)N3CCOCC3)cc2)nc2scc(F)c12</div>


                            </div>
                            <div className='comb'>

                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Status :-</th>
                                            <th style={{ color: "green" }}  >Ready for Test</th>
                                        </tr>
                                    </thead>

                                </table>


                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Verify :-</th>
                                            <th style={{ color: "blue" }}  ><a href='https://tox.charite.de/protox3/index.php?site=compound_input'>click to Verify </a> </th>
                                        </tr>
                                    </thead>

                                </table>

                            </div>

                            <table className='info-table'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Molweight</td>
                                        <td>455</td>
                                    </tr>
                                    <tr>
                                        <td>Number of bonds</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>Molecular refractivity</td>
                                        <td>126.98</td>
                                    </tr>
                                </tbody>
                            </table>






                            {/* Three dots menu */}
                            <div className="three-dot-menu" onClick={handleToggleMenu1} style={{ color: 'white', fontSize: '24px', cursor: 'pointer', position: 'relative' }}>
                                &#x2026; {/* This will render as "…" */}
                            </div>

                            {/* Dropdown Menu */}
                            {showMenu1 && (
                                <div ref={dropdownRef1} className="menu" style={{ position: 'absolute', background: 'white', color: 'black', borderRadius: '5px', padding: '10px' }}>
                                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", }} onClick={() => alert('Print option clicked')}>Print</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Verify</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Save</li>
                                    </ul>
                                </div>
                            )}

                        </div>

                    </div>

                    {/* Third Inner Div */}
                    <div className='inner-div'>

                        <div className='table_info'>


                            <div className='image-box'>
                                <img src='https://www.nih.gov/sites/default/files/styles/floated_media_breakpoint-large/public/news-events/research-matters/2014/20141103-HIV.jpg?itok=NcHFG5W_&timestamp=1431544050  ' alt='Placeholder' className='image11' />





                                <div className='structure'  >CNc1nc(NCCCCc2ccc(OC(=O)N3CCOCC3)cc2)nc2scc(F)c12</div>


                            </div>
                            <div className='comb'>

                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Status :-</th>
                                            <th style={{ color: "green" }}  >Ready for Test</th>
                                        </tr>
                                    </thead>

                                </table>


                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Verify :-</th>
                                            <th style={{ color: "blue" }}  ><a href='https://tox.charite.de/protox3/index.php?site=compound_input'>click to Verify </a> </th>
                                        </tr>
                                    </thead>

                                </table>

                            </div>

                            <table className='info-table'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Molweight</td>
                                        <td>455</td>
                                    </tr>
                                    <tr>
                                        <td>Number of bonds</td>
                                        <td>35</td>
                                    </tr>
                                    <tr>
                                        <td>Molecular refractivity</td>
                                        <td>126.98</td>
                                    </tr>
                                </tbody>
                            </table>






                            {/* Three dots menu */}
                            <div className="three-dot-menu" onClick={handleToggleMenu2} style={{ color: 'white', fontSize: '24px', cursor: 'pointer', position: 'relative' }}>
                                &#x2026; {/* This will render as "…" */}
                            </div>

                            {/* Dropdown Menu */}
                            {showMenu2 && (
                                <div ref={dropdownRef2} className="menu" style={{ position: 'absolute', background: 'white', color: 'black', borderRadius: '5px', padding: '10px' }}>
                                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", }} onClick={() => alert('Print option clicked')}>Print</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Verify</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Save</li>
                                    </ul>
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Fourth Inner Div */}
                    <div className='inner-div'>

                        <div className='table_info'>


                            <div className='image-box'>
                                <img src='https://s7d1.scene7.com/is/image/CENODS/09808-scicon3-spike?$responsive$&wid=300&qlt=90,0&resMode=sharp2' alt='Placeholder' className='image11' />





                                <div className='structure'  >CNc1nc(NCCCCc2ccc(OC(=O)N3CCOCC3)cc2)nc2scc(F)c12</div>


                            </div>
                            <div className='comb'>

                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Status :-</th>
                                            <th style={{ color: "green" }}  >Ready for Test</th>
                                        </tr>
                                    </thead>

                                </table>


                                <table className='status-table'>
                                    <thead>
                                        <tr>
                                            <th>Verify :-</th>
                                            <th style={{ color: "blue" }}  ><a href='https://tox.charite.de/protox3/index.php?site=compound_input'>click to Verify </a> </th>
                                        </tr>
                                    </thead>

                                </table>

                            </div>

                            <table className='info-table'>
                                <thead>
                                    <tr>
                                        <th>Property</th>
                                        <th>Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Molweight</td>
                                        <td>300</td>
                                    </tr>
                                    <tr>
                                        <td>Number of bonds</td>
                                        <td>29</td>
                                    </tr>
                                    <tr>
                                        <td>Molecular refractivity</td>
                                        <td>126.98</td>
                                    </tr>
                                </tbody>
                            </table>






                            {/* Three dots menu */}
                            <div className="three-dot-menu" onClick={handleToggleMenu3} style={{ color: 'white', fontSize: '24px', cursor: 'pointer', position: 'relative' }}>
                                &#x2026; {/* This will render as "…" */}
                            </div>

                            {/* Dropdown Menu */}
                            {showMenu3 && (
                                <div ref={dropdownRef3} className="menu" style={{ position: 'absolute', background: 'white', color: 'black', borderRadius: '5px', padding: '10px' }}>
                                    <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", }} onClick={() => alert('Print option clicked')}>Print</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Verify</li>
                                        <li style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18, }}>Save</li>
                                    </ul>
                                </div>
                            )}

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default Report_gen;
