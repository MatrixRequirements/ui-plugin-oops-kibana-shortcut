// eslint-disable-next-line no-unused-vars
import { Plugin } from "./Main";

export class Tool{
    
    /** callback to show or hide the menu for a selected item or folder
    * 
    * */ 
    showMenu(itemId: string) {
        return (itemId.indexOf("INSTANCE-") == 0);
    }

    /** callback when user executes the custom the menu entry added to items or folders 
     * 
     * */ 
    menuClicked(itemId:string) {
        /* Insert code here */

        let title = app.getCurrentTitle();
        //Splite title to get the instance name
        let instanceName = title.split(".")[0].split("https://")[1];
        let link = `https://kibanax.matrixreq.com/app/discover#/?_g=()&_a=(columns:!(level,host.name,details),filters:!(),grid:(columns:(details:(width:1152),host.name:(width:154),instance:(width:63),level:(width:66))),index:a07b405f-3e1a-49f7-b892-99a1ee932e16,interval:auto,query:(language:kuery,query:'instance%20:%20%22${instanceName}%22%20'),sort:!(!('@timestamp',desc)))`;
        window.open(link, '_blank');
    }
}
