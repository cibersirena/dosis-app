import NavDropdown from 'react-bootstrap/NavDropdown';

export default function MenuItem ({ producto }) {
    return (
        <NavDropdown.Item href="#">{producto}</NavDropdown.Item>
    );
};