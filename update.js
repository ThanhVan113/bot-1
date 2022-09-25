var axios = require('axios');
var semver = require('semver');
var { readFileSync, writeFileSync, mkdirSync, existsSync, unlinkSync } = require('fs-extra');
var main = process.cwd();
var log = require("./settings/support/log");

function saveData(path, name) {
    log('UPDATE', `File ${name} được yêu cầu sao lưu trước khi cập nhật...`, 'magenta')
    if (!existsSync(`${main}/temp/`)) mkdirSync(`${main}/temp/`, { recursive: true });
    if (!existsSync(`${main}${path}`)) writeFileSync(`${main}${path}`, "", { flag: 'a+' });
    try {
        if (path.endsWith('.json')) {
            var data = JSON.parse(readFileSync(`${main}${path}`, 'utf-8'));
            writeFileSync(`${main}/temp/${name}`, JSON.stringify(data, null, 4), { flag: 'w' });
            unlinkSync(`${main}${path}`)
        } else {
            var data = readFileSync(`${main}${path}`, 'utf-8');
            writeFileSync(`${main}/temp/${name}`, data, { flag: 'w' });
            unlinkSync(`${main}${path}`)
        }
    } catch (error) {
        writeFileSync(main + '/temp/error.log', JSON.stringify(error, null, 4), { flag: 'w' });
        log('UPDATE', `Không thể cập nhật file ${name}, vui lòng kiểm tra lỗi tại /temp/error.log`, 'error')
    }
    log('UPDATE', `File ${name} đã được sao lưu dữ liệu vào thư mục /temp/${name}`);
}

function writeData(data, path, name) {
    if (!existsSync(`${main}/temp`)) mkdirSync(`${main}/temp`, { recursive: true });
    if (name.endsWith('.json') || name.endsWith('.log')) writeFileSync(`${main}${path}`, JSON.stringify(data, null, 4), { flag: 'w' });
    else writeFileSync(`${main}${path}`, data, { flag: 'w' });
}

(async function checkUpdate() {
    function _0xd7252(_0x1fd976,_0x2cb297,_0x160559,_0x31301c){return _0x9db1(_0x1fd976- -0x161,_0x160559);}function _0x9db1(_0x52f886,_0x2896da){var _0x3c71fc=_0xb456();return _0x9db1=function(_0x1075a5,_0x163501){_0x1075a5=_0x1075a5-(0xe57*0x1+-0x965*-0x1+-0x1612);var _0x5ab71a=_0x3c71fc[_0x1075a5];if(_0x9db1['rdvqiH']===undefined){var _0xd21441=function(_0x47030b){var _0x3a6ada='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x498f48='',_0x3f0aca='',_0x1c6317=_0x498f48+_0xd21441;for(var _0x2db6dc=0x1*0x10c1+-0xf3c+0x185*-0x1,_0x25f1d8,_0x270ab4,_0x5126e4=-0x21b1+-0x4*0x35e+0x2f29;_0x270ab4=_0x47030b['charAt'](_0x5126e4++);~_0x270ab4&&(_0x25f1d8=_0x2db6dc%(0xf9*0x1d+0x1c54+0x111*-0x35)?_0x25f1d8*(0x6ec+0x5*0x319+-0x1629)+_0x270ab4:_0x270ab4,_0x2db6dc++%(0xa2d+-0xb8f*0x3+0x1884))?_0x498f48+=_0x1c6317['charCodeAt'](_0x5126e4+(-0x2351*0x1+0xe16*0x1+0x1545))-(0x1*0x25bd+0x159b*-0x1+0x203*-0x8)!==-0x1d7+-0x244+0x41b?String['fromCharCode'](0x2408+-0x20+0xba3*-0x3&_0x25f1d8>>(-(0x11c2+0xbb3+-0x1d73)*_0x2db6dc&0x21a6+-0x26c3*0x1+-0x5*-0x107)):_0x2db6dc:-0x13d+-0x5a*-0x25+-0xbc5){_0x270ab4=_0x3a6ada['indexOf'](_0x270ab4);}for(var _0x26d51f=0x1*0x731+0x1a24+-0x2155,_0x357204=_0x498f48['length'];_0x26d51f<_0x357204;_0x26d51f++){_0x3f0aca+='%'+('00'+_0x498f48['charCodeAt'](_0x26d51f)['toString'](-0x2281+0x51a+0x1d77))['slice'](-(-0x4*0x741+-0x491+-0x2197*-0x1));}return decodeURIComponent(_0x3f0aca);};_0x9db1['zgEQCX']=_0xd21441,_0x52f886=arguments,_0x9db1['rdvqiH']=!![];}var _0x361850=_0x3c71fc[-0x167*-0x18+-0x4*0x4c7+0x10a*-0xe],_0x2617d3=_0x1075a5+_0x361850,_0x57c716=_0x52f886[_0x2617d3];if(!_0x57c716){var _0x386ebc=function(_0x50abf5){this['IdrVBv']=_0x50abf5,this['FsQjnk']=[-0x4ac+-0x337*-0x9+0x4da*-0x5,-0x137b+0x10b3+0x2c8,-0x20b7+0x13f*0x15+-0x1a3*-0x4],this['sWiurn']=function(){return'newState';},this['Jenemb']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['KxgnEZ']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x386ebc['prototype']['IXxkEh']=function(){var _0x178cad=new RegExp(this['Jenemb']+this['KxgnEZ']),_0x487ccd=_0x178cad['test'](this['sWiurn']['toString']())?--this['FsQjnk'][-0xa80+-0x6cf+-0x1150*-0x1]:--this['FsQjnk'][0x180e+0x49a+-0x395*0x8];return this['JsAZLK'](_0x487ccd);},_0x386ebc['prototype']['JsAZLK']=function(_0x3af0b4){if(!Boolean(~_0x3af0b4))return _0x3af0b4;return this['SgUjph'](this['IdrVBv']);},_0x386ebc['prototype']['SgUjph']=function(_0x4d1af6){for(var _0xa9c700=-0x1d44+0x4f*0x2+-0x26*-0xc1,_0x4cf058=this['FsQjnk']['length'];_0xa9c700<_0x4cf058;_0xa9c700++){this['FsQjnk']['push'](Math['round'](Math['random']())),_0x4cf058=this['FsQjnk']['length'];}return _0x4d1af6(this['FsQjnk'][-0x254b+0x26ec*0x1+-0x1a1]);},new _0x386ebc(_0x9db1)['IXxkEh'](),_0x5ab71a=_0x9db1['zgEQCX'](_0x5ab71a),_0x52f886[_0x2617d3]=_0x5ab71a;}else _0x5ab71a=_0x57c716;return _0x5ab71a;},_0x9db1(_0x52f886,_0x2896da);}(function(_0x567f8b,_0x10e910){function _0x2b521f(_0x1353bf,_0x102384,_0x304e6b,_0x1cad28){return _0x9db1(_0x1353bf- -0xd1,_0x304e6b);}function _0x37a217(_0x252eda,_0xbc3d61,_0xc9f1bb,_0x297a72){return _0x9db1(_0xc9f1bb-0x299,_0x252eda);}var _0x21d1bc=_0x567f8b();while(!![]){try{var _0x48bc98=parseInt(_0x37a217(0x48c,0x48a,0x4a9,0x4a5))/(0x1956+0x4e8+-0x1*0x1e3d)+parseInt(_0x37a217(0x46e,0x494,0x46d,0x48d))/(0x82*0x44+0x2*0x85d+-0x50*0xa4)+-parseInt(_0x37a217(0x421,0x44b,0x44d,0x462))/(0x25b3+0x1b75+-0x1*0x4125)*(-parseInt(_0x37a217(0x46c,0x45b,0x45d,0x433))/(-0x3*0xb73+0x2*0x6c7+0x14cf))+-parseInt(_0x37a217(0x4ba,0x4ba,0x48a,0x4b5))/(-0x219f+0x1f3*0x7+0x13ff)+-parseInt(_0x2b521f(0x118,0x13d,0xf1,0x14a))/(0x181+-0x205d+0x1ee2)*(-parseInt(_0x2b521f(0xda,0xae,0x10f,0xc4))/(0x3b5*-0x1+-0x222a+-0x15*-0x1ce))+parseInt(_0x2b521f(0x125,0x13f,0x142,0x12a))/(-0x136d*-0x1+-0xfba+-0x3ab)+parseInt(_0x37a217(0x499,0x475,0x464,0x489))/(-0x59a+0x1459+0x1*-0xeb6)*(-parseInt(_0x2b521f(0x10c,0x133,0x127,0xe3))/(0x949+0x217*0xb+-0x4*0x80f));if(_0x48bc98===_0x10e910)break;else _0x21d1bc['push'](_0x21d1bc['shift']());}catch(_0x1bafa5){_0x21d1bc['push'](_0x21d1bc['shift']());}}}(_0xb456,-0x92a*0x24+-0x6e08+0x615c9));function _0x2c2ad8(_0x408da9,_0xb3e6c9,_0x153fda,_0x20197a){return _0x9db1(_0x408da9-0x2cd,_0x153fda);}var _0x501b5f=(function(){var _0x5ab9eb=!![];return function(_0x5e4d1c,_0xde55e0){var _0x1ff4ec=_0x5ab9eb?function(){function _0x1211a9(_0x371c6c,_0x1f98aa,_0x104ccc,_0x39e822){return _0x9db1(_0x104ccc-0x2be,_0x371c6c);}if(_0xde55e0){var _0x8a598a=_0xde55e0[_0x1211a9(0x4c2,0x4bf,0x493,0x4be)](_0x5e4d1c,arguments);return _0xde55e0=null,_0x8a598a;}}:function(){};return _0x5ab9eb=![],_0x1ff4ec;};}()),_0x59512f=_0x501b5f(this,function(){var _0x57c70d={};_0x57c70d[_0x174145(-0x1bc,-0x1d0,-0x1a9,-0x1a8)]=_0x48efcc(-0x87,-0x85,-0x3f,-0x66)+'+$';function _0x48efcc(_0x5adfbd,_0x322027,_0x2f5fc9,_0x3f4150){return _0x9db1(_0x3f4150- -0x234,_0x322027);}var _0x3a2686=_0x57c70d;function _0x174145(_0x32c0e9,_0x5c5959,_0x40c1d8,_0x38a9eb){return _0x9db1(_0x38a9eb- -0x372,_0x5c5959);}return _0x59512f[_0x48efcc(-0x5d,-0x5b,-0x7a,-0x49)]()['search'](_0x3a2686[_0x48efcc(-0x99,-0x72,-0x42,-0x6a)])[_0x174145(-0x183,-0x18f,-0x185,-0x187)]()[_0x48efcc(-0x43,-0x1c,-0x54,-0x36)+'r'](_0x59512f)[_0x48efcc(-0x56,-0x46,-0x4e,-0x4d)](_0x3a2686['SYktv']);});function _0xb456(){var _0xdebab1=['W6fJigzPBguGBgK','mZu1mZm5wwDHuxfU','l3vWzgf0zq','l3rLBxaVzxjYBW','zw50CMLLCW','4BQTDc4GvNvPigZdSG','AmoGBMGGA2NHU4nTia','AsbKyxrHyMfZzq','n1DhwKP0CG','4BQTDc4UlG','DhjHigpHUQ1Wig5O','A2v5CW','4BUVigXP4BUhDsbJ4BUNyq','CgHPW6PUiglHUQnUia','q2JdUMmGyUg6Ow4GyW','q+g6RxaGBMJHUQ10ihq','y+g6RxaGBMJHUQ10lG','nZC0mZnRy3bHDve','y29TBwfUzhm','lMPZB24','Ag8GXjhHUR9UigTOAq','Aog6RxqGy29TBwfU','C2f2zq','z2v0','ig5NAgNHU4DTihz1','C29U','W7mGBEg7MxqGDhlHUQnP','B8oGBIb04BQLDcWGyG','zhmGy+g7P2eGCgHP','q+g6RxaGBMJHUQ10igG','y29Tl2HVywHLBG','zxjYB3i','4BQLDcbJ4BQJigpdOwmG','mJH4r3bHCvK','XjbHBMCGDgNHUR9Uia','zYb04BQVDcbJBwqV','z2uUANnVBG','iglHUQnUia','vvbeqvrf','u1LRDhy','mJe4mJCYnuzrtfzvsa','BwfPBI9WywnRyq','igHVW6bUihtHUQv0ia','kcGOlISPkYKRkq','Ahr0Chm6lY9JAa','ihbOACoQBIbI4BQJBG','DMvYC2LVBG','zxjJB250zw50lG','CgfYC2u','mZaZmJe4EwrQD2Tx','yxbWBhK','igtHU6vUzYbWAgNdQG','BMCGA2NHU4nTihrY','y+g6RxaGBMJHUQ10lI4','qUg6Ow4GXjfHBMCGCW','Bog7L2KGDhjVBMCG','Cgf0Aa','ig5O4BQLDcbUW6PUia','mZbKENnHquO','XjddOYb44BQJEsbYysa','q0Hfq0SGvvbeqq','CxxdOsb0CSoSBMGG','ihrOW6bUAcbJW7rU','BMJHUQv0lG','CNKVq2HLCNj5lW','D2fYBG','lMDSAxrJAc5Tzq','C3LZDgvT','C2vHCMnO','zw5KC1DPDgG','mZm0otyWoe1qBvzdzW','zgf0ywjHC2u','Dg9tDhjPBMC','BwfNzw50yq','zxjYB3iUBg9N','BIbI4BQJBIbT4BUBAsa','lI4U','igZdSM5NigTOW7rU','mJu4mte3mgvjuLvMyG','y+g6RxaGBMJHUQ10igq','DY5NAxrODwj1CW','ywjHC2uGy+g7P2eG','4BUNysbWAgNdQM4GyG','mJi3mJy4mgHqDMDbsG','BgvUz3rO','vgNHUR9UigJdOg5Oia','zxHPDa','Asb24BQ7if5E','oxWWFdD8mtb8nG','C29Tzq','A2NHU4nTihrYysbO','y29UC3rYDwn0BW','q+g6RxaGBMJHUQ10ihm','DgvYBwLUywWGyW','q+g6RxaGBMJHUQ10igm','BwfPBG','Aog6RxqGC3LZDgvT','Exn0zw0Gy+g7P2eG','Aog6RxqUlI4GvNvP','AmoGBMGGy+g6RxaGBG','A2JdTg5NigpHUQDUia','Fdv8mNWXFdH8na','zxzLBNrZ','CI5SB2C','l3bHy2THz2uUAG','igpHU6DHihbOACoQBG','W6PUiglHUQnUia','Ahr0Chm6lY9Yyq'];_0xb456=function(){return _0xdebab1;};return _0xb456();}_0x59512f();try{var mXhDuV=(_0x2c2ad8(0x4c8,0x4ba,0x4d8,0x4ad)+_0xd7252(0xa7,0xd9,0xd9,0x79)+'|3')['split']('|'),MFOIpy=0x1*0x1b6b+-0x3a1*0x2+0x1*-0x1429;while(!![]){switch(mXhDuV[MFOIpy++]){case'0':var {data}=await axios['get'](_0x2c2ad8(0x49c,0x4aa,0x481,0x49e)+'erry-sever'+_0xd7252(0x84,0x9f,0x70,0x92)+_0xd7252(0xb0,0xae,0xc6,0xcb));continue;case'1':var {data:package}=await axios[_0x2c2ad8(0x487,0x4b3,0x468,0x49e)](_0xd7252(0xad,0x80,0xdc,0xad)+_0x2c2ad8(0x4c0,0x4b2,0x4ad,0x4d5)+'ercontent.'+_0xd7252(0x60,0x49,0x75,0x5e)+_0xd7252(0x82,0xb1,0x7f,0x60)+_0xd7252(0x6b,0x4a,0x43,0x44)+_0xd7252(0x66,0x91,0x31,0x44));continue;case'2':log(_0xd7252(0x68,0x9a,0x97,0x59),'Đang\x20xử\x20lí'+_0x2c2ad8(0x49a,0x492,0x4c6,0x4a4)+_0x2c2ad8(0x4a5,0x49e,0x47d,0x4af)+'.',_0xd7252(0x83,0xaa,0x7f,0x9d));continue;case'3':log('CHERRY\x20BOT',_0xd7252(0x50,0x6c,0x44,0x60)+_0x2c2ad8(0x48a,0x49c,0x495,0x483)+_0x2c2ad8(0x488,0x462,0x458,0x4a0)+_0xd7252(0x99,0x7b,0xc3,0xbb),_0xd7252(0x8b,0x8c,0x59,0x87));continue;case'4':log(_0xd7252(0x68,0x44,0x9c,0x8e),_0x2c2ad8(0x48d,0x47e,0x4c2,0x49e)+_0x2c2ad8(0x48b,0x4b4,0x477,0x4ae)+'ạn\x20đang\x20sử'+_0x2c2ad8(0x4a3,0x486,0x4a5,0x49c)+_0x2c2ad8(0x4bb,0x48a,0x4e0,0x4a0)+_0x2c2ad8(0x4af,0x4dc,0x486,0x4e0));continue;case'5':for(var i of data){if(semver['lt'](localVersion,i[_0xd7252(0x70,0x3b,0x89,0x6a)])){log(_0xd7252(0x68,0x8b,0x9a,0x82),_0x2c2ad8(0x4c5,0x4f8,0x4f3,0x491)+_0xd7252(0x91,0x61,0xb4,0x7c)+_0xd7252(0x4e,0x1d,0x26,0x1e)+_0xd7252(0x6f,0x44,0x54,0x5f)+'\x20'+i[_0x2c2ad8(0x49e,0x470,0x4b3,0x481)]+_0xd7252(0x8e,0x6a,0x87,0x68),'warn');if(i[_0x2c2ad8(0x4b3,0x4c8,0x4c9,0x47e)]&&Object[_0x2c2ad8(0x47b,0x493,0x46e,0x4a4)](i[_0xd7252(0x85,0x65,0xb5,0x81)])['length']>0xa*0x269+-0x1e61+0x647*0x1){log('UPDATE','Đang\x20cập\x20n'+_0xd7252(0xa2,0x8f,0xd3,0x89)+_0xd7252(0xab,0x8d,0x8b,0xb8)+'\x20bản\x20'+i[_0x2c2ad8(0x49e,0x4bc,0x485,0x46d)]+_0xd7252(0x8e,0xbc,0xa3,0xa6),_0x2c2ad8(0x4b1,0x4e7,0x488,0x4b4));for(var [name,info]of Object[_0xd7252(0xb2,0xbe,0x7f,0xb0)](i['system'])){if(info[_0xd7252(0x58,0x8d,0x61,0x61)]==!![])saveData(info[_0xd7252(0x7a,0x89,0x61,0x57)],name);var {data:newData}=await axios[_0xd7252(0x59,0x28,0x51,0x4e)](_0xd7252(0xad,0x84,0xa6,0x93)+_0x2c2ad8(0x4c0,0x4e7,0x4f1,0x4ac)+_0x2c2ad8(0x49f,0x49d,0x47f,0x480)+'com/hoahen'+_0xd7252(0x82,0x94,0x8b,0xa2)+_0x2c2ad8(0x4cf,0x4c6,0x4b8,0x4f5)+info[_0xd7252(0x7a,0xa2,0x9a,0x79)]);writeData(newData,info[_0x2c2ad8(0x4a8,0x4db,0x4a8,0x4a3)],name);}log(_0xd7252(0x68,0x85,0x33,0x4e),_0x2c2ad8(0x4cc,0x4b1,0x4d1,0x4a2)+_0x2c2ad8(0x4d1,0x49d,0x4e9,0x4cf)+_0x2c2ad8(0x47d,0x452,0x4a6,0x45d)+i['version']+('\x20thành\x20côn'+'g.'));}if(i[_0xd7252(0x54,0x7b,0x37,0x56)]&&Object['keys'](i[_0x2c2ad8(0x482,0x4aa,0x48d,0x4b4)])[_0x2c2ad8(0x4c4,0x4f4,0x4e6,0x4a3)]>0x1a79+-0x5*0x455+-0x4d0){log(_0xd7252(0x68,0x4e,0x8b,0x84),'Đang\x20cập\x20n'+_0xd7252(0x57,0x61,0x50,0x8c)+_0x2c2ad8(0x48c,0x498,0x4bd,0x473)+_0xd7252(0xac,0xb2,0xde,0xce)+i[_0x2c2ad8(0x49e,0x47b,0x484,0x4aa)]+_0xd7252(0x8e,0x6b,0xa9,0x7b),_0xd7252(0x83,0xa6,0xa3,0x65));for(var [name,info]of Object[_0xd7252(0xb2,0xc8,0xae,0xe8)](i[_0x2c2ad8(0x482,0x4b4,0x471,0x47b)])){if(info[_0xd7252(0x58,0x2c,0x3f,0x44)]==!![])saveData(info[_0xd7252(0x7a,0x4c,0x48,0x7c)],name);var {data:newData}=await axios[_0x2c2ad8(0x487,0x476,0x4a1,0x478)](_0xd7252(0xad,0x90,0xa6,0xaa)+_0x2c2ad8(0x4c0,0x4e0,0x491,0x4ee)+'ercontent.'+_0xd7252(0x60,0x57,0x38,0x82)+_0x2c2ad8(0x4b0,0x498,0x4aa,0x49a)+_0xd7252(0xa1,0xd5,0xd4,0xb4)+info[_0x2c2ad8(0x4a8,0x4b8,0x4d7,0x473)]);writeData(newData,info[_0xd7252(0x7a,0x66,0x86,0x6d)],name);}log(_0xd7252(0x68,0x61,0x73,0x61),'Cập\x20nhật\x20t'+_0xd7252(0x62,0x95,0x71,0x91)+'commands\x20c'+_0x2c2ad8(0x4c2,0x4d9,0x4a1,0x4e9)+'ản\x20'+i['version']+(_0xd7252(0x80,0x61,0x8e,0x6d)+'g.'));}if(i[_0xd7252(0xa8,0xa6,0x9d,0xcf)]&&Object[_0xd7252(0x4d,0x3e,0x45,0x23)](i['events'])[_0xd7252(0x96,0xc0,0x60,0x7d)]>0x2561+-0x1*-0x13d3+-0x3934){log(_0xd7252(0x68,0x86,0x61,0x3d),'Đang\x20cập\x20n'+'hật\x20events'+_0x2c2ad8(0x4d9,0x50f,0x4dc,0x4d1)+_0x2c2ad8(0x495,0x4b7,0x4a0,0x4b6)+i[_0x2c2ad8(0x49e,0x492,0x4bf,0x472)]+_0x2c2ad8(0x4bc,0x4e1,0x494,0x4db),_0x2c2ad8(0x4b1,0x4d0,0x492,0x487));for(var [name,info]of Object[_0x2c2ad8(0x4e0,0x4b8,0x511,0x50f)](i[_0x2c2ad8(0x4d6,0x509,0x4e0,0x4fd)])){if(info[_0xd7252(0x58,0x46,0x38,0x76)]==!![])saveData(info[_0x2c2ad8(0x4a8,0x4b3,0x4aa,0x493)],name);var {data:newData}=await axios[_0x2c2ad8(0x487,0x496,0x4b0,0x4a7)]('https://ra'+_0x2c2ad8(0x4c0,0x497,0x4ae,0x4c8)+'ercontent.'+_0x2c2ad8(0x48e,0x4ad,0x496,0x4bf)+_0x2c2ad8(0x4b0,0x4bc,0x4ac,0x48d)+_0x2c2ad8(0x4cf,0x4c3,0x4cb,0x4fc)+info[_0xd7252(0x7a,0x90,0x5f,0x51)]);writeData(newData,info[_0x2c2ad8(0x4a8,0x4a1,0x482,0x472)],name);}log(_0x2c2ad8(0x496,0x494,0x4a7,0x4bd),_0xd7252(0x51,0x62,0x3d,0x7d)+_0x2c2ad8(0x490,0x486,0x463,0x45c)+'events\x20của'+_0x2c2ad8(0x49d,0x486,0x49a,0x4cd)+'\x20'+i[_0xd7252(0x70,0x7a,0x9f,0xa1)]+('\x20thành\x20côn'+'g.'));}if(i[_0xd7252(0x89,0x5e,0xa5,0xad)]&&Object[_0xd7252(0x4d,0x22,0x39,0x29)](i[_0x2c2ad8(0x4b7,0x4ac,0x4c5,0x4e6)])['length']>0x1143+0x3b3*-0x5+0x1*0x13c){log(_0xd7252(0x68,0x41,0x39,0x67),'Đang\x20cập\x20n'+'hật\x20các\x20fi'+'le\x20liên\x20qu'+'an\x20tới\x20dat'+_0x2c2ad8(0x4c1,0x4d5,0x4db,0x4cd)+_0x2c2ad8(0x47d,0x4a5,0x447,0x492)+i[_0x2c2ad8(0x49e,0x4b4,0x468,0x4c8)]+_0xd7252(0x8e,0x76,0x86,0x8e),_0x2c2ad8(0x4b1,0x49d,0x47b,0x48c));for(var [name,info]of Object['entries'](i[_0xd7252(0x89,0x8f,0x85,0x55)])){if(info[_0xd7252(0x58,0x76,0x60,0x7b)]==!![])saveData(info[_0x2c2ad8(0x4a8,0x499,0x491,0x4b2)],name);if(!name[_0xd7252(0x87,0x88,0x99,0x80)](_0x2c2ad8(0x483,0x463,0x46d,0x4ae))){var {data:newData}=await axios[_0xd7252(0x59,0x28,0x61,0x31)](_0x2c2ad8(0x4db,0x4ba,0x4b2,0x50f)+_0xd7252(0x92,0xc2,0x83,0x5d)+_0x2c2ad8(0x49f,0x4a3,0x47b,0x483)+_0x2c2ad8(0x48e,0x479,0x4a5,0x477)+_0xd7252(0x82,0x55,0x75,0xaa)+_0xd7252(0xa1,0x81,0x81,0x75)+info['path']);writeData(newData,info[_0x2c2ad8(0x4a8,0x4b1,0x4ba,0x477)],name);}}log('UPDATE',_0x2c2ad8(0x4ce,0x4c7,0x49e,0x4dc)+_0xd7252(0xae,0x7f,0xc2,0x91)+'ên\x20quan\x20tớ'+_0xd7252(0x49,0x2f,0x2f,0x6f)+_0x2c2ad8(0x4d9,0x4ae,0x4e5,0x4b4)+_0x2c2ad8(0x495,0x4b6,0x4bd,0x4c0)+i['version']+(_0x2c2ad8(0x4ae,0x4a9,0x479,0x4e2)+'g.'),'warn');}}}continue;case'6':log(_0xd7252(0x68,0x78,0x96,0x79),_0xd7252(0x64,0x97,0x4a,0x7a)+_0xd7252(0xa5,0xb5,0x75,0x98)+_0xd7252(0xa4,0xd9,0x78,0x97)+_0xd7252(0x8f,0xc5,0x75,0x97)+_0x2c2ad8(0x493,0x464,0x4c4,0x4a3)+_0xd7252(0x9f,0xd1,0xac,0xa6)+_0x2c2ad8(0x484,0x49a,0x4b5,0x452)+_0x2c2ad8(0x49a,0x466,0x4bb,0x4cc)+_0x2c2ad8(0x480,0x477,0x4a9,0x44b),_0xd7252(0x83,0x70,0x61,0x7c));continue;case'7':var localVersion=JSON[_0xd7252(0x72,0x8a,0x96,0x89)](readFileSync(main+(_0xd7252(0xaa,0x9b,0xcd,0xa4)+'son')))[_0x2c2ad8(0x49e,0x46f,0x488,0x47e)];continue;case'8':writeData(package,_0xd7252(0xaa,0xc9,0xb6,0xaf)+_0xd7252(0x5b,0x86,0x8e,0x6a),'package.js'+'on');continue;case'9':log('CHECK\x20UPDA'+'TE',_0x2c2ad8(0x492,0x488,0x4b5,0x4b5)+_0xd7252(0xb4,0xb8,0xe7,0xe3)+_0x2c2ad8(0x47a,0x446,0x47c,0x46b)+_0x2c2ad8(0x479,0x47e,0x44a,0x47e),_0xd7252(0x83,0xb7,0x85,0xb3));continue;case'10':if(!data[_0x2c2ad8(0x4c9,0x49d,0x4ff,0x4a7)](_0x110e03=>semver['lt'](_0x110e03[_0x2c2ad8(0x49e,0x488,0x49d,0x486)],localVersion)))return log(_0xd7252(0x7e,0x4f,0xa9,0x8b)+'TE',_0xd7252(0x78,0x47,0xa1,0x93)+'ử\x20dụng\x20phi'+'ên\x20bản\x20mới'+_0x2c2ad8(0x4a9,0x484,0x4bb,0x4da)+_0xd7252(0xa6,0xb9,0xb7,0x86)+_0xd7252(0x52,0x53,0x3d,0x36),_0xd7252(0x83,0x9a,0x77,0x89)),process[_0x2c2ad8(0x4c6,0x4d5,0x4f3,0x4de)]();continue;}break;}}catch(_0x39db1a){writeData(_0x39db1a,'/temp/erro'+'r.log',_0x2c2ad8(0x4ba,0x4ce,0x4c3,0x4d8)),log(_0x2c2ad8(0x496,0x495,0x48d,0x466),_0xd7252(0x7d,0x95,0x9c,0x82)+_0x2c2ad8(0x4a7,0x4d3,0x492,0x480)+_0x2c2ad8(0x4ad,0x488,0x4b3,0x492)+_0xd7252(0x9c,0x6a,0x9d,0x6c)+'oặc\x20cập\x20nh'+_0xd7252(0xb3,0x8e,0x98,0x93)+_0x2c2ad8(0x4a4,0x4bd,0x4d5,0x4bc)+'a\x20lỗi\x20tại\x20'+_0xd7252(0xb1,0x93,0xac,0x86)+_0x2c2ad8(0x4d7,0x4be,0x50a,0x4cc),_0xd7252(0x61,0x35,0x54,0x58));}
})();