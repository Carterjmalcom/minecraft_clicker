const Inventory = ({ itemsArr, setItemsArr, checkItemRarity, money, setMoney }) => {
    // Delete function to remove an item
    const handleDelete = (index) => {
        // Remove the item at the specified index
        const rarity = checkItemRarity(itemsArr[index])
        if (rarity == "c") {
            setMoney(money + 4)
        }
        else if (rarity == "u") {
            setMoney(money + 10)
        }
        else if (rarity == "r") {
            setMoney(money + 30)
        }
        else if (rarity == "e") {
            setMoney(money + 100)
        }
        else {
            setMoney(money + 250)
         }
        setItemsArr((prevItemsArr) => prevItemsArr.filter((_, i) => i !== index));
    };

    return (
        <div id="animal-images">
            <h2 id="inventory-title">Earned Items</h2>
            <div id="random-animals" className="animal-grid">
                {itemsArr && itemsArr.length > 0 ? (
                    itemsArr.map((item, index) => {
                        const rarityClass =
                            checkItemRarity(item) === "c" ? "commonIMG" :
                            checkItemRarity(item) === "u" ? "uncommonIMG" :
                            checkItemRarity(item) === "r" ? "rareIMG" :
                            checkItemRarity(item) === "e" ? "epicIMG" :
                            checkItemRarity(item) === "l" ? "legendaryIMG" : "";

                        return (
                            <div key={index} className={`item-container`}>
                                <img src={item} className={rarityClass} alt={`item-${index}`} />
                                <button onClick={() => handleDelete(index)} className={`delete-button ${rarityClass}`}>
                                    Sell
                                </button>
                            </div>
                        );
                    })
                ) : (
                    <p>No items to display.</p>
                )}
            </div>
        </div>
    );
};

export default Inventory;
