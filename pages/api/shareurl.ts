import { url$ } from "../../services/url.service";
export default async function handler(req, res) {
    const {method , body} = req;
    if(method === "POST"){
        let obj = JSON.parse(body);
        if(obj.url){
            url$ = obj.url
        }
    }
    res.status(200).json({url: url$})
}
