import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export class DataService {

    constructor(private _http: Http) {
    }

    getData(receiver) {
        let self = this
        this._http.get("https://jsonplaceholder.typicode.com/posts/1").subscribe(
            (data) => receiver.setData(data.json()),
            (err) => console.log(err)
        )
    }
}