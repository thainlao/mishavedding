import img from '../assets/screen1img.png';

const Firstpage = () => {
    return (
        <div 
            className='container'>
            <div className='content'>
                <h1 className='title'>Мы</h1>
                <h1 className='title'>Женимся</h1>

                <img src={img} alt='wedding' className='image'/>
                <h1 className='date'>30 апреля</h1>
                <h1 className='date'>2026</h1>
            </div>
        </div>
    )
}

export default Firstpage;