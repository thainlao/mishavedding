import img from '../assets/bg3.png';

const FooterPage = () => {
    const handleButtonClick = () => {
        window.open('https://docs.google.com/forms/d/e/1FAIpQLSez8NPY7myLLZkj3q4fWVoID0w9BD43_0wPbIiL7pRq1mnYvA/viewform', '_blank');
    };

    return (
        <div 
            style={{backgroundImage: `url(${img})`}}
            className='container'>
            <div className='content'>
                <h2 style={{textAlign: 'center', fontSize: '27px'}}>Пожалуйста заполните анкету</h2>
                <button className='final_but' onClick={handleButtonClick}>
                    заполнить
                </button>
            </div>
        </div>
    )
}

export default FooterPage;