const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
const path = require('path')
const configPath = path.join(__dirname, './config.env')
const databasePath = path.join(__dirname, './database.db')
if (existsSync(configPath)) require('dotenv').config({ path: configPath })
const DATABASE_URL =
  process.env.DATABASE_URL === undefined ? databasePath : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  SESSION_ID: (process.env.SESSION_ID || '').trim(),
  DATABASE:
    DATABASE_URL === databasePath
      ? new Sequelize({
          dialect: 'sqlite',
          storage: DATABASE_URL,
          logging: false,
        })
      : new Sequelize(DATABASE_URL, {
          dialect: 'postgres',
          ssl: true,
          protocol: 'postgres',
          dialectOptions: {
            native: true,
            ssl: { require: true, rejectUnauthorized: false },
          },
          logging: false,
        }),
  HANDLERS: (process.env.PREFIX || '^[.,!]').trim(),
  SUDO: process.env.SUDO || '2348078112891',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME,
  HEROKU_API_KEY: process.env.HEROKU_API_KEY,
  BRANCH: 'master',
  STICKER_PACKNAME: process.env.STICKER_PACKNAME || '❤️,LyFE',
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE,
  LOG_MSG: toBool(process.env.LOG_MSG) || false,
  RMBG_KEY: process.env.RMBG_KEY || 'null',
  BAILEYS_LOG_LVL: process.env.BAILEYS_LOG_LVL || 'silent',
  LANG: (process.env.LANGUAG || 'en').toLowerCase(),
  WARN_LIMIT: process.env.WARN_LIMIT || 3,
  FORCE_LOGOUT: toBool(process.env.FORCE_LOGOUT),
  BRAINSHOP: process.env.BRAINSHOP || '159501,6pq8dPiYt7PdqHz3',
  DIS_BOT: process.env.DISABLE_BOT || 'null',
  ANTILINK_MSG: process.env.ANTILINK_MSG || '_Antilink Detected &mention kicked_',
  ANTISPAM_MSG: process.env.ANTISPAM_MSG || '_Antispam Detected &mention kicked_',
  ANTIWORDS_MSG: process.env.ANTIWORDS_MSG || '_AntiWord Detected &mention kicked_',
  ANTIWORDS: process.env.ANTIWORDS || 'word',
  MENTION: process.env.MENTION || '',
  MAX_UPLOAD: process.env.MAX_UPLOAD || 230,
  REJECT_CALL: process.env.REJECT_CALL,
  VPS: toBool(process.env.VPS),
  AUTO_STATUS_VIEW: (process.env.AUTO_STATUS_VIEW || 'false').trim(),
  SEND_READ: process.env.SEND_READ,
  KOYEB: toBool(process.env.KOYEB),
  KOYEB_NAME: (process.env.KOYEB_NAME || '').trim(),
  KOYEB_API: (process.env.KOYEB_API || '').trim(),
  AJOIN: process.env.AJOIN,
  GPT: (process.env.GPT || 'free').trim(),
  MODEL: (process.env.MODEL || 'gpt-3.5-turbo').trim(),
  APPROVE: (process.env.APPROVE || '').trim(),
  ANTI_DELETE: (process.env.ANTI_DELETE || 'null').trim(),
  PERSONAL_MESSAGE: (process.env.PERSONAL_MESSAGE || 'null').trim(),
  DISABLE_START_MESSAGE: process.env.DISABLE_START_MESSAGE
    ? toBool(process.env.DISABLE_START_MESSAGE)
    : false,
  ANTI_BOT: (process.env.ANTI_BOT || 'off').trim(),
  ANTI_BOT_MESSAGE: process.env.ANTI_BOT_MESSAGE || '&mention removed',
  WARN_MESSAGE:
    process.env.WARN_MESSAGE ||
    '⚠️WARNING⚠️\n*User :* &mention\n*Warn :* &warn\n*Remaining :* &remaining',
  WARN_RESET_MESSAGE:
    process.env.WARN_RESET_MESSAGE || `WARN RESET\nUser : &mention\nRemaining : &remaining`,
  WARN_KICK_MESSAGE: process.env.WARN_KICK_MESSAGE || '&mention kicked',
  TRUECALLER: process.env.TRUECALLER,
  DELETE_TYPE: (process.env.DELETE_TYPE || '').trim(),
  LIST_TYPE: (process.env.LIST_TYPE || 'text').trim(),
  BING_COOKIE: (process.env.BING_COOKIE || 'Imported_MUID=2E6FA74207ED6B5134AEB30906476A4D; MUID=2C5BCDE5EAF46F151478D9AAEB146E2E; _EDGE_V=1; MUIDB=2C5BCDE5EAF46F151478D9AAEB146E2E; MSPTC=EwNrdi--gmUqvho0bd5TdYKEAVGAGLFQZEjB3Qy4Hpw; _HPVN=CS=eyJQbiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiUCJ9LCJTYyI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiSCJ9LCJReiI6eyJDbiI6MSwiU3QiOjAsIlFzIjowLCJQcm9kIjoiVCJ9LCJBcCI6dHJ1ZSwiTXV0ZSI6dHJ1ZSwiTGFkIjoiMjAyNC0wNC0wNFQwMDowMDowMFoiLCJJb3RkIjowLCJHd2IiOjAsIlRucyI6MCwiRGZ0IjpudWxsLCJNdnMiOjAsIkZsdCI6MCwiSW1wIjo1LCJUb2JuIjowfQ==; PPLState=1; MMCASM=ID=A5A13BE7A3544E74B55E777B5FCEFFE0; SRCHD=AF=NOFORM; SRCHUID=V=2&GUID=BDAFBB0A35084142AE67C7909E93E848&dmnchg=1; NAP=V=1.9&E=1d95&C=Uezi2YAI64iy4ejj4LCespE4_s_JPAc3wJqJCqDNLgilEiPwyjruZw&W=1; ANON=A=CF58D43B07B6E034380BE1FFFFFFFFFF&E=1def&W=1; KievRPSSecAuth=FAByBBRaTOJILtFsMkpLVWSG6AN6C/svRwNmAAAEgAAACJeJ2O/sOBC6MASFRsMqZUhZyrgUcW6BHp27GkPFXjVd5Ck6/5dWZEST1Q4gJFhrUNegST32Wq2MSXJ2VRq/gvTdATjl4Xh6fNMWADq49wH8GqJqECj7eL6Tjwds2byM+UJUwBBg7cmxcfj7SNsltmmD3KOQsSd2ubG3XfGQLnH+d/11LaQLEWxxUKGw0qEvnYhEOT3Qspk5qp9qwa00qmjPjJ1bLPb4gFa/5kI/6OTgEvICRtKKtdM4I6uzzKr6M0oSfA7znMM6Zx0VZ1BxUJuFmDcZ9QvmtQGYJJCJWGhqVtclriNgGYvxAwNjlc3IOH1vBO4gVc2bO3HDKUbflRTasA6ImKxnzRM2iKUMJNXEXul/lILWT4wDCE4GCFWO1a/pqbnv9IfP0N2+4kFNdAtlXNdrt+BFbVP9nLkM2MvpAwrppA2LAYb8Mm7ASYlVgYPuTLqLYzemXJeYyPNRIDJtuc2BNa5UU2Uz0gRNYovfh3ZZFUaeO2S23F09+On9SACgzLb+usKFD3b0ob7vLqxLiFlZpUVGgL/X461vIYoUjKTvr3Baa6/XsDBy/dt5mPOs1hFgItuoguYJ7PQjFw98AVG30F5NJHVkYh+B28xEeIX1gmv464ATEI06whXYlvaispwWChY7lII/5o5kSJT66SA/OC0nKWERYvxLFnLDPk3d1l6Z7WrX25py0bovbLnzEApce0jzH0BaIy4CTjWrIid1Q/FOyKDGcvfhRr+HtW0ca+kLvsFDviCGP702Rfyrc0FKYHDeKI8h/l+ORd4H4xdopFoSznMmNnaB5BM7Q1FKpwBsRPUPe+WxbUJDwzFiRYwqPU95nj+y4Y/27VMK5DVaSww/SZ6WknLuCdZDGcpnXPvUK8NFhI9OCTI+wSl9yA9LQSMGqbLAkPk1ppNr36TXsHmSVyqlxDtQgABCWOjE5FWTtLZPDPiVyw0bkkc1O8kFc2EyVp6LlRHP7Cf/L+nD7pj5ddi0p/F0DCT0wc5btKVRuc+aedvU+ThVcibi/9qiURMStGL3DisM3lsbaJPPWkW2zdb1ZqL+Bo4kCiBlgyq5icC2uP4lv3sw/Ps2/Zxwj6ZNQroR6UhvAcKUzF1nHmQVZwjk8s0wRq0xqbDQkjPng6MJRtbtMyy5uEbnSUwRzZy9vXTKd5m1skYMcRxwv9XUWV0Hfrv8P3/XEkxqnzBfBC2/vGh7ytcQlJK195S9vYJwruUEpAhMtHdmJL9jEBN0gpp/jieXZ83Cl2jJ+p5VuITirKUg1QknouFEIln0t8M2FpJWpD+048LCdzo+wmbcYtf39Eg5niDWNiFtzXVX2eKt6nq0KqIoEvX2/rGe7AGs8BpJVaaq1IilAgyu8tRnIpzn6ia0P4hH+zhpYB9hSJrdy4n7KnRmM5UDFAEqeCc6YCo9qKo04AURZFlvkDASRnrLFAClgv/27d2dbjVIAlfa4dAPAuhmxw==; _U=18RSV488DNNGjJzGBMxppvPAh3m-RxYgA0hJE04Jl14leDubeQGIv8GbEHn1wxRnOJ7zhzc-bzJpUc-5DqwIyGFn3JIVgRs8k0cuZX73nGbywSmcS18Qewd05z8GkhAIG0soDO3b9TjPmmHuDWvI04C3ZQ-GY1D16-gJ-i6gUY58VqSAHQvhkIJQjTaJsCIV9ry4gIFsJo6TFZJPb-hBegA; WLID=ybUU6PRnbjU0spnf0glKpnhqicJwfrGPoc3CGQtatbofABf3luG6HWj6Di/m4oHW5eLFjfs7DFXQLi7YgXBpdhy5x3hhO8NsEdTVsnvX6AI=; ABDEF=V=13&ABDV=13&MRNB=1724272643347&MRB=0; EDGSRCHHPGUSR=CIBV=1.1803.0; WLS=C=82ff4025776de02e&N=victor; SRCHS=PC=U531; _Rwho=u=d&ts=2024-08-24; _SS=SID=34084894538B6C0916CB5C7152AC6D7B&PC=U531&R=0&RB=0&GB=0&RG=0&RP=0; GI_FRE_COOKIE=gi_prompt=1; _clck=vrx72v%7C2%7Cfom%7C0%7C1607; USRLOC=HS=1&ELOC=LAT=51.53157043457031|LON=4.459847927093506|N=Roosendaal%2C%20North%20Brabant|ELT=1|&CLOC=LAT=51.5315|LON=4.4598|A=564292|TS=240828071926|SRC=I&BID=MjQwODI4MDAxOTI0Xzk1ZjczNWFhZjY2NDk5N2FmMjZkMGY0YzUwOWIxZGU3N2QzMDQzYmE1OWY0NjU0ZGFjYmRkOTIyODlkOWVmODc=; _EDGE_S=SID=34084894538B6C0916CB5C7152AC6D7B&ui=en-us&mkt=nl-nl; BCP=AD=1&AL=1&SM=1; ak_bmsc=A8E94B6151FE08887878C147CEE91FC2~000000000000000000000000000000~YAAQF/8TAqoU142RAQAARo/ilxigNXtTe1adPG5XnJMoC4b6vX06igdMAtWve5ZC4IFF3RsGvO6h7xVDKu63hFOnV1QjiEa38NwTzBV3iF9aKfUsva5/kXm5ohDLju8DnC1nja/KWVJScn9JbdjQU00F7/pvLCWrmy8mOWfmMqrBBIO7Stb1jGRqV4WM9zJSzjPnWYJ++r/fuP+23ntyRB5pZdFXIpfERw057qfICWr80OxhJDeLC+BMmuZ7WjVIiEngc0qSSPeJYw+00bF9wvJlp+5CgdoivI9mx9EyLzh4+CmFpr4SDDkzol+6xydGfwqjLrChXca8AIV7w3SJSw2Oq2HZYNCzbvoFMWFbLR0dC/kM5vGlI/hodIQktkDmUYNkhA==; SRCHUSR=DOB=20240327&T=1724830093000&POEX=W; dsc=order=Video; _RwBf=r=0&ilt=0&ihpd=0&ispd=0&rc=0&rb=0&gb=0&rg=0&pc=0&mtu=0&rbb=0&g=0&cid=&clo=0&v=2&l=2024-08-28T07:00:00.0000000Z&lft=0001-01-01T00:00:00.0000000&aof=0&ard=0001-01-01T00:00:00.0000000&rwdbt=0001-01-01T16:00:00.0000000-08:00&rwflt=0001-01-01T16:00:00.0000000-08:00&o=0&p=MSAAUTOENROLL&c=MR000T&t=3156&s=2024-08-21T20:37:20.8795526+00:00&ts=2024-08-28T07:28:30.6183403+00:00&rwred=0&wls=2&wlb=0&wle=0&ccp=2&lka=0&lkt=0&aad=0&TH=&mta=0&e=Jw6QvpuAQ9ebdWkU2JxXBrl98xGvimA2PgV2vOe3EfA-nf1V4jJZIwLCkgr1U1h5DYeZ2nXl4M-XEWfeEBxl9A&cpt=0&A=; ipv6=hit=1724833714154; GC=HUWkqChHH0aDiO98ji6oZk8aMDAdzBJxwSb26YFR5nQ0iGHs0UTwGXz82EEyMsiadsxd44Ns8UV-ryri9xnzPA; bm_sv=AA26E59E68E1336B7DD377196D6B2049~YAAQF/8TAowZ142RAQAAQEHjlxitAYp33Z3qPWorc9RUYNgSBqm5Hdvq9WTUNMrGHfjc3UYIqlqC16suAtQwiGtxPJHff68xZKEI9J3OzjS0AXFaDG8p7fLT3qgutq4VS2DJgtDI0RbYLI76vGbBKItFgJ2mW80furOP+p/egBwrzbjha0RxRA+BK6JnerRjlqKkanE3dZJ2qdUbpshBVrwjhrUPVrt53FnxECj290qLcZ/WWCUNBrWdqT1dpw==~1; _C_ETH=1; SRCHHPGUSR=SRCHLANG=en&DM=1&HV=1724830111&WTS=63851895490&IG=D1D0EBAE83BE434E9BCED4644F239CB4&PV=15.0.0&BRW=NOTP&BRH=S&CW=763&CH=690&SCW=763&SCH=225&DPR=1.0&UTC=-420&CIBV=1.1805.0&EXLTT=31&PRVCW=1318&PRVCH=690&THEME=0&WEBTHEME=0').trim(),
  GEMINI_API_KEY: (process.env.GEMINI_API_KEY || 'AIzaSyA_2tJNTgnvgLNN3aGbNtIF7EWscaT8vMs').trim(),
  ADMINS: process.env.GROUP_ADMINS || '',
  RENDER_NAME: (process.env.RENDER_NAME || '').trim(),
  RENDER_API_KEY: (process.env.RENDER_API_KEY || '').trim(),
  TIMEZONE: process.env.TIMEZONE,
}
