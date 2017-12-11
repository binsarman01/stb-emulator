import { Injectable } from '@angular/core';
import { IMessage, ICall, ICallArgs } from './api-emulator.service';

@Injectable()
export class ApiEmulatorMethodsService {

  sendMessage: Function;

  getContentMetadata(messsage: ICall){
    this.sendMessage({
      ticket: messsage.ticket,
      status: true,
      data: [{"contentType":"epg","contentId":3345,"title":"Demo Epg 0","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":0,"startTime":"","endTime":"","channelId":1},{"contentType":"epg","contentId":332,"title":"Demo Epg","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":0,"startTime":"","endTime":"","channelId":1},{"contentType":"vod","contentId":12,"title":"Demo VOD","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":12,"sourceUrl":"www.demo.com/0"},{"contentType":"vod","contentId":14,"title":"Demo VOD","plot":"","thumbnail":"www.demo.com/demo.jpeg","mediaId":14,"sourceUrl":"www.demo.com/0"}]
    })
  }

  RexConfigWrapper(messsage: ICall){
    let url = messsage.args[ICallArgs.Url];

    switch (true) {
      case url == '/users/me/status':
          this.currentUserStatus(messsage);
        break;
    
      case url == '/users/me/friends':
          this.currentUserFriends(messsage);
        break;

      default:
        break;
    }
  }

  currentUserStatus(messsage: ICall){
    this.sendMessage({
      ticket: messsage.ticket,
      status: true,
      data: [{
        "global_status": "login",
        "local_status": "away",
        "content_type": "linear",
        "content_id": "CH_MUSIC",
        "content_data": "{ \"start_time\": \"2016-02-13T11:22:33Z\" }"
      }]
    });
  }

  currentUserFriends(messsage: ICall){
    this.sendMessage({
      ticket: messsage.ticket,
      status: true,
      data: [  
        {  
           "view_state":0,
           "fb_id":"594922757",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c9.5.64.64/p…b3c2213812&oe=55A018A8&__gda__=1436156320_db8fcb0bae8629470dfd40049974128c",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c51.28.345.3…c2039778b0&oe=55A9FF23&__gda__=1437462512_b8fc644a9229d612e78ac36efbdc81d8",
           "first_name":"Lior",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/c40.22.276.2…7019f6d07d&oe=55E5BFFB&__gda__=1441135968_1ffb8cf67be39d031f3fc840a5eb1877",
           "username":"594922757",
           "global_state":0,
           "_id":2,
           "name":"Lior Yair",
           "last_name":"Yair",
           "user_id":1177,
           "view_state_idx":0
        },
        {  
           "view_state":2,
           "epg_id":3345,
           "fb_id":"1041648066",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c5.5.64.64/p…14395953ca&oe=55ABF500&__gda__=1436398058_b8bf6f2c05225fe558da8615066281f3",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c33.33.414.4…206239af00&oe=55B58B0F&__gda__=1437284773_33ca92c40f08dd890dae18ad741013b7",
           "first_name":"Irena",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-frc3/v/t1.0-1/c22.22.276.2…757c2cc6d1&oe=55A96C38&__gda__=1437752210_d8ab51456d8ec48d32bffbffe3f829d9",
           "username":"1041648066",
           "global_state":0,
           "_id":3,
           "name":"Irena Pilipienko",
           "last_name":"Pilipienko",
           "user_id":1780,
           "view_state_idx":0
        },
        {  
           "view_state":2,
           "epg_id":332,
           "fb_id":"598116186",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c5.5.64.64/p…01e92097cb&oe=55BA23F3&__gda__=1438232780_1db7bf0feca327f4c92b1b86c0604286",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c33.33.414.4…6b2427a5d6&oe=55B25E4F&__gda__=1436527013_19ef50931b9c661e8630dcc9dc6b537c",
           "first_name":"Zvi",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/c22.22.276.2…152e0869a1&oe=55A8B06F&__gda__=1437213061_fd9b5fe05157d070e581cf442aea9e83",
           "username":"598116186",
           "global_state":0,
           "_id":4,
           "name":"Zvi Kleiner",
           "last_name":"Kleiner",
           "user_id":1868,
           "view_state_idx":0
        },
        {  
           "view_state":3,
           "fb_id":"682129618",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c11.5.64.64/…3c0308aa83&oe=55B51EA6&__gda__=1437445696_add71edae5076759bd1aac52382a5e23",
           "interaction_freq":6,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c54.24.305.3…872ef1a840&oe=55E51A99&__gda__=1441098966_69d6d97eb65f13cc2bc893ddf43f77b4",
           "first_name":"Moshe",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c49.22.276.2…b8cc00d328&oe=55A740CC&__gda__=1437764126_d2b10a2f1aaf2f65c60382189c78b661",
           "username":"682129618",
           "global_state":0,
           "_id":5,
           "name":"Moshe Zuchnir",
           "last_name":"Zuchnir",
           "user_id":1928,
           "view_state_idx":12
        },
        {  
           "view_state":3,
           "fb_id":"667018296",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/p64x64/54894…f785429500&oe=55AE8388&__gda__=1436643964_bd5595e1725cdde9dac58eb13b2e5e74",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c0.0.480.480…f0b4f20743&oe=55A7D390&__gda__=1437284546_eb99571f24cca44cecb96b1a415a6d3d",
           "first_name":"Ronit",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-ash2/v/t1.0-1/c0.0.320.320…f53b5d5a06&oe=55AFB240&__gda__=1437646354_4f5950c3bd717f6f58297a09d0c14fbd",
           "username":"667018296",
           "global_state":0,
           "_id":6,
           "name":"Ronit Klein",
           "last_name":"Klein",
           "user_id":2367,
           "view_state_idx":14
        },
        {  
           "view_state":0,
           "fb_id":"100008521477097",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p64x64/14413…f09ff83303&oe=55BD887C&__gda__=1436248523_3ffc1e2a4d99a05a2e691deb6bd83df3",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p480x480/144…304ea6b452&oe=5570FAA7&__gda__=1437123355_f7a83658b783ba4e7a8bf6eb324880b4",
           "first_name":"Sasha",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xaf1/v/t1.0-1/p320x320/144…51a717b792&oe=55A889FD&__gda__=1438029889_26763fd70d4968013d78fcbdfb10c98e",
           "username":"100008521477097",
           "global_state":0,
           "_id":7,
           "name":"Sasha Dobnov",
           "last_name":"Dobnov",
           "user_id":2970,
           "view_state_idx":0
        },
        {  
           "view_state":0,
           "fb_id":"10155395448105553",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c0.0.64.64/p…873ed497aa&oe=55A069D7&__gda__=1436998555_eb05e466b917027f8194579040db0c76",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c0.0.262.262…7fed5d25f6&oe=55AC1C18&__gda__=1436168117_14abbcdc2f963081e8c88741f08c89ba",
           "first_name":"Noa",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xfa1/v/t1.0-1/c0.0.262.262…7fed5d25f6&oe=55AC1C18&__gda__=1436168117_14abbcdc2f963081e8c88741f08c89ba",
           "username":"10155395448105553",
           "global_state":0,
           "_id":75,
           "name":"Noa Ziv",
           "last_name":"Ziv",
           "user_id":3374,
           "view_state_idx":0
        },
        {  
           "view_state":1,
           "fb_id":"586455624",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c12.0.64.64/…d4da1d4265&oe=559AD746&__gda__=1438019626_13ca8dc9caed60449f4ec92f1fcb56d0",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c27.0.147.14…ba7849b8f6&oe=559BFEF5&__gda__=1438302906_ab719acf884d814cc55018db696693f7",
           "first_name":"Assaf",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c27.0.147.14…ba7849b8f6&oe=559BFEF5&__gda__=1438302906_ab719acf884d814cc55018db696693f7",
           "username":"586455624",
           "global_state":4,
           "_id":126,
           "name":"Assaf Oren",
           "last_name":"Oren",
           "user_id":6,
           "view_state_idx":0
        },
        {  
           "view_state":1,
           "fb_id":"539475094",
           "picture_small":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c5.5.64.64/p…f917a71233&oe=55A83319&__gda__=1437130127_f9d869d6fb418fd379331d5f9ada6ddf",
           "interaction_freq":0,
           "picture":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c33.33.414.4…0433cfdfbc&oe=55B6E6C3&__gda__=1438052859_e6da4869727dcfe8eac5a1b64632fa3f",
           "first_name":"Gilad",
           "picture_medium":"https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/c22.22.276.2…cb86f4eeb4&oe=559AB485&__gda__=1437702649_0b8f5ba429057f7ee8b7edc47b207b93",
           "username":"539475094",
           "global_state":4,
           "_id":127,
           "name":"Gilad Ventura",
           "last_name":"Ventura",
           "user_id":3397,
           "view_state_idx":0
        }
     ]
    });
  }

}
