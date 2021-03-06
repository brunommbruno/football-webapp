import { Spinner } from "react-bootstrap";

const LoadingAnim = () => {
    return(
        <>
            <div className="loading-div">
                <Spinner 
                    variant="dark"
                    animation="border" size="md"
                    className={"spinner"}
                />
            </div>
        </>
    )
}

export default LoadingAnim;