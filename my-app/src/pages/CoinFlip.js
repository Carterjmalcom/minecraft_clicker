const CoinFlip = () => {
    return (
        <div>
            <img onclick="heads()" id="heads" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYS74yd_tULdBU6E4E12aZfZuF6SauzggE5PJjef5QIix-GcUZCNUvc3lYudZm9RE5daaPN6FHCEyYiXGY1hLU6Z6aVb=s1600" />
                <img onclick="tails()" id="tails" src="https://lh3.googleusercontent.com/drive-viewer/AEYmBYSdxDvdxy_Zh_7ayXoX0aADsSpejExnbiO84IBYg2ILVGhLJdGwxL_axHCuLY-368QVTkjL0ejtM4qJtwVIsX14c4iswA=s1600" />
                    <p id="coinflip-w-title">Win</p>
                    <p id="coinflip-l-title">Loss</p>
                    <div id="coinFlip-action-l" onclick="headsClick()"><p id="page-select">Heads</p></div>
                    <div id="coinFlip-action-r" onclick="tailsClick()"><p id="page-select">Tails</p></div>
                    <div id="coinFlip-action-type-label">How Much Do You Want To Bet?</div>
                    <div id="coinFlip-action-type" contenteditable="true"></div>
                    <div id="coinFlip-action-claiml" onclick="claimClick()"><p id="page-select">Accept Loss</p></div>
                    <div id="coinFlip-action-claimw" onclick="claimClick()"><p id="page-select">Accept Win</p></div>
        </div>
    )
}
export default CoinFlip
