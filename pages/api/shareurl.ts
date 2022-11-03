import { updateUrl, getUrl } from "../../services/url.service";
export default async function handler(req: any, res: any) {
    const {method , body} = req;
    if(method === "POST"){
        let obj: any = JSON.parse(body);
        if(obj.url){
            updateUrl(obj.url as string)
        }
    }
    res.status(200).json({url: getUrl()})
}
