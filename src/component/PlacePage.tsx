import img from '../assets/screen2img.png';

const PlacePage = () => {
  return (
    <div style={{justifyContent: 'start'}} className='container'>
      <div className='content'>
        <img 
          style={{margin: '0'}} 
          src={img} alt='wedding' 
          className='image'/>

        <h3>Троицк, деревня Пучкова, Новая улица, дом 4</h3>
        <h2>На площадке можно остаться на ночь <p>до 14:00 следующего дня</p>, для каждого будет своя комната</h2>
        <h2>Если планируете оставаться, позаботьтесь о вещах, которые вам нужны для этого.</h2>
      </div>
    </div>
  )
}

export default PlacePage;