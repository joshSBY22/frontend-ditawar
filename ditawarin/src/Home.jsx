import Logo from './assets/logo.png'
import Jumbotron from './assets/jumbo.jpeg'
import Tanah from './assets/tanah.png'
import Rumah from './assets/rumah.png'
import Ruko from './assets/ruko.png'
import Pabrik from './assets/pabrik.png'
import Mobil from './assets/mobil.png'

function Home(){
    return (
        <>
            {/* NAVBAR */}
            <nav style={{borderBottom: "1px solid gray"}}>
                <div className="container-fluid">
                    <div className="d-flex justify-content-between align-items-center">
                        <img src={Logo} alt="" style={{width: "10%", height: "10%"}}/>
                        <input type="text" placeholder='Cari Produk'/>
                        <div className="d-flex">
                        <button type="button" className="btn btn-outline-primary me-3">Masuk</button>
                            <button type="button" className="btn btn-primary">Daftar</button>
                        </div>
                    </div>
                </div>
            </nav>
        
            <div className="container">
                {/* JUMBO */}
                <div className="jumbotron text-center mt-5">
                    <img src={Jumbotron} alt="jumbo" style={{width: "100%", height: "30rem"}}/>
                </div>

                {/* KATEGORI */}
                <h3 className='mt-3 mb-3'>KATEGORI PILIHAN</h3>
                <div className="d-flex justify-content-center">
                    <div className="kategori_1 text-center pe-5 ps-5 pt-3 pb-3 me-5 align-items-center" style={{border: "1px solid gray", borderRadius: "12px"}}>
                        <img src={Tanah} alt="" style={{width: "5rem", height: "5rem"}}/> <br />
                        <h5 className='mt-3 mb-0'>TANAH</h5>
                    </div>
                    <div className="kategori_2 text-center pe-5 ps-5 pt-3 pb-3 me-5 align-items-center" style={{border: "1px solid gray", borderRadius: "12px"}}>
                        <img src={Rumah} alt="" style={{width: "5rem", height: "5rem"}}/> <br />
                        <h5 className='mt-3 mb-0'>RUMAH</h5>
                    </div>
                    <div className="kategori_3 text-center pe-5 ps-5 pt-3 pb-3 me-5 align-items-center" style={{border: "1px solid gray", borderRadius: "12px"}}>
                        <img src={Pabrik} alt="" style={{width: "5rem", height: "5rem"}}/> <br />
                        <h5 className='mt-3 mb-0'>PABRIK</h5>
                    </div>
                    <div className="kategori_4 text-center pe-5 ps-5 pt-3 pb-3 me-5 align-items-center" style={{border: "1px solid gray", borderRadius: "12px"}}>
                        <img src={Ruko} alt="" style={{width: "5rem", height: "5rem"}}/> <br />
                        <h5 className='mt-3 mb-0'>RUKO</h5>
                    </div>
                    <div className="kategori_5 text-center pe-5 ps-5 pt-3 pb-3 align-items-center" style={{border: "1px solid gray", borderRadius: "12px"}}>
                        <img src={Mobil} alt="" style={{width: "5rem", height: "5rem"}}/> <br />
                        <h5 className='mt-3 mb-0'>MOBIL</h5>
                    </div>
                </div>

            </div>
        </>
        
        
    )
}

export default Home;