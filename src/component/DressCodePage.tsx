import bg from '../assets/дресс код 1.png';

const DressCodePage = () => {
    const colorPalette = [
        '#C1CDBD', '#93A38C', '#778870',
        '#C1CEDD', '#A0B5CA', '#859DAD',
        '#EDD4D6', '#D8B5B6', '#B28383',
        '#D3BDA9', '#B39682', '#7F5B42',
        '#B3B3B3', '#848484', '#565656',
    ];

    return (
        <div 
            style={{backgroundImage: `url(${bg})`}}
            className='container'>
            <div className='content' style={{paddingTop: '105px'}}>
                <h1 className='title'>дресс код</h1>
                <h2 style={{marginTop: '20px'}}>Нам будет приятно, если при выборе наряда вы придержитесь палитры нашего торжества</h2>
                <div className='colorsGrid'>
                    {colorPalette.map((color, index) => (
                        <div 
                            key={index}
                            className='colorSquare'
                            style={{ backgroundColor: color }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DressCodePage;