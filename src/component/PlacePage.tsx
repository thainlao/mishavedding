import img from '../assets/screen2img.png';
import svgbg from '../assets/bgsvg.png';

const PlacePage = () => {
  return (
    <div style={{justifyContent: 'start', backgroundImage: `url(${svgbg})`}} className='container'>
      <div style={{position: 'relative'}} className='content'>
        <img 
          style={{margin: '0'}} 
          src={img} alt='wedding' 
          className='image'/>
          <h3>Троицк, деревня Пучкова, Новая улица, дом 4</h3>
        <div className='custom_text'>
          <h2 style={{whiteSpace: 'nowrap'}}>На площадке можно остаться</h2>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '6px'}}>
            <h2> на ночь </h2><p style={{whiteSpace: 'nowrap'}}>до 14:00 следующего</p>
          </div>
          <div style={{display: 'flex', flexDirection: 'row', alignItems: 'start', gap: '6px'}}>
            <p>дня</p><h2 style={{whiteSpace: 'nowrap', transform: 'translateX(-5px)'}}>, для каждого будет своя</h2>
          </div>
          <h2>комната</h2>
        </div>


        <h2>Если планируете остаться, позаботьтесь о вещах, которые вам нужны для этого.</h2>
      </div>
    </div>
  )
}

export default PlacePage;