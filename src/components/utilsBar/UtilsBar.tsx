import t from '../../assets/t.svg'
import './utilsBar.sass'

const UtilsBar = () => {
    return (
        <div id='utils-bar-container'>
            <img
                src={t}
                alt=""
                width={25}
                height={25}
            />
        </div>
    )
}

export default UtilsBar