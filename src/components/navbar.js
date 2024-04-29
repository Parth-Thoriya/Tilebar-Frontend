import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import IconButton from '@mui/joy/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { getRole, getToken } from '../util/data';
import Footer from './footer';
const dropdowntable = (section) => {
    let tables = section.map((sec) => {
        return <>
            <td>
                <table className='mx-5'>

                    <thead className='align-middle'>
                        {sec.name}
                    </thead>
                    <tbody className='table-group-divider'>

                        {sec.items.map((temp) => {
                            return <a className="dropdown-item" href="#">{temp}</a>
                        })}
                    </tbody>
                </table>

            </td>
        </>
    })
    return <table className='table table-hover'>{tables}</table>

}



export default function Navbar() {
    const nav = useNavigate();
    const navitems = () => {
        let categories = [
            {
                id: 'tiles',
                name: 'Tiles',
                
                sections: [
                    {
                        id: 'shopbyapplication',
                        name: 'shop By Application',
                        items: [
                            "backsplash & kitchen",
                            "shower",
                            "bathroom",
                            "floor tiles",
                            "wall tiles",
                            "large wall",
                            "outdoor & pavers",
                            "pool tiles",
                        ],
                    },
                    {
                        id: 'shopbymaterial',
                        name: 'shop By Material',
                        items: [
                            'ceramic & procelain',
                            'marble & stone',
                            'terrazzo',
                            'pebble',
                            'crackled',
                            'glass',
                            'pearl',
                            'trims',
                        ],
                    },
                    {
                        id: 'shopbylook',
                        name: 'shop By Look',
                        items: [
                            'subway',
                            'encaustic',
                            'zellige',
                            'decorative',
                            'concrete look ',
                            'wood look',
                            'shapes & patterns',
                            'mosaic',
                        ],
                    },
                ],
            },
            {
                id: 'stone',
                name: 'Stone',
                
                sections: [
                    {
                        id: 'stone',
                        name: 'Stone',
                        items: [
    
                            "Carrara",
                            "Calacatta",
                            "Crema marfil",
                            "Emperador",
                            "Traver Time",
                            "Thassos",
                            "Volatas",
                        ],
                    },
                    {
                        id: 'shopbyformat',
                        name: 'shop By Format',
                        items: [
    
                            "Large Format",
                            "Small Format",
                            "Mosaics",
                            "Waterjets",
                            "Hexagon",
                            "Geometric",
                        ],
                    },
                    {
                        id: 'shopbycolor',
                        name: 'shop By Color',
                        items: [
    
                            "White",
                            "Gray",
                            "Beige & Cream",
                            "Black+White",
                            "Black",
                            "Multicolor",
                            "Blue",
                            "Purple",
                            "Brown",
                            "Green",
                            "Pink",
                            "Gold",
                            "Red",
                            "Metallic",
                        ],
    
                    },
                ],
            },
            {
                id: 'vinyl',
                name: 'Vinyl',
                
                sections: [
                    {
                        id: 'vinyllooks',
                        name: 'Vinyl Looks',
                        items: [
    
                            "Wood Look",
                            "Stone Look",
                            "Concrete Look",
                            "Vinyl Planks",
                            "Vinyl Tiles",
                        ],
                    },
                    {
                        id: 'vinylapplication',
                        name: 'Vinyl Application',
                        items: [
    
                            "Residential",
                            "Commercial",
                            "Light Commercial",
                        ],
                    },
                ],
            },
            {
                id: 'collection',
                name: 'Collection',
                
                sections: [
                    {
                        id: 'tilecollections',
                        name: 'Tile Collections',
                        items: [
                            "Trending",
                            "Decorative",
                            "Subway",
                            "Stone",
                            "Large Format",
                            "waterjet",
                        ],
                    },
                    {
                        id: 'newarrivals',
                        name: 'New Arrivals',
                        items: [
                            "Wabi Sabi",
                            "Stonework",
                            "Monet",
                            "Kobe",
                            "Charlotte",
                            "Curve",
                        ],
                    },
                ],
            },
        ]
    
        var fromatedCategories = categories.map((cat) => {
            return (
                <li className="nav-item dropdown me-3 w-100">
    
                    <button className="nav-link dropdown-toggle border-0"  
                    onClick={()=>{
                        nav("/home/catogary/"+cat.name)
                    }}
                    role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        {cat.name}
                    </button>
    
    
                    <ul className="dropdown-menu">
                        {dropdowntable(cat.sections)}                        
                    </ul>
                </li>
            );
        });
        return <>{fromatedCategories}</>;
    }
    function UserRole() {
        let role = getRole();
        if (role == 1) {
            return (
                <li className="nav-item">
                    <span className="nav-link"
                        onClick={() => {
                            nav('/home/admin')
                        }}
                    >Admin's Corner</span>
                </li>
            );
        }
        else if (role == 2) {
            return (
                <li className="nav-item">
                    <span className="nav-link"
                        onClick={() => {
                            nav('/dealers')
                        }}
                    >Dealer's Corner</span>
                </li>
            );
        }
        else {
            return (<li className="nav-item">
                <span className="nav-link"
                    onClick={() => {
                        nav('/dealers')
                    }}
                >Be a Dealer</span>
            </li>);
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg container-fluid ">
                <div className="container-fluid  d-flex justify-content-between">

                    <div><img src="./assets/tilebar_logo.svg" class="img-fluid" width="100" alt='logo' /></div>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div> <div className=" navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex ms-4" role="search">
                            <input className="form-control me-2 mt-3" type="search" placeholder="Search" aria-label="Search" />
                            <button className="mybtn btn mt-3" type="submit">Search</button>
                        </form>
                    </div>
                    </div>
                    <div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-lg-0">
                                <li className="nav-item">
                                    <span className="nav-link " aria-current="page"
                                        onClick={() => {
                                            nav('/home')
                                        }}
                                    >Home</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link"
                                        onClick={() => {
                                            nav('/home/aboutus')
                                        }}
                                    >About Us</span>
                                </li>                                
                                {UserRole()}
                                <button className="mybtn btn"
                                    onClick={() => {
                                        localStorage.removeItem('jwt')
                                        localStorage.removeItem('role')
                                        nav('/')
                                    }}
                                >Log Out</button>

                            </ul>
                        </div>
                    </div>

                </div>
            </nav>


            <nav className="navbar navbar-expand-lg container-fluid sticky-top mt-0 bg-white">


                <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        {navitems()}
                    </ul>
                    <span>
                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm">
                            <AccountCircleIcon className='me-1 iconbtn' onClick={()=>{
                                nav("/home/profile")
                            }} />
                        </IconButton>
                        <IconButton
                            aria-label="bookmark Bahamas Islands"
                            variant="plain"
                            color="neutral"
                            size="sm"
                            onClick={(e) => {
                                nav('/home/cart')                               
                              }}
                            >
                            <ShoppingCartCheckoutIcon className='me-1 iconbtn' />
                        </IconButton>
                    </span>
                </div>
            </nav>
            <Outlet />
            <Footer/>
        </>
    );
}

