//style
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Footer from './Components/Footer/footer'
import Header from './Components/Header/header'
import All from './pages/all'
import Design from './pages/design'
import Typography from './pages/typography'
import UI from './pages/ui'
import UX from './pages/ux'
import InfoPost from './Components/infoPost/infoPost'


export default function App() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path="/" element={<All />} />
                <Route path="/info" element={<InfoPost />} />
                <Route path="/design" element={<Design />} />
                <Route path='/ui' element={<UI />} />
                <Route path='/ux' element={<UX />} />
                <Route path='/typography' element={<Typography />} />
            </Routes>
            <Footer />
        </div>
    )
}