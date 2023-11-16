import { useState } from "react";

const Navbar = ({ onSearch }) =>{

    const [search, setSearch] = useState('');
    const handleInputChange = (event) =>{
        setSearch(event.target.value);
        }
    const handleInputKeyDown = (evet) =>{
        if (evet.key === 'Enter') {
            console.log(evet);
            onSearch(search)
        }
    }

    return (
        <div>
            <p>Mi boletera</p>
            <input
                placeholder="Buscar tu evento favorito"
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value={search}
            />
        </div>
    )
};

export default Navbar;