import { Link, useNavigate} from "react-router-dom";

export function Nav(props){
    let nav = useNavigate()

    function navigateBack() {
        nav(-1)
    }

    function navigateForward() {
        nav(1)
    }

    return(
        <div>
            <button onClick={navigateBack}>
                Back
            </button>

            <Link to ="/">
                <button>
                    Home
                </button>
            </Link>

            <button onClick={navigateForward}>
                Forward
            </button>
        </div>
    )
}