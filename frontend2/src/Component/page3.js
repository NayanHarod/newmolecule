import React, { useState, useEffect, useRef } from 'react';
import '/home/multi-sy-22/Desktop/newmolecule/frontend2/src/Component/page3.css';
import { useLocation } from 'react-router-dom';
import NavigationBar from './Navbar';

const Report_gen = () => {
    const location = useLocation();
    const { data } = location.state || {};
    const result = data?.result || [];

    // States for dropdown menus
    const [showMenu, setShowMenu] = useState(Array(result.length).fill(false));
    const dropdownRefs = useRef(Array(result.length).fill(null));

    const handleToggleMenu = (index) => {
        setShowMenu(prev => {
            const updated = [...prev];  
            updated[index] = !updated[index];
            return updated;
        });
    };

    const handleClickOutside = (event) => {
        dropdownRefs.current.forEach((ref, index) => {
            if (ref && !ref.contains(event.target)) {
                setShowMenu(prev => {
                    const updated = [...prev];
                    updated[index] = false;
                    return updated;
                });
            }
        });
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleVerify =  (molName) => {
        console.log("nnnnnnnnnnnnnnnnnn");
        try {
             navigator.clipboard.writeText(molName);
             console.log('tttttttttttttttttttttttttttttttttttttttt',navigator.clipboard.writeText(molName));
            
            // Redirect to the verification page
            window.location.href = 'https://tox.charite.de/protox3/index.php?site=compound_input';
        } catch (err) {
            console.error('Failed to copy: ', err);
            alert('Failed to copy molecule name');
        }
    };

    return (
        <div className='divA'>
            <div className='divmain11'>
                <NavigationBar />
                <div className='divC'>
                    {result.map((item, index) => (
                        <div className='inner-div' key={index}>
                            <div className='table_info'>
                                <div className='image-box'>
                                    <img
                                        src={`data:image/png;base64,${item.img_path}`}
                                        alt='Molecule'
                                        className='image11'
                                    />
                                    <div className='structure'>{item.mol_name}</div>
                                </div>
                                <div className='comb'>
                                    <table className='status-table'>
                                        <thead>
                                            <tr>
                                                <th>Status :-</th>
                                                <th style={{ color: "Green" }}> 
                                                    Ready for testing
                                                </th>
                                            </tr>
                                        </thead>
                                    </table>
                                    <table className='status-table'>
                                        <thead>
                                            <tr>
                                                <th>Verify :-</th>
                                                <th style={{ color: "blue" }}>
                                                    <a href='https://tox.charite.de/protox3/index.php?site=compound_input'  onClick={() => handleVerify(item.mol_name)}>click to Verify</a>
                                                </th>
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
                                            <td>Activity Status</td>
                                            <td style={{ color: item.Molclass === 'Active' ? 'green' : item.Molclass === 'Inactive' ? 'red' : 'black' }}>
                                                {item.Molclass || 'N/A'}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>PIc50</td>
                                            <td>{item.pic50 || 'N/A'}</td>
                                        </tr>
                                        <tr>
                                            <td>Activity probability</td>
                                            <td>{item.probability || 'N/A'}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div
                                    className="three-dot-menu"
                                    onClick={() => handleToggleMenu(index)}
                                    style={{ color: 'white', fontSize: '24px', cursor: 'pointer', position: 'relative' }}
                                >
                                    &#x2026;
                                </div>
                                {showMenu[index] && (
                                    <div
                                        ref={el => dropdownRefs.current[index] = el}
                                        className="menu"
                                        style={{ position: 'absolute', background: 'white', color: 'black', borderRadius: '5px', padding: '10px' }}
                                    >
                                        <ul style={{ listStyleType: 'none', padding: '0', margin: '0' }}>
                                            <li
                                                style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold" }}
                                                onClick={() => alert('Print option clicked')}
                                            >
                                                Print
                                            </li>
                                            <li
                                                style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18 }}
                                               
                                            >
                                                Verify
                                            </li>
                                            <li
                                                style={{ padding: '5px 10px', cursor: 'pointer', fontFamily: "-moz-initial", fontWeight: "bold", fontSize: 18 }}
                                            >
                                                Save
                                            </li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Report_gen;
