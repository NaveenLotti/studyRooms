import './joinRooms.css';
import { FaSearch } from "react-icons/fa";

function joinRooms() {
    return (
        <>
        <h1>Search Rooms</h1>

        <div className="search">
                <form>
                <input type="text" placeholder="Search..."/>
                <button type="submit"><FaSearch color='#fff' size={24} style={{backgroundColor : '#3980ff'}}/></button>
                </form>
        </div>
        </>
    )
}

export default joinRooms;