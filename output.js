//Tue Aug 13 2024 10:03:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const D_j_0x24153d = new D_j_0x33aa9a("疯读小说");
const D_j_0x2f10ce = "V1.0.4";
const D_j_0x567e7e = "fdxsapp";
let D_j_0x27462b = D_j_0x24153d.getjson("fdxsapp", []);
const D_j_0xa7a725 = D_j_0x24153d.isNode() ? require("http") : "";
const D_j_0x14bd34 = D_j_0x24153d.isNode() ? require("./sendNotify") : "";
const D_j_0x3ab02e = D_j_0x24153d.isNode() ? require("./david_cookies") : "";
let D_j_0x5dedc0 = D_j_0x24153d.getdata("tguserid") || 1;
let D_j_0x584bf8 = D_j_0x24153d.getdata("fdxsactivecode") || 0;
let D_j_0x46d91d = D_j_0x24153d.getval("fdxsuserck") || 1;
let D_j_0x312f26 = D_j_0x24153d.getval("apiHost") || "http://106.15.104.124:8080";
if (D_j_0x24153d.getval("apiHosts")) {
  D_j_0x312f26 = D_j_0x24153d.getval("apiHosts");
}
let D_j_0x5e4e55 = D_j_0x24153d.getval("tz") || "1";
var D_j_0x772e70 = "";
var D_j_0x3e8c68 = "";
let D_j_0x5ed272 = "";
let D_j_0x598319 = "";
let D_j_0x4b78be = "";
let D_j_0x4e99a8 = "";
let D_j_0x22e807 = "";
let D_j_0x1d7d1c = "";
let D_j_0x1b8ce0 = "";
let D_j_0x553cdd = "";
let D_j_0x1f6781 = "";
let D_j_0x2342eb = 1;
let D_j_0x34410a = 1;
let D_j_0xf76602 = 1;
let D_j_0x2bb670 = 1;
let D_j_0x4ea778 = "";
let D_j_0xd444d4 = "";
let D_j_0x398c68 = 3;
let D_j_0x5856ee = "";
const D_j_0xf154bb = {
  Accept: "*/*",
  "Accept-Encoding": "gzip, deflate, br",
  "Accept-Language": "zh-Hans-CN;q=1, en-CN;q=0.9",
  Connection: "keep-alive",
  Host: "fiction.fengdunovel.com:443",
  "User-Agent": "FDReader/2.5.3 (iPhone; iOS 15.2; Scale/3.00)"
};
const D_j_0x330172 = "26281";
let D_j_0x9de8f3 = 0;
if (D_j_0x24153d.isNode()) {
  if (process.env.FDXSAPP) {
    D_j_0x27462b = JSON.parse(process.env.FDXSAPP);
  } else {
    D_j_0x27462b = D_j_0x3ab02e.FDXS;
  }
  D_j_0x5dedc0 = process.env.TGUSERID;
  D_j_0x584bf8 = process.env.FDXSACTIVECODE;
  if (process.env.APIHOST) {
    D_j_0x312f26 = process.env.APIHOST;
  }
  if (process.env.APIHOSTS) {
    D_j_0x312f26 = process.env.APIHOSTS;
  }
  D_j_0x772e70 = new Date(new Date().getTime() + 28800000).getHours();
  D_j_0x3e8c68 = new Date(new Date().getTime() + 28800000).getMinutes();
} else {
  D_j_0x772e70 = new Date().getHours();
  D_j_0x3e8c68 = new Date().getMinutes();
}
!(async () => {
  D_j_0x24153d.log("📢 开始检测服务器接口状态>>>");
  let _0x56365f = false;
  const _0x21201a = D_j_0x312f26.split("&");
  const _0x9c089 = _0x21201a.length;
  for (let _0x22d215 = 0; _0x22d215 < _0x9c089; _0x22d215++) {
    if (D_j_0x24153d.isNode()) {
      _0x56365f = await D_j_0x58f5f6("" + _0x21201a[_0x22d215], 2500);
    } else {
      _0x56365f = await D_j_0x4597b4("" + _0x21201a[_0x22d215], 2500);
    }
    if (_0x56365f == true) {
      D_j_0x312f26 = _0x21201a[_0x22d215];
      D_j_0x24153d.log("📢 接口" + (_0x22d215 + 1) + "[" + _0x21201a[_0x22d215] + "]服务器接口正常! 🎉");
      break;
    }
    if (_0x22d215 == _0x9c089 - 1 && _0x56365f == false) {
      D_j_0x24153d.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
      D_j_0x24153d.msg(D_j_0x24153d.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
      return;
    }
  }
  if (typeof $request !== "undefined") {
    await D_j_0x4e38c5();
  } else {
    if (!D_j_0x584bf8 || !D_j_0x5dedc0 || D_j_0x5dedc0 == 1 || D_j_0x584bf8 == 0 || D_j_0x584bf8.length != 32) {
      D_j_0x24153d.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await D_j_0x26279c(D_j_0x567e7e, D_j_0x5dedc0, D_j_0x584bf8);
    D_j_0x24153d.log("📢 " + D_j_0x1b8ce0);
    D_j_0x24153d.log("🔔 当前脚本版本号: " + D_j_0x2f10ce + "，最新版本号: " + D_j_0x22e807);
    if (D_j_0x5856ee != "") {
      let _0x1fd6ef = new Date(D_j_0x5856ee).getTime();
      let _0x442288 = new Date().getTime();
      if (_0x442288 > _0x1fd6ef) {
        D_j_0x24153d.log("⚠️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (D_j_0x2f10ce < D_j_0x22e807) {
      D_j_0x24153d.log("⚠️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      D_j_0x3c06a4("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (D_j_0x4e99a8 != true) {
      D_j_0x24153d.log("⚠️ 抱歉, 此脚本已停用。");
      return;
    }
    if (D_j_0x4ea778 != true) {
      D_j_0x24153d.log("⚠️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (D_j_0x4b78be != true) {
      D_j_0x24153d.log("⚠️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    if (D_j_0x1f6781 == true) {
      D_j_0x24153d.log("🔔 此脚本采用付费模式。🔒");
    } else {
      D_j_0x24153d.log("🔔 此脚本采用免费模式。🔓");
    }
    if (D_j_0x5856ee != "") {
      if (D_j_0x1f6781 == true) {
        D_j_0x24153d.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        let _0xc44475 = new Date(D_j_0x5856ee).getTime();
        let _0x35688c = new Date().getTime();
        if (_0x35688c > _0xc44475) {
          D_j_0x24153d.log("⚠️ 抱歉，VIP到期了，请及时付费。");
          return;
        }
      }
    } else {
      if (D_j_0x553cdd != true) {
        D_j_0x24153d.log("⚠️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
        return;
      }
    }
    if (D_j_0x2342eb > 1) {
      D_j_0x24153d.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + D_j_0x398c68 * D_j_0x2342eb + "个账号。");
    }
    if (D_j_0x34410a > 1) {
      D_j_0x24153d.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + D_j_0xf76602 + "次, 已经运行了" + D_j_0x2bb670 + "次。");
    }
    if (D_j_0x1d7d1c != true) {
      D_j_0x24153d.log("⚠️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (D_j_0x27462b.length > D_j_0x398c68 * D_j_0x2342eb) {
      D_j_0x24153d.log("⚠️ 当前用户一次最多运行" + D_j_0x398c68 * D_j_0x2342eb + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (D_j_0x27462b.length == 0) {
      D_j_0x24153d.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (D_j_0x2bb670 + D_j_0x27462b.length > D_j_0xf76602) {
      D_j_0x24153d.log("📢 一共发现了" + D_j_0x27462b.length + "个账号");
      D_j_0x24153d.log("⚠️ 当前用户运行次数剩余" + (D_j_0xf76602 - D_j_0x2bb670) + "次，还可以运行" + (D_j_0xf76602 - D_j_0x2bb670) + "个账号，还需要" + (D_j_0x27462b.length - (D_j_0xf76602 - D_j_0x2bb670)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (D_j_0x5856ee != "") {
      D_j_0x24153d.log("📢 你的会员有效期到： " + D_j_0x5856ee);
    }
    D_j_0x24153d.log("一共有" + D_j_0x27462b.length + "个账号");
    for (let _0x46a1e6 = 0; _0x46a1e6 < D_j_0x27462b.length; _0x46a1e6++) {
      D_j_0x24153d.log("开始执行第" + (_0x46a1e6 + 1) + "个账号");
      D_j_0x5ed272 = D_j_0x27462b[_0x46a1e6];
      await D_j_0x5d576f();
      await D_j_0x115829();
      await D_j_0x448da7();
      if (D_j_0x772e70 == 12) {
        await D_j_0x2811e6("9");
      }
      if (D_j_0x5ed272.notify == 1) {
        await D_j_0x3c06a4(D_j_0x598319);
      }
      await D_j_0x4a8add(D_j_0x567e7e, D_j_0x5dedc0);
    }
  }
})().catch(_0x596fe4 => D_j_0x24153d.logErr(_0x596fe4)).finally(() => D_j_0x24153d.done());
async function D_j_0x4e38c5() {
  if ($request.url.match(/\/cashIncentive\/center/)) {
    const _0x52e8b5 = $request.url;
    const _0x4f0177 = _0x52e8b5.split("_token=")[1];
    let _0x2d7a8b = D_j_0x46d91d - 1;
    if (D_j_0x27462b[_0x2d7a8b]) {
      if (D_j_0x27462b[_0x2d7a8b].token != _0x4f0177) {
        D_j_0x27462b[_0x2d7a8b].token = _0x4f0177;
      } else {
        return;
      }
    } else {
      const _0x27f756 = {
        token: _0x4f0177
      };
      D_j_0x27462b[_0x2d7a8b] = _0x27f756;
    }
    D_j_0x24153d.setdata(JSON.stringify(D_j_0x27462b, null, 2), "fdxsapp");
    D_j_0x24153d.msg(D_j_0x24153d.name, "疯读小说账号" + (_0x2d7a8b + 1) + ": token获取成功！🎉");
  }
}
function D_j_0x5d576f() {
  return new Promise((_0x4cb5f3, _0x5a25ac) => {
    const _0x2982b3 = Math.round(new Date().getTime() / 1000).toString();
    const _0x38083e = "GET&/doReader/handle_user_info&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x2982b3 + "&json=&B1w2OjLnERw6fXfl";
    const _0xb51dce = D_j_0x4afae6(_0x38083e);
    const _0x5e02f3 = new D_j_0x3bff6c();
    let _0x46b599 = _0x5e02f3.encode(_0xb51dce);
    const _0x2f08e0 = _0x46b599.substring(0, 42);
    const _0x121e34 = "https://fiction.fengdunovel.com/doReader/handle_user_info?_sign=" + _0x2f08e0 + "&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x2982b3 + "&version=v9";
    const _0x29e016 = {
      url: _0x121e34,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.get(_0x29e016, async (_0x12f038, _0x2f2c05, _0x5b512c) => {
      try {
        if (D_j_0x5c710f(_0x5b512c)) {
          const _0x5de9b8 = JSON.parse(_0x5b512c);
          if (_0x5de9b8.result_code == 2000) {
            D_j_0x24153d.log("【用户名】： " + _0x5de9b8.result.user_name);
            D_j_0x24153d.log("【当前现金】： " + _0x5de9b8.result.cash);
            D_j_0x9de8f3 = _0x5de9b8.result.cash;
            D_j_0x598319 += "\n【用户名】: " + _0x5de9b8.result.user_name + "\n";
          }
        }
      } catch (_0x57edba) {
        D_j_0x24153d.log(_0x57edba);
      }
      _0x4cb5f3();
    });
  });
}
function D_j_0x299583() {
  return new Promise((_0x58a2e7, _0x1943bd) => {
    const _0x3827fb = "https://fiction.fengdunovel.com/doReader/cash_incentive/book?exp_groups=DIV_CASH_V5_BIG_0528%3A1&exp_groups=DIV_CASH_V7_PUSH_TASK%3A1&exp_groups=DIV_CASH_SHAKE_20210831%3A1&gender=0&api_version=cash_v8&_token=" + D_j_0x5ed272.token;
    const _0x203b51 = {
      url: _0x3827fb,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.get(_0x203b51, async (_0x5710bf, _0x4cebb3, _0x560627) => {
      try {
        if (D_j_0x5c710f(_0x560627)) {
          const _0x18ef2f = JSON.parse(_0x560627);
          if (_0x18ef2f.result_code == 2000) {
            let _0x13888d = _0x18ef2f.result.books;
            let _0x36cd48 = D_j_0x4874eb(1, _0x13888d.length - 1);
            let _0x11ea98 = _0x13888d[_0x36cd48];
            let _0x27dd3c = _0x11ea98.bookId;
            D_j_0x24153d.log("推荐书本： " + _0x11ea98.bookTitle);
            await D_j_0x307dde(_0x27dd3c, D_j_0x330172);
          }
        }
      } catch (_0x16a0ee) {
        D_j_0x24153d.log(_0x16a0ee);
      }
      _0x58a2e7();
    });
  });
}
function D_j_0x2fcaf0() {
  return new Promise((_0x1ac8f0, _0x2dae9c) => {
    const _0x341042 = "https://fiction.fengdunovel.com/doReader/task_center/sign_in?version=cash_v8&exp_groups%5B%5D=DIV_CASH_V5_BIG_0528:1&exp_groups%5B%5D=DIV_CASH_V7_PUSH_TASK:1&exp_groups%5B%5D=DIV_CASH_SHAKE_20210831:1&_token=" + D_j_0x5ed272.token;
    const _0x263dbe = {
      url: _0x341042,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.post(_0x263dbe, async (_0x26e2f5, _0x2c74b2, _0x3f37a8) => {
      try {
        if (D_j_0x5c710f(_0x3f37a8)) {
          const _0x192bc7 = JSON.parse(_0x3f37a8);
          if (_0x192bc7.result_code == 2000) {
            D_j_0x24153d.log("签到成功，获得" + _0x192bc7.result.received_rewards.prize_num + "金币 🎉");
            D_j_0x598319 += "【签到任务】: 签到成功\n";
          } else {
            if (_0x192bc7.result_code == 2002) {
              D_j_0x24153d.log("签到已完成");
            }
          }
        }
      } catch (_0x1e2220) {
        D_j_0x24153d.log(_0x1e2220);
      }
      _0x1ac8f0();
    });
  });
}
function D_j_0x115829() {
  return new Promise((_0x55f756, _0xa6bdb9) => {
    const _0x274e41 = "https://fiction.fengdunovel.com/a/fict/cashIncentive/center?exp_groups=DIV_CASH_V5_BIG_0528%3A1&exp_groups=DIV_CASH_V7_PUSH_TASK%3A1&exp_groups=DIV_CASH_SHAKE_20210831%3A1&gender=0&api_version=cash_v8&is_native=0&new_activation=0&_token=" + D_j_0x5ed272.token;
    const _0x1e23d6 = {
      url: _0x274e41,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.get(_0x1e23d6, async (_0x4b30ad, _0x4f966b, _0x5c77e6) => {
      try {
        if (D_j_0x5c710f(_0x5c77e6)) {
          const _0xeede97 = JSON.parse(_0x5c77e6);
          const _0x218edf = _0xeede97.result.tasks;
          if (_0xeede97.result_code == 2000) {
            if (_0xeede97.result.sign_in.is_sign_in_today == false) {
              await D_j_0x2fcaf0();
            } else {
              D_j_0x24153d.log("今天已签到");
            }
          }
          const _0x49b2b3 = [_0x218edf.calendar_task, _0x218edf.watch_ad_task, _0x218edf.treasure_box_tasks, _0x218edf.sign_in_ad_task, _0x218edf.notice_task, _0x218edf.first_reader_coin_task, _0x218edf.reader_coin_task, _0x218edf.reader_coin_ad_task, _0x218edf.first_reader_envelope_task, _0x218edf.reader_envelope_task, _0x218edf.ad_ball_tasks, _0x218edf.shake_tasks, _0x218edf.open_envelope_task, _0x218edf.slide_envelope_task, _0x218edf.slide_coin_task, _0x218edf.book_ending_task, _0x218edf.multiple_ad_tasks];
          for (let _0x221487 = 0; _0x221487 < _0x49b2b3.length; _0x221487++) {
            let _0x118770 = _0x49b2b3[_0x221487];
            for (let _0x502bcf = 0; _0x502bcf < _0x118770.length; _0x502bcf++) {
              let _0x150b4d = _0x118770[_0x502bcf];
              if (_0x150b4d.taskStatus == 0 && _0x150b4d.usedCount < _0x150b4d.limitCount) {
                D_j_0x24153d.log("模拟看视频......");
                await D_j_0x24153d.wait(D_j_0x4874eb(35000, 55000));
                await D_j_0x53d388(_0x150b4d.taskId);
              }
            }
          }
          let _0x4af63a = _0x218edf.top_book_task[0];
          if (_0x4af63a.taskStatus == 0 && _0x4af63a.usedCount < _0x4af63a.limitCount) {
            D_j_0x24153d.log("模拟看推荐书籍......");
            await D_j_0x24153d.wait(D_j_0x4874eb(5000, 10000));
            await D_j_0x299583();
          }
        }
      } catch (_0x4cc330) {
        D_j_0x24153d.log(_0x4cc330);
      }
      _0x55f756();
    });
  });
}
function D_j_0x46fe96() {
  return new Promise((_0x8da7a3, _0x4aa2ff) => {
    const _0x4d891c = Math.round(new Date().getTime() / 1000).toString();
    const _0x5c0ed0 = D_j_0x4874eb(55, 100);
    const _0x3a9d6d = "POST&/doReader/api/readtime&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x4d891c + "&reading_time=" + _0x5c0ed0 + "&json=&B1w2OjLnERw6fXfl";
    const _0x552e81 = D_j_0x4afae6(_0x3a9d6d);
    const _0x2e62f2 = new D_j_0x3bff6c();
    let _0x5b3d43 = _0x2e62f2.encode(_0x552e81);
    const _0x231544 = _0x5b3d43.substring(0, 42);
    const _0x4fa5fb = "https://fiction.fengdunovel.com/doReader/api/readtime?_token=" + D_j_0x5ed272.token + "&_sign=" + _0x231544 + "&_sv=v1&_ts=" + _0x4d891c + "&reading_time=" + _0x5c0ed0;
    const _0x2fa8f8 = {
      url: _0x4fa5fb,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.post(_0x2fa8f8, async (_0xe25677, _0x333bd8, _0x5cb1cd) => {
      try {
        if (D_j_0x5c710f(_0x5cb1cd)) {
          const _0x4694ae = JSON.parse(_0x5cb1cd);
          if (_0x4694ae.error_msg == "Ok") {
            D_j_0x24153d.log("刷阅读时长成功 🎉");
          }
        }
      } catch (_0x1cc55f) {
        D_j_0x24153d.log(_0x1cc55f);
      }
      _0x8da7a3();
    });
  });
}
function D_j_0x26ef3f() {
  return new Promise((_0x3f7d59, _0x2aae4c) => {
    const _0x1fac3e = Math.round(new Date().getTime() / 1000).toString();
    const _0x5a6439 = D_j_0x4874eb(55, 100);
    const _0x4c4fe7 = "POST&/doReader/api/listen_time&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x1fac3e + "&listen_time=" + _0x5a6439 + "&json=&B1w2OjLnERw6fXfl";
    const _0xcd77be = D_j_0x4afae6(_0x4c4fe7);
    const _0x435f1a = new D_j_0x3bff6c();
    let _0x2d2696 = _0x435f1a.encode(_0xcd77be);
    const _0x2fafd9 = _0x2d2696.substring(0, 42);
    const _0x223a87 = "https://fiction.fengdunovel.com/doReader/api/listen_time?_token=" + D_j_0x5ed272.token + "&_sign=" + _0x2fafd9 + "&_sv=v1&_ts=" + _0x1fac3e + "&listen_time=" + _0x5a6439;
    const _0x3fea53 = {
      url: _0x223a87,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.post(_0x3fea53, async (_0x55d36e, _0x5e2074, _0x2750d9) => {
      try {
        if (D_j_0x5c710f(_0x2750d9)) {
          const _0x462f5d = JSON.parse(_0x2750d9);
          if (_0x462f5d.err_msg == "Ok") {
            D_j_0x24153d.log("刷听书时长成功 🎉");
          }
        }
      } catch (_0xb7781f) {
        D_j_0x24153d.log(_0xb7781f);
      }
      _0x3f7d59();
    });
  });
}
function D_j_0x1a3338() {
  return new Promise((_0x20b712, _0xf73999) => {
    const _0x59d904 = Math.round(new Date().getTime() / 1000).toString();
    const _0x13e531 = "POST&/a/fict/h5api/cashIncentive/turntableDo&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x59d904 + "&json={\"draw_type\": \"draw\",\"is_sp_card\": false}&B1w2OjLnERw6fXfl";
    const _0x726e3e = D_j_0x4afae6(_0x13e531);
    const _0x1a867e = new D_j_0x3bff6c();
    let _0x4eec38 = _0x1a867e.encode(_0x726e3e);
    const _0x5d72cd = _0x4eec38.substring(0, 42);
    const _0x406bc4 = "https://fiction.fengdunovel.com/a/fict/h5api/cashIncentive/turntableDo?_token=" + D_j_0x5ed272.token + "&_ts=" + _0x59d904 + "&_sv=v1&_sign=" + _0x5d72cd;
    const _0x351d92 = {
      url: _0x406bc4,
      headers: D_j_0xf154bb,
      body: "{\"draw_type\": \"draw\",\"is_sp_card\": false}"
    };
    D_j_0x24153d.post(_0x351d92, async (_0x5324d0, _0x35f457, _0x1dfe80) => {
      try {
        if (D_j_0x5c710f(_0x1dfe80)) {
          const _0x3899ff = JSON.parse(_0x1dfe80);
          if (_0x3899ff.result_code == 2000) {
            D_j_0x24153d.log("恭喜你，转动转盘获得" + _0x3899ff.result.coin_count + " 🎉, 今天已经使用" + _0x3899ff.result.use_count + "次");
          }
        }
      } catch (_0x30fcc0) {
        D_j_0x24153d.log(_0x30fcc0);
      }
      _0x20b712();
    });
  });
}
function D_j_0x448da7() {
  return new Promise((_0x34f683, _0x2c2469) => {
    const _0x54d6a9 = Math.round(new Date().getTime() / 1000).toString();
    const _0xa51523 = "GET&/a/fict/h5api/cashIncentive/turntableHome&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x54d6a9 + "&json=&B1w2OjLnERw6fXfl";
    const _0x3dfa02 = D_j_0x4afae6(_0xa51523);
    const _0xaa7f39 = new D_j_0x3bff6c();
    let _0x28b579 = _0xaa7f39.encode(_0x3dfa02);
    const _0x2965e9 = _0x28b579.substring(0, 42);
    const _0x394a46 = "https://fiction.fengdunovel.com/a/fict/h5api/cashIncentive/turntableHome?_token=" + D_j_0x5ed272.token + "&_ts=" + _0x54d6a9 + "&_sv=v1&_sign=" + _0x2965e9;
    const _0x3b4935 = {
      url: _0x394a46,
      headers: D_j_0xf154bb
    };
    D_j_0x24153d.get(_0x3b4935, async (_0x2bf68f, _0x3d76df, _0x2dd150) => {
      try {
        if (D_j_0x5c710f(_0x2dd150)) {
          const _0x5c7d17 = JSON.parse(_0x2dd150);
          if (_0x5c7d17.result_code == 2000 && _0x5c7d17.result.my_info.has_draw < _0x5c7d17.result.my_info.limit_draw) {
            await D_j_0x1a3338();
            await D_j_0x24153d.wait(D_j_0x4874eb(5000, 1000));
          }
        }
      } catch (_0xa53cba) {
        D_j_0x24153d.log(_0xa53cba);
      }
      _0x34f683();
    });
  });
}
function D_j_0x53d388(_0x4ee693) {
  return new Promise((_0x3fd3de, _0x4be43d) => {
    const _0x44d78a = Math.round(new Date().getTime() / 1000).toString();
    const _0x248a02 = "POST&/a/fict/h5api/task/multFinish&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x44d78a + "&json={\"task_ids\":[\"" + _0x4ee693 + "\"]}&B1w2OjLnERw6fXfl";
    const _0x57930a = D_j_0x4afae6(_0x248a02);
    const _0x5ab999 = new D_j_0x3bff6c();
    let _0x576ab = _0x5ab999.encode(_0x57930a);
    const _0x1abf0b = _0x576ab.substring(0, 42);
    const _0x511ade = "https://fiction.fengdunovel.com/a/fict/h5api/task/multFinish?_token=" + D_j_0x5ed272.token + "&_ts=" + _0x44d78a + "&_sv=v1&_sign=" + _0x1abf0b;
    const _0x2ee475 = {
      task_ids: [_0x4ee693]
    };
    const _0x2f1b79 = {
      url: _0x511ade,
      headers: D_j_0xf154bb,
      body: JSON.stringify(_0x2ee475)
    };
    D_j_0x24153d.post(_0x2f1b79, async (_0x2096f3, _0x1be97f, _0x233a96) => {
      try {
        if (D_j_0x5c710f(_0x233a96)) {
          const _0x181742 = JSON.parse(_0x233a96);
          if (_0x181742.result_code == 2000) {
            D_j_0x24153d.log("任务【" + _0x181742.result.tasks[0].task.title + "】完成，恭喜你获得了" + _0x181742.result.tasks[0].task.rewardNum + "金币 🎉");
          }
        }
      } catch (_0x66dd6b) {
        D_j_0x24153d.log(_0x66dd6b);
      }
      _0x3fd3de();
    });
  });
}
function D_j_0x307dde(_0x463463, _0x5ec8e3) {
  return new Promise((_0x30b4cd, _0x1656d4) => {
    const _0x23295b = Math.round(new Date().getTime() / 1000).toString();
    const _0x41b592 = "POST&/a/fict/h5api/task/multFinish&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x23295b + "&json={\"extra\":\"{\\\"book_id\\\":" + _0x463463 + "}\",\"task_ids\":[\"" + _0x5ec8e3 + "\"]}&B1w2OjLnERw6fXfl";
    const _0x3ae1b8 = D_j_0x4afae6(_0x41b592);
    const _0x47c179 = new D_j_0x3bff6c();
    let _0x199f54 = _0x47c179.encode(_0x3ae1b8);
    const _0x175156 = _0x199f54.substring(0, 42);
    const _0x2c2bb9 = "https://fiction.fengdunovel.com/a/fict/h5api/task/multFinish?_token=" + D_j_0x5ed272.token + "&_ts=" + _0x23295b + "&_sv=v1&_sign=" + _0x175156;
    const _0x4449c1 = {
      extra: "{\"book_id\":" + _0x463463 + "}",
      task_ids: [_0x5ec8e3]
    };
    const _0x14ff6d = {
      url: _0x2c2bb9,
      headers: D_j_0xf154bb,
      body: JSON.stringify(_0x4449c1)
    };
    D_j_0x24153d.post(_0x14ff6d, async (_0x3327a8, _0x440efa, _0x200d92) => {
      try {
        if (D_j_0x5c710f(_0x200d92)) {
          const _0x58be3b = JSON.parse(_0x200d92);
          if (_0x58be3b.result_code == 2000) {
            D_j_0x24153d.log("任务【" + _0x58be3b.result.tasks[0].task.title + "】完成，恭喜你获得了" + _0x58be3b.result.tasks[0].task.rewardNum + "金币 🎉");
          }
        }
      } catch (_0x2199b4) {
        D_j_0x24153d.log(_0x2199b4);
      }
      _0x30b4cd();
    });
  });
}
function D_j_0x2811e6(_0xc85f1a) {
  return new Promise((_0xdc6124, _0x165575) => {
    const _0x205ace = Math.round(new Date().getTime() / 1000).toString();
    const _0x475bb6 = "POST&/a/fict/h5api/incentive/withdraw&_sv=v1&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x205ace + "&action_type=wechat&json={\"withdraw_id\":" + _0xc85f1a + "}&B1w2OjLnERw6fXfl";
    const _0x3caadf = D_j_0x4afae6(_0x475bb6);
    const _0x322880 = new D_j_0x3bff6c();
    let _0x3ab65e = _0x322880.encode(_0x3caadf);
    const _0x27142c = _0x3ab65e.substring(0, 42);
    const _0xee00b7 = "https://fiction.fengdunovel.com/a/fict/h5api/incentive/withdraw?action_type=wechat&_token=" + D_j_0x5ed272.token + "&_ts=" + _0x205ace + "&_sv=v1&_sign=" + _0x27142c;
    const _0x12f616 = {
      url: _0xee00b7,
      headers: D_j_0xf154bb,
      body: "{\n                \"withdraw_id\": " + _0xc85f1a + "\n              }"
    };
    D_j_0x24153d.post(_0x12f616, async (_0x346a3d, _0x2714d1, _0x3b7177) => {
      try {
        if (D_j_0x5c710f(_0x3b7177)) {
          const _0x3acee8 = JSON.parse(_0x3b7177);
          if (_0x3acee8.result_code == 2000) {
            if (_0x3acee8.result.status == 1) {
              D_j_0x24153d.log("恭喜你成功提现，还剩余额" + _0x3acee8.result.cash + " 🎉");
            } else {
              if (_0x3acee8.result.status == 2) {
                D_j_0x24153d.log("" + _0x3acee8.result.msg);
              }
            }
          } else {
            D_j_0x24153d.log();
          }
        }
      } catch (_0x29afe8) {
        D_j_0x24153d.log(_0x29afe8);
      }
      _0xdc6124();
    });
  });
}
function D_j_0x26279c(_0x2f620c, _0x5c8c09, _0x1016bd) {
  return new Promise((_0x3587f2, _0x3b7b31) => {
    const _0x2977ca = D_j_0x312f26 + "/script/permissions/lastest";
    const _0x15c15b = {
      appName: _0x2f620c,
      userId: _0x5c8c09,
      activityCode: _0x1016bd,
      version: D_j_0x2f10ce
    };
    const _0x2ba70e = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x1aa733 = {
      url: _0x2977ca,
      headers: _0x2ba70e,
      body: JSON.stringify(_0x15c15b)
    };
    D_j_0x24153d.post(_0x1aa733, async (_0x481ad4, _0x1caf54, _0xe954d1) => {
      const _0x304823 = _0xe954d1.replace(/\"/g, "").slice(34);
      const _0x281115 = new D_j_0x3bff6c();
      result = JSON.parse(_0x281115.decode(_0x304823));
      try {
        D_j_0x22e807 = result.version;
        D_j_0x4b78be = result.userAuth;
        D_j_0x4e99a8 = result.scriptAuth;
        D_j_0x1d7d1c = result.runAuth;
        D_j_0x1b8ce0 = result.notify;
        D_j_0x553cdd = result.vipAuth;
        D_j_0x1f6781 = result.isCharge;
        D_j_0x2342eb = result.runAcounts;
        D_j_0x34410a = result.buyCount;
        D_j_0x2bb670 = result.runedCounts;
        D_j_0xf76602 = result.runTotalCounts;
        D_j_0x4ea778 = result.userRank;
        D_j_0xd444d4 = result.invicate;
        D_j_0x398c68 = result.accountNumbers;
        D_j_0x5856ee = result.vipDate;
      } catch (_0x446927) {
        D_j_0x24153d.log(_0x446927);
      }
      _0x3587f2();
    });
  });
}
function D_j_0x4a8add(_0x34e6a0, _0x3af019) {
  return new Promise((_0x3b4be5, _0x1b9d5f) => {
    const _0x3e4b24 = D_j_0x312f26 + "/script/run/add";
    const _0x48a878 = {
      appName: _0x34e6a0,
      userId: _0x3af019,
      activityCode: D_j_0x584bf8,
      version: D_j_0x2f10ce
    };
    const _0x31498a = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x176959 = {
      url: _0x3e4b24,
      headers: _0x31498a,
      body: JSON.stringify(_0x48a878)
    };
    D_j_0x24153d.post(_0x176959, async (_0x2d38a4, _0x1caf28, _0x1af30f) => {
      _0x3b4be5();
    });
  });
}
function D_j_0x58f5f6(_0x58193f, _0x21515d) {
  return new Promise((_0x179071, _0x419c93) => {
    const _0x2e4be6 = setTimeout(() => {
      _0x179071(false);
    }, _0x21515d);
    const _0x2fe45f = D_j_0xa7a725.get(_0x58193f, _0x3410c8 => {
      clearTimeout(_0x2e4be6);
      if (_0x3410c8.statusCode === 404) {
        _0x179071(true);
      } else {
        _0x179071(false);
      }
    });
    _0x2fe45f.on("error", _0x34b3fa => {
      clearTimeout(_0x2e4be6);
      _0x179071(false);
    });
    _0x2fe45f.on("timeout", () => {
      _0x2fe45f.abort();
      _0x419c93(new Error("请求超时"));
    });
  });
}
async function D_j_0x4597b4(_0x1f92e0, _0x1b4ad4 = 3000) {
  return new Promise((_0x662b6c, _0x417eb6) => {
    const _0xb4acaf = {
      url: _0x1f92e0 + "/docs"
    };
    setTimeout(() => {
      _0x662b6c(false);
    }, _0x1b4ad4);
    D_j_0x24153d.get(_0xb4acaf, async (_0x40bd00, _0x5304bd, _0x741723) => {
      if (_0x5304bd.status == 401) {
        _0x662b6c(true);
      } else {
        _0x662b6c(false);
      }
    });
  });
}
async function D_j_0x3415ce(_0x14885a, _0x41fea4, _0x557e8d) {
  return new Promise((_0x5721cc, _0x3ecb64) => {
    const _0x5e26d3 = D_j_0x312f26 + "/redis/hash/get/" + _0x14885a + "/" + _0x41fea4;
    const _0x537fa2 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x5aca61 = {
      url: _0x5e26d3,
      headers: _0x537fa2
    };
    D_j_0x24153d.get(_0x5aca61, async (_0x299a0f, _0x21db87, _0x5a5218) => {
      const _0x3ec3c7 = _0x5a5218.replace(/\"/g, "");
      answerTexts[_0x557e8d] = _0x3ec3c7;
      _0x5721cc();
    });
  });
}
function D_j_0x4e2e12(_0x3f0727, _0x98aa5a, _0x292c93) {
  return new Promise((_0x16c11f, _0x1473e7) => {
    const _0x587e81 = D_j_0x312f26 + "/redis/hash/set";
    const _0x337491 = {
      key: _0x3f0727,
      hashKey: _0x98aa5a,
      hashValue: _0x292c93
    };
    const _0x193153 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x28ecc5 = {
      url: _0x587e81,
      headers: _0x193153,
      body: JSON.stringify(_0x337491)
    };
    D_j_0x24153d.post(_0x28ecc5, async (_0xc05465, _0x2a48a4, _0x52ba9a) => {
      _0x16c11f();
    });
  });
}
function D_j_0x4da41d(_0x23c4e6) {
  return new Promise((_0x2fb8e4, _0x267fb7) => {
    const _0x44c248 = D_j_0x312f26 + "/redis/set/pop/" + _0x23c4e6;
    const _0x422857 = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const _0x3d6f12 = {
      url: _0x44c248,
      headers: _0x422857
    };
    D_j_0x24153d.get(_0x3d6f12, async (_0xf44f6, _0x20b70c, _0x2dd04b) => {
      const _0x406e74 = _0x2dd04b.replace(/\"/g, "");
      popCookie = _0x406e74;
      _0x2fb8e4();
    });
  });
}
function D_j_0x7af5ee(_0x1e46d8, _0x2c589a, _0x18141a) {
  let _0x4942f3 = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (wxtsapp[_0x18141a].ua && wxtsapp[_0x18141a].ua != "") {
    _0x4942f3 = wxtsapp[_0x18141a].ua;
  }
  const _0x31b0fb = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": _0x4942f3,
    Authorization: wxtsapp[_0x18141a].auth,
    Host: "hb2.hbdtxt.com"
  };
  const _0x1e6444 = {
    url: _0x1e46d8,
    headers: _0x31b0fb
  };
  if (_0x2c589a) {
    _0x1e6444.body = _0x2c589a;
  }
  return _0x1e6444;
}
async function D_j_0x113b78(_0x5a63a4, _0x300ffd, _0x169b18) {
  httpResult = null;
  return new Promise(_0xa07154 => {
    D_j_0x24153d[_0x5a63a4](_0x300ffd, async (_0x57928e, _0x365c8b, _0x595ea6) => {
      try {
        if (_0x57928e) {
          D_j_0x24153d.log(_0x169b18 + ": " + _0x5a63a4 + "请求失败");
          D_j_0x24153d.log(JSON.stringify(_0x57928e));
          D_j_0x24153d.logErr(_0x57928e);
        } else {
          if (D_j_0x5c710f(_0x595ea6)) {
            httpResult = JSON.parse(_0x595ea6);
            if (debug == 1) {
              D_j_0x24153d.log(httpResult);
            }
          }
        }
      } catch (_0x1e7360) {
        D_j_0x24153d.logErr(_0x1e7360, _0x365c8b);
      } finally {
        _0xa07154();
      }
    });
  });
}
function D_j_0x27204a(_0x5b8f68) {
  _0x5b8f68 = _0x5b8f68.replace(/\"/g, "");
  var _0x544ee3;
  var _0x3001bd = {};
  var _0x3f2c46 = _0x5b8f68.slice(_0x5b8f68.indexOf("?") + 1).split("&");
  for (var _0x10636d = 0; _0x10636d < _0x3f2c46.length; _0x10636d++) {
    _0x544ee3 = _0x3f2c46[_0x10636d].split("=");
    _0x3001bd[_0x544ee3[0]] = _0x544ee3[1];
  }
  return _0x3001bd;
}
function D_j_0x786f0(_0x4dd49e, _0x5d4f84) {
  if (_0x4dd49e.length * 2 <= _0x5d4f84) {
    return _0x4dd49e;
  }
  var _0x573540 = 0;
  var _0x321d3a = "";
  for (var _0x547777 = 0; _0x547777 < _0x4dd49e.length; _0x547777++) {
    _0x321d3a = _0x321d3a + _0x4dd49e.charAt(_0x547777);
    if (_0x4dd49e.charCodeAt(_0x547777) > 128) {
      _0x573540 = _0x573540 + 2;
      if (_0x573540 >= _0x5d4f84) {
        return _0x321d3a.substring(0, _0x321d3a.length - 1) + "...";
      }
    } else {
      _0x573540 = _0x573540 + 1;
      if (_0x573540 >= _0x5d4f84) {
        return _0x321d3a.substring(0, _0x321d3a.length - 2) + "...";
      }
    }
  }
  return _0x321d3a;
}
function D_j_0x37e5d2() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function D_j_0x5c710f(_0x509e11) {
  try {
    if (typeof JSON.parse(_0x509e11) == "object") {
      return true;
    }
  } catch (_0x193984) {
    console.log(_0x193984);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function D_j_0xa07fb9(_0xe92afd) {
  var _0x527ba4 = Object.keys(_0xe92afd).map(function (_0x1154f0) {
    return encodeURIComponent(_0x1154f0) + "=" + encodeURIComponent(_0xe92afd[_0x1154f0]);
  }).join("&");
  return _0x527ba4;
}
function D_j_0x5e758a(_0x20cb59) {
  var _0x574443 = String.fromCharCode(_0x20cb59.charCodeAt(0) + _0x20cb59.length);
  for (var _0x3153d7 = 1; _0x3153d7 < _0x20cb59.length; _0x3153d7++) {
    _0x574443 += String.fromCharCode(_0x20cb59.charCodeAt(_0x3153d7) + _0x20cb59.charCodeAt(_0x3153d7 - 1));
  }
  return escape(_0x574443);
}
function D_j_0x3ee819(_0x31cd0c) {
  _0x31cd0c = unescape(_0x31cd0c);
  var _0x3f6680 = String.fromCharCode(_0x31cd0c.charCodeAt(0) - _0x31cd0c.length);
  for (var _0x478ea3 = 1; _0x478ea3 < _0x31cd0c.length; _0x478ea3++) {
    _0x3f6680 += String.fromCharCode(_0x31cd0c.charCodeAt(_0x478ea3) - _0x3f6680.charCodeAt(_0x478ea3 - 1));
  }
  return _0x3f6680;
}
function D_j_0x4874eb(_0x26bf56, _0x1ecc96) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * _0x26bf56 + 1);
      break;
    case 2:
      return parseInt(Math.random() * (_0x1ecc96 - _0x26bf56 + 1) + _0x26bf56);
      break;
    default:
      return 0;
      break;
  }
}
function D_j_0xf33c61() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function D_j_0x48ff88() {
  function _0x52b8f5() {
    return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
  }
  return _0x52b8f5() + _0x52b8f5() + "-" + _0x52b8f5() + "-" + _0x52b8f5() + "-" + _0x52b8f5() + "-" + _0x52b8f5() + _0x52b8f5() + _0x52b8f5();
}
function D_j_0x5804de(_0x3bbee7) {
  if (_0x3bbee7.length == 11) {
    let _0x248331 = _0x3bbee7.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
    return _0x248331;
  } else {
    return _0x3bbee7;
  }
}
function D_j_0x72baa6(_0x442d87) {
  return new Promise(_0x26e6aa => {
    try {
      var _0x32cd7a = require("request");
      const _0x1d1685 = {
        c: _0x442d87
      };
      const _0x233247 = {
        method: "GET",
        url: "https://v1.hitokoto.cn/",
        qs: _0x1d1685
      };
      _0x32cd7a(_0x233247, function (_0x45d4db, _0x3e2307, _0x49ac56) {
        if (_0x45d4db) {
          throw new Error(_0x45d4db);
        }
        let _0x45de39 = JSON.parse(_0x49ac56);
        let _0x1301c4 = _0x45de39.hitokoto;
        _0x26e6aa(_0x1301c4);
        return _0x1301c4;
      });
    } catch (_0x4c9dd5) {
      console.log(_0x4c9dd5);
    }
  });
}
function D_j_0x4cf9f8() {
  return Math.round(new Date().getTime()).toString();
}
function D_j_0x271d94() {
  return Math.round(new Date().getTime() / 1000).toString();
}
function D_j_0x1fad69() {
  if (D_j_0x5e4e55 == 1) {
    D_j_0x24153d.msg(D_j_0x24153d.name, "", D_j_0x24153d.message);
  }
}
async function D_j_0x3c06a4(_0x4f2f65) {
  if (D_j_0x772e70 == 9 || D_j_0x772e70 == 12 || D_j_0x772e70 == 18) {
    if (D_j_0x5e4e55 == 1) {
      if (D_j_0x24153d.isNode()) {
        await D_j_0x14bd34.sendNotify(D_j_0x24153d.name, _0x4f2f65);
      } else {
        D_j_0x24153d.msg(D_j_0x24153d.name, "", _0x4f2f65);
      }
    } else {
      D_j_0x24153d.log(_0x4f2f65);
    }
  }
}
async function D_j_0x2625ce(_0x3e6730, _0x24e144, _0x173429) {
  return new Promise((_0x2ad2c3, _0x3b80d5) => {
    const _0x5508d9 = "https://wxpusher.zjiecode.com/api/send/message";
    const _0x58bc7c = {
      appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
      content: _0x24e144,
      summary: "快手答题余额通知",
      contentType: 1,
      uids: [_0x173429],
      verifyPay: false
    };
    const _0x1222d5 = {
      "Content-Type": "application/json"
    };
    const _0x2d3db3 = {
      url: _0x5508d9,
      headers: _0x1222d5,
      body: JSON.stringify(_0x58bc7c)
    };
    D_j_0x24153d.post(_0x2d3db3, async (_0x102de6, _0x236d48, _0x1fbabc) => {
      _0x2ad2c3();
    });
  });
}
function D_j_0x246020(_0x2beebf, _0x2f75c1) {
  _0x2f75c1 = _0x2f75c1 || "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let _0x201348 = "";
  for (let _0x1d4ffb = 0; _0x1d4ffb < _0x2beebf; _0x1d4ffb++) {
    let _0x130939 = Math.floor(Math.random() * _0x2f75c1.length);
    _0x201348 += _0x2f75c1.substring(_0x130939, _0x130939 + 1);
  }
  return _0x201348;
}
function D_j_0x4afae6(_0x433eea) {
  function _0x4d1abe(_0x325b30, _0x1f1909) {
    return _0x325b30 << _0x1f1909 | _0x325b30 >>> 32 - _0x1f1909;
  }
  function _0x4cc92e(_0x3fcae4, _0x422029) {
    var _0x3a3bd7, _0x5a35a9, _0x16d62c, _0x2cbc29, _0x46ea58;
    _0x16d62c = 2147483648 & _0x3fcae4;
    _0x2cbc29 = 2147483648 & _0x422029;
    _0x3a3bd7 = 1073741824 & _0x3fcae4;
    _0x5a35a9 = 1073741824 & _0x422029;
    _0x46ea58 = (1073741823 & _0x3fcae4) + (1073741823 & _0x422029);
    return _0x3a3bd7 & _0x5a35a9 ? 2147483648 ^ _0x46ea58 ^ _0x16d62c ^ _0x2cbc29 : _0x3a3bd7 | _0x5a35a9 ? 1073741824 & _0x46ea58 ? 3221225472 ^ _0x46ea58 ^ _0x16d62c ^ _0x2cbc29 : 1073741824 ^ _0x46ea58 ^ _0x16d62c ^ _0x2cbc29 : _0x46ea58 ^ _0x16d62c ^ _0x2cbc29;
  }
  function _0x36e256(_0x42bc68, _0x236b75, _0x1510a8) {
    return _0x42bc68 & _0x236b75 | ~_0x42bc68 & _0x1510a8;
  }
  function _0x10643e(_0x454640, _0xcc7d9, _0x8bee04) {
    return _0x454640 & _0x8bee04 | _0xcc7d9 & ~_0x8bee04;
  }
  function _0x49a5df(_0x375b94, _0x1261d3, _0x2e810d) {
    return _0x375b94 ^ _0x1261d3 ^ _0x2e810d;
  }
  function _0x327f84(_0x1e4f96, _0x4d3d75, _0x5b7c18) {
    return _0x4d3d75 ^ (_0x1e4f96 | ~_0x5b7c18);
  }
  function _0x5a16c3(_0x351dbe, _0x12c37a, _0x3f6c77, _0x2fb60f, _0x2877c1, _0x5059bc, _0xb463aa) {
    _0x351dbe = _0x4cc92e(_0x351dbe, _0x4cc92e(_0x4cc92e(_0x36e256(_0x12c37a, _0x3f6c77, _0x2fb60f), _0x2877c1), _0xb463aa));
    return _0x4cc92e(_0x4d1abe(_0x351dbe, _0x5059bc), _0x12c37a);
  }
  function _0x23089e(_0x2b500e, _0x422545, _0x219f9b, _0x2d89a8, _0x48b35a, _0x6827d9, _0xaebf7f) {
    _0x2b500e = _0x4cc92e(_0x2b500e, _0x4cc92e(_0x4cc92e(_0x10643e(_0x422545, _0x219f9b, _0x2d89a8), _0x48b35a), _0xaebf7f));
    return _0x4cc92e(_0x4d1abe(_0x2b500e, _0x6827d9), _0x422545);
  }
  function _0x35aab1(_0x465980, _0x168fd5, _0x373edb, _0x557f17, _0x4042c8, _0x57c34e, _0x1ccb71) {
    _0x465980 = _0x4cc92e(_0x465980, _0x4cc92e(_0x4cc92e(_0x49a5df(_0x168fd5, _0x373edb, _0x557f17), _0x4042c8), _0x1ccb71));
    return _0x4cc92e(_0x4d1abe(_0x465980, _0x57c34e), _0x168fd5);
  }
  function _0x3b4ef8(_0x12f907, _0x49a10c, _0x44bc7c, _0xb1f67c, _0xe32af8, _0x4aa16a, _0x241114) {
    _0x12f907 = _0x4cc92e(_0x12f907, _0x4cc92e(_0x4cc92e(_0x327f84(_0x49a10c, _0x44bc7c, _0xb1f67c), _0xe32af8), _0x241114));
    return _0x4cc92e(_0x4d1abe(_0x12f907, _0x4aa16a), _0x49a10c);
  }
  function _0x5229b4(_0x27f214) {
    for (var _0x2b6815, _0x37db09 = _0x27f214.length, _0x547922 = _0x37db09 + 8, _0xb0cc71 = (_0x547922 - _0x547922 % 64) / 64, _0x11626a = 16 * (_0xb0cc71 + 1), _0x2528cd = new Array(_0x11626a - 1), _0x119a13 = 0, _0x1056a5 = 0; _0x37db09 > _0x1056a5;) {
      _0x2b6815 = (_0x1056a5 - _0x1056a5 % 4) / 4;
      _0x119a13 = _0x1056a5 % 4 * 8;
      _0x2528cd[_0x2b6815] = _0x2528cd[_0x2b6815] | _0x27f214.charCodeAt(_0x1056a5) << _0x119a13;
      _0x1056a5++;
    }
    _0x2b6815 = (_0x1056a5 - _0x1056a5 % 4) / 4;
    _0x119a13 = _0x1056a5 % 4 * 8;
    _0x2528cd[_0x2b6815] = _0x2528cd[_0x2b6815] | 128 << _0x119a13;
    _0x2528cd[_0x11626a - 2] = _0x37db09 << 3;
    _0x2528cd[_0x11626a - 1] = _0x37db09 >>> 29;
    return _0x2528cd;
  }
  function _0x3f80b7(_0x4fdfc4) {
    var _0x370f43,
      _0x5db571,
      _0x2c12f2 = "",
      _0x342e8c = "";
    for (_0x5db571 = 0; 3 >= _0x5db571; _0x5db571++) {
      _0x370f43 = _0x4fdfc4 >>> 8 * _0x5db571 & 255;
      _0x342e8c = "0" + _0x370f43.toString(16);
      _0x2c12f2 += _0x342e8c.substr(_0x342e8c.length - 2, 2);
    }
    return _0x2c12f2;
  }
  function _0x18d0af(_0x33f8e7) {
    _0x33f8e7 = _0x33f8e7.replace(/\r\n/g, "\n");
    for (var _0x465daa = "", _0x908872 = 0; _0x908872 < _0x33f8e7.length; _0x908872++) {
      var _0x583cca = _0x33f8e7.charCodeAt(_0x908872);
      128 > _0x583cca ? _0x465daa += String.fromCharCode(_0x583cca) : _0x583cca > 127 && 2048 > _0x583cca ? (_0x465daa += String.fromCharCode(_0x583cca >> 6 | 192), _0x465daa += String.fromCharCode(63 & _0x583cca | 128)) : (_0x465daa += String.fromCharCode(_0x583cca >> 12 | 224), _0x465daa += String.fromCharCode(_0x583cca >> 6 & 63 | 128), _0x465daa += String.fromCharCode(63 & _0x583cca | 128));
    }
    return _0x465daa;
  }
  var _0x169283,
    _0x56d5bf,
    _0x5f058,
    _0x1b37f1,
    _0x99ac4d,
    _0x973966,
    _0x7ff6e0,
    _0x5ab32c,
    _0x5728cf,
    _0xfea4ec = [],
    _0x16bdfe = 7,
    _0x6801b2 = 12,
    _0x18796f = 17,
    _0x17934d = 22,
    _0x4c1bca = 5,
    _0x28f212 = 9,
    _0x4283ca = 14,
    _0x49ac7d = 20,
    _0x3b6a38 = 4,
    _0x5674ac = 11,
    _0x19fe8e = 16,
    _0x320b59 = 23,
    _0xa9398e = 6,
    _0xfa8d0f = 10,
    _0x23a947 = 15,
    _0x3e5fc0 = 21;
  for (_0x433eea = _0x18d0af(_0x433eea), _0xfea4ec = _0x5229b4(_0x433eea), _0x973966 = 1732584193, _0x7ff6e0 = 4023233417, _0x5ab32c = 2562383102, _0x5728cf = 271733878, _0x169283 = 0; _0x169283 < _0xfea4ec.length; _0x169283 += 16) {
    _0x56d5bf = _0x973966;
    _0x5f058 = _0x7ff6e0;
    _0x1b37f1 = _0x5ab32c;
    _0x99ac4d = _0x5728cf;
    _0x973966 = _0x5a16c3(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 0], _0x16bdfe, 3614090360);
    _0x5728cf = _0x5a16c3(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 1], _0x6801b2, 3905402710);
    _0x5ab32c = _0x5a16c3(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 2], _0x18796f, 606105819);
    _0x7ff6e0 = _0x5a16c3(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 3], _0x17934d, 3250441966);
    _0x973966 = _0x5a16c3(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 4], _0x16bdfe, 4118548399);
    _0x5728cf = _0x5a16c3(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 5], _0x6801b2, 1200080426);
    _0x5ab32c = _0x5a16c3(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 6], _0x18796f, 2821735955);
    _0x7ff6e0 = _0x5a16c3(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 7], _0x17934d, 4249261313);
    _0x973966 = _0x5a16c3(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 8], _0x16bdfe, 1770035416);
    _0x5728cf = _0x5a16c3(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 9], _0x6801b2, 2336552879);
    _0x5ab32c = _0x5a16c3(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 10], _0x18796f, 4294925233);
    _0x7ff6e0 = _0x5a16c3(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 11], _0x17934d, 2304563134);
    _0x973966 = _0x5a16c3(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 12], _0x16bdfe, 1804603682);
    _0x5728cf = _0x5a16c3(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 13], _0x6801b2, 4254626195);
    _0x5ab32c = _0x5a16c3(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 14], _0x18796f, 2792965006);
    _0x7ff6e0 = _0x5a16c3(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 15], _0x17934d, 1236535329);
    _0x973966 = _0x23089e(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 1], _0x4c1bca, 4129170786);
    _0x5728cf = _0x23089e(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 6], _0x28f212, 3225465664);
    _0x5ab32c = _0x23089e(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 11], _0x4283ca, 643717713);
    _0x7ff6e0 = _0x23089e(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 0], _0x49ac7d, 3921069994);
    _0x973966 = _0x23089e(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 5], _0x4c1bca, 3593408605);
    _0x5728cf = _0x23089e(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 10], _0x28f212, 38016083);
    _0x5ab32c = _0x23089e(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 15], _0x4283ca, 3634488961);
    _0x7ff6e0 = _0x23089e(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 4], _0x49ac7d, 3889429448);
    _0x973966 = _0x23089e(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 9], _0x4c1bca, 568446438);
    _0x5728cf = _0x23089e(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 14], _0x28f212, 3275163606);
    _0x5ab32c = _0x23089e(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 3], _0x4283ca, 4107603335);
    _0x7ff6e0 = _0x23089e(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 8], _0x49ac7d, 1163531501);
    _0x973966 = _0x23089e(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 13], _0x4c1bca, 2850285829);
    _0x5728cf = _0x23089e(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 2], _0x28f212, 4243563512);
    _0x5ab32c = _0x23089e(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 7], _0x4283ca, 1735328473);
    _0x7ff6e0 = _0x23089e(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 12], _0x49ac7d, 2368359562);
    _0x973966 = _0x35aab1(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 5], _0x3b6a38, 4294588738);
    _0x5728cf = _0x35aab1(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 8], _0x5674ac, 2272392833);
    _0x5ab32c = _0x35aab1(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 11], _0x19fe8e, 1839030562);
    _0x7ff6e0 = _0x35aab1(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 14], _0x320b59, 4259657740);
    _0x973966 = _0x35aab1(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 1], _0x3b6a38, 2763975236);
    _0x5728cf = _0x35aab1(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 4], _0x5674ac, 1272893353);
    _0x5ab32c = _0x35aab1(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 7], _0x19fe8e, 4139469664);
    _0x7ff6e0 = _0x35aab1(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 10], _0x320b59, 3200236656);
    _0x973966 = _0x35aab1(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 13], _0x3b6a38, 681279174);
    _0x5728cf = _0x35aab1(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 0], _0x5674ac, 3936430074);
    _0x5ab32c = _0x35aab1(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 3], _0x19fe8e, 3572445317);
    _0x7ff6e0 = _0x35aab1(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 6], _0x320b59, 76029189);
    _0x973966 = _0x35aab1(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 9], _0x3b6a38, 3654602809);
    _0x5728cf = _0x35aab1(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 12], _0x5674ac, 3873151461);
    _0x5ab32c = _0x35aab1(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 15], _0x19fe8e, 530742520);
    _0x7ff6e0 = _0x35aab1(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 2], _0x320b59, 3299628645);
    _0x973966 = _0x3b4ef8(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 0], _0xa9398e, 4096336452);
    _0x5728cf = _0x3b4ef8(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 7], _0xfa8d0f, 1126891415);
    _0x5ab32c = _0x3b4ef8(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 14], _0x23a947, 2878612391);
    _0x7ff6e0 = _0x3b4ef8(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 5], _0x3e5fc0, 4237533241);
    _0x973966 = _0x3b4ef8(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 12], _0xa9398e, 1700485571);
    _0x5728cf = _0x3b4ef8(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 3], _0xfa8d0f, 2399980690);
    _0x5ab32c = _0x3b4ef8(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 10], _0x23a947, 4293915773);
    _0x7ff6e0 = _0x3b4ef8(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 1], _0x3e5fc0, 2240044497);
    _0x973966 = _0x3b4ef8(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 8], _0xa9398e, 1873313359);
    _0x5728cf = _0x3b4ef8(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 15], _0xfa8d0f, 4264355552);
    _0x5ab32c = _0x3b4ef8(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 6], _0x23a947, 2734768916);
    _0x7ff6e0 = _0x3b4ef8(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 13], _0x3e5fc0, 1309151649);
    _0x973966 = _0x3b4ef8(_0x973966, _0x7ff6e0, _0x5ab32c, _0x5728cf, _0xfea4ec[_0x169283 + 4], _0xa9398e, 4149444226);
    _0x5728cf = _0x3b4ef8(_0x5728cf, _0x973966, _0x7ff6e0, _0x5ab32c, _0xfea4ec[_0x169283 + 11], _0xfa8d0f, 3174756917);
    _0x5ab32c = _0x3b4ef8(_0x5ab32c, _0x5728cf, _0x973966, _0x7ff6e0, _0xfea4ec[_0x169283 + 2], _0x23a947, 718787259);
    _0x7ff6e0 = _0x3b4ef8(_0x7ff6e0, _0x5ab32c, _0x5728cf, _0x973966, _0xfea4ec[_0x169283 + 9], _0x3e5fc0, 3951481745);
    _0x973966 = _0x4cc92e(_0x973966, _0x56d5bf);
    _0x7ff6e0 = _0x4cc92e(_0x7ff6e0, _0x5f058);
    _0x5ab32c = _0x4cc92e(_0x5ab32c, _0x1b37f1);
    _0x5728cf = _0x4cc92e(_0x5728cf, _0x99ac4d);
  }
  var _0x5c3aa2 = _0x3f80b7(_0x973966) + _0x3f80b7(_0x7ff6e0) + _0x3f80b7(_0x5ab32c) + _0x3f80b7(_0x5728cf);
  return _0x5c3aa2.toLowerCase();
}
function D_j_0x384cee(_0xc95107) {
  var _0x34d311 = 8;
  var _0x5c97c6 = 0;
  function _0x8d8542(_0x32dc12, _0x58a157) {
    var _0x524492 = (_0x32dc12 & 65535) + (_0x58a157 & 65535);
    var _0x5503a9 = (_0x32dc12 >> 16) + (_0x58a157 >> 16) + (_0x524492 >> 16);
    return _0x5503a9 << 16 | _0x524492 & 65535;
  }
  function _0x7aa965(_0x4f76bc, _0x2a5892) {
    return _0x4f76bc >>> _0x2a5892 | _0x4f76bc << 32 - _0x2a5892;
  }
  function _0x5e60e5(_0x143b8a, _0x27912b) {
    return _0x143b8a >>> _0x27912b;
  }
  function _0x3ff50d(_0x217b8d, _0x2602f0, _0x2ec31a) {
    return _0x217b8d & _0x2602f0 ^ ~_0x217b8d & _0x2ec31a;
  }
  function _0x317345(_0x511df8, _0x4d1e9e, _0x1e8e9a) {
    return _0x511df8 & _0x4d1e9e ^ _0x511df8 & _0x1e8e9a ^ _0x4d1e9e & _0x1e8e9a;
  }
  function _0x37cea1(_0x3b9998) {
    return _0x7aa965(_0x3b9998, 2) ^ _0x7aa965(_0x3b9998, 13) ^ _0x7aa965(_0x3b9998, 22);
  }
  function _0x15c7af(_0x3e6e2d) {
    return _0x7aa965(_0x3e6e2d, 6) ^ _0x7aa965(_0x3e6e2d, 11) ^ _0x7aa965(_0x3e6e2d, 25);
  }
  function _0x5e0716(_0x4b3588) {
    return _0x7aa965(_0x4b3588, 7) ^ _0x7aa965(_0x4b3588, 18) ^ _0x5e60e5(_0x4b3588, 3);
  }
  function _0x4051c2(_0x586a92) {
    return _0x7aa965(_0x586a92, 17) ^ _0x7aa965(_0x586a92, 19) ^ _0x5e60e5(_0x586a92, 10);
  }
  function _0x3e6e0e(_0x2752f6, _0x3ec252) {
    var _0x5524d2 = new Array(1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298);
    var _0x2ba4f7 = new Array(1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225);
    var _0x4e969a = new Array(64);
    var _0x47a99e, _0x1cf145, _0x277c48, _0x23f4dd, _0x4e4816, _0x51f114, _0x406d89, _0x396d0d;
    var _0x2ba265, _0x38a9dc;
    _0x2752f6[_0x3ec252 >> 5] |= 128 << 24 - _0x3ec252 % 32;
    _0x2752f6[(_0x3ec252 + 64 >> 9 << 4) + 15] = _0x3ec252;
    for (var _0x457ce8 = 0; _0x457ce8 < _0x2752f6.length; _0x457ce8 += 16) {
      _0x47a99e = _0x2ba4f7[0];
      _0x1cf145 = _0x2ba4f7[1];
      _0x277c48 = _0x2ba4f7[2];
      _0x23f4dd = _0x2ba4f7[3];
      _0x4e4816 = _0x2ba4f7[4];
      _0x51f114 = _0x2ba4f7[5];
      _0x406d89 = _0x2ba4f7[6];
      _0x396d0d = _0x2ba4f7[7];
      for (var _0x177f90 = 0; _0x177f90 < 64; _0x177f90++) {
        if (_0x177f90 < 16) {
          _0x4e969a[_0x177f90] = _0x2752f6[_0x177f90 + _0x457ce8];
        } else {
          _0x4e969a[_0x177f90] = _0x8d8542(_0x8d8542(_0x8d8542(_0x4051c2(_0x4e969a[_0x177f90 - 2]), _0x4e969a[_0x177f90 - 7]), _0x5e0716(_0x4e969a[_0x177f90 - 15])), _0x4e969a[_0x177f90 - 16]);
        }
        _0x2ba265 = _0x8d8542(_0x8d8542(_0x8d8542(_0x8d8542(_0x396d0d, _0x15c7af(_0x4e4816)), _0x3ff50d(_0x4e4816, _0x51f114, _0x406d89)), _0x5524d2[_0x177f90]), _0x4e969a[_0x177f90]);
        _0x38a9dc = _0x8d8542(_0x37cea1(_0x47a99e), _0x317345(_0x47a99e, _0x1cf145, _0x277c48));
        _0x396d0d = _0x406d89;
        _0x406d89 = _0x51f114;
        _0x51f114 = _0x4e4816;
        _0x4e4816 = _0x8d8542(_0x23f4dd, _0x2ba265);
        _0x23f4dd = _0x277c48;
        _0x277c48 = _0x1cf145;
        _0x1cf145 = _0x47a99e;
        _0x47a99e = _0x8d8542(_0x2ba265, _0x38a9dc);
      }
      _0x2ba4f7[0] = _0x8d8542(_0x47a99e, _0x2ba4f7[0]);
      _0x2ba4f7[1] = _0x8d8542(_0x1cf145, _0x2ba4f7[1]);
      _0x2ba4f7[2] = _0x8d8542(_0x277c48, _0x2ba4f7[2]);
      _0x2ba4f7[3] = _0x8d8542(_0x23f4dd, _0x2ba4f7[3]);
      _0x2ba4f7[4] = _0x8d8542(_0x4e4816, _0x2ba4f7[4]);
      _0x2ba4f7[5] = _0x8d8542(_0x51f114, _0x2ba4f7[5]);
      _0x2ba4f7[6] = _0x8d8542(_0x406d89, _0x2ba4f7[6]);
      _0x2ba4f7[7] = _0x8d8542(_0x396d0d, _0x2ba4f7[7]);
    }
    return _0x2ba4f7;
  }
  function _0x24b5da(_0xac48d1) {
    var _0x73688a = Array();
    var _0x362ea0 = (1 << _0x34d311) - 1;
    for (var _0x483b91 = 0; _0x483b91 < _0xac48d1.length * _0x34d311; _0x483b91 += _0x34d311) {
      _0x73688a[_0x483b91 >> 5] |= (_0xac48d1.charCodeAt(_0x483b91 / _0x34d311) & _0x362ea0) << 24 - _0x483b91 % 32;
    }
    return _0x73688a;
  }
  function _0x37843a(_0x385977) {
    _0x385977 = _0x385977.replace(/\r\n/g, "\n");
    var _0x39de2c = "";
    for (var _0x551940 = 0; _0x551940 < _0x385977.length; _0x551940++) {
      var _0x2d6770 = _0x385977.charCodeAt(_0x551940);
      if (_0x2d6770 < 128) {
        _0x39de2c += String.fromCharCode(_0x2d6770);
      } else {
        if (_0x2d6770 > 127 && _0x2d6770 < 2048) {
          _0x39de2c += String.fromCharCode(_0x2d6770 >> 6 | 192);
          _0x39de2c += String.fromCharCode(_0x2d6770 & 63 | 128);
        } else {
          _0x39de2c += String.fromCharCode(_0x2d6770 >> 12 | 224);
          _0x39de2c += String.fromCharCode(_0x2d6770 >> 6 & 63 | 128);
          _0x39de2c += String.fromCharCode(_0x2d6770 & 63 | 128);
        }
      }
    }
    return _0x39de2c;
  }
  function _0x17c229(_0xc35d1e) {
    var _0x36e767 = _0x5c97c6 ? "0123456789ABCDEF" : "0123456789abcdef";
    var _0xbc0030 = "";
    for (var _0x3f3142 = 0; _0x3f3142 < _0xc35d1e.length * 4; _0x3f3142++) {
      _0xbc0030 += _0x36e767.charAt(_0xc35d1e[_0x3f3142 >> 2] >> (3 - _0x3f3142 % 4) * 8 + 4 & 15) + _0x36e767.charAt(_0xc35d1e[_0x3f3142 >> 2] >> (3 - _0x3f3142 % 4) * 8 & 15);
    }
    return _0xbc0030;
  }
  _0xc95107 = _0x37843a(_0xc95107);
  return _0x17c229(_0x3e6e0e(_0x24b5da(_0xc95107), _0xc95107.length * _0x34d311));
}
function D_j_0x2eda5b(_0x5d98f8) {
  function _0x41bb66(_0x539b12, _0x49c349) {
    var _0x17e9cb = _0x539b12 << _0x49c349 | _0x539b12 >>> 32 - _0x49c349;
    return _0x17e9cb;
  }
  function _0x4a1166(_0xa75c33) {
    var _0x125019 = "";
    var _0x30c164;
    var _0xcba9cf;
    var _0x499a39;
    for (_0x30c164 = 0; _0x30c164 <= 6; _0x30c164 += 2) {
      _0xcba9cf = _0xa75c33 >>> _0x30c164 * 4 + 4 & 15;
      _0x499a39 = _0xa75c33 >>> _0x30c164 * 4 & 15;
      _0x125019 += _0xcba9cf.toString(16) + _0x499a39.toString(16);
    }
    return _0x125019;
  }
  function _0x1eea63(_0x4a88ef) {
    var _0x12e6a5 = "";
    var _0x2cce98;
    var _0x19f183;
    for (_0x2cce98 = 7; _0x2cce98 >= 0; _0x2cce98--) {
      _0x19f183 = _0x4a88ef >>> _0x2cce98 * 4 & 15;
      _0x12e6a5 += _0x19f183.toString(16);
    }
    return _0x12e6a5;
  }
  function _0x53918d(_0x11ca7f) {
    _0x11ca7f = _0x11ca7f.replace(/\r\n/g, "\n");
    var _0x369365 = "";
    for (var _0x4d9ac3 = 0; _0x4d9ac3 < _0x11ca7f.length; _0x4d9ac3++) {
      var _0x59a2be = _0x11ca7f.charCodeAt(_0x4d9ac3);
      if (_0x59a2be < 128) {
        _0x369365 += String.fromCharCode(_0x59a2be);
      } else {
        if (_0x59a2be > 127 && _0x59a2be < 2048) {
          _0x369365 += String.fromCharCode(_0x59a2be >> 6 | 192);
          _0x369365 += String.fromCharCode(_0x59a2be & 63 | 128);
        } else {
          _0x369365 += String.fromCharCode(_0x59a2be >> 12 | 224);
          _0x369365 += String.fromCharCode(_0x59a2be >> 6 & 63 | 128);
          _0x369365 += String.fromCharCode(_0x59a2be & 63 | 128);
        }
      }
    }
    return _0x369365;
  }
  var _0x4c882d;
  var _0x24178f, _0x31349f;
  var _0x1d8883 = new Array(80);
  var _0x33e344 = 1732584193;
  var _0x37c4a8 = 4023233417;
  var _0x1582db = 2562383102;
  var _0x3453d5 = 271733878;
  var _0x5d2196 = 3285377520;
  var _0x3464bf, _0x48bf07, _0x462a14, _0x5c95b2, _0x3d57bc;
  _0x5d98f8 = _0x53918d(_0x5d98f8);
  var _0x10af03 = _0x5d98f8.length;
  var _0x4bf7cf = new Array();
  for (_0x24178f = 0; _0x24178f < _0x10af03 - 3; _0x24178f += 4) {
    _0x31349f = _0x5d98f8.charCodeAt(_0x24178f) << 24 | _0x5d98f8.charCodeAt(_0x24178f + 1) << 16 | _0x5d98f8.charCodeAt(_0x24178f + 2) << 8 | _0x5d98f8.charCodeAt(_0x24178f + 3);
    _0x4bf7cf.push(_0x31349f);
  }
  switch (_0x10af03 % 4) {
    case 0:
      _0x24178f = 2147483648;
      break;
    case 1:
      _0x24178f = _0x5d98f8.charCodeAt(_0x10af03 - 1) << 24 | 8388608;
      break;
    case 2:
      _0x24178f = _0x5d98f8.charCodeAt(_0x10af03 - 2) << 24 | _0x5d98f8.charCodeAt(_0x10af03 - 1) << 16 | 32768;
      break;
    case 3:
      _0x24178f = _0x5d98f8.charCodeAt(_0x10af03 - 3) << 24 | _0x5d98f8.charCodeAt(_0x10af03 - 2) << 16 | _0x5d98f8.charCodeAt(_0x10af03 - 1) << 8 | 128;
      break;
  }
  _0x4bf7cf.push(_0x24178f);
  while (_0x4bf7cf.length % 16 != 14) {
    _0x4bf7cf.push(0);
  }
  _0x4bf7cf.push(_0x10af03 >>> 29);
  _0x4bf7cf.push(_0x10af03 << 3 & 4294967295);
  for (_0x4c882d = 0; _0x4c882d < _0x4bf7cf.length; _0x4c882d += 16) {
    for (_0x24178f = 0; _0x24178f < 16; _0x24178f++) {
      _0x1d8883[_0x24178f] = _0x4bf7cf[_0x4c882d + _0x24178f];
    }
    for (_0x24178f = 16; _0x24178f <= 79; _0x24178f++) {
      _0x1d8883[_0x24178f] = _0x41bb66(_0x1d8883[_0x24178f - 3] ^ _0x1d8883[_0x24178f - 8] ^ _0x1d8883[_0x24178f - 14] ^ _0x1d8883[_0x24178f - 16], 1);
    }
    _0x3464bf = _0x33e344;
    _0x48bf07 = _0x37c4a8;
    _0x462a14 = _0x1582db;
    _0x5c95b2 = _0x3453d5;
    _0x3d57bc = _0x5d2196;
    for (_0x24178f = 0; _0x24178f <= 19; _0x24178f++) {
      _0x3134ad = _0x41bb66(_0x3464bf, 5) + (_0x48bf07 & _0x462a14 | ~_0x48bf07 & _0x5c95b2) + _0x3d57bc + _0x1d8883[_0x24178f] + 1518500249 & 4294967295;
      _0x3d57bc = _0x5c95b2;
      _0x5c95b2 = _0x462a14;
      _0x462a14 = _0x41bb66(_0x48bf07, 30);
      _0x48bf07 = _0x3464bf;
      _0x3464bf = _0x3134ad;
    }
    for (_0x24178f = 20; _0x24178f <= 39; _0x24178f++) {
      _0x3134ad = _0x41bb66(_0x3464bf, 5) + (_0x48bf07 ^ _0x462a14 ^ _0x5c95b2) + _0x3d57bc + _0x1d8883[_0x24178f] + 1859775393 & 4294967295;
      _0x3d57bc = _0x5c95b2;
      _0x5c95b2 = _0x462a14;
      _0x462a14 = _0x41bb66(_0x48bf07, 30);
      _0x48bf07 = _0x3464bf;
      _0x3464bf = _0x3134ad;
    }
    for (_0x24178f = 40; _0x24178f <= 59; _0x24178f++) {
      _0x3134ad = _0x41bb66(_0x3464bf, 5) + (_0x48bf07 & _0x462a14 | _0x48bf07 & _0x5c95b2 | _0x462a14 & _0x5c95b2) + _0x3d57bc + _0x1d8883[_0x24178f] + 2400959708 & 4294967295;
      _0x3d57bc = _0x5c95b2;
      _0x5c95b2 = _0x462a14;
      _0x462a14 = _0x41bb66(_0x48bf07, 30);
      _0x48bf07 = _0x3464bf;
      _0x3464bf = _0x3134ad;
    }
    for (_0x24178f = 60; _0x24178f <= 79; _0x24178f++) {
      _0x3134ad = _0x41bb66(_0x3464bf, 5) + (_0x48bf07 ^ _0x462a14 ^ _0x5c95b2) + _0x3d57bc + _0x1d8883[_0x24178f] + 3395469782 & 4294967295;
      _0x3d57bc = _0x5c95b2;
      _0x5c95b2 = _0x462a14;
      _0x462a14 = _0x41bb66(_0x48bf07, 30);
      _0x48bf07 = _0x3464bf;
      _0x3464bf = _0x3134ad;
    }
    _0x33e344 = _0x33e344 + _0x3464bf & 4294967295;
    _0x37c4a8 = _0x37c4a8 + _0x48bf07 & 4294967295;
    _0x1582db = _0x1582db + _0x462a14 & 4294967295;
    _0x3453d5 = _0x3453d5 + _0x5c95b2 & 4294967295;
    _0x5d2196 = _0x5d2196 + _0x3d57bc & 4294967295;
  }
  var _0x3134ad = _0x1eea63(_0x33e344) + _0x1eea63(_0x37c4a8) + _0x1eea63(_0x1582db) + _0x1eea63(_0x3453d5) + _0x1eea63(_0x5d2196);
  return _0x3134ad.toLowerCase();
}
function D_j_0x3bff6c() {
  var _0x4193ba = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (_0x45c047) {
    var _0x417a0f = "";
    var _0x185d51, _0x3a21fa, _0x4b0e49, _0x3cfa04, _0xbccc0c, _0x4eddc7, _0x488816;
    var _0xed62c0 = 0;
    _0x45c047 = utf8Encode(_0x45c047);
    while (_0xed62c0 < _0x45c047.length) {
      _0x185d51 = _0x45c047.charCodeAt(_0xed62c0++);
      _0x3a21fa = _0x45c047.charCodeAt(_0xed62c0++);
      _0x4b0e49 = _0x45c047.charCodeAt(_0xed62c0++);
      _0x3cfa04 = _0x185d51 >> 2;
      _0xbccc0c = (_0x185d51 & 3) << 4 | _0x3a21fa >> 4;
      _0x4eddc7 = (_0x3a21fa & 15) << 2 | _0x4b0e49 >> 6;
      _0x488816 = _0x4b0e49 & 63;
      if (isNaN(_0x3a21fa)) {
        _0x4eddc7 = _0x488816 = 64;
      } else {
        if (isNaN(_0x4b0e49)) {
          _0x488816 = 64;
        }
      }
      _0x417a0f = _0x417a0f + _0x4193ba.charAt(_0x3cfa04) + _0x4193ba.charAt(_0xbccc0c) + _0x4193ba.charAt(_0x4eddc7) + _0x4193ba.charAt(_0x488816);
    }
    return _0x417a0f;
  };
  this.decode = function (_0x2cdde9) {
    var _0x572498 = "";
    var _0xafca67, _0x4e5259, _0x57c061;
    var _0x440feb, _0x571944, _0x479271, _0x47f37b;
    var _0x51c9fe = 0;
    _0x2cdde9 = _0x2cdde9.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (_0x51c9fe < _0x2cdde9.length) {
      _0x440feb = _0x4193ba.indexOf(_0x2cdde9.charAt(_0x51c9fe++));
      _0x571944 = _0x4193ba.indexOf(_0x2cdde9.charAt(_0x51c9fe++));
      _0x479271 = _0x4193ba.indexOf(_0x2cdde9.charAt(_0x51c9fe++));
      _0x47f37b = _0x4193ba.indexOf(_0x2cdde9.charAt(_0x51c9fe++));
      _0xafca67 = _0x440feb << 2 | _0x571944 >> 4;
      _0x4e5259 = (_0x571944 & 15) << 4 | _0x479271 >> 2;
      _0x57c061 = (_0x479271 & 3) << 6 | _0x47f37b;
      _0x572498 = _0x572498 + String.fromCharCode(_0xafca67);
      if (_0x479271 !== 64) {
        _0x572498 = _0x572498 + String.fromCharCode(_0x4e5259);
      }
      if (_0x47f37b !== 64) {
        _0x572498 = _0x572498 + String.fromCharCode(_0x57c061);
      }
    }
    _0x572498 = utf8Decode(_0x572498);
    return _0x572498;
  };
  utf8Encode = function (_0x5ecded) {
    _0x5ecded = _0x5ecded.replace(/\r\n/g, "\n");
    var _0x541b3b = "";
    for (var _0x329c59 = 0; _0x329c59 < _0x5ecded.length; _0x329c59++) {
      var _0x3364cc = _0x5ecded.charCodeAt(_0x329c59);
      if (_0x3364cc < 128) {
        _0x541b3b += String.fromCharCode(_0x3364cc);
      } else {
        if (_0x3364cc > 127 && _0x3364cc < 2048) {
          _0x541b3b += String.fromCharCode(_0x3364cc >> 6 | 192);
          _0x541b3b += String.fromCharCode(_0x3364cc & 63 | 128);
        } else {
          _0x541b3b += String.fromCharCode(_0x3364cc >> 12 | 224);
          _0x541b3b += String.fromCharCode(_0x3364cc >> 6 & 63 | 128);
          _0x541b3b += String.fromCharCode(_0x3364cc & 63 | 128);
        }
      }
    }
    return _0x541b3b;
  };
  utf8Decode = function (_0x3eed) {
    var _0x3ff0ad = "";
    var _0xdd1f0d = 0;
    var _0x242806 = 0;
    var _0x14e79b = 0;
    var _0x13487b = 0;
    while (_0xdd1f0d < _0x3eed.length) {
      _0x242806 = _0x3eed.charCodeAt(_0xdd1f0d);
      if (_0x242806 < 128) {
        _0x3ff0ad += String.fromCharCode(_0x242806);
        _0xdd1f0d++;
      } else {
        if (_0x242806 > 191 && _0x242806 < 224) {
          _0x14e79b = _0x3eed.charCodeAt(_0xdd1f0d + 1);
          _0x3ff0ad += String.fromCharCode((_0x242806 & 31) << 6 | _0x14e79b & 63);
          _0xdd1f0d += 2;
        } else {
          _0x14e79b = _0x3eed.charCodeAt(_0xdd1f0d + 1);
          _0x13487b = _0x3eed.charCodeAt(_0xdd1f0d + 2);
          _0x3ff0ad += String.fromCharCode((_0x242806 & 15) << 12 | (_0x14e79b & 63) << 6 | _0x13487b & 63);
          _0xdd1f0d += 3;
        }
      }
    }
    return _0x3ff0ad;
  };
}
function D_j_0x33aa9a(_0x5394b2, _0x2fb8ad) {
  class _0x124d7f {
    constructor(_0x1c005e) {
      this.env = _0x1c005e;
    }
    send(_0x34ae14, _0x535381 = "GET") {
      _0x34ae14 = typeof _0x34ae14 === "string" ? {
        url: _0x34ae14
      } : _0x34ae14;
      let _0x1e6f82 = this.get;
      if (_0x535381 === "POST") {
        _0x1e6f82 = this.post;
      }
      return new Promise((_0x5c6aea, _0x2abc92) => {
        _0x1e6f82.call(this, _0x34ae14, (_0x441b77, _0x48073f, _0x1bd4c1) => {
          if (_0x441b77) {
            _0x2abc92(_0x441b77);
          } else {
            _0x5c6aea(_0x48073f);
          }
        });
      });
    }
    get(_0x39caa5) {
      return this.send.call(this.env, _0x39caa5);
    }
    post(_0x31635c) {
      return this.send.call(this.env, _0x31635c, "POST");
    }
  }
  return new class {
    constructor(_0x1f1da1, _0x52ccdc) {
      this.name = _0x1f1da1;
      this.http = new _0x124d7f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x52ccdc);
      const _0x11b306 = "\n       ***********          *****      ***       **** ******  ***********  \n       *************       ******      ***      ****  ****    ************ \n      ****      ****     ***  ***      ***     ***    ***    ***      **** \n      ***       ****    ***  ****      ***    ***    ****   ****       *** \n     ****       ***    ***    ***      ***   ***     ***    ***       **** \n     ***       ***    ****   ****      ***  ***     ****   ****       ***  \n    ***      ****    ************      *** ***      ***    ***      ****   \n   ****   ******   ****      ****      ******      ****   ****   ******    \n   **********     ****       ****      *****     ******  ***********";
      if (this.isNode()) {
        this.log(_0x11b306);
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
    toObj(_0x39fd69, _0xdb6bf5 = null) {
      try {
        return JSON.parse(_0x39fd69);
      } catch {
        return _0xdb6bf5;
      }
    }
    toStr(_0x360a55, _0x3c0403 = null) {
      try {
        return JSON.stringify(_0x360a55);
      } catch {
        return _0x3c0403;
      }
    }
    getjson(_0x569b57, _0x5bf3d5) {
      let _0x1dc502 = _0x5bf3d5;
      const _0x15e6fe = this.getdata(_0x569b57);
      if (_0x15e6fe) {
        try {
          _0x1dc502 = JSON.parse(this.getdata(_0x569b57));
        } catch {}
      }
      return _0x1dc502;
    }
    setjson(_0xb3d195, _0x1120d5) {
      try {
        return this.setdata(JSON.stringify(_0xb3d195), _0x1120d5);
      } catch {
        return false;
      }
    }
    getScript(_0x39b915) {
      return new Promise(_0x3be322 => {
        const _0x240286 = {
          url: _0x39b915
        };
        this.get(_0x240286, (_0x108fe4, _0x1e3f4e, _0x2ef265) => _0x3be322(_0x2ef265));
      });
    }
    runScript(_0x3cdfe0, _0xacecc5) {
      return new Promise(_0x1b7f64 => {
        let _0x17cb81 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x17cb81 = _0x17cb81 ? _0x17cb81.replace(/\n/g, "").trim() : _0x17cb81;
        let _0x23f5ac = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x23f5ac = _0x23f5ac ? _0x23f5ac * 1 : 20;
        _0x23f5ac = _0xacecc5 && _0xacecc5.timeout ? _0xacecc5.timeout : _0x23f5ac;
        const [_0x2ab21a, _0x52c281] = _0x17cb81.split("@");
        const _0x4feeb8 = {
          script_text: _0x3cdfe0,
          mock_type: "cron",
          timeout: _0x23f5ac
        };
        const _0x4b1f82 = {
          "X-Key": _0x2ab21a,
          Accept: "*/*"
        };
        const _0x237515 = {
          url: "http: //" + _0x52c281 + "/v1/scripting/evaluate",
          body: _0x4feeb8,
          headers: _0x4b1f82
        };
        this.post(_0x237515, (_0x927a9d, _0x23f6d2, _0x14fb81) => _0x1b7f64(_0x14fb81));
      }).catch(_0x36f203 => this.logErr(_0x36f203));
    }
    loaddata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0xca1726 = this.path.resolve(this.dataFile);
        const _0x58a996 = this.path.resolve(process.cwd(), this.dataFile);
        const _0x5254b7 = this.fs.existsSync(_0xca1726);
        const _0x5ad595 = !_0x5254b7 && this.fs.existsSync(_0x58a996);
        if (_0x5254b7 || _0x5ad595) {
          const _0x1628c6 = _0x5254b7 ? _0xca1726 : _0x58a996;
          try {
            return JSON.parse(this.fs.readFileSync(_0x1628c6));
          } catch (_0x11765e) {
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
        const _0x3e0b19 = this.path.resolve(this.dataFile);
        const _0x47387a = this.path.resolve(process.cwd(), this.dataFile);
        const _0x3eeedf = this.fs.existsSync(_0x3e0b19);
        const _0xc0da7 = !_0x3eeedf && this.fs.existsSync(_0x47387a);
        const _0x5837fa = JSON.stringify(this.data);
        if (_0x3eeedf) {
          this.fs.writeFileSync(_0x3e0b19, _0x5837fa);
        } else {
          if (_0xc0da7) {
            this.fs.writeFileSync(_0x47387a, _0x5837fa);
          } else {
            this.fs.writeFileSync(_0x3e0b19, _0x5837fa);
          }
        }
      }
    }
    lodash_get(_0x4f14c0, _0x325c56, _0x1d4c09 = undefined) {
      const _0x3e4d7a = _0x325c56.replace(/[(d+)]/g, ".$1").split(".");
      let _0x5b927a = _0x4f14c0;
      for (const _0x21cdfa of _0x3e4d7a) {
        _0x5b927a = Object(_0x5b927a)[_0x21cdfa];
        if (_0x5b927a === undefined) {
          return _0x1d4c09;
        }
      }
      return _0x5b927a;
    }
    lodash_set(_0x171a8d, _0x350632, _0x2273a5) {
      if (Object(_0x171a8d) !== _0x171a8d) {
        return _0x171a8d;
      }
      if (!Array.isArray(_0x350632)) {
        _0x350632 = _0x350632.toString().match(/[^.[]]+/g) || [];
      }
      _0x350632.slice(0, -1).reduce((_0x44bfc3, _0x14865c, _0x237212) => Object(_0x44bfc3[_0x14865c]) === _0x44bfc3[_0x14865c] ? _0x44bfc3[_0x14865c] : _0x44bfc3[_0x14865c] = Math.abs(_0x350632[_0x237212 + 1]) >> 0 === +_0x350632[_0x237212 + 1] ? [] : {}, _0x171a8d)[_0x350632[_0x350632.length - 1]] = _0x2273a5;
      return _0x171a8d;
    }
    getdata(_0x22c30e) {
      let _0x37420a = this.getval(_0x22c30e);
      if (/^@/.test(_0x22c30e)) {
        const [, _0x4b264d, _0x5319eb] = /^@(.*?).(.*?)$/.exec(_0x22c30e);
        const _0xf525e2 = _0x4b264d ? this.getval(_0x4b264d) : "";
        if (_0xf525e2) {
          try {
            const _0x517718 = JSON.parse(_0xf525e2);
            _0x37420a = _0x517718 ? this.lodash_get(_0x517718, _0x5319eb, "") : _0x37420a;
          } catch (_0x6ed7b0) {
            _0x37420a = "";
          }
        }
      }
      return _0x37420a;
    }
    setdata(_0x2ca422, _0x345433) {
      let _0x51f28e = false;
      if (/^@/.test(_0x345433)) {
        const [, _0x9b9c21, _0x4a7a17] = /^@(.*?).(.*?)$/.exec(_0x345433);
        const _0x2e7267 = this.getval(_0x9b9c21);
        const _0x5c50ea = _0x9b9c21 ? _0x2e7267 === "null" ? null : _0x2e7267 || "{}" : "{}";
        try {
          const _0x597843 = JSON.parse(_0x5c50ea);
          this.lodash_set(_0x597843, _0x4a7a17, _0x2ca422);
          _0x51f28e = this.setval(JSON.stringify(_0x597843), _0x9b9c21);
        } catch (_0x37c883) {
          const _0x2901f3 = {};
          this.lodash_set(_0x2901f3, _0x4a7a17, _0x2ca422);
          _0x51f28e = this.setval(JSON.stringify(_0x2901f3), _0x9b9c21);
        }
      } else {
        _0x51f28e = this.setval(_0x2ca422, _0x345433);
      }
      return _0x51f28e;
    }
    getval(_0x126d53) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.read(_0x126d53);
      } else {
        if (this.isQuanX()) {
          return $prefs.valueForKey(_0x126d53);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            return this.data[_0x126d53];
          } else {
            return this.data && this.data[_0x126d53] || null;
          }
        }
      }
    }
    setval(_0x37974c, _0x18e058) {
      if (this.isSurge() || this.isLoon()) {
        return $persistentStore.write(_0x37974c, _0x18e058);
      } else {
        if (this.isQuanX()) {
          return $prefs.setValueForKey(_0x37974c, _0x18e058);
        } else {
          if (this.isNode()) {
            this.data = this.loaddata();
            this.data[_0x18e058] = _0x37974c;
            this.writedata();
            return true;
          } else {
            return this.data && this.data[_0x18e058] || null;
          }
        }
      }
    }
    initGotEnv(_0x367630) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      if (_0x367630) {
        _0x367630.headers = _0x367630.headers ? _0x367630.headers : {};
        if (undefined === _0x367630.headers.Cookie && undefined === _0x367630.cookieJar) {
          _0x367630.cookieJar = this.ckjar;
        }
      }
    }
    get(_0x231e2e, _0x54b556 = () => {}) {
      if (_0x231e2e.headers) {
        delete _0x231e2e.headers["Content-Type"];
        delete _0x231e2e.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x231e2e.headers = _0x231e2e.headers || {};
          const _0x2a8362 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x231e2e.headers, _0x2a8362);
        }
        $httpClient.get(_0x231e2e, (_0x503cb1, _0x57cade, _0x1c19dd) => {
          if (!_0x503cb1 && _0x57cade) {
            _0x57cade.body = _0x1c19dd;
            _0x57cade.statusCode = _0x57cade.status;
          }
          _0x54b556(_0x503cb1, _0x57cade, _0x1c19dd);
        });
      } else {
        if (this.isQuanX()) {
          if (this.isNeedRewrite) {
            _0x231e2e.opts = _0x231e2e.opts || {};
            const _0x39b71e = {
              hints: false
            };
            Object.assign(_0x231e2e.opts, _0x39b71e);
          }
          $task.fetch(_0x231e2e).then(_0x3f2129 => {
            const {
              statusCode: _0x3d69ad,
              statusCode,
              headers,
              body
            } = _0x3f2129;
            const _0x4f23a8 = {
              status: _0x3d69ad,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x54b556(null, _0x4f23a8, body);
          }, _0x26d84b => _0x54b556(_0x26d84b));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x231e2e);
            this.got(_0x231e2e).on("redirect", (_0x551f6b, _0x1d8f3d) => {
              try {
                if (_0x551f6b.headers["set-cookie"]) {
                  const _0x1bf711 = _0x551f6b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  if (_0x1bf711) {
                    this.ckjar.setCookieSync(_0x1bf711, null);
                  }
                  _0x1d8f3d.cookieJar = this.ckjar;
                }
              } catch (_0x2fe017) {
                this.logErr(_0x2fe017);
              }
            }).then(_0x5bd2d8 => {
              const {
                statusCode: _0x5f1c62,
                statusCode,
                headers,
                body
              } = _0x5bd2d8;
              const _0x7d8c10 = {
                status: _0x5f1c62,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x54b556(null, _0x7d8c10, body);
            }, _0x4a5bf5 => {
              const {
                message: _0xf1dbaf,
                response: _0xdb1e28
              } = _0x4a5bf5;
              _0x54b556(_0xf1dbaf, _0xdb1e28, _0xdb1e28 && _0xdb1e28.body);
            });
          }
        }
      }
    }
    post(_0x998e46, _0x11912d = () => {}) {
      const _0x433b3d = _0x998e46.method ? _0x998e46.method.toLocaleLowerCase() : "post";
      if (_0x998e46.body && _0x998e46.headers && !_0x998e46.headers["Content-Type"]) {
        _0x998e46.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x998e46.headers) {
        delete _0x998e46.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x998e46.headers = _0x998e46.headers || {};
          const _0x207441 = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x998e46.headers, _0x207441);
        }
        $httpClient[_0x433b3d](_0x998e46, (_0x19aa5d, _0x2cdb07, _0x359c5a) => {
          if (!_0x19aa5d && _0x2cdb07) {
            _0x2cdb07.body = _0x359c5a;
            _0x2cdb07.statusCode = _0x2cdb07.status;
          }
          _0x11912d(_0x19aa5d, _0x2cdb07, _0x359c5a);
        });
      } else {
        if (this.isQuanX()) {
          _0x998e46.method = _0x433b3d;
          if (this.isNeedRewrite) {
            _0x998e46.opts = _0x998e46.opts || {};
            const _0x16ee58 = {
              hints: false
            };
            Object.assign(_0x998e46.opts, _0x16ee58);
          }
          $task.fetch(_0x998e46).then(_0x4ccd7b => {
            const {
              statusCode: _0x2ba6a4,
              statusCode,
              headers,
              body
            } = _0x4ccd7b;
            const _0x1b1ecf = {
              status: _0x2ba6a4,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0x11912d(null, _0x1b1ecf, body);
          }, _0x1540a8 => _0x11912d(_0x1540a8));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x998e46);
            const {
              url,
              ..._0x355b76
            } = _0x998e46;
            this.got[_0x433b3d](url, _0x355b76).then(_0x395f72 => {
              const {
                statusCode: _0x4b81de,
                statusCode,
                headers,
                body
              } = _0x395f72;
              const _0x4d4fd0 = {
                status: _0x4b81de,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0x11912d(null, _0x4d4fd0, body);
            }, _0x1b4311 => {
              const {
                message: _0x4e35d2,
                response: _0x3d01fc
              } = _0x1b4311;
              _0x11912d(_0x4e35d2, _0x3d01fc, _0x3d01fc && _0x3d01fc.body);
            });
          }
        }
      }
    }
    put(_0x47ea76, _0xe7601d = () => {}) {
      const _0x2d97c7 = _0x47ea76.method ? _0x47ea76.method.toLocaleLowerCase() : "put";
      if (_0x47ea76.body && _0x47ea76.headers && !_0x47ea76.headers["Content-Type"]) {
        _0x47ea76.headers["Content-Type"] = "application/x-www-form-urlencoded";
      }
      if (_0x47ea76.headers) {
        delete _0x47ea76.headers["Content-Length"];
      }
      if (this.isSurge() || this.isLoon()) {
        if (this.isSurge() && this.isNeedRewrite) {
          _0x47ea76.headers = _0x47ea76.headers || {};
          const _0x49b20c = {
            "X-Surge-Skip-Scripting": false
          };
          Object.assign(_0x47ea76.headers, _0x49b20c);
        }
        $httpClient[_0x2d97c7](_0x47ea76, (_0x13934d, _0x15fa35, _0x111676) => {
          if (!_0x13934d && _0x15fa35) {
            _0x15fa35.body = _0x111676;
            _0x15fa35.statusCode = _0x15fa35.status;
          }
          _0xe7601d(_0x13934d, _0x15fa35, _0x111676);
        });
      } else {
        if (this.isQuanX()) {
          _0x47ea76.method = _0x2d97c7;
          if (this.isNeedRewrite) {
            _0x47ea76.opts = _0x47ea76.opts || {};
            const _0x5d2161 = {
              hints: false
            };
            Object.assign(_0x47ea76.opts, _0x5d2161);
          }
          $task.fetch(_0x47ea76).then(_0x6fd844 => {
            const {
              statusCode: _0x985bb0,
              statusCode,
              headers,
              body
            } = _0x6fd844;
            const _0x5cb39f = {
              status: _0x985bb0,
              statusCode: statusCode,
              headers: headers,
              body: body
            };
            _0xe7601d(null, _0x5cb39f, body);
          }, _0x42fc68 => _0xe7601d(_0x42fc68));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0x47ea76);
            const {
              url,
              ..._0x3be130
            } = _0x47ea76;
            this.got[_0x2d97c7](url, _0x3be130).then(_0x18af05 => {
              const {
                statusCode: _0xf850,
                statusCode,
                headers,
                body
              } = _0x18af05;
              const _0x170d24 = {
                status: _0xf850,
                statusCode: statusCode,
                headers: headers,
                body: body
              };
              _0xe7601d(null, _0x170d24, body);
            }, _0x24045e => {
              const {
                message: _0x2cd8ef,
                response: _0x246fa4
              } = _0x24045e;
              _0xe7601d(_0x2cd8ef, _0x246fa4, _0x246fa4 && _0x246fa4.body);
            });
          }
        }
      }
    }
    time(_0x350ebd, _0x3c00fa = null) {
      const _0x42221f = _0x3c00fa ? new Date(_0x3c00fa) : new Date();
      const _0x5ef307 = {
        "M+": _0x42221f.getMonth() + 1,
        "d+": _0x42221f.getDate(),
        "H+": _0x42221f.getHours(),
        "m+": _0x42221f.getMinutes(),
        "s+": _0x42221f.getSeconds(),
        "q+": Math.floor((_0x42221f.getMonth() + 3) / 3),
        S: _0x42221f.getMilliseconds()
      };
      if (/(y+)/.test(_0x350ebd)) {
        _0x350ebd = _0x350ebd.replace(RegExp.$1, (_0x42221f.getFullYear() + "").substr(4 - RegExp.$1.length));
      }
      for (let _0x1eadc4 in _0x5ef307) if (new RegExp("(" + _0x1eadc4 + ")").test(_0x350ebd)) {
        _0x350ebd = _0x350ebd.replace(RegExp.$1, RegExp.$1.length == 1 ? _0x5ef307[_0x1eadc4] : ("00" + _0x5ef307[_0x1eadc4]).substr(("" + _0x5ef307[_0x1eadc4]).length));
      }
      return _0x350ebd;
    }
    msg(_0x506e18 = _0x5394b2, _0x3c6ab0 = "", _0x1e726d = "", _0x3b5f14) {
      const _0x1ebd76 = _0x2d8f3e => {
        if (!_0x2d8f3e) {
          return _0x2d8f3e;
        }
        if (typeof _0x2d8f3e === "string") {
          if (this.isLoon()) {
            return _0x2d8f3e;
          } else {
            if (this.isQuanX()) {
              return {
                "open-url": _0x2d8f3e
              };
            } else {
              if (this.isSurge()) {
                return {
                  url: _0x2d8f3e
                };
              } else {
                return undefined;
              }
            }
          }
        } else {
          if (typeof _0x2d8f3e === "object") {
            if (this.isLoon()) {
              let _0x497720 = _0x2d8f3e.openUrl || _0x2d8f3e.url || _0x2d8f3e["open-url"];
              let _0x333d67 = _0x2d8f3e.mediaUrl || _0x2d8f3e["media-url"];
              const _0x142d52 = {
                openUrl: _0x497720,
                mediaUrl: _0x333d67
              };
              return _0x142d52;
            } else {
              if (this.isQuanX()) {
                let _0xa3ca6b = _0x2d8f3e["open-url"] || _0x2d8f3e.url || _0x2d8f3e.openUrl;
                let _0xb9da4d = _0x2d8f3e["media-url"] || _0x2d8f3e.mediaUrl;
                const _0x5aee6a = {
                  "open-url": _0xa3ca6b,
                  "media-url": _0xb9da4d
                };
                return _0x5aee6a;
              } else {
                if (this.isSurge()) {
                  let _0x4bc32f = _0x2d8f3e.url || _0x2d8f3e.openUrl || _0x2d8f3e["open-url"];
                  const _0x5983f7 = {
                    url: _0x4bc32f
                  };
                  return _0x5983f7;
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
          $notification.post(_0x506e18, _0x3c6ab0, _0x1e726d, _0x1ebd76(_0x3b5f14));
        } else {
          if (this.isQuanX()) {
            $notify(_0x506e18, _0x3c6ab0, _0x1e726d, _0x1ebd76(_0x3b5f14));
          }
        }
      }
      if (!this.isMuteLog) {
        let _0x56fda5 = ["", "==============📣系统通知📣=============="];
        _0x56fda5.push(_0x506e18);
        _0x3c6ab0 ? _0x56fda5.push(_0x3c6ab0) : "";
        _0x1e726d ? _0x56fda5.push(_0x1e726d) : "";
        console.log(_0x56fda5.join("\n"));
        this.logs = this.logs.concat(_0x56fda5);
      }
    }
    log(..._0x1a0735) {
      if (_0x1a0735.length > 0) {
        this.logs = [...this.logs, ..._0x1a0735];
      }
      console.log(_0x1a0735.join(this.logSeparator));
    }
    logErr(_0x3dd951, _0x2a60d8) {
      const _0x5c7e6b = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      if (!_0x5c7e6b) {
        this.log("", "❗️" + this.name + ", 错误!", _0x3dd951);
      } else {
        this.log("", "❗️" + this.name + ", 错误!", _0x3dd951.stack);
      }
    }
    wait(_0x2841d0) {
      return new Promise(_0x483d99 => setTimeout(_0x483d99, _0x2841d0));
    }
    done(_0x47892f = {}) {
      const _0x4f7a47 = new Date().getTime();
      const _0xd887cc = (_0x4f7a47 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束!🕛" + _0xd887cc + "秒");
      this.log();
      if (this.isSurge() || this.isQuanX() || this.isLoon()) {
        $done(_0x47892f);
      }
    }
  }(_0x5394b2, _0x2fb8ad);
}