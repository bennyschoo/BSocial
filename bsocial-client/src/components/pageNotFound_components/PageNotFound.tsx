import UILink from "../UILink.tsx"
import bsocial from "../../assets/bsocial.svg"

function PageNotFound() {

    return (
        <div className="d-flex flex-column  justify-content-center " style={{height: "100vh"}}>
            <UILink icon={bsocial} size={60} to="/home"/>
            <h3 className="text-light mt-1">OOPS! Page Not Found: <br/>Click the logo above to return to the homepage</h3>
        </div>
    );
}

export default PageNotFound;