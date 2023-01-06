import React from 'react';


const Header = ({value, setIsRender, filterByTitle, setCartOpened, cost}) => {
    return (
        <>
            <header>
                <div className="logo">
                    <img src="/img/logo.png" alt="logo"/>
                    <h1>Pizza iz zada</h1>
                </div>
                <div className="search">
                    <img src="/img/search.png" alt={"search"} />
                    <input type={"text"} placeholder="Поиск..." onChange={(e) => {
                        value.current = e.target.value
                        setIsRender(filterByTitle())
                    }}/>
                </div>
                <div className="currentPayment">
                    <div className="avatar">
                        <img src="/img/avatar.png" alt="Профиль"/>
                    </div>
                    <button id="fst">{cost} BYN</button>
                    <button id="sec" onClick={(e) => {
                        e.preventDefault()
                        setCartOpened(true)
                    }}>Корзина</button>
                </div>
            </header>


        </>
    );
};

export default Header;