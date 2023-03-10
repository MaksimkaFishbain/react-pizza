import React, {useState} from 'react';
import Modal from "./Modal";

const Card = ({cartContent, setCartContent, ...items}) => {
    const [isOpened, setIsOpened] = useState(false);
    return (
        <div className="card">
            <img className="info" src="/img/info.png" alt="info" onClick={() => setIsOpened(true)}/>
            <img src= {'/img/'+ items.image} alt="pizza" />
            <div className="aboutPizza">
                <h1>{items.title}</h1>
                <div className="cardContent">
                    <form className="first">
                        <button>20 см</button>
                        <button>25 см</button>
                        <button>30 см</button>
                    </form>
                    <form className="second">
                        <button>Толстое тесто</button>
                        <button>Тонкое тесто</button>
                    </form>
                </div>
                <div className="lowerCard">
                    <h2>{items.price} BYN</h2>
                    <button onClick={() => setCartContent([...cartContent, {
                        img: items.image,
                        price: items.price,
                        title: items.title,
                        id: items.id
                    }])}>+</button>
                </div>
            </div>
            {isOpened &&
                <Modal
                    isOpened={isOpened}
                    setIsOpened={setIsOpened}
                    modalContent={items.modalContent}
                />
            }
        </div>
    );
};

export default Card;