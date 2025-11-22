import img from '../assets/screen3img.png';
import bg from '../assets/тайминг 1.png';

const TimingPage = () => {
  return (
    <div style={{justifyContent: 'start', backgroundImage: `url(${bg})`}} className='container'>
      <div 
        style={{height: '100%', justifyContent: 'space-between'}} 
        className='content'>
        <section>
            <h1 className='title'>17:00</h1>
            <h1 className='title'>сбор гостей</h1>
        </section>
        <img 
          src={img} alt='wedding' 
          className='image'/>
        <section>
            <h1 className='title colored'>23:00</h1>
            <h1 className='title colored'>after party</h1>
        </section>
      </div>
    </div>
  )
}

export default TimingPage;