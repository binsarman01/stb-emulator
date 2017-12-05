import { Injectable } from '@angular/core';

@Injectable()
export class HelperService {

  static urlBuilder(url: string, replaceObj: Object) {
    if (!url) return null;
    for (var prop in replaceObj) {
      if (replaceObj.hasOwnProperty(prop))
        url = url.replace("{" + prop + "}", replaceObj[prop]);
    }
    return url;
  }

}
