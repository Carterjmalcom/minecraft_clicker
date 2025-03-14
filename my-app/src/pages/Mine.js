import dirtBlock from '../images/dirtBlock.png'

const Mine = ({blockPress, health, setHealth}) => {
    return (
        <div className="" id="">
            <div id="health-bar">
                <p id="block-health-text">Block Health: {health}/10</p>
            </div>
            <img onClick={blockPress} id="block-click" width="300px" src={dirtBlock} alt="block" />
        </div>
    )
}
export default Mine
