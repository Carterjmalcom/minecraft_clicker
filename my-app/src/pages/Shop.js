const Shop = ({openCase, result, newItem, claim}) => {
    return (
        <div>
            {/* <h2 id="">Shop</h2> */}
            <img onClick={openCase} id="chest" src="https://steamuserimages-a.akamaihd.net/ugc/940581010214243012/9DC562BE51FB09AC78F0180DC0BFA0928D92CD6C/?imw=268&imh=268&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true" alt="chest" />
            <p id="chest-text">Cost: $20.00</p>
        <div id="backgroundc" className={newItem == null ?"hidden": ""}>
            <div id="item-center" >
                <p id="item" className={result=="Common"? "commonClaimText": result=="Uncommon"? "uncommonClaimText":result=="Rare"? "rareClaimText":result=="Epic"? "epicClaimText":result=="Legendary"? "legendaryClaimText":""}>{result}</p>
            </div>
            <div id="itemimg"className={result=="Common"? "commonIMG": result=="Uncommon"? "uncommonIMG":result=="Rare"? "rareIMG":result=="Epic"? "epicIMG":result=="Legendary"? "legendaryIMG":""}>
            <img id="itemPNG" src={newItem}/>
            </div>
            <div onClick = {claim} id = "claimback" className={result=="Common"? "commonClaim": result=="Uncommon"? "uncommonClaim":result=="Rare"? "rareClaim":result=="Epic"? "epicClaim":result=="Legendary"? "legendaryClaim":""}>
                <p id="claim">Claim</p>
            </div>
      </div>
      </div>
    )
}
export default Shop
