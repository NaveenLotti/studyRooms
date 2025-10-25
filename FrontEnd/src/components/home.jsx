import react from 'react';
import Header from './header.jsx'
import DarkVeil from '../ReactBits/DarkVeil.jsx';
function Home() {
    return (
        <>
        <div style={{ width: '100%', height: '600px', position: 'relative' }}>
            <DarkVeil />
        </div>
        <h1 style={{Color: '#fff'}}>Hello All</h1>
        </>
    )
}

export default Home;