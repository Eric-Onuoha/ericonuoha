import NavigationPreview from "./navigationPreview/navigationPreview.component";
import {Container} from "bootstrap-4-react";

const Navigation = () => {
    const navItems = ["projects", "articles", "contact"];
    return(
        <NavigationPreview navItems={navItems} />
    )
}; export default Navigation;