const DetailsPage = () => {
    return (
        <div 
            className='container'>
            <div className='content'>
                <h1 style={{marginBottom: '20px'}} className='title'>детали</h1>
                <section>
                    <h1 style={{fontSize: '18px', textAlign: 'start'}} className='title'>сюрпризы</h1>
                    <h2 style={{fontSize: '18px'}}>Если вы готовите творческий номер или технически сложный подарок, заранее согласуйте идею с нашим ведущим:</h2>
                    <div className="inner_text">
                        <h2 style={{width: 'auto', fontWeight: 'bold'}}>Александр</h2>
                        <a href="https://t.me/shteyzel_al" style={{fontWeight: 'bold', cursor: 'pointer'}}>@shteyzel_al</a>
                    </div>
                </section>

                <section>
                    <h1 style={{fontSize: '18px', textAlign: 'start'}} className='title'>подарки</h1>
                    <h2 style={{fontSize: '18px'}}>Если хотите подарить нам ценный и нужный подарок, мы будем очень благодарны за вклад в бюджет нашей молодой семьи</h2>
                </section>

                <section>
                    <h1 style={{fontSize: '18px', textAlign: 'start'}} className='title'>совет</h1>
                    <h2 style={{fontSize: '18px'}}>На территории есть <p style={{color: '#005FA3'}}>бассейн.</p> Возьмите с собой все нужное, если хотите искупаться</h2>
                </section>
            </div>
        </div>
    )
}

export default DetailsPage