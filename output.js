//Wed Aug 14 2024 01:41:09 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const David_0x3fd169 = new David_0xc6856e("速读/浩看免费小说");
const David_0x4026d6 = "V1.0.4";
const David_0x429e19 = "sdxsapp";
let David_0x5298e4 = David_0x3fd169.getjson(David_0x429e19, []);
const David_0xe3933 = David_0x3fd169.isNode() ? require("fs") : "";
const David_0x5aa617 = David_0x3fd169.isNode() ? require("zlib") : "";
const David_0x42948d = David_0x3fd169.isNode() ? require("querystring") : "";
const David_0x28608c = David_0x3fd169.isNode() ? require("ws") : "";
const David_0x4355d9 = "david_cookies.js";
if (David_0x3fd169.isNode() && !David_0xe3933.existsSync(David_0x4355d9)) {
  David_0x3fd169.log("🔔 外挂ck文件不存在，开始创建模版>>>");
  David_0xe3933.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", _0x2c0c49 => {});
}
const David_0x559ff9 = David_0x3fd169.isNode() ? require("http") : "";
const David_0x246cc4 = David_0x3fd169.isNode() ? require("./sendNotify") : "";
const David_0x291046 = David_0x3fd169.isNode() ? require("./david_cookies") : "";
let David_0x35a184 = David_0x3fd169.getdata("tguserid") || 1;
let David_0x43fa62 = David_0x3fd169.getdata("sdxsactivecode") || 0;
let David_0x505c01 = David_0x3fd169.getval("sdxsuserck") || 1;
let David_0x3296ab = David_0x3fd169.getval("apiHost") || "http://106.15.104.124:8080";
if (David_0x3fd169.getval("apiHosts")) {
  David_0x3296ab = David_0x3fd169.getval("apiHosts");
}
const David_0x5e2e05 = 0;
let David_0x785113 = David_0x3fd169.getval("tz") || "1";
var David_0x133bb0 = "";
var David_0x249452 = "";
let David_0x4ddad6 = "";
let David_0x510d5e = [];
let David_0x2573e7 = [];
let David_0x1dd0eb = [];
let David_0x1beb93 = [];
let David_0x208e9d = [];
let David_0x4efca8 = [];
let David_0xc5f014 = "";
let David_0xcb5938 = "";
let David_0x34c6c2 = "";
let David_0x249c1e = "";
let David_0x35eaa7 = "";
let David_0xc6a536 = "";
let David_0x5060b7 = "";
let David_0x10468b = "";
let David_0x10c038 = 1;
let David_0x5c0b79 = 1;
let David_0x1c5ee7 = 1;
let David_0xca16ad = 1;
let David_0x2a43bf = "";
let David_0x451ba0 = "";
let David_0x389530 = 3;
let David_0xb0eacf = "";
if (David_0x3fd169.isNode()) {
  if (process.env.SDXSAPP) {
    David_0x5298e4 = JSON.parse(process.env.SDXSAPP);
  } else {
    David_0x5298e4 = David_0x291046.SDXS;
  }
  David_0x35a184 = process.env.TGUSERID;
  David_0x43fa62 = process.env.SDXSACTIVECODE;
  if (process.env.APIHOST) {
    David_0x3296ab = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    David_0x3296ab = process.env.APIHOSTS;
  }
  David_0x133bb0 = new Date(new Date().getTime()).getHours();
  David_0x249452 = new Date(new Date().getTime()).getMinutes();
  David_0x3fd169.log("🔔 当前环境: Node, 当前时间：" + David_0x133bb0 + "点");
} else {
  David_0x133bb0 = new Date().getHours();
  David_0x249452 = new Date().getMinutes();
  David_0x3fd169.log("🔔 当前环境: 手机代理, 当前时间：" + David_0x133bb0 + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await David_0x1e690e();
  } else {
    if (!David_0x5298e4) {
      David_0x3fd169.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    David_0x3fd169.log("📢 开始检测服务器接口状态>>>");
    let _0x4fb66c = false;
    const _0x3cd0a9 = David_0x3296ab.split("&");
    const _0x49f2e5 = _0x3cd0a9.length;
    for (let _0x235ced = 0; _0x235ced < _0x49f2e5; _0x235ced++) {
      if (David_0x3fd169.isNode()) {
        _0x4fb66c = await David_0x2a5a0d("" + _0x3cd0a9[_0x235ced], 2500);
      } else {
        if (David_0x3fd169.isSurge() || David_0x3fd169.isLoon()) {
          _0x4fb66c = await David_0x3517c7("" + _0x3cd0a9[_0x235ced], 2500);
        } else {
          _0x4fb66c = await David_0x2cca83("" + _0x3cd0a9[_0x235ced], 2500);
        }
      }
      if (_0x4fb66c == true) {
        David_0x3296ab = _0x3cd0a9[_0x235ced];
        David_0x3fd169.log("📢 接口" + (_0x235ced + 1) + "[" + _0x3cd0a9[_0x235ced] + "]服务器接口正常! 🎉");
        break;
      }
      if (_0x235ced == _0x49f2e5 - 1 && _0x4fb66c == false) {
        David_0x3fd169.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        David_0x3fd169.msg(David_0x3fd169.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!David_0x43fa62 || !David_0x35a184 || David_0x35a184 == 1 || David_0x43fa62 == 0 || David_0x43fa62.length != 32) {
      David_0x3fd169.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await David_0x5cc460(David_0x429e19, David_0x35a184, David_0x43fa62);
    David_0x3fd169.log("📢 " + David_0xc6a536);
    David_0x3fd169.log("🔔 当前脚本版本号: " + David_0x4026d6 + "，最新版本号: " + David_0x249c1e);
    if (David_0xb0eacf != "") {
      let _0x55d48b = new Date(David_0xb0eacf).getTime();
      let _0x244d31 = new Date().getTime();
      if (_0x244d31 > _0x55d48b) {
        David_0x3fd169.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (David_0x4026d6 < David_0x249c1e) {
      David_0x3fd169.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      David_0xb0b0b0("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (David_0x34c6c2 != true) {
      David_0x3fd169.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (David_0x2a43bf != true) {
      David_0x3fd169.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (David_0xcb5938 != true) {
      David_0x3fd169.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (David_0x10468b == true) {
      David_0x3fd169.log("🔔 此脚本采用付费模式。🔒");
    } else {
      David_0x3fd169.log("🔔 此脚本采用免费模式。🔓");
    }
    if (David_0x5060b7 != true) {
      David_0x3fd169.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
      return;
    } else {
      David_0x3fd169.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
    }
    if (David_0x10c038 > 1) {
      David_0x3fd169.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + David_0x389530 * David_0x10c038 + "个账号。");
    }
    if (David_0x5c0b79 > 1) {
      David_0x3fd169.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + David_0x1c5ee7 + "次, 已经运行了" + David_0xca16ad + "次。");
    }
    if (David_0x35eaa7 != true) {
      David_0x3fd169.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (David_0x5298e4.length > David_0x389530 * David_0x10c038) {
      David_0x3fd169.log("⚠️ 当前用户一次最多运行" + David_0x389530 * David_0x10c038 + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (David_0x5298e4.length == 0) {
      David_0x3fd169.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (David_0xca16ad + David_0x5298e4.length > David_0x1c5ee7) {
      David_0x3fd169.log("📢 一共发现了" + David_0x5298e4.length + "个账号");
      David_0x3fd169.log("⚠️ 当前用户运行次数剩余" + (David_0x1c5ee7 - David_0xca16ad) + "次，还可以运行" + (David_0x1c5ee7 - David_0xca16ad) + "个账号，还需要" + (David_0x5298e4.length - (David_0x1c5ee7 - David_0xca16ad)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    David_0xb0eacf != "";
    David_0x3fd169.log("📢 一共发现了" + David_0x5298e4.length + "个账号");
    let _0x5cd3eb = [];
    for (let _0x389e78 = 0; _0x389e78 < David_0x5298e4.length; _0x389e78++) {
      _0x5cd3eb.push(David_0x497562(_0x389e78));
      David_0x510d5e[_0x389e78] = "";
      David_0x2573e7[_0x389e78] = "";
      David_0x208e9d[_0x389e78] = 0;
      await David_0x121a07(_0x389e78);
    }
    await Promise.allSettled(_0x5cd3eb).then(_0x355480 => {
      David_0x3fd169.log("日志整理功能如下：");
      David_0x3fd169.log("---------------日志整理开始--------------");
      for (let _0xeca0ba = 0; _0xeca0ba < David_0x5298e4.length; _0xeca0ba++) {
        David_0x3fd169.log(David_0x510d5e[_0xeca0ba]);
        David_0x4ddad6 += David_0x510d5e[_0xeca0ba];
      }
      David_0x3fd169.log("---------------日志整理结束--------------");
      David_0xb0b0b0(David_0x4ddad6);
    });
  }
})().catch(_0x423951 => David_0x3fd169.logErr(_0x423951)).finally(() => David_0x3fd169.done());
async function David_0x497562(_0x36c1ce) {
  return new Promise((_0x17bdd7, _0x285abe) => {
    David_0x3fd169.log("[账号" + (_0x36c1ce + 1 < 10 ? "0" + (_0x36c1ce + 1) : _0x36c1ce + 1) + "]: 开始执行 working......");
    David_0x5ac54c(_0x17bdd7, _0x36c1ce);
  });
}
async function David_0x121a07(_0x155c42) {
  if (David_0x3fd169.isNode()) {
    if (David_0x1dd0eb[_0x155c42] > 0) {
      David_0x3fd169.log("[账号" + (_0x155c42 + 1 < 10 ? "0" + (_0x155c42 + 1) : _0x155c42 + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    David_0x4efca8[_0x155c42] = new David_0x28608c(David_0x3296ab.replace("http", "ws") + "/ws");
    David_0x4efca8[_0x155c42].on("open", function _0x4f24a0() {
      David_0x3fd169.log("[账号" + (_0x155c42 + 1 < 10 ? "0" + (_0x155c42 + 1) : _0x155c42 + 1) + "]: 签名专属通道已连接，请求畅通无阻");
    });
    David_0x4efca8[_0x155c42].on("close", function _0x5f7b3c() {
      David_0x3fd169.log("[账号" + (_0x155c42 + 1 < 10 ? "0" + (_0x155c42 + 1) : _0x155c42 + 1) + "]: 签名专属通道已关闭，原因是任务已处理完成");
    });
    David_0x4efca8[_0x155c42].on("error", function _0x1bc9e2() {
      David_0x3fd169.log("[账号" + (_0x155c42 + 1 < 10 ? "0" + (_0x155c42 + 1) : _0x155c42 + 1) + "]: 签名通道已关闭，原因是出现错误");
      David_0x208e9d[_0x155c42] = 1;
      David_0x1dd0eb[_0x155c42]++;
      if (David_0x1dd0eb[_0x155c42] <= 3) {
        David_0x121a07(_0x155c42);
      }
    });
  }
}
async function David_0x5ac54c(_0x5074c1, _0x2c6f54) {
  await David_0x3fd169.wait(3000, 5000);
  await David_0xec0af7(_0x2c6f54);
  if (_0x2c6f54 < 18) {
    await David_0x52f114(_0x2c6f54, "read");
    await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
    await David_0x52f114(_0x2c6f54, "TTS");
    await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
    await David_0x52f114(_0x2c6f54, "read");
  }
  await David_0x5add99(_0x2c6f54);
  await David_0x15ca64(_0x2c6f54);
  if (David_0x3fd169.isNode()) {
    await David_0x4efca8[_0x2c6f54].close();
  }
  await David_0x2a1c07(David_0x429e19, David_0x35a184);
  _0x5074c1();
}
async function David_0x1e690e() {
  if ($request.url.match(/\/passport\/UnionLogin/)) {
    const _0x5654f2 = $request.body;
    let _0x3637cd = David_0x505c01 - 1;
    if (David_0x5298e4[_0x3637cd]) {
      David_0x5298e4[_0x3637cd].token_body = _0x5654f2;
    } else {
      const _0x4d1cdc = {
        token_body: _0x5654f2
      };
      David_0x5298e4[_0x3637cd] = _0x4d1cdc;
    }
    David_0x3fd169.setdata(JSON.stringify(David_0x5298e4, null, 2), "sdxsapp");
    David_0x3fd169.msg(David_0x3fd169.name, "快音账号" + (_0x3637cd + 1) + "Token获取成功！🎉");
  }
}
async function David_0xec0af7(_0x56056) {
  const _0x265c24 = David_0x277c55(David_0x5298e4[_0x56056].common_url);
  let _0x39f968 = _0x265c24.usr;
  let _0x528248 = Math.round(new Date().getTime()).toString();
  let _0xbdec1d = "timestamp=" + _0x528248 + "&usr=" + _0x39f968;
  await David_0x4d3231(_0x56056, _0xbdec1d, true);
  let _0x1add1b = David_0x1beb93[_0x56056];
  const _0x45fadd = "https://dj.palmestore.com/zyuc/api/user/accountInfo?pluginVersion=820.4&sign=" + _0x1add1b + "&" + _0xbdec1d + "&" + David_0x5298e4[_0x56056].common_url;
  let _0x349a91 = "";
  David_0x2573e7[_0x56056] = "&";
  let _0x46d6c5 = David_0x429bfb(_0x45fadd, _0x349a91, _0x56056);
  await David_0x52a520("get", _0x46d6c5, David_0x1c6d0d());
  let _0x1ddc38 = David_0xc5f014;
  if (_0x1ddc38.code == 0) {
    David_0x3fd169.log("[账号" + (_0x56056 + 1 < 10 ? "0" + (_0x56056 + 1) : _0x56056 + 1) + "]: 用户名=> " + _0x1ddc38.body.userInfo.userNick);
    David_0x510d5e[_0x56056] += "[账号" + (_0x56056 + 1 < 10 ? "0" + (_0x56056 + 1) : _0x56056 + 1) + "]: 用户名=> " + _0x1ddc38.body.userInfo.userNick + "\n";
  } else {
    David_0x3fd169.log("[账号" + (_0x56056 + 1 < 10 ? "0" + (_0x56056 + 1) : _0x56056 + 1) + "]: 用户名信息=> " + _0x1ddc38.msg);
    David_0x510d5e[_0x56056] += "[账号" + (_0x56056 + 1 < 10 ? "0" + (_0x56056 + 1) : _0x56056 + 1) + "]: 用户名信息=> " + _0x1ddc38.msg + "\n";
  }
}
async function David_0x5add99(_0x385524) {
  const _0x17efc0 = "https://welfare-dj.palmestore.com/welfare/web/task/user?" + David_0x5298e4[_0x385524].common_url;
  let _0x408381 = "";
  await David_0x4d3231(_0x385524, _0x17efc0, false);
  let _0x34110e = David_0x429bfb(_0x17efc0, _0x408381, _0x385524);
  await David_0x52a520("get", _0x34110e, David_0x1c6d0d());
  let _0x10d050 = David_0xc5f014;
  if (_0x10d050.code == 0) {
    David_0x3fd169.log("[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 余额=> " + _0x10d050.body.coin.cash_amount + "元");
    David_0x3fd169.log("[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 金币=> " + _0x10d050.body.coin.coin_amount);
    David_0x510d5e[_0x385524] += "[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 余额=> " + _0x10d050.body.coin.cash_amount + "元\n";
    David_0x510d5e[_0x385524] += "[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 金币=> " + _0x10d050.body.coin.coin_amount + "\n";
    if (_0x10d050.body.coin.is_black == true) {
      David_0x3fd169.log("[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 该账号异常>>>");
      David_0x510d5e[_0x385524] += "[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 该账号异常✅\n";
    } else {
      David_0x3fd169.log("[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 该账号状态正常>>>");
      David_0x510d5e[_0x385524] += "[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 该账号状态正常✅\n";
    }
    if (David_0x133bb0 >= 18) {
      if (!David_0x5298e4[_0x385524].amount && _0x10d050.body.coin.cash_amount >= 1 || David_0x5298e4[_0x385524].amount && _0x10d050.body.coin.cash_amount >= David_0x5298e4[_0x385524].amount) {
        await David_0x10530a(_0x385524, _0x10d050.body.coin.cash_amount);
      }
    }
  } else {
    David_0x3fd169.log("[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 用户名信息=> " + _0x10d050.msg);
    David_0x510d5e[_0x385524] += "[账号" + (_0x385524 + 1 < 10 ? "0" + (_0x385524 + 1) : _0x385524 + 1) + "]: 用户名信息=> " + _0x10d050.msg + "\n";
  }
}
async function David_0x15ca64(_0x48c022) {
  const _0x44ff3f = "https://welfare-dj.palmestore.com/welfare/web/task/list?" + David_0x5298e4[_0x48c022].common_url;
  let _0x4f91cd = "";
  await David_0x4d3231(_0x48c022, _0x44ff3f, false);
  let _0x5a049b = David_0x429bfb(_0x44ff3f, _0x4f91cd, _0x48c022);
  await David_0x52a520("get", _0x5a049b, David_0x1c6d0d());
  let _0x31eba6 = David_0xc5f014;
  if (_0x31eba6.code == 0) {
    let _0x30f07e = "";
    let _0x4d6d51 = "";
    let _0x51482b = _0x31eba6.body.task_info.new_login;
    let _0x198355 = David_0x3fd169.time("yyyyMMdd");
    if (_0x51482b) {
      _0x30f07e = _0x51482b.name;
      _0x4d6d51 = _0x51482b.task_type;
      let _0x52db9c = _0x51482b.reward_list;
      for (let _0x49fe6f = 0; _0x49fe6f < _0x52db9c.length; _0x49fe6f++) {
        let _0x53ced8 = _0x52db9c[_0x49fe6f];
        if (_0x53ced8.date == _0x198355) {
          if (_0x53ced8.reward_status == 1) {
            let _0x676a73 = _0x53ced8.id;
            let _0x15eeab = _0x53ced8.reward_type;
            let _0x412cc8 = _0x53ced8.reward_amount;
            if (_0x15eeab == 2) {
              _0x30f07e = _0x30f07e + ("_奖励金币" + _0x412cc8);
            } else {
              if (_0x15eeab == 1) {
                _0x30f07e = _0x30f07e + ("_奖励现金" + _0x412cc8 + "元");
              } else {
                _0x30f07e = _0x30f07e + "_}";
              }
            }
            await David_0x4f0a23(_0x48c022, _0x676a73, _0x4d6d51, _0x30f07e);
            break;
          } else {
            break;
          }
        }
      }
    }
    let _0x511cce = _0x31eba6.body.video_list.global_pop;
    let _0x4dc015 = "";
    let _0x117730 = "";
    let _0x604b51 = 0;
    if (_0x511cce) {
      _0x4dc015 = _0x511cce.info.id;
      _0x117730 = _0x511cce.position;
      _0x604b51 = _0x511cce.use_status.remaining_count;
    }
    let _0xea27b4 = _0x31eba6.body.video_list.sign_pop;
    let _0x5962f1 = "";
    let _0x1105ef = "";
    let _0x524d9f = 0;
    if (_0xea27b4) {
      _0x5962f1 = _0xea27b4.info.id;
      _0x1105ef = _0xea27b4.position;
      _0x524d9f = _0xea27b4.use_status.remaining_count;
    }
    let _0x17f0c3 = _0x31eba6.body.task_info.new_greeting_gift;
    if (_0x17f0c3 && _0x17f0c3.done_status == 2 && _0x17f0c3.reward_status == 1) {
      await David_0x4f0a23(_0x48c022, _0x17f0c3.id, _0x17f0c3.task_type, _0x17f0c3.main_title);
      await David_0x3fd169.wait(David_0x466ce0(2000, 3000));
    }
    let _0x2ad015 = _0x31eba6.body.task_info.new_preference_choice;
    if (_0x2ad015 && _0x2ad015.done_status == 2 && _0x2ad015.reward_status == 1) {
      await David_0x4f0a23(_0x48c022, _0x2ad015.id, _0x2ad015.task_type, _0x2ad015.main_title);
      await David_0x3fd169.wait(David_0x466ce0(2000, 3000));
    }
    let _0x14338a = _0x31eba6.body.task_info.push;
    if (_0x14338a && _0x14338a.done_status == 2 && _0x14338a.reward_status == 1) {
      await David_0x4f0a23(_0x48c022, _0x14338a.id, _0x14338a.task_type, _0x14338a.main_title);
      await David_0x3fd169.wait(David_0x466ce0(2000, 3000));
    }
    let _0x4a1666 = _0x31eba6.body.task_info.times;
    _0x30f07e = _0x4a1666.main_title;
    let _0x304b65 = -1;
    if (David_0x133bb0 > 6 && David_0x133bb0 < 9) {
      _0x304b65 = 0;
    } else {
      if (David_0x133bb0 > 10 && David_0x133bb0 < 12) {
        _0x304b65 = 1;
      } else {
        if (David_0x133bb0 > 16 && David_0x133bb0 < 19) {
          _0x304b65 = 2;
        } else {
          if (David_0x133bb0 > 19 && David_0x133bb0 < 24) {
            _0x304b65 = 3;
          }
        }
      }
    }
    if (_0x304b65 > 0) {
      let _0x383764 = _0x4a1666.item[_0x304b65];
      let _0x556b97 = _0x383764.sub_type;
      let _0x3ed6af = _0x383764.id;
      let _0x232053 = _0x383764.task_type;
      if (_0x383764.reward_status == 1) {
        await David_0x4f0a23(_0x48c022, _0x3ed6af, _0x232053, _0x30f07e, null, null, _0x556b97);
        await David_0x3fd169.wait(David_0x466ce0(2000, 3000));
      } else {
        David_0x3fd169.log("[账号" + (_0x48c022 + 1 < 10 ? "0" + (_0x48c022 + 1) : _0x48c022 + 1) + "]: " + _0x30f07e + "已完成");
        David_0x510d5e[_0x48c022] += "[账号" + (_0x48c022 + 1 < 10 ? "0" + (_0x48c022 + 1) : _0x48c022 + 1) + "]: " + _0x30f07e + "已完成\n";
      }
    }
    let _0x48df87 = _0x31eba6.body.task_info.sign;
    let _0x1715d9 = _0x48df87.curr_day;
    taskId = _0x48df87.id;
    _0x30f07e = _0x48df87.main_title;
    let _0x33d81c = _0x48df87.task_version;
    _0x4d6d51 = _0x48df87.task_type;
    let _0x128a8b = _0x48df87.detail_list[_0x1715d9 - 1];
    if (_0x128a8b.sign_status == 1) {
      let _0xe92ef3 = _0x128a8b.sub_id;
      _0x30f07e = _0x30f07e + ("_奖励" + _0x128a8b.reward_amount + "金币任务");
      await David_0x4f0a23(_0x48c022, taskId, _0x4d6d51, _0x30f07e, _0xe92ef3, _0x33d81c);
      await David_0x3fd169.wait(David_0x466ce0(2000, 3000));
      if (_0x524d9f > 0) {
        await David_0x1cbee4(_0x48c022, _0x5962f1, _0x1105ef, "签到看广告额外奖励");
        await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
      }
    } else {
      if (_0x524d9f > 0) {
        await David_0x1cbee4(_0x48c022, _0x5962f1, _0x1105ef, "签到看广告额外奖励");
        await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
      }
    }
    let _0xbc1562 = _0x31eba6.body.task_info.box;
    let _0x356fef = "";
    let _0x54aeab = "";
    let _0x2c42b9 = 0;
    if (_0xbc1562) {
      _0x356fef = _0xbc1562.reward_list;
      _0x54aeab = _0xbc1562.box_status_data;
      _0x2c42b9 = _0x54aeab.count;
    }
    if (_0xbc1562 && _0x2c42b9 < _0xbc1562.total_config) {
      taskId = _0xbc1562.id;
      _0x4d6d51 = _0xbc1562.task_type;
      _0x30f07e = _0xbc1562.main_title;
      let _0x19d017 = _0x356fef[_0x2c42b9];
      let _0x19c655 = _0x54aeab.last_time;
      let _0x5169b8 = Math.round(new Date().getTime());
      let _0x4e37db = David_0x554fc5(_0x19c655, _0x5169b8);
      if (_0x4e37db > _0xbc1562.interval_time) {
        let _0xd9c310 = _0x19d017.sub_id;
        let _0x49119f = _0x19d017.coin;
        _0x30f07e = _0x30f07e + ("_奖励金币" + _0x49119f);
        await David_0x4f0a23(_0x48c022, taskId, _0x4d6d51, _0x30f07e, _0xd9c310);
        await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
        if (_0x604b51 > 0) {
          await David_0x1cbee4(_0x48c022, _0x4dc015, _0x117730, "弹窗广告奖励");
        }
      }
    }
    let _0x3def98 = _0x31eba6.body.task_info.video;
    let _0x583d9f = _0x3def98.process.done_count;
    _0x4d6d51 = _0x3def98.task_type;
    _0x30f07e = _0x3def98.main_title;
    if (_0x583d9f < _0x3def98.process.total_count) {
      let _0x434715 = _0x3def98.id;
      let _0x595a41 = _0x3def98.position;
      let _0x281847 = _0x583d9f + 1;
      await David_0x4f0a23(_0x48c022, _0x434715, _0x4d6d51, _0x30f07e, _0x281847, null, null, _0x595a41);
      await David_0x3fd169.wait(David_0x466ce0(15000, 30000));
    }
    let _0x35054d = _0x31eba6.body.task_info.reading;
    _0x30f07e = _0x35054d.main_title;
    _0x4d6d51 = _0x35054d.task_type;
    taskId = _0x35054d.id;
    _0x33d81c = _0x35054d.task_version;
    let _0xfb3bd0 = _0x35054d.reward_list;
    for (let _0xfa94f2 = 0; _0xfa94f2 < _0xfb3bd0.length; _0xfa94f2++) {
      let _0x4f2d64 = _0xfb3bd0[_0xfa94f2];
      let _0x21bd7c = _0x4f2d64.sub_id;
      if (_0x4f2d64.done_status == 2 && _0x4f2d64.reward_status == 1) {
        _0x30f07e = _0x30f07e + ("_阅读时长_" + _0x4f2d64.read_time + "_奖励" + _0x4f2d64.reward_amount + "金币任务");
        await David_0x4f0a23(_0x48c022, taskId, _0x4d6d51, _0x30f07e, _0x21bd7c, _0x33d81c);
        await David_0x3fd169.wait(David_0x466ce0(3000, 5000));
        break;
      }
    }
    let _0x36946e = _0x31eba6.body.task_info.ting;
    _0x30f07e = _0x36946e.main_title;
    _0x4d6d51 = _0x36946e.task_type;
    taskId = _0x36946e.id;
    _0x33d81c = _0x36946e.task_version;
    let _0x5cbf6c = _0x36946e.reward_list;
    for (let _0xa8fd97 = 0; _0xa8fd97 < _0x5cbf6c.length; _0xa8fd97++) {
      let _0x80ac6b = _0x5cbf6c[_0xa8fd97];
      let _0x3ad4cc = _0x80ac6b.sub_id;
      if (_0x80ac6b.done_status == 2 && _0x80ac6b.reward_status == 1) {
        _0x30f07e = _0x30f07e + ("_听书时长_" + _0x80ac6b.read_time + "_奖励" + _0x80ac6b.reward_amount + "金币任务");
        await David_0x4f0a23(_0x48c022, taskId, _0x4d6d51, _0x30f07e, _0x3ad4cc, _0x33d81c);
        await David_0x3fd169.wait(David_0x466ce0(3000, 5000));
        break;
      }
    }
    let _0x127e1e = _0x31eba6.body.task_info.ad_wall;
    _0x30f07e = _0x127e1e.main_title;
    _0x4d6d51 = _0x127e1e.task_type;
    taskId = _0x127e1e.id;
  } else {
    David_0x3fd169.log("[账号" + (_0x48c022 + 1 < 10 ? "0" + (_0x48c022 + 1) : _0x48c022 + 1) + "]: 任务信息=> " + _0x31eba6.msg);
    David_0x510d5e[_0x48c022] += "[账号" + (_0x48c022 + 1 < 10 ? "0" + (_0x48c022 + 1) : _0x48c022 + 1) + "]: 任务信息=> " + _0x31eba6.msg + "\n";
  }
}
async function David_0x4f0a23(_0x512c31, _0x2ecd73, _0x30daf6, _0x4fd78c, _0x43d6cb, _0x1f2fd8, _0x189fe0, _0x191744) {
  let _0x31c0a0 = "https://welfare-dj.palmestore.com/welfare/web/task/receive?id=" + _0x2ecd73 + "&task_type=" + _0x30daf6 + "&" + David_0x5298e4[_0x512c31].common_url;
  if (_0x43d6cb) {
    _0x31c0a0 += "&sub_id=" + _0x43d6cb;
  }
  if (_0x1f2fd8) {
    _0x31c0a0 += "&task_version=" + _0x1f2fd8;
  }
  if (_0x189fe0) {
    _0x31c0a0 += "&sub_type=" + _0x189fe0;
  }
  if (_0x191744) {
    _0x31c0a0 += "&pos=&tactics_id=" + _0x2ecd73 + "&reward_ecpm=5.4699997901916";
  }
  let _0x18f744 = "";
  await David_0x4d3231(_0x512c31, _0x31c0a0, false);
  let _0x142266 = David_0x429bfb(_0x31c0a0, _0x18f744, _0x512c31);
  await David_0x52a520("get", _0x142266, David_0x1c6d0d());
  let _0x5567b2 = David_0xc5f014;
  if (_0x5567b2.code == 0) {
    David_0x3fd169.log("[账号" + (_0x512c31 + 1 < 10 ? "0" + (_0x512c31 + 1) : _0x512c31 + 1) + "]: " + _0x4fd78c + "完成 🎉");
  } else {
    David_0x3fd169.log("[账号" + (_0x512c31 + 1 < 10 ? "0" + (_0x512c31 + 1) : _0x512c31 + 1) + "]: 做" + _0x4fd78c + "任务" + _0x5567b2.msg);
    David_0x510d5e[_0x512c31] += "[账号" + (_0x512c31 + 1 < 10 ? "0" + (_0x512c31 + 1) : _0x512c31 + 1) + "]: 做" + _0x4fd78c + "任务" + _0x5567b2.msg + "\n";
  }
}
async function David_0x1cbee4(_0x155d59, _0xe264a0, _0x18140a, _0x35150b) {
  let _0x4e5aaa = "https://welfare-dj.palmestore.com/welfare/web/video/report/v2?video_id=" + _0xe264a0 + "&pos=" + _0x18140a + "&tactics_id=" + _0xe264a0 + "&reward_ecpm=&" + David_0x5298e4[_0x155d59].common_url;
  let _0x4bc2b8 = "";
  await David_0x4d3231(_0x155d59, _0x4e5aaa, false);
  let _0x397688 = David_0x429bfb(_0x4e5aaa, _0x4bc2b8, _0x155d59);
  await David_0x52a520("get", _0x397688, David_0x1c6d0d());
  let _0x4006ba = David_0xc5f014;
  if (_0x4006ba.code == 0) {
    David_0x3fd169.log("[账号" + (_0x155d59 + 1 < 10 ? "0" + (_0x155d59 + 1) : _0x155d59 + 1) + "]: " + _0x35150b + "完成 🎉");
  } else {
    David_0x3fd169.log("[账号" + (_0x155d59 + 1 < 10 ? "0" + (_0x155d59 + 1) : _0x155d59 + 1) + "]: 做" + _0x35150b + "任务" + _0x4006ba.msg);
    David_0x510d5e[_0x155d59] += "[账号" + (_0x155d59 + 1 < 10 ? "0" + (_0x155d59 + 1) : _0x155d59 + 1) + "]: 做" + _0x35150b + "任务" + _0x4006ba.msg + "\n";
  }
}
async function David_0x557875(_0x291962, _0x4dca23, _0x3060d9, _0x4bca46) {
  const _0x14065c = Math.round(new Date().getTime()).toString();
  const _0x40a1a7 = David_0x277c55(David_0x5298e4[_0x291962].common_url);
  const _0x10a7e9 = _0x40a1a7.usr;
  const _0x40de77 = "positionId=" + _0x4dca23 + "&timestamp=" + _0x14065c + "&usr=" + _0x10a7e9;
  await David_0x4d3231(_0x291962, _0x40de77, true);
  const _0x323be1 = David_0x1beb93[_0x291962];
  let _0x224036 = "";
  if (_0x3060d9 == 1) {
    _0x224036 = "https://dj.palmestore.com/zycl/api/gold/adWallReward?rewardCount=200&positionId=" + _0x4dca23 + "&positionType=2&rewardType=" + _0x3060d9 + "&sign=" + _0x323be1 + "&adWallId=94&timestamp=" + _0x14065c + "&" + David_0x5298e4[_0x291962].common_url;
  } else {
    if (_0x3060d9 == 2) {
      _0x224036 = "https://dj.palmestore.com/zycl/api/gold/adWallReward?rewardCount=50&positionId=" + _0x4dca23 + "&positionType=2&rewardType=" + _0x3060d9 + "&sign=" + _0x323be1 + "&adWallId=94&timestamp=" + _0x14065c + "&" + David_0x5298e4[_0x291962].common_url;
    }
  }
  let _0x20f364 = "";
  David_0x2573e7[_0x291962] = "&";
  let _0x20cb22 = David_0x429bfb(_0x224036, _0x20f364, _0x291962);
  await David_0x52a520("get", _0x20cb22, David_0x1c6d0d());
  let _0x1fadb6 = David_0xc5f014;
  if (_0x1fadb6.code == 0) {
    David_0x3fd169.log("[账号" + (_0x291962 + 1 < 10 ? "0" + (_0x291962 + 1) : _0x291962 + 1) + "]: " + _0x4bca46 + "完成 🎉");
  } else {
    David_0x3fd169.log("[账号" + (_0x291962 + 1 < 10 ? "0" + (_0x291962 + 1) : _0x291962 + 1) + "]: 做" + _0x4bca46 + "任务" + _0x1fadb6.msg);
    David_0x510d5e[_0x291962] += "[账号" + (_0x291962 + 1 < 10 ? "0" + (_0x291962 + 1) : _0x291962 + 1) + "]: 做" + _0x4bca46 + "任务" + _0x1fadb6.msg + "\n";
  }
}
async function David_0x10530a(_0x22a854, _0x148c6f) {
  let _0x7bdad3 = "https://welfare-dj.palmestore.com/welfare/web/user/withdraw/schedule?" + David_0x5298e4[_0x22a854].common_url;
  let _0x105d66 = "";
  await David_0x4d3231(_0x22a854, _0x7bdad3, false);
  let _0x5cb17f = David_0x429bfb(_0x7bdad3, _0x105d66, _0x22a854);
  await David_0x52a520("get", _0x5cb17f, David_0x1c6d0d());
  let _0x4d6baf = David_0xc5f014;
  if (_0x4d6baf && _0x4d6baf != null && _0x4d6baf.code == 0) {
    let _0x207dde = _0x4d6baf.body.bind_info.pre_type;
    let _0x4f849e = _0x4d6baf.body.continue_login_days;
    let _0x14e19a = _0x4d6baf.body.read_info.reading.day_second;
    let _0x5b0aab = _0x4d6baf.body.read_info.listening.day_second;
    David_0x3fd169.log("[账号" + (_0x22a854 + 1 < 10 ? "0" + (_0x22a854 + 1) : _0x22a854 + 1) + "]: 已连续签到" + _0x4f849e + "天");
    David_0x510d5e[_0x22a854] += "[账号" + (_0x22a854 + 1 < 10 ? "0" + (_0x22a854 + 1) : _0x22a854 + 1) + "]: 已连续签到" + _0x4f849e + "天\n";
    if (_0x4f849e >= 10) {
      await David_0x7e3a3f(_0x22a854, _0x207dde, _0x4f849e, _0x148c6f, _0x14e19a, _0x5b0aab);
    }
  }
}
async function David_0x7e3a3f(_0x6a19fd, _0x39732d, _0x1a6df0, _0x3f0a36, _0x1270ea, _0x253f72) {
  let _0x43187f = "https://welfare-dj.palmestore.com/welfare/web/withdraw/info?" + David_0x5298e4[_0x6a19fd].common_url;
  let _0x38899e = "";
  await David_0x4d3231(_0x6a19fd, _0x43187f, false);
  let _0x4d02cd = David_0x429bfb(_0x43187f, _0x38899e, _0x6a19fd);
  await David_0x52a520("get", _0x4d02cd, David_0x1c6d0d());
  let _0x5448a4 = David_0xc5f014;
  if (_0x5448a4 && _0x5448a4 != null && _0x5448a4.code == 0) {
    let _0x492f72 = _0x5448a4.body.withdraw_products[0];
    let _0x1e9b8f = _0x492f72.list.find(_0x314d9f => _0x314d9f.cash == 0.3);
    if (!_0x1e9b8f) {
      _0x1e9b8f = _0x492f72.list.find(_0x4cb03d => _0x4cb03d.cash == 1);
    }
    if (!_0x1e9b8f) {
      _0x1e9b8f = _0x492f72.list.find(_0x154008 => _0x154008.cash == 2);
    }
    if (!_0x1e9b8f) {
      _0x1e9b8f = _0x492f72.list.find(_0x128906 => _0x128906.cash == 5);
    }
    if (!_0x1e9b8f) {
      _0x1e9b8f = _0x492f72.list.find(_0x38ebaa => _0x38ebaa.cash == 15);
    }
    if (David_0x5298e4[_0x6a19fd].amount) {
      _0x1e9b8f = _0x492f72.list.find(_0x2cbb9c => _0x2cbb9c.cash == David_0x5298e4[_0x6a19fd].amount);
    }
    let _0x45876a = _0x492f72.type;
    let _0x162cf0 = _0x492f72.id;
    if (_0x1e9b8f) {
      let _0x1b0e69 = _0x1e9b8f.start_day;
      let _0x1ce6d8 = _0x1e9b8f.cash;
      let _0x2c9130 = _0x1e9b8f.time;
      if (_0x1a6df0 >= _0x1b0e69 && _0x3f0a36 >= _0x1ce6d8 && _0x1270ea / 60 >= _0x2c9130) {
        let _0xb5e333 = _0x1e9b8f.id;
        let _0x1573e3 = _0x1e9b8f.cash;
        let _0x35d3ee = _0x1e9b8f.reward_type;
        await David_0x1c2537(_0x6a19fd, _0x45876a, _0x162cf0, _0xb5e333, _0x1573e3, _0x39732d, _0x35d3ee);
      }
    }
  } else {
    David_0x3fd169.log("[账号" + (_0x6a19fd + 1 < 10 ? "0" + (_0x6a19fd + 1) : _0x6a19fd + 1) + "]: 提现信息=> " + _0x5448a4.msg);
    David_0x510d5e[_0x6a19fd] += "[账号" + (_0x6a19fd + 1 < 10 ? "0" + (_0x6a19fd + 1) : _0x6a19fd + 1) + "]: 提现信息=> " + _0x5448a4.msg + "\n";
  }
}
async function David_0x1c2537(_0x2f3781, _0xec3406, _0x34dfe5, _0x443472, _0x326219, _0x4640f9, _0x3c247b) {
  let _0x287ce0 = "https://welfare-dj.palmestore.com/welfare/web/withdraw/exec?type=" + _0xec3406 + "&coin=" + _0x326219 * 10000 + "&price=" + _0x326219 + "&product_id=" + _0x34dfe5 + "&item_id=" + _0x443472 + "&method=" + _0x4640f9 + "&sign=&reward_type=" + _0x3c247b + "&discount=false&" + David_0x5298e4[_0x2f3781].common_url;
  let _0x39b98c = "";
  await David_0x4d3231(_0x2f3781, _0x287ce0, false);
  let _0x4956e1 = David_0x429bfb(_0x287ce0, _0x39b98c, _0x2f3781);
  await David_0x52a520("get", _0x4956e1, David_0x1c6d0d());
  let _0x32a07c = David_0xc5f014;
  if (_0x32a07c.code == 0) {
    David_0x3fd169.log("[账号" + (_0x2f3781 + 1 < 10 ? "0" + (_0x2f3781 + 1) : _0x2f3781 + 1) + "]: 提现" + _0x326219 + "元成功 🎉");
    David_0x510d5e[_0x2f3781] += "[账号" + (_0x2f3781 + 1 < 10 ? "0" + (_0x2f3781 + 1) : _0x2f3781 + 1) + "]: 提现" + _0x326219 + "元成功 🎉\n";
  } else {
    David_0x3fd169.log("[账号" + (_0x2f3781 + 1 < 10 ? "0" + (_0x2f3781 + 1) : _0x2f3781 + 1) + "]: 提现" + _0x326219 + "元" + _0x32a07c.msg);
    David_0x510d5e[_0x2f3781] += "[账号" + (_0x2f3781 + 1 < 10 ? "0" + (_0x2f3781 + 1) : _0x2f3781 + 1) + "]: 提现" + _0x326219 + "元" + _0x32a07c.msg + "\n";
  }
}
async function David_0x52f114(_0x3f65bd, _0x4562f7) {
  const _0x44cbac = David_0x466ce0(60, 120);
  const _0x211a34 = David_0x3fd169.time("yyyy-MM-dd");
  const _0x1734ee = David_0x277c55(David_0x5298e4[_0x3f65bd].common_url);
  const _0x14e073 = _0x1734ee.usr;
  const _0x56e848 = "d1=" + _0x1734ee.d1 + "&firm=" + _0x1734ee.firm + "&kt=" + _0x1734ee.kt + "&ku=" + _0x1734ee.ku + "&p1=" + _0x1734ee.p1 + "&p16=" + _0x1734ee.p16 + "&p2=" + _0x1734ee.p2 + "&p21=" + _0x1734ee.p21 + "&p22=" + _0x1734ee.p22 + "&p25=" + _0x1734ee.p25 + "&p26=" + _0x1734ee.p26 + "&p29=" + _0x1734ee.p29 + "&p3=" + _0x1734ee.p3 + "&p31=" + _0x1734ee.p31 + "&p33=" + _0x1734ee.p33 + "&p34=" + _0x1734ee.p34 + "&p4=" + _0x1734ee.p4 + "&p5=" + _0x1734ee.p5 + "&p7=" + _0x1734ee.p7 + "&p9=" + _0x1734ee.p9 + "&pc=" + _0x1734ee.pc + "&rgt=" + _0x1734ee.rgt + "&usr=" + _0x1734ee.usr + "&zyeid=" + _0x1734ee.zyeid;
  const _0x3f1436 = "http://api-dj.palmestore.com/reading/open/time/report?" + _0x56e848;
  const _0x34a40a = Math.round(new Date().getTime()).toString();
  const _0x51ff2a = "{\"data\":\"[{\\\"type\\\":6,\\\"data\\\":{\\\"" + _0x211a34 + "\\\":{\\\"d1\\\":[{\\\"bid\\\":\\\"12891143\\\",\\\"format\\\":\\\"zyepub\\\",\\\"time\\\":" + _0x44cbac + ",\\\"resType\\\":\\\"" + _0x4562f7 + "\\\"}]}}}]\",\"timestamp\":\"" + _0x34a40a + "\",\"user_name\":\"" + _0x14e073 + "\"}";
  const _0xe99dba = JSON.parse(_0x51ff2a);
  const _0x30c862 = David_0x42948d.stringify(_0xe99dba);
  const _0x1377d3 = new URL(_0x3f1436);
  const _0x446a8c = David_0x42948d.parse(_0x1377d3.search.slice(1) + "&" + _0x30c862);
  const _0x3da135 = Object.keys(_0x446a8c).sort();
  const _0x1470d0 = _0x3da135.map(_0x3d0972 => _0x3d0972 + "=" + _0x446a8c[_0x3d0972]).join("&");
  await David_0x4d3231(_0x3f65bd, _0x1470d0, true);
  const _0x1263c3 = David_0x1beb93[_0x3f65bd];
  const _0x41df9d = "{\"data\":\"[{\\\"type\\\":6,\\\"data\\\":{\\\"" + _0x211a34 + "\\\":{\\\"d1\\\":[{\\\"bid\\\":\\\"12891143\\\",\\\"format\\\":\\\"zyepub\\\",\\\"time\\\":" + _0x44cbac + ",\\\"resType\\\":\\\"" + _0x4562f7 + "\\\"}]}}}]\",\"sign\":\"" + _0x1263c3 + "\",\"timestamp\":\"" + _0x34a40a + "\",\"user_name\":\"" + _0x14e073 + "\"}";
  David_0x5aa617.gzip(_0x41df9d, (_0x26b142, _0x1faf76) => {
    if (_0x26b142) {
      console.error("压缩数据时出错：", _0x26b142);
      return;
    }
    const _0x5ed5a5 = {
      method: "POST",
      headers: {}
    };
    _0x5ed5a5.headers["Content-Type"] = "text/plain";
    _0x5ed5a5.headers["Content-Encoding"] = "gzip";
    _0x5ed5a5.headers["Content-Length"] = _0x1faf76.length;
    const _0x24cb87 = David_0x559ff9.request(_0x3f1436, _0x5ed5a5, _0x146668 => {
      let _0x44d9b6 = "";
      _0x146668.on("data", _0x217896 => {
        _0x44d9b6 += _0x217896;
      });
      _0x146668.on("end", () => {
        let _0x110994 = JSON.parse(_0x44d9b6);
        if (_0x110994.code == 0 && _0x110994.msg == "ok") {
          if (_0x4562f7 == "TTS") {
            David_0x3fd169.log("[账号" + (_0x3f65bd + 1 < 10 ? "0" + (_0x3f65bd + 1) : _0x3f65bd + 1) + "]: 成功听书增加" + _0x44cbac + "秒钟");
          } else {
            if (_0x4562f7 == "read") {
              David_0x3fd169.log("[账号" + (_0x3f65bd + 1 < 10 ? "0" + (_0x3f65bd + 1) : _0x3f65bd + 1) + "]: 成功阅读增加" + _0x44cbac + "秒钟");
            }
          }
        }
      });
    });
    _0x24cb87.on("error", _0x4d1223 => {
      console.error("请求发送失败：", _0x4d1223);
    });
    _0x24cb87.write(_0x1faf76);
    _0x24cb87.end();
  });
}
function David_0x5cc460(_0xd6d17d, _0x4c3fdb, _0x2fb477) {
  return new Promise((_0x538b97, _0xeafe23) => {
    const _0x33f64e = David_0x3296ab + "/script/permissions/lastest";
    const _0x4be1f7 = {
      appName: _0xd6d17d,
      userId: _0x4c3fdb,
      activityCode: _0x2fb477,
      version: David_0x4026d6
    };
    const _0x1e324d = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x40f534 = {
      url: _0x33f64e,
      headers: _0x1e324d,
      body: JSON.stringify(_0x4be1f7)
    };
    David_0x3fd169.post(_0x40f534, async (_0xa91f6b, _0x3ab828, _0x574c94) => {
      if (_0x574c94 && _0x574c94 != null && _0x574c94.replace(/\"/g, "").length > 50) {
        const _0x5c5e97 = _0x574c94.replace(/\"/g, "").slice(34);
        const _0x669757 = new David_0x5f0fe0();
        result = JSON.parse(_0x669757.decode(_0x5c5e97));
        try {
          David_0x249c1e = result.version;
          David_0xcb5938 = result.userAuth;
          David_0x34c6c2 = result.scriptAuth;
          David_0x35eaa7 = result.runAuth;
          David_0xc6a536 = result.notify;
          David_0x5060b7 = result.vipAuth;
          David_0x10468b = result.isCharge;
          David_0x10c038 = result.runAcounts;
          David_0x5c0b79 = result.buyCount;
          David_0xca16ad = result.runedCounts;
          David_0x1c5ee7 = result.runTotalCounts;
          David_0x2a43bf = result.userRank;
          David_0x451ba0 = result.invicate;
          David_0x389530 = result.accountNumbers;
          David_0xb0eacf = result.vipDate;
        } catch (_0x4c13fe) {
          David_0x3fd169.log(_0x4c13fe);
        }
      } else {
        David_0x3fd169.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      _0x538b97();
    });
  });
}
function David_0x2a1c07(_0x397151, _0x2c37ba) {
  return new Promise((_0x343215, _0xb00fc2) => {
    const _0x2a46fd = David_0x3296ab + "/script/run/add";
    const _0x29e474 = {
      appName: _0x397151,
      userId: _0x2c37ba,
      activityCode: David_0x43fa62,
      version: David_0x4026d6
    };
    const _0x51313b = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x36b101 = {
      url: _0x2a46fd,
      headers: _0x51313b,
      body: JSON.stringify(_0x29e474)
    };
    David_0x3fd169.post(_0x36b101, async (_0x3aabe9, _0x6c5fdd, _0x2519dc) => {
      _0x343215();
    });
  });
}
async function David_0x4d3231(_0x20a95e, _0x4bc33a, _0x2f9a0c) {
  if (David_0x208e9d[_0x20a95e] == 0) {
    if (_0x2f9a0c) {
      await David_0x1d8009(_0x20a95e, _0x4bc33a, "_rsa");
    } else {
      await David_0x1d8009(_0x20a95e, _0x4bc33a, "");
    }
  } else {
    if (_0x2f9a0c) {
      await David_0xa9352e(_0x20a95e, _0x4bc33a);
    } else {
      await David_0xdbf55b(_0x20a95e, _0x4bc33a);
    }
  }
}
function David_0xdbf55b(_0x32fe01, _0x27fa20) {
  return new Promise((_0xb1b5f1, _0x5e3e66) => {
    const _0x3a753f = David_0x3296ab + "/sign/sdxs";
    const _0x3e4827 = {
      content: _0x27fa20,
      appName: David_0x429e19,
      uuid: David_0x35a184
    };
    const _0x4b5e9d = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x2a8ae2 = {
      url: _0x3a753f,
      headers: _0x4b5e9d,
      body: JSON.stringify(_0x3e4827)
    };
    David_0x3fd169.post(_0x2a8ae2, async (_0x1161ac, _0x1385cf, _0xadc11d) => {
      const _0x420e56 = _0xadc11d.replace(/\"/g, "");
      David_0x2573e7[_0x32fe01] = _0x420e56;
      _0xb1b5f1();
    });
  });
}
function David_0xa9352e(_0xbe846f, _0x269ebc) {
  return new Promise((_0x5a71a4, _0xcd48f6) => {
    const _0x427ef6 = David_0x3296ab + "/sign/rsa";
    const _0x179f92 = {
      content: _0x269ebc,
      appName: David_0x429e19,
      uuid: David_0x35a184
    };
    const _0x3babb2 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1a160f = {
      url: _0x427ef6,
      headers: _0x3babb2,
      body: JSON.stringify(_0x179f92)
    };
    David_0x3fd169.post(_0x1a160f, async (_0x1a4774, _0x4c5c05, _0x10334f) => {
      const _0x3c66bc = _0x10334f.replace(/\"/g, "");
      David_0x1beb93[_0xbe846f] = _0x3c66bc;
      _0x5a71a4();
    });
  });
}
function David_0x1d8009(_0x43fbd8, _0x5ab420, _0x2e2448) {
  return new Promise((_0x5520bb, _0x25f918) => {
    function _0x133c17(_0x3d65c4) {
      let _0x1bd295 = _0x3d65c4.toString("utf8");
      if (_0x2e2448 != "") {
        David_0x1beb93[_0x43fbd8] = _0x1bd295;
      } else {
        David_0x2573e7[_0x43fbd8] = _0x1bd295;
      }
      _0x5520bb(_0x1bd295);
      David_0x4efca8[_0x43fbd8].removeListener("message", _0x133c17);
    }
    David_0x4efca8[_0x43fbd8].on("message", _0x133c17);
    if (David_0x4efca8[_0x43fbd8].readyState === 1) {
      const _0x5d7d9f = {
        method: David_0x429e19 + _0x2e2448,
        params: {}
      };
      _0x5d7d9f.params.content = _0x5ab420;
      _0x5d7d9f.params.appName = David_0x429e19;
      _0x5d7d9f.params.uuid = David_0x35a184;
      David_0x4efca8[_0x43fbd8].send(JSON.stringify(_0x5d7d9f), _0x1e3477 => {
        if (_0x1e3477) {
          _0x25f918(_0x1e3477);
        }
      });
    } else {
      if (_0x2e2448 != "") {
        _0x5520bb(David_0xa9352e(_0x43fbd8, _0x5ab420));
      } else {
        _0x5520bb(David_0xdbf55b(_0x43fbd8, _0x5ab420));
      }
      David_0x4efca8[_0x43fbd8].removeListener("message", _0x133c17);
    }
  });
}
function David_0x2a5a0d(_0x227a20, _0x4708ea) {
  return new Promise((_0x5a1a8b, _0x2ecd41) => {
    const _0x42e7dd = setTimeout(() => {
      _0x5a1a8b(false);
    }, _0x4708ea);
    const _0x412169 = David_0x559ff9.get(_0x227a20, _0x96af84 => {
      clearTimeout(_0x42e7dd);
      if (_0x96af84.statusCode === 404) {
        _0x5a1a8b(true);
      } else {
        _0x5a1a8b(false);
      }
    });
    _0x412169.on("error", _0x382a33 => {
      clearTimeout(_0x42e7dd);
      _0x5a1a8b(false);
    });
    _0x412169.on("timeout", () => {
      _0x412169.abort();
      _0x2ecd41(new Error("请求超时"));
    });
  });
}
async function David_0x2cca83(_0x2457f8, _0x161fb9 = 3000) {
  return new Promise((_0x1883f4, _0x2f2186) => {
    const _0x594f95 = {
      url: _0x2457f8 + "/docs"
    };
    setTimeout(() => {
      _0x1883f4(false);
    }, _0x161fb9);
    David_0x3fd169.get(_0x594f95, async (_0x23bfc8, _0x484666, _0x8598f5) => {
      if (_0x484666.status == 401) {
        _0x1883f4(true);
      } else {
        _0x1883f4(false);
      }
    });
  });
}
async function David_0x3517c7(_0x3ce7f8, _0x231a5a = 3000) {
  return new Promise((_0x1101e5, _0x579f4a) => {
    const _0x267f6e = {
      url: _0x3ce7f8 + "/"
    };
    setTimeout(() => {
      _0x1101e5(false);
    }, _0x231a5a);
    $httpClient.get(_0x267f6e, async (_0x9b0c63, _0x48b09d, _0x3d867c) => {
      if (_0x3d867c == "{\"detail\":\"Not Found\"}") {
        _0x1101e5(true);
      } else {
        _0x1101e5(false);
      }
    });
  });
}
async function David_0xa2265(_0x12bf9d, _0x1c711d, _0x322ec1) {
  return new Promise((_0x4e635e, _0x4ccb61) => {
    const _0x4767dd = David_0x3296ab + "/redis/hash/get/" + _0x12bf9d + "/" + _0x1c711d;
    const _0xc0cfc6 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x33cf35 = {
      url: _0x4767dd,
      headers: _0xc0cfc6
    };
    David_0x3fd169.get(_0x33cf35, async (_0x510745, _0xd0d55d, _0x21deb2) => {
      const _0x9f3cb7 = _0x21deb2.replace(/\"/g, "");
      answerTexts[_0x322ec1] = _0x9f3cb7;
      _0x4e635e();
    });
  });
}
function David_0x44d3d3(_0x4f4911, _0x3859cd, _0x52eda9) {
  return new Promise((_0x42cf84, _0x2dc2a5) => {
    const _0x47b40b = David_0x3296ab + "/redis/hash/set";
    const _0x44c973 = {
      key: _0x4f4911,
      hashKey: _0x3859cd,
      hashValue: _0x52eda9
    };
    const _0x18f9de = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xb3bdd9 = {
      url: _0x47b40b,
      headers: _0x18f9de,
      body: JSON.stringify(_0x44c973)
    };
    David_0x3fd169.post(_0xb3bdd9, async (_0x12f666, _0x38e1e7, _0x43c7b3) => {
      _0x42cf84();
    });
  });
}
function David_0x113739(_0x4b1e5c) {
  return new Promise((_0x23ee11, _0x15e52b) => {
    const _0x4d605e = David_0x3296ab + "/redis/set/pop/" + _0x4b1e5c;
    const _0x2e498c = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0xc3e2ec = {
      url: _0x4d605e,
      headers: _0x2e498c
    };
    David_0x3fd169.get(_0xc3e2ec, async (_0x1d1e28, _0x2157c9, _0x2dab63) => {
      const _0x2355dd = _0x2dab63.replace(/\"/g, "");
      popCookie = _0x2355dd;
      _0x23ee11();
    });
  });
}
function David_0x429bfb(_0xdb5038, _0x1486fa, _0x4311ec) {
  let _0x18bbaf = "Mozilla/5.0 (Linux; Android 8.1.0; Pixel2 Build/OPM4.171019.021.P1; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/119.0.6045.163 Mobile Safari/537.36 zyApp/sudu zyVersion/2.0.8 zyChannel/331104";
  if (David_0x5298e4[_0x4311ec].ua && David_0x5298e4[_0x4311ec].ua != "") {
    _0x18bbaf = David_0x5298e4[_0x4311ec].ua;
  }
  let _0x289f9f = David_0x2573e7[_0x4311ec].split("&");
  let _0xb37ba1 = David_0x52b733(_0xdb5038);
  const _0x29aca7 = {
    Accept: "application/json, text/plain, */*",
    "User-Agent": _0x18bbaf,
    "X-Sign": _0x289f9f[0],
    "X-Nonce": _0x289f9f[1],
    Host: _0xb37ba1,
    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7",
    "Accept-Encoding": "gzip,deflate,br",
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-site",
    "X-Requested-With": "com.dj.speed",
    "sec-ch-ua-platform": "Android",
    "sec-ch-ua": "\"Android WebView\";v=\"119\", \"Chromium\";v=\"119\", \"Not?A_Brand\";v=\"24\"",
    "sec-ch-ua-mobile": "?1"
  };
  const _0x19944f = {
    url: _0xdb5038,
    headers: _0x29aca7
  };
  if (_0x1486fa) {
    _0x19944f.body = _0x1486fa;
  }
  return _0x19944f;
}
async function David_0x52a520(_0x3106ff, _0x3434f0, _0x170e5b) {
  David_0xc5f014 = null;
  return new Promise(_0x29fade => {
    David_0x3fd169[_0x3106ff](_0x3434f0, async (_0x31bf2b, _0x9dd894, _0x29b20c) => {
      try {
        if (_0x31bf2b) {
          David_0x3fd169.log(_0x170e5b + ": " + _0x3106ff + "请求失败");
          David_0x3fd169.log(JSON.stringify(_0x31bf2b));
          David_0x3fd169.logErr(_0x31bf2b);
        } else {
          if (David_0x23b79f(_0x29b20c)) {
            David_0xc5f014 = JSON.parse(_0x29b20c);
          }
        }
      } catch (_0x4b6a32) {
        David_0x3fd169.logErr(_0x4b6a32, _0x9dd894);
      } finally {
        _0x29fade();
      }
    });
  });
}
function David_0x52b733(_0x161586) {
  let _0x5c3c57 = _0x161586.substr(_0x161586.indexOf("//") + 2);
  let _0x58c010 = _0x5c3c57.substr(0, _0x5c3c57.indexOf("/"));
  let _0x3ef5ea = "";
  let _0x3eb89c = _0x58c010.indexOf(":");
  if (_0x3eb89c > 0) {
    _0x3ef5ea = _0x58c010.substr(0, _0x3eb89c);
  } else {
    _0x3ef5ea = _0x58c010;
  }
  return _0x3ef5ea;
}
function David_0x277c55(_0x434377) {
  _0x434377 = _0x434377.replace(/\"/g, "");
  var _0x54551e;
  var _0x26936d = {};
  var _0xb5cead = _0x434377.slice(_0x434377.indexOf("?") + 1).split("&");
  for (var _0x2bc768 = 0; _0x2bc768 < _0xb5cead.length; _0x2bc768++) {
    _0x54551e = _0xb5cead[_0x2bc768].split("=");
    _0x26936d[_0x54551e[0]] = _0x54551e[1];
  }
  return _0x26936d;
}
function David_0x554fc5(_0x5962b0, _0x4a3cf7) {
  var _0x1c4c7a = new Date(_0x5962b0);
  var _0x3de5d0 = new Date(_0x4a3cf7);
  var _0x3fd943 = _0x3de5d0 - _0x1c4c7a;
  var _0x2b65b0 = Math.floor(_0x3fd943 / 1000);
  return _0x2b65b0;
}
function David_0xbbd23f(_0x1e9580, _0x523127) {
  if (_0x1e9580.length * 2 <= _0x523127) {
    return _0x1e9580;
  }
  var _0x40e289 = 0;
  var _0x56e3a1 = "";
  for (var _0x5b7f38 = 0; _0x5b7f38 < _0x1e9580.length; _0x5b7f38++) {
    _0x56e3a1 = _0x56e3a1 + _0x1e9580.charAt(_0x5b7f38);
    if (_0x1e9580.charCodeAt(_0x5b7f38) > 128) {
      _0x40e289 = _0x40e289 + 2;
      if (_0x40e289 >= _0x523127) {
        return _0x56e3a1.substring(0, _0x56e3a1.length - 1) + "...";
      }
    } else {
      _0x40e289 = _0x40e289 + 1;
      if (_0x40e289 >= _0x523127) {
        return _0x56e3a1.substring(0, _0x56e3a1.length - 2) + "...";
      }
    }
  }
  return _0x56e3a1;
}
function David_0x1c6d0d() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function David_0x23b79f(_0xc492d6) {
  try {
    if (typeof JSON.parse(_0xc492d6) == "object") {
      return true;
    }
  } catch (_0x274825) {
    console.log(_0x274825);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function David_0x3bd082(_0x199d55) {
  var _0x3d1e3b = Object.keys(_0x199d55).map(function (_0x32e0c1) {
    return encodeURIComponent(_0x32e0c1) + "=" + encodeURIComponent(_0x199d55[_0x32e0c1]);
  }).join("&");
  return _0x3d1e3b;
}
function David_0x3bda8e(_0x4c073d) {
  var _0x17d033 = String.fromCharCode(_0x4c073d.charCodeAt(0) + _0x4c073d.length);
  for (var _0x170a8a = 1; _0x170a8a < _0x4c073d.length; _0x170a8a++) {
    _0x17d033 += String.fromCharCode(_0x4c073d.charCodeAt(_0x170a8a) + _0x4c073d.charCodeAt(_0x170a8a - 1));
  }
  return escape(_0x17d033);
}
function David_0x4eb12a(_0x24e7a0) {
  _0x24e7a0 = unescape(_0x24e7a0);
  var _0xfbad62 = String.fromCharCode(_0x24e7a0.charCodeAt(0) - _0x24e7a0.length);
  for (var _0x2ee745 = 1; _0x2ee745 < _0x24e7a0.length; _0x2ee745++) {
    _0xfbad62 += String.fromCharCode(_0x24e7a0.charCodeAt(_0x2ee745) - _0xfbad62.charCodeAt(_0x2ee745 - 1));
  }
  return _0xfbad62;
}
function David_0x466ce0(_0x4bfcf6, _0x141553) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x4bfcf6 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x141553 - _0x4bfcf6 + 1) + _0x4bfcf6);
      break;
    default:
      return 0;
      break;
  }
}
function David_0x2a2111() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function David_0x1bc079() {
  function _0x6b8fd6() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x6b8fd6() + _0x6b8fd6() + "-" + _0x6b8fd6() + "-" + _0x6b8fd6() + "-" + _0x6b8fd6() + "-" + _0x6b8fd6() + _0x6b8fd6() + _0x6b8fd6();
}
function David_0x5a1f7d(_0x5db3c8) {
  if (_0x5db3c8.length == 11) {
    let _0x4e3ac6 = _0x5db3c8.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x4e3ac6;
  } else {
    return _0x5db3c8;
  }
}
function David_0x36dc32(_0x43ce4e) {
  return new Promise(_0x5028b8 => {
    try {
      var _0x1bcf8e = require("request");
      const _0x38db05 = {
        c: _0x43ce4e
      };
      const _0x2cce5e = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0x38db05
      };
      _0x1bcf8e(_0x2cce5e, function (_0x57fd55, _0x2519da, _0x82a8ed) {
        if (_0x57fd55) {
          throw new Error(_0x57fd55);
        }
        let _0xb771ac = JSON.parse(_0x82a8ed);
        let _0x3426a6 = _0xb771ac.hitokoto;
        _0x5028b8(_0x3426a6);
        return _0x3426a6;
      });
    } catch (_0x204434) {
      console.log(_0x204434);
    }
  });
}
function David_0x19759d() {
  return Math.round(new Date().getTime()).toString();
}
function David_0x470a87() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function David_0x4a20df() {
  if (David_0x785113 == 1) {
    David_0x3fd169.msg(David_0x3fd169.name, "", David_0x3fd169.message);
  }
}
async function David_0xb0b0b0(_0x2e0b31) {
  if (David_0x133bb0 == 9 || David_0x133bb0 == 12 || David_0x133bb0 == 18) {
    if (David_0x785113 == 1) {
      if (David_0x3fd169.isNode()) {
        await David_0x246cc4.sendNotify(David_0x3fd169.name, _0x2e0b31);
      } else {
        David_0x3fd169.msg(David_0x3fd169.name, "", _0x2e0b31);
      }
    } else {
      David_0x3fd169.log(_0x2e0b31);
    }
  }
}
async function David_0x2d3bb4(_0x2efd02, _0x26ef6e, _0xe1f4b8) {
  return new Promise((_0x72897d, _0x6ebe6d) => {
    const _0x3ba474 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x128355 = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x26ef6e,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0xe1f4b8],
      verifyPay: false
    };
    const _0x3c7811 = {
      "Content-Type": "application/json"
    };
    const _0x295680 = {
      url: _0x3ba474,
      headers: _0x3c7811,
      body: JSON.stringify(_0x128355)
    };
    David_0x3fd169.post(_0x295680, async (_0x3ced1e, _0x4130fb, _0x54db14) => {
      _0x72897d();
    });
  });
}
function David_0x4898f5(_0x3bc63c, _0x4fabe6) {
  _0x4fabe6 = _0x4fabe6 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x699f64 = "";
  for (let _0x20958c = 0; _0x20958c < _0x3bc63c; _0x20958c++) {
    let _0x49ac35 = Math.floor(Math.random() * _0x4fabe6.length);
    _0x699f64 += _0x4fabe6.substring(_0x49ac35, _0x49ac35 + 1);
  }
  return _0x699f64;
}
function David_0x12b1c5(_0x4c9689) {
  function _0x31743b(_0x343650, _0x2286dd) {
    return _0x343650 << _0x2286dd | _0x343650 >>> 32 - _0x2286dd;
  }
  function _0x10392f(_0x34da48, _0x18e65d) {
    var _0x1bf0a3, _0x2048a7, _0x3c3671, _0x2589a1, _0x4f43b6;
    _0x3c3671 = 2147483648 & _0x34da48;
    _0x2589a1 = 2147483648 & _0x18e65d;
    _0x1bf0a3 = 1073741824 & _0x34da48;
    _0x2048a7 = 1073741824 & _0x18e65d;
    _0x4f43b6 = (1073741823 & _0x34da48) + (1073741823 & _0x18e65d);
    return _0x1bf0a3 & _0x2048a7 ? 2147483648 ^ _0x4f43b6 ^ _0x3c3671 ^ _0x2589a1 : _0x1bf0a3 | _0x2048a7 ? 1073741824 & _0x4f43b6 ? 3221225472 ^ _0x4f43b6 ^ _0x3c3671 ^ _0x2589a1 : 1073741824 ^ _0x4f43b6 ^ _0x3c3671 ^ _0x2589a1 : _0x4f43b6 ^ _0x3c3671 ^ _0x2589a1;
  }
  function _0x477f5b(_0x26c166, _0x16aa19, _0x3b2a9e) {
    return _0x26c166 & _0x16aa19 | ~_0x26c166 & _0x3b2a9e;
  }
  function _0x40ef82(_0x24c8b3, _0x266c36, _0x32b43b) {
    return _0x24c8b3 & _0x32b43b | _0x266c36 & ~_0x32b43b;
  }
  function _0x574f8f(_0x38ba8c, _0x1466ba, _0x3cc6ae) {
    return _0x38ba8c ^ _0x1466ba ^ _0x3cc6ae;
  }
  function _0x415287(_0x2de684, _0x52af52, _0x38f640) {
    return _0x52af52 ^ (_0x2de684 | ~_0x38f640);
  }
  function _0x4cd81e(_0x28aa26, _0x3fb8ed, _0x32709e, _0x2212a4, _0x24806d, _0x53e00b, _0x1e4ec7) {
    _0x28aa26 = _0x10392f(_0x28aa26, _0x10392f(_0x10392f(_0x477f5b(_0x3fb8ed, _0x32709e, _0x2212a4), _0x24806d), _0x1e4ec7));
    return _0x10392f(_0x31743b(_0x28aa26, _0x53e00b), _0x3fb8ed);
  }
  function _0x121953(_0x167749, _0x372357, _0x2fdd97, _0x3246d0, _0x59d510, _0x111c30, _0x1c0855) {
    _0x167749 = _0x10392f(_0x167749, _0x10392f(_0x10392f(_0x40ef82(_0x372357, _0x2fdd97, _0x3246d0), _0x59d510), _0x1c0855));
    return _0x10392f(_0x31743b(_0x167749, _0x111c30), _0x372357);
  }
  function _0x26c24f(_0x5c104d, _0xf2d392, _0xa39880, _0x3cc71b, _0x17c9c9, _0x220a32, _0x1d59e6) {
    _0x5c104d = _0x10392f(_0x5c104d, _0x10392f(_0x10392f(_0x574f8f(_0xf2d392, _0xa39880, _0x3cc71b), _0x17c9c9), _0x1d59e6));
    return _0x10392f(_0x31743b(_0x5c104d, _0x220a32), _0xf2d392);
  }
  function _0x35d827(_0x1940bc, _0x1a067f, _0x36772b, _0x53c855, _0x1e71be, _0x104166, _0xac584b) {
    _0x1940bc = _0x10392f(_0x1940bc, _0x10392f(_0x10392f(_0x415287(_0x1a067f, _0x36772b, _0x53c855), _0x1e71be), _0xac584b));
    return _0x10392f(_0x31743b(_0x1940bc, _0x104166), _0x1a067f);
  }
  function _0x1517d5(_0x3409f5) {
    for (var _0x20658a, _0x2eafa1 = _0x3409f5.length, _0x3619b7 = _0x2eafa1 + 8, _0x4e4789 = (_0x3619b7 - _0x3619b7 % 64) / 64, _0x53a22f = 16 * (_0x4e4789 + 1), _0x380b3a = new Array(_0x53a22f - 1), _0x2e3bf8 = 0, _0x3a8f10 = 0; _0x2eafa1 > _0x3a8f10;) {
      _0x20658a = (_0x3a8f10 - _0x3a8f10 % 4) / 4;
      _0x2e3bf8 = _0x3a8f10 % 4 * 8;
      _0x380b3a[_0x20658a] = _0x380b3a[_0x20658a] | _0x3409f5.charCodeAt(_0x3a8f10) << _0x2e3bf8;
      _0x3a8f10++;
    }
    _0x20658a = (_0x3a8f10 - _0x3a8f10 % 4) / 4;
    _0x2e3bf8 = _0x3a8f10 % 4 * 8;
    _0x380b3a[_0x20658a] = _0x380b3a[_0x20658a] | 128 << _0x2e3bf8;
    _0x380b3a[_0x53a22f - 2] = _0x2eafa1 << 3;
    _0x380b3a[_0x53a22f - 1] = _0x2eafa1 >>> 29;
    return _0x380b3a;
  }
  function _0x46b401(_0x59968f) {
    var _0x9a7840,
      _0x2dc322,
      _0x38e7e6 = "",
      _0x422954 = "";
    for (_0x2dc322 = 0; 3 >= _0x2dc322; _0x2dc322++) {
      _0x9a7840 = _0x59968f >>> 8 * _0x2dc322 & 255;
      _0x422954 = "0" + _0x9a7840.toString(16);
      _0x38e7e6 += _0x422954.substr(_0x422954.length - 2, 2);
    }
    return _0x38e7e6;
  }
  function _0x3be3b3(_0x4b207f) {
    _0x4b207f = _0x4b207f.replace(/\r\n/g, "\n");
    for (var _0x373857 = "", _0x158325 = 0; _0x158325 < _0x4b207f.length; _0x158325++) {
      var _0xbe4488 = _0x4b207f.charCodeAt(_0x158325);
      128 > _0xbe4488 ? _0x373857 += String.fromCharCode(_0xbe4488) : _0xbe4488 > 127 && 2048 > _0xbe4488 ? (_0x373857 += String.fromCharCode(_0xbe4488 >> 6 | 192), _0x373857 += String.fromCharCode(63 & _0xbe4488 | 128)) : (_0x373857 += String.fromCharCode(_0xbe4488 >> 12 | 224), _0x373857 += String.fromCharCode(_0xbe4488 >> 6 & 63 | 128), _0x373857 += String.fromCharCode(63 & _0xbe4488 | 128));
    }
    return _0x373857;
  }
  var _0x442ecf,
    _0x5469e9,
    _0x5670c3,
    _0x2e5c75,
    _0x528ab6,
    _0x3a02b0,
    _0x2c70fb,
    _0x53e3d6,
    _0x319996,
    _0x52986f = [],
    _0xb0b7b7 = 7,
    _0x5f58c3 = 12,
    _0x323009 = 17,
    _0x3349a5 = 22,
    _0x1e5171 = 5,
    _0x1e9024 = 9,
    _0x3ddb4c = 14,
    _0x664a35 = 20,
    _0x593d55 = 4,
    _0xe904cf = 11,
    _0x1c3cef = 16,
    _0x420257 = 23,
    _0x4def07 = 6,
    _0x242be2 = 10,
    _0xfa4fc = 15,
    _0x3baa71 = 21;
  for (_0x4c9689 = _0x3be3b3(_0x4c9689), _0x52986f = _0x1517d5(_0x4c9689), _0x3a02b0 = 1732584193, _0x2c70fb = 4023233417, _0x53e3d6 = 2562383102, _0x319996 = 271733878, _0x442ecf = 0; _0x442ecf < _0x52986f.length; _0x442ecf += 16) {
    _0x5469e9 = _0x3a02b0;
    _0x5670c3 = _0x2c70fb;
    _0x2e5c75 = _0x53e3d6;
    _0x528ab6 = _0x319996;
    _0x3a02b0 = _0x4cd81e(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 0], _0xb0b7b7, 3614090360);
    _0x319996 = _0x4cd81e(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 1], _0x5f58c3, 3905402710);
    _0x53e3d6 = _0x4cd81e(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 2], _0x323009, 606105819);
    _0x2c70fb = _0x4cd81e(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 3], _0x3349a5, 3250441966);
    _0x3a02b0 = _0x4cd81e(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 4], _0xb0b7b7, 4118548399);
    _0x319996 = _0x4cd81e(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 5], _0x5f58c3, 1200080426);
    _0x53e3d6 = _0x4cd81e(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 6], _0x323009, 2821735955);
    _0x2c70fb = _0x4cd81e(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 7], _0x3349a5, 4249261313);
    _0x3a02b0 = _0x4cd81e(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 8], _0xb0b7b7, 1770035416);
    _0x319996 = _0x4cd81e(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 9], _0x5f58c3, 2336552879);
    _0x53e3d6 = _0x4cd81e(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 10], _0x323009, 4294925233);
    _0x2c70fb = _0x4cd81e(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 11], _0x3349a5, 2304563134);
    _0x3a02b0 = _0x4cd81e(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 12], _0xb0b7b7, 1804603682);
    _0x319996 = _0x4cd81e(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 13], _0x5f58c3, 4254626195);
    _0x53e3d6 = _0x4cd81e(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 14], _0x323009, 2792965006);
    _0x2c70fb = _0x4cd81e(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 15], _0x3349a5, 1236535329);
    _0x3a02b0 = _0x121953(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 1], _0x1e5171, 4129170786);
    _0x319996 = _0x121953(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 6], _0x1e9024, 3225465664);
    _0x53e3d6 = _0x121953(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 11], _0x3ddb4c, 643717713);
    _0x2c70fb = _0x121953(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 0], _0x664a35, 3921069994);
    _0x3a02b0 = _0x121953(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 5], _0x1e5171, 3593408605);
    _0x319996 = _0x121953(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 10], _0x1e9024, 38016083);
    _0x53e3d6 = _0x121953(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 15], _0x3ddb4c, 3634488961);
    _0x2c70fb = _0x121953(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 4], _0x664a35, 3889429448);
    _0x3a02b0 = _0x121953(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 9], _0x1e5171, 568446438);
    _0x319996 = _0x121953(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 14], _0x1e9024, 3275163606);
    _0x53e3d6 = _0x121953(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 3], _0x3ddb4c, 4107603335);
    _0x2c70fb = _0x121953(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 8], _0x664a35, 1163531501);
    _0x3a02b0 = _0x121953(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 13], _0x1e5171, 2850285829);
    _0x319996 = _0x121953(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 2], _0x1e9024, 4243563512);
    _0x53e3d6 = _0x121953(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 7], _0x3ddb4c, 1735328473);
    _0x2c70fb = _0x121953(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 12], _0x664a35, 2368359562);
    _0x3a02b0 = _0x26c24f(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 5], _0x593d55, 4294588738);
    _0x319996 = _0x26c24f(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 8], _0xe904cf, 2272392833);
    _0x53e3d6 = _0x26c24f(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 11], _0x1c3cef, 1839030562);
    _0x2c70fb = _0x26c24f(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 14], _0x420257, 4259657740);
    _0x3a02b0 = _0x26c24f(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 1], _0x593d55, 2763975236);
    _0x319996 = _0x26c24f(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 4], _0xe904cf, 1272893353);
    _0x53e3d6 = _0x26c24f(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 7], _0x1c3cef, 4139469664);
    _0x2c70fb = _0x26c24f(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 10], _0x420257, 3200236656);
    _0x3a02b0 = _0x26c24f(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 13], _0x593d55, 681279174);
    _0x319996 = _0x26c24f(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 0], _0xe904cf, 3936430074);
    _0x53e3d6 = _0x26c24f(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 3], _0x1c3cef, 3572445317);
    _0x2c70fb = _0x26c24f(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 6], _0x420257, 76029189);
    _0x3a02b0 = _0x26c24f(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 9], _0x593d55, 3654602809);
    _0x319996 = _0x26c24f(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 12], _0xe904cf, 3873151461);
    _0x53e3d6 = _0x26c24f(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 15], _0x1c3cef, 530742520);
    _0x2c70fb = _0x26c24f(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 2], _0x420257, 3299628645);
    _0x3a02b0 = _0x35d827(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 0], _0x4def07, 4096336452);
    _0x319996 = _0x35d827(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 7], _0x242be2, 1126891415);
    _0x53e3d6 = _0x35d827(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 14], _0xfa4fc, 2878612391);
    _0x2c70fb = _0x35d827(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 5], _0x3baa71, 4237533241);
    _0x3a02b0 = _0x35d827(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 12], _0x4def07, 1700485571);
    _0x319996 = _0x35d827(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 3], _0x242be2, 2399980690);
    _0x53e3d6 = _0x35d827(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 10], _0xfa4fc, 4293915773);
    _0x2c70fb = _0x35d827(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 1], _0x3baa71, 2240044497);
    _0x3a02b0 = _0x35d827(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 8], _0x4def07, 1873313359);
    _0x319996 = _0x35d827(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 15], _0x242be2, 4264355552);
    _0x53e3d6 = _0x35d827(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 6], _0xfa4fc, 2734768916);
    _0x2c70fb = _0x35d827(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 13], _0x3baa71, 1309151649);
    _0x3a02b0 = _0x35d827(_0x3a02b0, _0x2c70fb, _0x53e3d6, _0x319996, _0x52986f[_0x442ecf + 4], _0x4def07, 4149444226);
    _0x319996 = _0x35d827(_0x319996, _0x3a02b0, _0x2c70fb, _0x53e3d6, _0x52986f[_0x442ecf + 11], _0x242be2, 3174756917);
    _0x53e3d6 = _0x35d827(_0x53e3d6, _0x319996, _0x3a02b0, _0x2c70fb, _0x52986f[_0x442ecf + 2], _0xfa4fc, 718787259);
    _0x2c70fb = _0x35d827(_0x2c70fb, _0x53e3d6, _0x319996, _0x3a02b0, _0x52986f[_0x442ecf + 9], _0x3baa71, 3951481745);
    _0x3a02b0 = _0x10392f(_0x3a02b0, _0x5469e9);
    _0x2c70fb = _0x10392f(_0x2c70fb, _0x5670c3);
    _0x53e3d6 = _0x10392f(_0x53e3d6, _0x2e5c75);
    _0x319996 = _0x10392f(_0x319996, _0x528ab6);
  }
  var _0x235708 = _0x46b401(_0x3a02b0) + _0x46b401(_0x2c70fb) + _0x46b401(_0x53e3d6) + _0x46b401(_0x319996);
  return _0x235708.toLowerCase();
}
function David_0x1d488a(_0x471f45) {
  var _0x5f4e6b = 8;
  var _0xf1feae = 0;
  function _0x493965(_0x1c154b, _0x3e41a4) {
    var _0x60e2e6 = (_0x1c154b & 65535) + (_0x3e41a4 & 65535);
    var _0x2c5aed = (_0x1c154b >> 16) + (_0x3e41a4 >> 16) + (_0x60e2e6 >> 16);
    return _0x2c5aed << 16 | _0x60e2e6 & 65535;
  }
  function _0x38741a(_0x4183fc, _0xe80fbf) {
    return _0x4183fc >>> _0xe80fbf | _0x4183fc << 32 - _0xe80fbf;
  }
  function _0x3fe3b3(_0x3055b3, _0x286d44) {
    return _0x3055b3 >>> _0x286d44;
  }
  function _0x54af4e(_0x429a35, _0xc78823, _0x4aac1b) {
    return _0x429a35 & _0xc78823 ^ ~_0x429a35 & _0x4aac1b;
  }
  function _0x53ffaa(_0x4acd0e, _0x139dba, _0x558a6b) {
    return _0x4acd0e & _0x139dba ^ _0x4acd0e & _0x558a6b ^ _0x139dba & _0x558a6b;
  }
  function _0x758bbb(_0x2c7b38) {
    return _0x38741a(_0x2c7b38, 2) ^ _0x38741a(_0x2c7b38, 13) ^ _0x38741a(_0x2c7b38, 22);
  }
  function _0x3f691d(_0x10fdc8) {
    return _0x38741a(_0x10fdc8, 6) ^ _0x38741a(_0x10fdc8, 11) ^ _0x38741a(_0x10fdc8, 25);
  }
  function _0x461a58(_0x3a9091) {
    return _0x38741a(_0x3a9091, 7) ^ _0x38741a(_0x3a9091, 18) ^ _0x3fe3b3(_0x3a9091, 3);
  }
  function _0x44a135(_0x181161) {
    return _0x38741a(_0x181161, 17) ^ _0x38741a(_0x181161, 19) ^ _0x3fe3b3(_0x181161, 10);
  }
  function _0x3a8c6a(_0x3be8f2, _0xad9031) {
    var _0x27da71 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x52dd24 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x317865 = new Array(64);
    var _0x12a628, _0xdd76d0, _0x8f65ca, _0xeeb1a6, _0x23ffb0, _0x17ca7a, _0xab9fac, _0x369a91;
    var _0x2df339, _0x4e664a;
    _0x3be8f2[_0xad9031 >> 5] |= 128 << 24 - _0xad9031 % 32;
    _0x3be8f2[(_0xad9031 + 64 >> 9 << 4) + 15] = _0xad9031;
    for (var _0x46631f = 0; _0x46631f < _0x3be8f2.length; _0x46631f += 16) {
      _0x12a628 = _0x52dd24[0];
      _0xdd76d0 = _0x52dd24[1];
      _0x8f65ca = _0x52dd24[2];
      _0xeeb1a6 = _0x52dd24[3];
      _0x23ffb0 = _0x52dd24[4];
      _0x17ca7a = _0x52dd24[5];
      _0xab9fac = _0x52dd24[6];
      _0x369a91 = _0x52dd24[7];
      for (var _0xa2ade2 = 0; _0xa2ade2 < 64; _0xa2ade2++) {
        if (_0xa2ade2 < 16) {
          _0x317865[_0xa2ade2] = _0x3be8f2[_0xa2ade2 + _0x46631f];
        } else {
          _0x317865[_0xa2ade2] = _0x493965(_0x493965(_0x493965(_0x44a135(_0x317865[_0xa2ade2 - 2]), _0x317865[_0xa2ade2 - 7]), _0x461a58(_0x317865[_0xa2ade2 - 15])), _0x317865[_0xa2ade2 - 16]);
        }
        _0x2df339 = _0x493965(_0x493965(_0x493965(_0x493965(_0x369a91, _0x3f691d(_0x23ffb0)), _0x54af4e(_0x23ffb0, _0x17ca7a, _0xab9fac)), _0x27da71[_0xa2ade2]), _0x317865[_0xa2ade2]);
        _0x4e664a = _0x493965(_0x758bbb(_0x12a628), _0x53ffaa(_0x12a628, _0xdd76d0, _0x8f65ca));
        _0x369a91 = _0xab9fac;
        _0xab9fac = _0x17ca7a;
        _0x17ca7a = _0x23ffb0;
        _0x23ffb0 = _0x493965(_0xeeb1a6, _0x2df339);
        _0xeeb1a6 = _0x8f65ca;
        _0x8f65ca = _0xdd76d0;
        _0xdd76d0 = _0x12a628;
        _0x12a628 = _0x493965(_0x2df339, _0x4e664a);
      }
      _0x52dd24[0] = _0x493965(_0x12a628, _0x52dd24[0]);
      _0x52dd24[1] = _0x493965(_0xdd76d0, _0x52dd24[1]);
      _0x52dd24[2] = _0x493965(_0x8f65ca, _0x52dd24[2]);
      _0x52dd24[3] = _0x493965(_0xeeb1a6, _0x52dd24[3]);
      _0x52dd24[4] = _0x493965(_0x23ffb0, _0x52dd24[4]);
      _0x52dd24[5] = _0x493965(_0x17ca7a, _0x52dd24[5]);
      _0x52dd24[6] = _0x493965(_0xab9fac, _0x52dd24[6]);
      _0x52dd24[7] = _0x493965(_0x369a91, _0x52dd24[7]);
    }
    return _0x52dd24;
  }
  function _0x1f01ca(_0x205336) {
    var _0x27ef80 = Array();
    var _0x5c7c83 = (1 << _0x5f4e6b) - 1;
    for (var _0x1aa6dd = 0; _0x1aa6dd < _0x205336.length * _0x5f4e6b; _0x1aa6dd += _0x5f4e6b) {
      _0x27ef80[_0x1aa6dd >> 5] |= (_0x205336.charCodeAt(_0x1aa6dd / _0x5f4e6b) & _0x5c7c83) << 24 - _0x1aa6dd % 32;
    }
    return _0x27ef80;
  }
  function _0x17d447(_0x358a9c) {
    _0x358a9c = _0x358a9c.replace(/\r\n/g, "\n");
    var _0x202d86 = "";
    for (var _0x4d9e6d = 0; _0x4d9e6d < _0x358a9c.length; _0x4d9e6d++) {
      var _0x4b1f44 = _0x358a9c.charCodeAt(_0x4d9e6d);
      if (_0x4b1f44 < 128) {
        _0x202d86 += String.fromCharCode(_0x4b1f44);
      } else {
        if (_0x4b1f44 > 127 && _0x4b1f44 < 2048) {
          _0x202d86 += String.fromCharCode(_0x4b1f44 >> 6 | 192);
          _0x202d86 += String.fromCharCode(_0x4b1f44 & 63 | 128);
        } else {
          _0x202d86 += String.fromCharCode(_0x4b1f44 >> 12 | 224);
          _0x202d86 += String.fromCharCode(_0x4b1f44 >> 6 & 63 | 128);
          _0x202d86 += String.fromCharCode(_0x4b1f44 & 63 | 128);
        }
      }
    }
    return _0x202d86;
  }
  function _0x2bc949(_0x3009eb) {
    var _0x526839 = _0xf1feae ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0x1212de = "";
    for (var _0x30afc8 = 0; _0x30afc8 < _0x3009eb.length * 4; _0x30afc8++) {
      _0x1212de += _0x526839.charAt(_0x3009eb[_0x30afc8 >> 2] >> (3 - _0x30afc8 % 4) * 8 + 4 & 15) + _0x526839.charAt(_0x3009eb[_0x30afc8 >> 2] >> (3 - _0x30afc8 % 4) * 8 & 15);
    }
    return _0x1212de;
  }
  _0x471f45 = _0x17d447(_0x471f45);
  return _0x2bc949(_0x3a8c6a(_0x1f01ca(_0x471f45), _0x471f45.length * _0x5f4e6b));
}
function David_0xa4815(_0x52ca8d) {
  function _0x136258(_0x2c7e85, _0x3d429e) {
    var _0x1e7433 = _0x2c7e85 << _0x3d429e | _0x2c7e85 >>> 32 - _0x3d429e;
    return _0x1e7433;
  }
  function _0x52cb0c(_0x2a3ea1) {
    var _0x252e6c = "";
    var _0x9f10c3;
    var _0x5c0fda;
    var _0x3584c4;
    for (_0x9f10c3 = 0; _0x9f10c3 <= 6; _0x9f10c3 += 2) {
      _0x5c0fda = _0x2a3ea1 >>> _0x9f10c3 * 4 + 4 & 15;
      _0x3584c4 = _0x2a3ea1 >>> _0x9f10c3 * 4 & 15;
      _0x252e6c += _0x5c0fda.toString(16) + _0x3584c4.toString(16);
    }
    return _0x252e6c;
  }
  function _0x53d164(_0x5c5bb9) {
    var _0x2d0aab = "";
    var _0x336523;
    var _0x4f1e25;
    for (_0x336523 = 7; _0x336523 >= 0; _0x336523--) {
      _0x4f1e25 = _0x5c5bb9 >>> _0x336523 * 4 & 15;
      _0x2d0aab += _0x4f1e25.toString(16);
    }
    return _0x2d0aab;
  }
  function _0x2c3a52(_0x5e288e) {
    _0x5e288e = _0x5e288e.replace(/\r\n/g, "\n");
    var _0x363476 = "";
    for (var _0x42f730 = 0; _0x42f730 < _0x5e288e.length; _0x42f730++) {
      var _0x4dc19a = _0x5e288e.charCodeAt(_0x42f730);
      if (_0x4dc19a < 128) {
        _0x363476 += String.fromCharCode(_0x4dc19a);
      } else {
        if (_0x4dc19a > 127 && _0x4dc19a < 2048) {
          _0x363476 += String.fromCharCode(_0x4dc19a >> 6 | 192);
          _0x363476 += String.fromCharCode(_0x4dc19a & 63 | 128);
        } else {
          _0x363476 += String.fromCharCode(_0x4dc19a >> 12 | 224);
          _0x363476 += String.fromCharCode(_0x4dc19a >> 6 & 63 | 128);
          _0x363476 += String.fromCharCode(_0x4dc19a & 63 | 128);
        }
      }
    }
    return _0x363476;
  }
  var _0x1f3239;
  var _0x83ed5a, _0x4f3310;
  var _0x42086e = new Array(80);
  var _0x439b11 = 1732584193;
  var _0x43954c = 4023233417;
  var _0x3400fb = 2562383102;
  var _0x8cc197 = 271733878;
  var _0x40df79 = 3285377520;
  var _0x26b8df, _0x312349, _0x21521a, _0xfa8b88, _0x342adb;
  _0x52ca8d = _0x2c3a52(_0x52ca8d);
  var _0x4ebf18 = _0x52ca8d.length;
  var _0x26edf2 = new Array();
  for (_0x83ed5a = 0; _0x83ed5a < _0x4ebf18 - 3; _0x83ed5a += 4) {
    _0x4f3310 = _0x52ca8d.charCodeAt(_0x83ed5a) << 24 | _0x52ca8d.charCodeAt(_0x83ed5a + 1 < 10 ? "0" + (_0x83ed5a + 1) : _0x83ed5a + 1) << 16 | _0x52ca8d.charCodeAt(_0x83ed5a + 2) << 8 | _0x52ca8d.charCodeAt(_0x83ed5a + 3);
    _0x26edf2.push(_0x4f3310);
  }
  switch (_0x4ebf18 % 4) {
    case 0:
      _0x83ed5a = 2147483648;
      break;
    case 1:
      _0x83ed5a = _0x52ca8d.charCodeAt(_0x4ebf18 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x83ed5a = _0x52ca8d.charCodeAt(_0x4ebf18 - 2) << 24 | _0x52ca8d.charCodeAt(_0x4ebf18 - 1) << 16 | 32768;
      break;
    case 3:
      _0x83ed5a = _0x52ca8d.charCodeAt(_0x4ebf18 - 3) << 24 | _0x52ca8d.charCodeAt(_0x4ebf18 - 2) << 16 | _0x52ca8d.charCodeAt(_0x4ebf18 - 1) << 8 | 128;
      break;
  }
  _0x26edf2.push(_0x83ed5a);
  while (_0x26edf2.length % 16 != 14) {
    _0x26edf2.push(0);
  }
  _0x26edf2.push(_0x4ebf18 >>> 29);
  _0x26edf2.push(_0x4ebf18 << 3 & 4294967295);
  for (_0x1f3239 = 0; _0x1f3239 < _0x26edf2.length; _0x1f3239 += 16) {
    for (_0x83ed5a = 0; _0x83ed5a < 16; _0x83ed5a++) {
      _0x42086e[_0x83ed5a] = _0x26edf2[_0x1f3239 + _0x83ed5a];
    }
    for (_0x83ed5a = 16; _0x83ed5a <= 79; _0x83ed5a++) {
      _0x42086e[_0x83ed5a] = _0x136258(_0x42086e[_0x83ed5a - 3] ^ _0x42086e[_0x83ed5a - 8] ^ _0x42086e[_0x83ed5a - 14] ^ _0x42086e[_0x83ed5a - 16], 1);
    }
    _0x26b8df = _0x439b11;
    _0x312349 = _0x43954c;
    _0x21521a = _0x3400fb;
    _0xfa8b88 = _0x8cc197;
    _0x342adb = _0x40df79;
    for (_0x83ed5a = 0; _0x83ed5a <= 19; _0x83ed5a++) {
      _0x4bad16 = _0x136258(_0x26b8df, 5) + (_0x312349 & _0x21521a | ~_0x312349 & _0xfa8b88) + _0x342adb + _0x42086e[_0x83ed5a] + 1518500249 & 4294967295;
      _0x342adb = _0xfa8b88;
      _0xfa8b88 = _0x21521a;
      _0x21521a = _0x136258(_0x312349, 30);
      _0x312349 = _0x26b8df;
      _0x26b8df = _0x4bad16;
    }
    for (_0x83ed5a = 20; _0x83ed5a <= 39; _0x83ed5a++) {
      _0x4bad16 = _0x136258(_0x26b8df, 5) + (_0x312349 ^ _0x21521a ^ _0xfa8b88) + _0x342adb + _0x42086e[_0x83ed5a] + 1859775393 & 4294967295;
      _0x342adb = _0xfa8b88;
      _0xfa8b88 = _0x21521a;
      _0x21521a = _0x136258(_0x312349, 30);
      _0x312349 = _0x26b8df;
      _0x26b8df = _0x4bad16;
    }
    for (_0x83ed5a = 40; _0x83ed5a <= 59; _0x83ed5a++) {
      _0x4bad16 = _0x136258(_0x26b8df, 5) + (_0x312349 & _0x21521a | _0x312349 & _0xfa8b88 | _0x21521a & _0xfa8b88) + _0x342adb + _0x42086e[_0x83ed5a] + 2400959708 & 4294967295;
      _0x342adb = _0xfa8b88;
      _0xfa8b88 = _0x21521a;
      _0x21521a = _0x136258(_0x312349, 30);
      _0x312349 = _0x26b8df;
      _0x26b8df = _0x4bad16;
    }
    for (_0x83ed5a = 60; _0x83ed5a <= 79; _0x83ed5a++) {
      _0x4bad16 = _0x136258(_0x26b8df, 5) + (_0x312349 ^ _0x21521a ^ _0xfa8b88) + _0x342adb + _0x42086e[_0x83ed5a] + 3395469782 & 4294967295;
      _0x342adb = _0xfa8b88;
      _0xfa8b88 = _0x21521a;
      _0x21521a = _0x136258(_0x312349, 30);
      _0x312349 = _0x26b8df;
      _0x26b8df = _0x4bad16;
    }
    _0x439b11 = _0x439b11 + _0x26b8df & 4294967295;
    _0x43954c = _0x43954c + _0x312349 & 4294967295;
    _0x3400fb = _0x3400fb + _0x21521a & 4294967295;
    _0x8cc197 = _0x8cc197 + _0xfa8b88 & 4294967295;
    _0x40df79 = _0x40df79 + _0x342adb & 4294967295;
  }
  var _0x4bad16 = _0x53d164(_0x439b11) + _0x53d164(_0x43954c) + _0x53d164(_0x3400fb) + _0x53d164(_0x8cc197) + _0x53d164(_0x40df79);
  return _0x4bad16.toLowerCase();
}
function David_0x5f0fe0() {
  var _0x51fa84 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x4ef035) {
    var _0x300193 = "";
    var _0x4b0ba1, _0x5f029d, _0x28b21a, _0x4c971d, _0x48bc5b, _0x549ddb, _0x2bcd4c;
    var _0x54b19b = 0;
    _0x4ef035 = utf8Encode(_0x4ef035);
    while (_0x54b19b < _0x4ef035.length) {
      _0x4b0ba1 = _0x4ef035.charCodeAt(_0x54b19b++);
      _0x5f029d = _0x4ef035.charCodeAt(_0x54b19b++);
      _0x28b21a = _0x4ef035.charCodeAt(_0x54b19b++);
      _0x4c971d = _0x4b0ba1 >> 2;
      _0x48bc5b = (_0x4b0ba1 & 3) << 4 | _0x5f029d >> 4;
      _0x549ddb = (_0x5f029d & 15) << 2 | _0x28b21a >> 6;
      _0x2bcd4c = _0x28b21a & 63;
      if (isNaN(_0x5f029d)) {
        _0x549ddb = _0x2bcd4c = 64;
      } else {
        if (isNaN(_0x28b21a)) {
          _0x2bcd4c = 64;
        }
      }
      _0x300193 = _0x300193 + _0x51fa84.charAt(_0x4c971d) + _0x51fa84.charAt(_0x48bc5b) + _0x51fa84.charAt(_0x549ddb) + _0x51fa84.charAt(_0x2bcd4c);
    }
    return _0x300193;
  };
  this.decode = function (_0x44232b) {
    var _0x46c08f = "";
    var _0x46613f, _0x49b279, _0x30939d;
    var _0x13c50b, _0xb2c214, _0x52f217, _0x22d07b;
    var _0x373fb6 = 0;
    _0x44232b = _0x44232b.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x373fb6 < _0x44232b.length) {
      _0x13c50b = _0x51fa84.indexOf(_0x44232b.charAt(_0x373fb6++));
      _0xb2c214 = _0x51fa84.indexOf(_0x44232b.charAt(_0x373fb6++));
      _0x52f217 = _0x51fa84.indexOf(_0x44232b.charAt(_0x373fb6++));
      _0x22d07b = _0x51fa84.indexOf(_0x44232b.charAt(_0x373fb6++));
      _0x46613f = _0x13c50b << 2 | _0xb2c214 >> 4;
      _0x49b279 = (_0xb2c214 & 15) << 4 | _0x52f217 >> 2;
      _0x30939d = (_0x52f217 & 3) << 6 | _0x22d07b;
      _0x46c08f = _0x46c08f + String.fromCharCode(_0x46613f);
      if (_0x52f217 !== 64) {
        _0x46c08f = _0x46c08f + String.fromCharCode(_0x49b279);
      }
      if (_0x22d07b !== 64) {
        _0x46c08f = _0x46c08f + String.fromCharCode(_0x30939d);
      }
    }
    _0x46c08f = utf8Decode(_0x46c08f);
    return _0x46c08f;
  };
  utf8Encode = function (_0x2b57dc) {
    _0x2b57dc = _0x2b57dc.replace(/\r\n/g, "\n");
    var _0x43328f = "";
    for (var _0x35eec3 = 0; _0x35eec3 < _0x2b57dc.length; _0x35eec3++) {
      var _0x539711 = _0x2b57dc.charCodeAt(_0x35eec3);
      if (_0x539711 < 128) {
        _0x43328f += String.fromCharCode(_0x539711);
      } else {
        if (_0x539711 > 127 && _0x539711 < 2048) {
          _0x43328f += String.fromCharCode(_0x539711 >> 6 | 192);
          _0x43328f += String.fromCharCode(_0x539711 & 63 | 128);
        } else {
          _0x43328f += String.fromCharCode(_0x539711 >> 12 | 224);
          _0x43328f += String.fromCharCode(_0x539711 >> 6 & 63 | 128);
          _0x43328f += String.fromCharCode(_0x539711 & 63 | 128);
        }
      }
    }
    return _0x43328f;
  };
  utf8Decode = function (_0x4b984e) {
    var _0x376e31 = "";
    var _0x5c27f5 = 0;
    var _0xfbff6d = 0;
    var _0x3a453c = 0;
    var _0x2b0eb9 = 0;
    while (_0x5c27f5 < _0x4b984e.length) {
      _0xfbff6d = _0x4b984e.charCodeAt(_0x5c27f5);
      if (_0xfbff6d < 128) {
        _0x376e31 += String.fromCharCode(_0xfbff6d);
        _0x5c27f5++;
      } else {
        if (_0xfbff6d > 191 && _0xfbff6d < 224) {
          _0x3a453c = _0x4b984e.charCodeAt(_0x5c27f5 + 1 < 10 ? "0" + (_0x5c27f5 + 1) : _0x5c27f5 + 1);
          _0x376e31 += String.fromCharCode((_0xfbff6d & 31) << 6 | _0x3a453c & 63);
          _0x5c27f5 += 2;
        } else {
          _0x3a453c = _0x4b984e.charCodeAt(_0x5c27f5 + 1 < 10 ? "0" + (_0x5c27f5 + 1) : _0x5c27f5 + 1);
          _0x2b0eb9 = _0x4b984e.charCodeAt(_0x5c27f5 + 2);
          _0x376e31 += String.fromCharCode((_0xfbff6d & 15) << 12 | (_0x3a453c & 63) << 6 | _0x2b0eb9 & 63);
          _0x5c27f5 += 3;
        }
      }
    }
    return _0x376e31;
  };
}
function David_0xc6856e(_0x937d8c, _0x3832df) {
  class _0x98fc9a {
    constructor(_0x48d657) {
      this.env = _0x48d657;
    }
    send(_0x4805be, _0x5b4572 = "GET") {
      _0x4805be = typeof _0x4805be === "string" ? {
        url: _0x4805be
      } : _0x4805be;
      let _0x35a215 = this.get;
      if (_0x5b4572 === "POST") {
        _0x35a215 = this.post;
      }
      return new Promise((_0x50ce1a, _0x393a70) => {
        _0x35a215.call(this, _0x4805be, (_0x838312, _0x113d6a, _0x45e5c3) => {
          if (_0x838312) {
            _0x393a70(_0x838312);
          } else {
            _0x50ce1a(_0x113d6a);
          }
        });
      });
    }
    get(_0x526633) {
      return this.send.call(this.env, _0x526633);
    }
    post(_0x5effcf) {
      return this.send.call(this.env, _0x5effcf, "POST");
    }
  }
  return new class {
    constructor(_0x7f74a7, _0x5ba9e0) {
      this.name = _0x7f74a7;
      this.http = new _0x98fc9a(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x5ba9e0);
      const _0x37bd8a = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x37bd8a);
      }
      this.log("", "🔔 " + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" !== typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" !== typeof $task;
    }
    isSurge() {
      return "undefined" !== typeof $httpClient && "undefined" === typeof $loon;
    }
    isLoon() {
      return "undefined" !== typeof $loon;
    }
    isShadowrocket() {
      return "undefined" !== typeof $rocket;
    }
    toObj(_0x1a4723, _0x12add7 = null) {
      try {
        return JSON.parse(_0x1a4723);
      } catch {
        return _0x12add7;
      }
    }
    toStr(_0x46995b, _0x26f42d = null) {
      try {
        return JSON.stringify(_0x46995b);
      } catch {
        return _0x26f42d;
      }
    }
    getjson(_0x2893da, _0x5c1474) {
      let _0x4d6b5b = _0x5c1474;
      const _0x3b1117 = this.getdata(_0x2893da);
      if (_0x3b1117) {
        try {
          _0x4d6b5b = JSON.parse(this.getdata(_0x2893da));
        } catch {}
      }
      return _0x4d6b5b;
    }
    setjson(_0x2a9331, _0x15defe) {
      try {
        return this.setdata(JSON.stringify(_0x2a9331), _0x15defe);
      } catch {
        return false;
      }
    }
    getScript(_0x27a8bd) {
      return new Promise(_0x31ffc4 => {
        const _0x344ea8 = {
          url: _0x27a8bd
        };
        this.get(_0x344ea8, (_0x47a9eb, _0x4fbfab, _0x47a65a) => _0x31ffc4(_0x47a65a));
      });
    }
    runScript(_0x214229, _0x5b4bd4) {
      return new Promise(_0x489b45 => {
        let _0x1e54ea = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x1e54ea = _0x1e54ea ? _0x1e54ea.replace(/\n/g, "").trim() : _0x1e54ea;
        let _0x3c1c2c = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x3c1c2c = _0x3c1c2c ? _0x3c1c2c * 1 : 20;
        _0x3c1c2c = _0x5b4bd4 && _0x5b4bd4.timeout ? _0x5b4bd4.timeout : _0x3c1c2c;
        const [_0x5c9590, _0x54f5f5] = _0x1e54ea.split("@");
        const _0x28e165 = {
          script_text: _0x214229,
          mock_type: "cron",
          timeout: _0x3c1c2c
        };
        const _0x5c47a5 = {
          "X-Key": _0x5c9590,
          Accept: "*/*"
        };
        const _0x451b54 = {
          url: "http: //" + _0x54f5f5 + "/v1/scripting/evaluate",
          body: _0x28e165,
          headers: _0x5c47a5
        };
        this.post(_0x451b54, (_0x65fe37, _0x233cd4, _0x1c61e4) => _0x489b45(_0x1c61e4));
      }).catch(_0x4cba86 => this.logErr(_0x4cba86));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x3287c7 = this.path.resolve(this.dataFile);
        const _0x5849ac = this.path.resolve(process.cwd(), this.dataFile);
        const _0x395d5b = this.fs.existsSync(_0x3287c7);
        const _0x58be2e = !_0x395d5b && this.fs.existsSync(_0x5849ac);
        if (_0x395d5b || _0x58be2e) {
          const _0x501eb1 = _0x395d5b ? _0x3287c7 : _0x5849ac;
          try {
            return JSON.parse(this.fs.readFileSync(_0x501eb1));
          } catch (_0x3b7392) {
            return {};
          }
        } else {
          return {};
        }
      } else {
        return {};
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x399517 = this.path.resolve(this.dataFile);
        const _0x13f88e = this.path.resolve(process.cwd(), this.dataFile);
        const _0x13d63d = this.fs.existsSync(_0x399517);
        const _0x470392 = !_0x13d63d && this.fs.existsSync(_0x13f88e);
        const _0x5a4e30 = JSON.stringify(this.data);
        if (_0x13d63d) {
          this.fs.writeFileSync(_0x399517, _0x5a4e30);
        } else {
          if (_0x470392) {
            this.fs.writeFileSync(_0x13f88e, _0x5a4e30);
          } else {
            this.fs.writeFileSync(_0x399517, _0x5a4e30);
          }
        }
      }
    }
    lodash_get(_0x47062a, _0x1980e3, _0x4e8f6b = undefined) {
      const _0x2d9ff3 = _0x1980e3.replace(/[(d+)]/g, ".$1").split(".");
      let _0x421dd8 = _0x47062a;
      for (const _0x341590 of _0x2d9ff3) {
        _0x421dd8 = Object(_0x421dd8)[_0x341590];
        if (_0x421dd8 === undefined) {
          return _0x4e8f6b;
        }
      }
      return _0x421dd8;
    }
    lodash_set(_0x6b485f, _0x1dc6de, _0x3faf6f) {
      if (Object(_0x6b485f) !== _0x6b485f) {
        return _0x6b485f;
      }
      if (!Array.isArray(_0x1dc6de)) {
        _0x1dc6de = _0x1dc6de.toString().match(/[^.[]]+/g) || [];
      }
      _0x1dc6de.slice(0, -1).reduce((_0x583021, _0x16bf17, _0x4d9399) => Object(_0x583021[_0x16bf17]) === _0x583021[_0x16bf17] ? _0x583021[_0x16bf17] : _0x583021[_0x16bf17] = Math.abs(_0x1dc6de[_0x4d9399 + 1 < 10 ? "0" + (_0x4d9399 + 1) : _0x4d9399 + 1]) >> 0 === +_0x1dc6de[_0x4d9399 + 1 < 10 ? "0" + (_0x4d9399 + 1) : _0x4d9399 + 1] ? [] : {}, _0x6b485f)[_0x1dc6de[_0x1dc6de.length - 1]] = _0x3faf6f;
      return _0x6b485f;
    }
    getdata(_0x2ccbee) {
      let _0x3b4035 = this.getval(_0x2ccbee);
      if (/^@/.test(_0x2ccbee)) {
        const [, _0x1bfbdf, _0xaede33] = /^@(.*?).(.*?)$/.exec(_0x2ccbee);
        const _0x196f66 = _0x1bfbdf ? this.getval(_0x1bfbdf) : "";
        if (_0x196f66) {
          try {
            const _0x119a60 = JSON.parse(_0x196f66);
            _0x3b4035 = _0x119a60 ? this.lodash_get(_0x119a60, _0xaede33, "") : _0x3b4035;
          } catch (_0xccc8ac) {
            _0x3b4035 = "";
          }
        }
      }
      return _0x3b4035;
    }
    setdata(_0x2860c4, _0x2c7fb7) {
      let _0x359a72 = false;
      if (/^@/.test(_0x2c7fb7)) {
        const [, _0x6e8e32, _0x11e462] = /^@(.*?).(.*?)$/.exec(_0x2c7fb7);
        const _0x15b465 = this.getval(_0x6e8e32);
        const _0x2bba73 = _0x6e8e32 ? _0x15b465 === "null" ? null : _0x15b465 || "{}" : "{}";
        try {
          const _0x43de97 = JSON.parse(_0x2bba73);
          this.lodash_set(_0x43de97, _0x11e462, _0x2860c4);
          _0x359a72 = this.setval(JSON.stringify(_0x43de97), _0x6e8e32);
        } catch (_0x28fddf) {
          const _0x3f59c0 = {};
          this.lodash_set(_0x3f59c0, _0x11e462, _0x2860c4);
          _0x359a72 = this.setval(JSON.stringify(_0x3f59c0), _0x6e8e32);
        }
      } else {
        _0x359a72 = this.setval(_0x2860c4, _0x2c7fb7);
      }
      return _0x359a72;
    }
    getval(_0x2fdfdb) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x2fdfdb);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x2fdfdb);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x2fdfdb];
          } else {
            return this.data && this.data[_0x2fdfdb] || null;
          }
        }
      }
    }
    setval(_0x4bf635, _0x75e1d4) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x4bf635, _0x75e1d4);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x4bf635, _0x75e1d4);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x75e1d4] = _0x4bf635;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x75e1d4] || null;
          }
        }
      }
    }
    initGotEnv(_0x2dc19a) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x2dc19a) {
        _0x2dc19a.headers = _0x2dc19a.headers ? _0x2dc19a.headers : {};
        if (undefined === _0x2dc19a.headers.Cookie && undefined === _0x2dc19a.cookieJar) {
          _0x2dc19a.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x107690, _0x14a0de = () => {}) {
      if (_0x107690.headers) {
        delete _0x107690.headers["Content-Type"];
        delete _0x107690.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x107690.headers = _0x107690.headers || {};
          const _0x46f2e1 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x107690.headers, _0x46f2e1);
        }
        $httpClient.get(_0x107690, (_0x190c1a, _0x5c0e0e, _0x42c185) => {
          if (!_0x190c1a && _0x5c0e0e) {
            _0x5c0e0e.body = _0x42c185;
            _0x5c0e0e.statusCode = _0x5c0e0e.status;
          }
          _0x14a0de(_0x190c1a, _0x5c0e0e, _0x42c185);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x107690.opts = _0x107690.opts || {};
            const _0x2e83fc = {
              hints: false
            };
            Object.assign(_0x107690.opts, _0x2e83fc);
          }
          $task.fetch(_0x107690).then(_0x20d57c => {
            const {
              statusCode: _0x4b2c03,
              statusCode,
              headers,
              body
            } = _0x20d57c;
            const _0x39e631 = {
              status: _0x4b2c03,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x14a0de(null, _0x39e631, body);
          }, _0x2868a4 => _0x14a0de(_0x2868a4));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x107690);
            this.got(_0x107690).on("redirect", (_0x3466d0, _0xb1b67e) => {
              try {
                if (_0x3466d0.headers["set-cookie"]) {
                  const _0x46fdc6 = _0x3466d0.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x46fdc6) {
                    this.ckjar.setCookieSync(_0x46fdc6, null);
                  }
                  _0xb1b67e.cookieJar = this.ckjar;
                }
              } catch (_0x119b8a) {
                this.logErr(_0x119b8a);
              }
            }).then(_0xdbe8b0 => {
              const {
                statusCode: _0x27c2da,
                statusCode,
                headers,
                body
              } = _0xdbe8b0;
              const _0xe93b27 = {
                status: _0x27c2da,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x14a0de(null, _0xe93b27, body);
            }, _0x493b4a => {
              const {
                message: _0x32700e,
                response: _0x3ba337
              } = _0x493b4a;
              _0x14a0de(_0x32700e, _0x3ba337, _0x3ba337 && _0x3ba337.body);
            });
          }
        }
      }
    }
    post(_0x567cff, _0x5ac717 = () => {}) {
      const _0x4987e4 = _0x567cff.method ? _0x567cff.method.toLocaleLowerCase() : "post";
      if (_0x567cff.body && _0x567cff.headers && !_0x567cff.headers["Content-Type"]) {
        _0x567cff.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x567cff.headers) {
        delete _0x567cff.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x567cff.headers = _0x567cff.headers || {};
          const _0x1d510b = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x567cff.headers, _0x1d510b);
        }
        $httpClient[_0x4987e4](_0x567cff, (_0x3790d2, _0x4d501b, _0xfba3f8) => {
          if (!_0x3790d2 && _0x4d501b) {
            _0x4d501b.body = _0xfba3f8;
            _0x4d501b.statusCode = _0x4d501b.status;
          }
          _0x5ac717(_0x3790d2, _0x4d501b, _0xfba3f8);
        });
      } else {
        if (this.isQuanX()) {
          _0x567cff.method = _0x4987e4;
          if (this.isNeedRewrite) {
            _0x567cff.opts = _0x567cff.opts || {};
            const _0x1a5e68 = {
              hints: false
            };
            Object.assign(_0x567cff.opts, _0x1a5e68);
          }
          $task.fetch(_0x567cff).then(_0x30ef04 => {
            const {
              statusCode: _0x8fc514,
              statusCode,
              headers,
              body
            } = _0x30ef04;
            const _0x336c00 = {
              status: _0x8fc514,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x5ac717(null, _0x336c00, body);
          }, _0x108d0f => _0x5ac717(_0x108d0f));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x567cff);
            const {
              url,
              ..._0xa930c2
            } = _0x567cff;
            this.got[_0x4987e4](url, _0xa930c2).then(_0x2394a0 => {
              const {
                statusCode: _0x3768a8,
                statusCode,
                headers,
                body
              } = _0x2394a0;
              const _0x17eb7c = {
                status: _0x3768a8,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x5ac717(null, _0x17eb7c, body);
            }, _0x43d7de => {
              const {
                message: _0x161559,
                response: _0x1d0164
              } = _0x43d7de;
              _0x5ac717(_0x161559, _0x1d0164, _0x1d0164 && _0x1d0164.body);
            });
          }
        }
      }
    }
    put(_0x5bdfa0, _0x33e562 = () => {}) {
      const _0x4b9373 = _0x5bdfa0.method ? _0x5bdfa0.method.toLocaleLowerCase() : "put";
      if (_0x5bdfa0.body && _0x5bdfa0.headers && !_0x5bdfa0.headers["Content-Type"]) {
        _0x5bdfa0.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x5bdfa0.headers) {
        delete _0x5bdfa0.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x5bdfa0.headers = _0x5bdfa0.headers || {};
          const _0x9a32f4 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x5bdfa0.headers, _0x9a32f4);
        }
        $httpClient[_0x4b9373](_0x5bdfa0, (_0x310d72, _0x3b6a12, _0x5a63d7) => {
          if (!_0x310d72 && _0x3b6a12) {
            _0x3b6a12.body = _0x5a63d7;
            _0x3b6a12.statusCode = _0x3b6a12.status;
          }
          _0x33e562(_0x310d72, _0x3b6a12, _0x5a63d7);
        });
      } else {
        if (this.isQuanX()) {
          _0x5bdfa0.method = _0x4b9373;
          if (this.isNeedRewrite) {
            _0x5bdfa0.opts = _0x5bdfa0.opts || {};
            const _0x14fb71 = {
              hints: false
            };
            Object.assign(_0x5bdfa0.opts, _0x14fb71);
          }
          $task.fetch(_0x5bdfa0).then(_0x3ec174 => {
            const {
              statusCode: _0x419bed,
              statusCode,
              headers,
              body
            } = _0x3ec174;
            const _0x294128 = {
              status: _0x419bed,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x33e562(null, _0x294128, body);
          }, _0x25bede => _0x33e562(_0x25bede));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x5bdfa0);
            const {
              url,
              ..._0x3fb26b
            } = _0x5bdfa0;
            this.got[_0x4b9373](url, _0x3fb26b).then(_0x59fde4 => {
              const {
                statusCode: _0x433b25,
                statusCode,
                headers,
                body
              } = _0x59fde4;
              const _0x717799 = {
                status: _0x433b25,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x33e562(null, _0x717799, body);
            }, _0x2d8aaa => {
              const {
                message: _0x108bb0,
                response: _0x441caa
              } = _0x2d8aaa;
              _0x33e562(_0x108bb0, _0x441caa, _0x441caa && _0x441caa.body);
            });
          }
        }
      }
    }
    time(_0x3a06a9, _0x49eac9 = null) {
      const _0xa15830 = _0x49eac9 ? new Date(_0x49eac9) : new Date();
      const _0x5742c4 = {
        "M+": _0xa15830.getMonth() + 1,
        "d+": _0xa15830.getDate(),
        "H+": _0xa15830.getHours(),
        "m+": _0xa15830.getMinutes(),
        "s+": _0xa15830.getSeconds(),
        "q+": Math.floor((_0xa15830.getMonth() + 3) / 3),
        S: _0xa15830.getMilliseconds()
      };
      if (/(y+)/.test(_0x3a06a9)) {
        _0x3a06a9 = _0x3a06a9.replace(RegExp.$1, (_0xa15830.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x29d75e in _0x5742c4) if (new RegExp("(" + _0x29d75e + ")").test(_0x3a06a9)) {
        _0x3a06a9 = _0x3a06a9.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5742c4[_0x29d75e] : ("00" + _0x5742c4[_0x29d75e]).substr(("" + _0x5742c4[_0x29d75e]).length));
      }
      return _0x3a06a9;
    }
    msg(_0x5594e3 = _0x937d8c, _0x299433 = "", _0x378b36 = "", _0x11882e) {
      const _0x36f941 = _0x10cc9a => {
        if (!_0x10cc9a) {
          return _0x10cc9a;
        }
        if (typeof _0x10cc9a === "string") {
          if (this.isLoon()) {
            return _0x10cc9a;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x10cc9a
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x10cc9a
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x10cc9a === "object") {
            if (this.isLoon()) {
              let _0x4ee98a = _0x10cc9a.openUrl || _0x10cc9a.url || _0x10cc9a["open-url"];
              let _0x3c7a21 = _0x10cc9a.mediaUrl || _0x10cc9a["media-url"];
              const _0x146d6f = {
                openUrl: _0x4ee98a,
                mediaUrl: _0x3c7a21
              };
              return _0x146d6f;
            } else {
              if (this.isQuanX()) {
                let _0x4e1eec = _0x10cc9a["open-url"] || _0x10cc9a.url || _0x10cc9a.openUrl;
                let _0x2967a4 = _0x10cc9a["media-url"] || _0x10cc9a.mediaUrl;
                const _0xa65ab0 = {
                  "open-url": _0x4e1eec,
                  "media-url": _0x2967a4
                };
                return _0xa65ab0;
              } else {
                if (this.isSurge()) {
                  let _0x5e8163 = _0x10cc9a.url || _0x10cc9a.openUrl || _0x10cc9a["open-url"];
                  const _0x23296a = {
                    url: _0x5e8163
                  };
                  return _0x23296a;
                }
              }
            }
          } else {
            return undefined;
          }
        }
      };
      if (!this.isMute) {
        if (this.isSurge() || this.isLoon()) {
          $notification.post(_0x5594e3, _0x299433, _0x378b36, _0x36f941(_0x11882e));
        } else {
          if (this.isQuanX()) {
            $notify(_0x5594e3, _0x299433, _0x378b36, _0x36f941(_0x11882e));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x3d9d7c = ["", "==============📣系统通知📣=============="];
        _0x3d9d7c.push(_0x5594e3);
        _0x299433 ? _0x3d9d7c.push(_0x299433) : "";
        _0x378b36 ? _0x3d9d7c.push(_0x378b36) : "";
        console.log(_0x3d9d7c.join("\n"));
        this.logs = this.logs.concat(_0x3d9d7c);
      }
    }
    log(..._0x2c0a55) {
      if (_0x2c0a55.length > 0) {
        this.logs = [...this.logs, ..._0x2c0a55];
      }
      console.log(_0x2c0a55.join(this.logSeparator));
    }
    logErr(_0x541f9d, _0x3b8952) {
      const _0x4a2bb6 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x4a2bb6) {
        this.log("", "❗️" + this.name + ", 错误!", _0x541f9d);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x541f9d.stack);
      }
    }
    wait(_0x34bdb8) {
      return new Promise(_0x2b011a => setTimeout(_0x2b011a, _0x34bdb8));
    }
    done(_0x1eed3e = {}) {
      const _0x463a53 = new Date().getTime();
      const _0x54ead1 = (_0x463a53 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0x54ead1 + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x1eed3e);
      }
    }
  }(_0x937d8c, _0x3832df);
}