(function(a){function t(t){for(var i,s,o=t[0],u=t[1],c=t[2],p=0,l=[];p<o.length;p++)s=o[p],n[s]&&l.push(n[s][0]),n[s]=0;for(i in u)Object.prototype.hasOwnProperty.call(u,i)&&(a[i]=u[i]);m&&m(t);while(l.length)l.shift()();return r.push.apply(r,c||[]),e()}function e(){for(var a,t=0;t<r.length;t++){for(var e=r[t],i=!0,o=1;o<e.length;o++){var u=e[o];0!==n[u]&&(i=!1)}i&&(r.splice(t--,1),a=s(s.s=e[0]))}return a}var i={},n={app:0},r=[];function s(t){if(i[t])return i[t].exports;var e=i[t]={i:t,l:!1,exports:{}};return a[t].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=a,s.c=i,s.d=function(a,t,e){s.o(a,t)||Object.defineProperty(a,t,{enumerable:!0,get:e})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,t){if(1&t&&(a=s(a)),8&t)return a;if(4&t&&"object"===typeof a&&a&&a.__esModule)return a;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:a}),2&t&&"string"!=typeof a)for(var i in a)s.d(e,i,function(t){return a[t]}.bind(null,i));return e},s.n=function(a){var t=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(t,"a",t),t},s.o=function(a,t){return Object.prototype.hasOwnProperty.call(a,t)},s.p="/nijisanji-credit-generator/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var m=u;r.push([0,"chunk-vendors"]),e()})({0:function(a,t,e){a.exports=e("56d7")},"034f":function(a,t,e){"use strict";var i=e("64a9"),n=e.n(i);n.a},1904:function(a,t,e){},"22f8":function(a,t,e){},"2e93":function(a,t,e){"use strict";var i=e("1904"),n=e.n(i);n.a},"3a33":function(a,t,e){"use strict";var i=e("22f8"),n=e.n(i);n.a},"56d7":function(a,t,e){"use strict";e.r(t);e("cadf"),e("551c"),e("f751"),e("097d");var i=e("2b0e"),n=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",[e("header-comp"),e("link-generator"),e("footer-comp")],1)},r=[],s=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},o=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("header",{staticClass:"hero is-dark has-background-danger"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"title is-size-5-mobile"},[a._v("\n        にじさんじメンバー リンクジェネレーター\n      ")]),e("h2",{staticClass:"subtitle is-size-7-mobile"},[a._v("\n        YouTubeの概要欄に載せるときなどにどうぞ\n      ")])])])])}],u=e("2877"),c={},m=Object(u["a"])(c,s,o,!1,null,null,null),p=m.exports,l=function(){var a=this,t=a.$createElement;a._self._c;return a._m(0)},h=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("footer",{staticClass:"footer has-background-danger has-text-white"},[e("div",{staticClass:"content has-text-centered"},[e("p",[a._v("\n      Contact: "),e("a",{staticClass:"link",attrs:{href:"https://twitter.com/sigh_of_boredom"}},[a._v("@sigh_of_boredom")])])])])}],v=(e("64a2"),{}),g=Object(u["a"])(v,l,h,!1,null,"f6a987c4",null),f=g.exports,d=function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("section",{staticClass:"section"},[e("div",{staticClass:"container"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-7"},[e("p",{staticClass:"title is-5"},[a._v("\n          ライバーを選択\n        ")]),e("liver-select",{attrs:{livers:a.livers},model:{value:a.selectedLivers,callback:function(t){a.selectedLivers=t},expression:"selectedLivers"}})],1),e("div",{staticClass:"column is-5 result-box"},[e("div",{staticClass:"field"},[e("a",{staticClass:"button is-primary",on:{click:a.copyResult}},[a._m(0),e("span",[a._v("コピー")])])]),e("textarea",{ref:"result",staticClass:"textarea is-size-7",attrs:{placeholder:"結果がここに表示されます",rows:"20"},domProps:{value:a.generatedText}})])])])])},w=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"icon"},[e("i",{staticClass:"fas fa-copy"})])}],_=(e("7f7f"),e("ac4d"),e("8a81"),e("ac6a"),function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"wrapper"},[e("div",{staticClass:"field"},[e("div",{staticClass:"control has-icons-left "},[e("input",{directives:[{name:"model",rawName:"v-model",value:a.query,expression:"query"}],staticClass:"input",attrs:{type:"text",placeholder:"ライバー名で検索(ひらがなも可)"},domProps:{value:a.query},on:{input:function(t){t.target.composing||(a.query=t.target.value)}}}),a._m(0)])]),e("div",{staticClass:"liver-list"},a._l(a.filteredLivers,function(t){return e("div",{key:t.name,staticClass:"box liver-card"},[e("img",{staticClass:"avatar",attrs:{src:t.avatarURL,alt:"アバター画像"}}),e("span",{staticClass:"has-text-centered has-text-weight-bold is-7"},[a._v("\n        "+a._s(t.name)+"\n      ")]),e("a",{staticClass:"button is-fullwidth",class:{"is-danger":a.value.includes(t)},on:{click:function(e){return a.toggle(t)}}},[a._m(1,!0)])])}),0)])}),U=[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"icon is-small is-left"},[e("i",{staticClass:"fas fa-search"})])},function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("span",{staticClass:"icon is-small"},[e("i",{staticClass:"fas fa-check"})])}],y=e("75fc"),b=(e("6762"),e("2fdb"),{props:{livers:{type:Array,defalut:function(){return[]}},value:{type:Array,default:function(){return[]}}},data:function(){return{query:""}},computed:{filteredLivers:function(){var a=this;return this.query?this.livers.filter(function(t){return t.name.includes(a.query)||t.furigana.includes(a.query)}):this.livers}},methods:{toggle:function(a){var t=this.value.indexOf(a);if(-1===t){var e=[].concat(Object(y["a"])(this.value),[a]);this.$emit("input",e)}else{var i=this.value.filter(function(a,e){return e!==t});this.$emit("input",i)}}}}),C=b,z=(e("2e93"),Object(u["a"])(C,_,U,!1,null,"6f5e2e5e",null)),k=z.exports,x=e("f684"),L={components:{LiverSelect:k},data:function(){return{livers:x,selectedLivers:[]}},computed:{generatedText:function(){var a="",t=!0,e=!1,i=void 0;try{for(var n,r=this.selectedLivers[Symbol.iterator]();!(t=(n=r.next()).done);t=!0){var s=n.value;a+="".concat(s.name," さん\n[YouTube]\nhttps://www.youtube.com/channel/").concat(s.youtube,"\n[Twitter]\nhttps://twitter.com/").concat(s.twitter,"\n\n")}}catch(o){e=!0,i=o}finally{try{t||null==r.return||r.return()}finally{if(e)throw i}}return a}},methods:{copyResult:function(){var a=this.$refs.result;a.focus(),a.select();try{var t=document.execCommand("copy");t||alert("コピーに失敗しました")}catch(e){alert("コピーに失敗しました")}}}},R=L,j=(e("3a33"),Object(u["a"])(R,d,w,!1,null,null,null)),A=j.exports,S={name:"App",components:{HeaderComp:p,FooterComp:f,LinkGenerator:A}},K=S,M=(e("034f"),Object(u["a"])(K,n,r,!1,null,null,null)),Y=M.exports;e("92c6");i["a"].config.productionTip=!1,new i["a"]({render:function(a){return a(Y)}}).$mount("#app")},"64a2":function(a,t,e){"use strict";var i=e("faae"),n=e.n(i);n.a},"64a9":function(a,t,e){},f684:function(a){a.exports=[{id:32,name:"月ノ美兎",furigana:"つきのみと",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Tsukino_Mito.png",twitter:"MitoTsukino",youtube:"UCD-miitqNY3nyukJ4Fnf4_A"},{id:11,name:"静凛",furigana:"しずかりん",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Shizuka_Rin.png",twitter:"ShizuRin23",youtube:"UC6oDys1BGgBsIC3WhG1BovQ"},{id:34,name:"本間ひまわり",furigana:"ほんまひまわり",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Honma_Himawari.png",twitter:"honmahimawari",youtube:"UC0g1AE0DOjBYnLhkgoRWN1w"},{id:38,name:"樋口楓",furigana:"ひぐちかえで",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Higuchi_Kaede.png",twitter:"Higuchikaede",youtube:"UCsg-YqdqQ-KFF0LNk23BY4A"},{id:37,name:"椎名唯華",furigana:"しいなゆいか",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Shiina_Yuika.png",twitter:"yuika_siina",youtube:"UC_4tXjqecqox5Uc05ncxpxg"},{id:51,name:"鈴鹿詩子",furigana:"すずかうたこ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Suzuka_Utako.png",twitter:"suzukautako",youtube:"UCwokZsOK_uEre70XayaFnzA"},{id:10,name:"笹木咲",furigana:"ささきさく",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Sasaki_Saku.png",twitter:"saku_sasaki",youtube:"UCoztvTULBYd3WmStqYeoHcA"},{id:3,name:"物述有栖",furigana:"もののべありす",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Mononobe_Arisu.png",twitter:"alicemononobe",youtube:"UCt0clH12Xk1-Ej5PXKGfdPA"},{id:15,name:"シスター・クレア",furigana:"しすたーくれあ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Sister_Cleaire.png",twitter:"sistercleaire",youtube:"UC1zFJrfEKvCixhsjNSb1toQ"},{id:14,name:"える",furigana:"える",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Elu.png",twitter:"elu_world",youtube:"UCYKP16oMX9KKPbrNgo_Kgag"},{id:23,name:"剣持刀也",furigana:"けんもちとうや",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kenmochi_Touya.png",twitter:"rei_Toya_rei",youtube:"UCv1fFr156jc65EMiLbaLImw"},{id:7,name:"叶",furigana:"かなえ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kanae.png",twitter:"kanae_2434",youtube:"UCspv01oxUFf_MTSipURRhkA"},{id:67,name:"にじさんじ公式チャンネル",furigana:"にじさんじ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Nijisanji_Official_white.png",twitter:"nijisanji_app",youtube:"UCX7YkU9nEeaoZbkVLVajcMg"},{id:17,name:"勇気ちひろ",furigana:"ゆうきちひろ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yuuki_Chihiro.png",twitter:"chihiro_yuki23",youtube:"UCLO9QDxVL4bnvRRsz6K4bsQ"},{id:45,name:"竜胆尊",furigana:"りんどうみこと",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Rindou_Mikoto.png",twitter:"rindoumikoto",youtube:"UCPvGypSgfDkVe7JG2KygK7A"},{id:63,name:"夢月ロア",furigana:"ゆづきろあ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yuduki_Roa.png",twitter:"yuzuki_roa",youtube:"UCCVwhI5trmaSxfcze_Ovzfw"},{id:46,name:"緑仙",furigana:"りゅーしぇん",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Ryushen.png",twitter:"midori_2434",youtube:"UCt5-0i4AVHXaWJrL8Wql3mw"},{id:9,name:"家長むぎ",furigana:"いえながむぎ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Ienaga_Mugi.png",twitter:"ienaga_mugi23",youtube:"UC_GCs6GARLxEHxy1w40d6VQ"},{id:27,name:"宇志海いちご",furigana:"うしみいちご",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Ushimi_Ichigo.png",twitter:"ushimi_ichigo",youtube:"UCmUjjW5zF1MMOhYUwwwQv9Q"},{id:36,name:"森中花咲",furigana:"もりなかかざき",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Morinaka_Kazaki.png",twitter:"kazakimorinaka",youtube:"UCtpB6Bvhs1Um93ziEDACQ8g"},{id:8,name:"葛葉",furigana:"くずは",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kuzuha.png",twitter:"vamp_kuzu",youtube:"UCSFCh5NL4qXrAy9u-u2lX3g"},{id:58,name:"鷹宮リオン",furigana:"たかみやりおん",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Takamiya_Rion.png",twitter:"takamiyarion",youtube:"UCV5ZZlLjk5MKGg3L0n0vbzw"},{id:19,name:"ドーラ",furigana:"どーら",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Dola.png",twitter:"___dola",youtube:"UC53UDnhAAYwvNO7j_2Ju1cQ"},{id:20,name:"ベルモンド・バンデラス",furigana:"べるもんどばんでらす",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Belmondo_Banderasu.png",twitter:"belmond_b_2434",youtube:"UCbc8fwhdUNlqi-J99ISYu4A"},{id:2,name:"モイラ",furigana:"もいら",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Moira.png",twitter:"moiramoimoimoi",youtube:"UCvmppcdYf4HOv-tFQhHHJMA"},{id:43,name:"社築",furigana:"やしろきずく",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yashiro_Kizuku.png",twitter:"846kizuq",youtube:"UCKMYISTJAQ8xTplUPHiABlA"},{id:62,name:"郡道美玲",furigana:"ぐんどうみれい",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Gundou_Mirei.png",twitter:"g9v9g_mirei",youtube:"UCeShTCVgZyq2lsBW9QwIJcw"},{id:16,name:"ジョー・力一",furigana:"じょーりきいち",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Jo_Rikiichi.png",twitter:"joerikiichi",youtube:"UChUJbHiTVeGrSkTdBzVfNCQ"},{id:68,name:"御伽原江良",furigana:"おとぎばらえら",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Otogibara_Era.png",twitter:"OtogibaraEra",youtube:"UCwQ9Uv-m8xkE5PzRc7Bqx3Q"},{id:61,name:"久遠千歳",furigana:"くどうちとせ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kudo_Chitose.png",twitter:"kudou_chitose",youtube:"UCP2o-o6u4uX3uq1hXspl0rg"},{id:52,name:"闇夜乃モルル",furigana:"やみよのもるる",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yamiyono_Moruru.png",twitter:"_rnrrdark",youtube:"UCNUgrFCo2Hr_VXc9bEwjcHQ"},{id:4,name:"赤羽葉子",furigana:"あかばねようこ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Akabane_Youko.png",twitter:"youko_akabane",youtube:"UCBi8YaVyZpiKWN3_Z0dCTfQ"},{id:48,name:"花畑チャイカ",furigana:"はなばたけちゃいか",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Hanabatake_Chaika.png",twitter:"zulmihp1nlmot5y",youtube:"UCsFn_ueskBkMCEyzCEqAOvg"},{id:54,name:"雪汝",furigana:"せつな",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Setuna.png",twitter:"setsuna2434",youtube:"UCfM_A7lE6LkGrzx6_mOtI4g"},{id:47,name:"舞元啓介",furigana:"まいもとけいすけ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Maimoto_Keisuke.png",twitter:"maimoto_k",youtube:"UCJubINhCcFXlsBwnHp0wl_g"},{id:60,name:"童田明治",furigana:"わらべだめいじー",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Warabeda_Meiji.png",twitter:"warabeda_meiji",youtube:"UCveZ9Ic1VtcXbsyaBgxPMvg"},{id:13,name:"鈴谷アキ",furigana:"すずやあき",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Suzuya_Aki.png",twitter:"aki_suzuya",youtube:"UCpnvhOIJ6BN-vPkYU9ls-Eg"},{id:56,name:"魔界ノりりむ",furigana:"まかいのりりむ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Ririmu.png",twitter:"makaino_ririmu",youtube:"UC9EjSJ8pvxtvPdxLOElv73w"},{id:72,name:"リゼ・ヘルエスタ",furigana:"りぜへるえすた",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Lize_Helesta.png",twitter:"Lize_Helesta",youtube:"UCZ1xuCK1kNmn5RzPYIZop3w"},{id:12,name:"夕陽リリ",furigana:"ゆうひりり",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yuuhi_Riri.png",twitter:"yuuhi_riri",youtube:"UC48jH1ul-6HOrcSSfoR02fQ"},{id:70,name:"アンジュ・カトリーナ",furigana:"あんじゅかとりーな",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Ange_Katrina.png",twitter:"ange_katrina_",youtube:"UCHVXbQzkl3rDfsXWo8xi2qw"},{id:71,name:"戌亥とこ",furigana:"いぬいとこ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Inui_Toko.png",twitter:"inui_toko",youtube:"UCXRlIK3Cw_TJIQC5kSJJQMg"},{id:59,name:"黒井しば",furigana:"くろいしば",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kuroi_Shiba.png",twitter:"blackshiba_chan",youtube:"UCmeyo5pRj_6PXG-CsGUuWWg"},{id:18,name:"でびでび・でびる",furigana:"でびでびでびる",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Devidevi_Devil.png",twitter:"debidebiru_sama",youtube:"UCjlmCrq4TP1I4xguOtJ-31w"},{id:21,name:"伏見ガク",furigana:"ふしみがく",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Fushimi_Gaku.png",twitter:"gaku_fushimi",youtube:"UCXU7YYxy_iQd3ulXyO-zC2w"},{id:24,name:"卯月コウ",furigana:"うづきこう",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Uduki_Kou.png",twitter:"udukikohh",youtube:"UC3lNFeJiTq6L3UWoz4g1e-A"},{id:40,name:"渋谷ハジメ",furigana:"しぶやはじめ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Shibuya_Hajime.png",twitter:"sibuya_hajime",youtube:"UCeK9HFcRZoTrvqcUCtccMoQ"},{id:30,name:"文野環",furigana:"ふみのたまき",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Fumino_Tamaki.png",twitter:"nekokan_chu",youtube:"UCBiqkFJljoxAj10SoP2w2Cg"},{id:53,name:"雨森小夜",furigana:"あめもりさよ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Amemori_Sayo.png",twitter:"sayo_amemori",youtube:"UCRWOdwLRsenx2jLaiCAIU4A"},{id:6,name:"ギルザレンIII世",furigana:"ぎるざれんさんせい",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Giruzaren.png",twitter:"gilzaren_iii",youtube:"UCUzJ90o1EjqUbk2pBAy0_aw"},{id:26,name:"夢追翔",furigana:"ゆめおいかける",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yumeoi_Kakeru.png",twitter:"kakeru_yumeoi",youtube:"UCTIE7LM5X15NVugV7Krp9Hw"},{id:41,name:"町田ちま",furigana:"まちたちま",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Machida_Chima.png",twitter:"chima_machita23",youtube:"UCo7TRj3cS-f_1D9ZDmuTsjw"},{id:25,name:"名伽尾アズマ",furigana:"なかおあずま",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Nakao_Azuma.png",twitter:"azuma_dazo",youtube:"UCks41vQN-hN-1KHmpZyPY3A"},{id:1,name:"出雲霞",furigana:"いずもかすみ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Izumo_Kasumi.png",twitter:"ikasumi_zzz",youtube:"UCLpYMk5h1bq8_GAFVBgXhPQ"},{id:35,name:"桜凛月",furigana:"さくらりつき",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Sakura_Ritsuki.png",twitter:"sakura_ritsuki",youtube:"UCfQVs_KuXeNAlGa3fb8rlnQ"},{id:49,name:"轟京子",furigana:"とどろききょうこ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Todoroki_Kyouko.png",twitter:"kt_seeds",youtube:"UCRV9d6YCYIMUszK-83TwxVA"},{id:50,name:"遠北千南",furigana:"あちきたちなみ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Achikita_Chinami.png",twitter:"ac1kt",youtube:"UCuz0vzQgC8LRdS6lVV0UkUg"},{id:44,name:"神田笑一",furigana:"かんだしょういち",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kanda_Shouichi.png",twitter:"kanda_shoichi",youtube:"UCWz0CSYCxf4MhRKPDm220AQ"},{id:22,name:"八朔ゆず",furigana:"はっさくゆず",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Hassaku_Yuzu.png",twitter:"839yuzu",youtube:"UCFaDvgez8USXHiKidt0NtZg"},{id:76,name:"雪城眞尋",furigana:"ゆきしろまひろ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yukishiro_Mahiro.png",twitter:"mahiroyukishiro",youtube:"UCHX7YpFG8rVwhsHCx34xt7w"},{id:28,name:"安土桃",furigana:"あづちもも",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Aduchi_Momo.png",twitter:"momo_aduchi",youtube:"UC6TfqY40Xt1Y0J-N18c85qQ"},{id:75,name:"愛園愛美",furigana:"あいぞのまなみ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Aizono_Manami.png",twitter:"manami_aizono",youtube:"UC0WwEfE-jOM2rzjpdfhTzZA"},{id:55,name:"飛鳥ひな",furigana:"あすかひな",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Asuka_Hina.png",twitter:"hina__asuka",youtube:"UCiSRx1a2k-0tOg-fs6gAolQ"},{id:65,name:"語部紡",furigana:"かたりべつむぐ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Kataribe_Tumugu.png",twitter:"KataribeTsumugu",youtube:"UCufQu4q65z63IgE4cfKs1BQ"},{id:73,name:"鈴原るる",furigana:"すずはらるる",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Suzuhara_Lulu.png",twitter:"lulu_suzuhara",youtube:"UC_a1ZYZ8ZTXpjg9xUY9sj8w"},{id:5,name:"鈴木勝",furigana:"すずきまさる",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Suzuki_Masaru.png",twitter:"darkness_eater",youtube:"UCryOPk2GZ1meIDt53tL30Tw"},{id:66,name:"瀬戸美夜子",furigana:"せとみやこ",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Seto_Miyako.png",twitter:"seto_miyako",youtube:"UCHK5wkevfaGrPr7j3g56Jmw"},{id:74,name:"三枝明那",furigana:"さえぐさあきな",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Saegusa_Akina.png",twitter:"333akina",youtube:"UCNW1Ex0r6HsWRD4LCtPwvoQ"},{id:64,name:"小野町春香",furigana:"おのまちはるか",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Onomachi_Haruka.png",twitter:"onomachi_haruka",youtube:"UCg63a3lk6PNeWhVvMRM_mrQ"},{id:42,name:"矢車りね",furigana:"やぐるまりね",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Yaguruma_Rine.png",twitter:"rine_yaguruma",youtube:"UCvzVB-EYuHFXHZrObB8a_Og"},{id:31,name:"春崎エアル",furigana:"はるさきえある",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Harusaki_Earu.png",twitter:"harusakiair2434",youtube:"UCtAvQ5U0aXyKwm2i4GqFgJg"},{id:33,name:"月見しずく",furigana:"つきみしずく",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Tsukimi_Shizuku.png",twitter:"tukimi_sizuku",youtube:"UCqQV8xEBWd5SVZBLlYrS_5Q"},{id:29,name:"成瀬鳴",furigana:"なるせなる",avatarURL:"https://s3-ap-northeast-1.amazonaws.com/liver-icons/400x400/Naruse_Naru.png",twitter:"narusenaru_2434",youtube:"UCoM_XmK45j504hfUWvN06Qg"}]},faae:function(a,t,e){}});