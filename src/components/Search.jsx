import React, { useState } from "react";

function Search() {

    const [searchInput, setSearchInput] = useState('');
    const items = [
        'I am learning React & I love it.',
        'I am a full stack developer.',
        'India is my country and I am proud oc my country.',
        'Har Har Mahadev'
    ]

    const handleSearch = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const filteredItems = items.filter(item => 
        item.toLowerCase().includes(searchInput.toLowerCase()));
    

    return (
        <div>
            <div>
                <input type="text" value={searchInput} placeholder="Search here" onChange={handleSearch} />
            </div>
            <div>
                <ul>
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    ) : (
                        <p>No matched items found!</p>
                    )}
                </ul>
            </div>
            
        </div>
    )

}

export default Search