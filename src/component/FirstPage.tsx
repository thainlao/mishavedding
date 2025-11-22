import img from '../assets/screen1img.png';
import svgimf from '../assets/rgp.png';

const Firstpage = () => {
    return (
        <div 
            className='container'>
            <div className='content'>
                <h1 style={{lineHeight: '0.5'}} className='title'>Мы</h1>
                <h1 style={{lineHeight: '0.5'}} className='title'>Женимся</h1>
                <img style={{left: '15%'}} src={svgimf} className='custom_svg svg1'/>
                <img src={img} alt='wedding' className='image'/>
                <h1 style={{lineHeight: '0.5'}} className='date'>30 апреля</h1>
                <h1 style={{lineHeight: '0.5'}} className='date'>2026</h1>
            </div>
        </div>
    )
}

export default Firstpage;