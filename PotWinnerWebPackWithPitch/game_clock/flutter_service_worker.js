'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "3c9c20790a4352978b85756efd7b2584",
"assets/FontManifest.json": "0ba83353ca2fd901cb136d2fcb5f9079",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "f6ad18d1d0657ecf77a0e77a8e60bdd0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/gameplai_support/assets/fonts/Gugi/Gugi-Regu$lar.ttf": "c9e52a059afc82ec754b631fde8ad987",
"assets/packages/gameplai_support/assets/fonts/Gugi/Gugi-Regular.ttf": "c9e52a059afc82ec754b631fde8ad987",
"assets/packages/gameplai_support/assets/fonts/ProximaNova/ProximaNova-Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/packages/gameplai_support/assets/fonts/ProximaNova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/packages/gameplai_support/assets/fonts/ProximaNova/ProximaNova-Extrabold.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/packages/gameplai_support/assets/fonts/ProximaNova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/packages/gameplai_support/assets/fonts/ProximaNova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/packages/gameplai_support/assets/fonts/Roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/packages/gameplai_support/assets/images/Animations/Confetti.flr": "8cfe1fa7a371d46ab4c23c22aeb5fbb6",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_0.png": "1d75a9e46a4e7a6329080e6713f69a25",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_1.png": "3d65c0a2ec85891891130a8c8523b7b7",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_10.png": "2deb24be69ffc76a12fb198a438f11e9",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_11.png": "eb6f3598802ab60ee20c1adb1d64fa32",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_12.png": "1a3205839e19d9f02369e2ce0530c59f",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_13.png": "2df1dfe0184b7e31c46127f40269082a",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_14.png": "992580a6dc76917861c2a3a122e7f440",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_15.png": "73d46fa2a2f026bc0331524674daf549",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_16.png": "322965c7163edc46216c52edfbf8c3e9",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_17.png": "2c27fc705a63dd54885e35aee7267ef0",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_18.png": "de64a28a3cfae815c4698bd683ab6171",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_19.png": "2c8f8d4a8052f4f768758c9500cccb8a",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_2.png": "9c0daae236883c493b9987af21e31ad1",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_20.png": "4a415d4504b2d24f3b556a08e4965091",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_21.png": "5972f7920e5b018d5a219733be1331b4",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_22.png": "70688ba3fd8e2c2deb83c9754d3f011d",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_23.png": "18f3313463f20ad2ad18d805787beb8e",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_24.png": "3eaa8d5cd824d6233df5bbd892e8ceeb",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_25.png": "2c90c1119e28bf2642ba11ffa983db36",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_3.png": "53a8b302db6e4ca86b52e9ea9cf9342a",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_4.png": "519b5ab85f628a49b83589e7e850cea1",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_5.png": "fab26600d4aa291be965b281f0b144d8",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_6.png": "1f852d58ab2b9551a178b2a2c550a170",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_7.png": "18ab8abe53096d1753e7f1720046c8d0",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_8.png": "0651809d0d4fe38061743a941b4d3997",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_9.png": "b1a1f814fd382da126bcaeee09b54c87",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_default.png": "db5ec7bb11f70d476a14632ae7116024",
"assets/packages/gameplai_support/assets/images/Avatars/avatar_plai.png": "f02e7a197b87a40f1d6730f2141cd7a3",
"assets/packages/gameplai_support/assets/images/Backgrounds/BasketballBackground.png": "5659b1b8d8569a5caa279d23f6f6a239",
"assets/packages/gameplai_support/assets/images/Backgrounds/BasketballBackground_skeleton.png": "d8e02f1f9142e4aab2f0b8f5b0496ef1",
"assets/packages/gameplai_support/assets/images/Backgrounds/BasketballShotMap.png": "0c3e9d8fd2d5618c651b483847864cb8",
"assets/packages/gameplai_support/assets/images/Backgrounds/basketball_background_skeleton.svg": "14581da49aa8c5dda82c347004d3d5cd",
"assets/packages/gameplai_support/assets/images/Backgrounds/End.png": "01d7f17f1dcc35a398e54b620e2f61e9",
"assets/packages/gameplai_support/assets/images/Backgrounds/Fans.jpg": "88e8bd639db3ddcfb34c34e63f4e09fd",
"assets/packages/gameplai_support/assets/images/Backgrounds/Fans_stadium.png": "10157b1eca0852076773b1c001bdfb06",
"assets/packages/gameplai_support/assets/images/Backgrounds/FootballBackground.png": "0b3e917679013dd680ee837d7183425b",
"assets/packages/gameplai_support/assets/images/Backgrounds/FootballBackground_skeleton.png": "7676c026674da6a96481bf2d657cb863",
"assets/packages/gameplai_support/assets/images/Backgrounds/FootballForeground.png": "2e3b1302e7978ddfe2ab73fbec0f5e01",
"assets/packages/gameplai_support/assets/images/Backgrounds/FootballForeground_skeleton.png": "850682542af5939c1b699bcfad6bbb4d",
"assets/packages/gameplai_support/assets/images/Backgrounds/FootballGround_skeleton.png": "01af1498f53e55f19e2eade305a78ef9",
"assets/packages/gameplai_support/assets/images/Backgrounds/football_background_skeleton.svg": "56d60c82df758105e5e5674c48ac024a",
"assets/packages/gameplai_support/assets/images/Backgrounds/football_foreground_skeleton.svg": "13e9f3fe07ddd77e224f28eb6ba4b7a1",
"assets/packages/gameplai_support/assets/images/Backgrounds/HeadToHead.png": "80b010d8f61593298f5fe97474966421",
"assets/packages/gameplai_support/assets/images/Backgrounds/Radiance.png": "82ac8b84af0dc01f903923e6188ecd79",
"assets/packages/gameplai_support/assets/images/Backgrounds/Real_basketball.png": "86de1ca49ba2d19272613655ae3d14d9",
"assets/packages/gameplai_support/assets/images/Backgrounds/Real_football.png": "e089f856c1bafa32fc23c9a52fab75d5",
"assets/packages/gameplai_support/assets/images/Backgrounds/Robot_basketball.png": "54f1a4b4b75fa279fc00ce62dc64a740",
"assets/packages/gameplai_support/assets/images/Backgrounds/Robot_football.png": "e9eb7bc79987034d891521fdf3b5ebe6",
"assets/packages/gameplai_support/assets/images/Backgrounds/TexturedBackground.png": "07ce635ebd6a75b67a24d1bbe2c7acdb",
"assets/packages/gameplai_support/assets/images/Backgrounds/Waves.png": "1741108f9b507d04573f4a3542d96e5d",
"assets/packages/gameplai_support/assets/images/Backgrounds/WavesBlue.png": "3f1addd8f748dc8dfa230368b6d6840b",
"assets/packages/gameplai_support/assets/images/Backgrounds/WavesGreen.png": "b250fb3709cb7db3d819f525dc122ddd",
"assets/packages/gameplai_support/assets/images/Boosters/Defended.png": "d1893c56aa5ccacd880e1e41dc96de85",
"assets/packages/gameplai_support/assets/images/Boosters/DrinkingPotion.flr": "66ad2b7cf6adc1bbbc4848a43a916272",
"assets/packages/gameplai_support/assets/images/Boosters/Explosion.png": "fdf0bbd90d5b8073087e86b018c51301",
"assets/packages/gameplai_support/assets/images/Boosters/Hammer.png": "5b1954b424cef8a5cc822c3976a377c9",
"assets/packages/gameplai_support/assets/images/Boosters/Potion.png": "5b1156f5a29cca563a086c16cf21e261",
"assets/packages/gameplai_support/assets/images/Boosters/Potion.riv": "09f1ff9bc015744e17650754c1f19f00",
"assets/packages/gameplai_support/assets/images/Boosters/Robber.png": "64f53aa4a10fdee716dc6ef508dc8bf9",
"assets/packages/gameplai_support/assets/images/Boosters/Robber_swag.png": "6f4e25eb56a4cff433fedfbaf43ca6b0",
"assets/packages/gameplai_support/assets/images/Boosters/Shield.png": "5556467c9ae5f073db242a0b3cdc839c",
"assets/packages/gameplai_support/assets/images/Boosters/Shield_Broken.png": "b78e803e5cbf02fbed83e04037bd1947",
"assets/packages/gameplai_support/assets/images/Boosters/Spotlight.png": "5b7816dbcafb7c1c5316bb8ad863b3e2",
"assets/packages/gameplai_support/assets/images/Boosters/Swag.png": "9de21b9c2b8b29034bde5bf03a839f21",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/ATL.png": "937ff79dfdcf640d2276b4244fcc3a11",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/BKN.png": "fa012eea0f98fecff402bc552b11d6a5",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/BOS.png": "7aaa238564715ecdf7dfb164c2f9b43d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/CHA.png": "853cc8947714cfed2195e498d6ff2604",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/CHI.png": "be85a27a0d9017c2ff0894d8bee3b834",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/CLE.png": "5f3b8aba5934548541cd967380b24955",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/DAL.png": "7dc39277b06d51a7cf8a7dd7e3aefa2e",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/DEN.png": "25ffbb6a3e9ae160dc1ad264717c5e63",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/DET.png": "004aac08cdceca18ae56d1eb5b18878d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/GSW.png": "d2283de6b8819df9e3a335b20f8b9ae9",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/HOU.png": "694011d0864c40e43cfafd9e4ce5b544",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/IND.png": "ca0258ca42aef15edd5e647e027249ef",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/LAC.png": "ebcfba988a7323683f811009831985f7",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/LAL.png": "ce38768545a3be37c4d07767ef35765c",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/MEM.png": "6d19ff8edb223975a91206ffbe7e9390",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/MIA.png": "1564cb5dfbd10a3c846676c113589f56",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/MIL.png": "cebfb1dff04639b929beb7f9eef45073",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/MIN.png": "68c9d0033fa6f8410f8347577fd71afe",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/NOP.png": "27354574d49e1768658395f5c87b266a",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/NYK.png": "66a7206ff4b0406ce5c29967cae39ed2",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/OKC.png": "d9f38ac88003c382429c1f6400213eb4",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/ORL.png": "9beaa8e2290c232b0f880a849dabe6e2",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/PHI.png": "7cb6c955bb1769c722a8f4a602255f0d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/PHX.png": "6512a4a68b28a5c575895bdebe41e18e",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/POR.png": "5629094187ead8b2bccafd7f5e2da82a",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/SAC.png": "a3b16f2a732962d627f611c85afa63c7",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/SAS.png": "6d147f68466a5159db0c25e8621a45a0",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/TOR.png": "36c89baae429e298191c79ed6fb18b35",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/UTA.png": "a785328265bb2964f38e709b2c6f118b",
"assets/packages/gameplai_support/assets/images/CornerFlags/Basketball/WAS.png": "1a5f3742add2fee69d3a881083cdcdff",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/ARS.png": "667e614962832cf280b0460dc28325e1",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/AUT.png": "f36df9cb1794a107a7e9992d32509e53",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/BEL.png": "4f2e3d635dc3aa26aadba6dd4370c8d1",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/BFC.png": "0841f3a012a138977bbeeb8b0d02f767",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/BHA.png": "3b25dd59d8d5e1f2387534de945030c4",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/BUR.png": "a4a961c203df85c2c70200a672b52b5d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/CFC.png": "36a2a7bd6b673bd565cba08183ca8c15",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/CRO.png": "f70e85788462321cec3958e00e339ef8",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/CZE.png": "34a0c9176a49c7b433558f4838d6567d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/DEN.png": "7099027a6318a4d8f709fa29854fd1fe",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/ENG.png": "bc8d867edba351abdb1f6b807806cfe6",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/ESP.png": "24862ec1107a563755c5e2f587e4088f",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/EVE.png": "1db3a34225f4d5cdbd5df6f044e694bc",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/FIN.png": "49c29eb43158f745d896e34843f49c65",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/FRA.png": "3169d0fbd563423c5284c491a8ace298",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/FUL.png": "641d7acf5eac984e21eff18e4c3fb1b1",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/GER.png": "07bcf17ed467f3d72dc5ce61ee4385eb",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/HUN.png": "74f2e883399d01b187ce6b47cfa787bf",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/ITA.png": "e2e2312ec644d90fd5eceade5e84a3ef",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/LEE.png": "ddc56130b149fc019a59b4b58cf69008",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/LEI.png": "9f43639061af4f77fe1dbc6efc76ddbb",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/LFC.png": "53bfc8b1a8c7e8666db7ffe93cd39570",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/LU.png": "ddc56130b149fc019a59b4b58cf69008",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/MKD.png": "031c864bf8819d821add20f6c31dabc9",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/MNC.png": "258c03b002734df7cdb48684747cad72",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/MNU.png": "122fc7f398011eb5a30f722fd21c69a0",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/NED.png": "781b5eeab307119b9831582814e9dfb2",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/NEW.png": "5f46826736926d6f957615e7b206a41d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/NOR.png": "6581205fbc9560a2406091cc079200ef",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/PAL.png": "2224366aeb62d67de7e1467501d7b1be",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/POL.png": "d17c4b405979abed68a3d416f6d2fd19",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/POR.png": "bfc94fc539f8f3fb2309778f2d2dae6f",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/RUS.png": "ee578c2e5a79ea7788c4bb07edd8ed58",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SCO.png": "20b13f45fcd32e056ddf8f80821f0ed6",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SHU.png": "0fbcb58ce674a3ae9b9cfb9cb60a9cfc",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SOT.png": "d3d5fa4a0746bd68b430460e4334f957",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SUI.png": "fb26d7198d50772344def2ec1e51b122",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SVK.png": "2eae0026f16c8fcccc01656b9692224d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/SWE.png": "62085ccb12fe992db701668115e70f99",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/TOT.png": "61cb22f5deb6969c4beb039c16b603d9",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/TUR.png": "9e3d679822b280d078345bcabcf0e7eb",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/UKR.png": "12c4a8b7dc8eace50d7849064488299b",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/VIL.png": "7e42c53602020464d05cd763789ed71d",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/WAL.png": "c7c96cdc59cfeb1a1e332979bde3ac0c",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/WAT.png": "d4bc7f1b996ff47fcbf38584f117e176",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/WBA.png": "7d51f24b2802f17df9b2a5b459205d65",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/WHU.png": "218a5c8391a2f05b9309c77d41f76847",
"assets/packages/gameplai_support/assets/images/CornerFlags/Football/WOL.png": "fbb21aec0d5860d0dd8657df304db4c4",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/ATL.png": "bd50a5340e27cdb18b3a1ea8afd14835",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/BKN.png": "ccf3ddde74fa3b9a04edcb2536dfd67c",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/BOS.png": "a688c7d1550f6a33edc1f8bb6ec624dd",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/CHA.png": "24d207203e4a29d4c5e93097762fc288",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/CHI.png": "a6f5861d44b305631ff9b02fd0e42458",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/CLE.png": "f70223da4e32615c306c82759df4889b",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/DAL.png": "1515d2d36b1846f15c8dba25bc4e58dc",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/DEN.png": "69c6a7a4c38129c26c97b7f553b22d70",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/DET.png": "055095d906a49a3c5d48a034ed3cd6c0",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/GSW.png": "bc19e901f59366ffdef479ee073a87cc",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/HOU.png": "6ac3be4f72435b2999b14184a7b36bf6",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/IND.png": "54088da66dc0aa4ab1aaa960a12b323d",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/LAC.png": "58e82871b3315080001a4e948d8f158d",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/LAL.png": "670979c0f1fd60e19f95c0808f153b20",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/MEM.png": "9fd3b16a825f5a9f183c3eed21998fd4",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/MIA.png": "7f069297d4a2efef1dade7eb95fb7398",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/MIL.png": "1bc460958b23aeff0199a3cff57f4401",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/MIN.png": "3b3baf48b8e6434ea32bc73549c9d536",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/NOP.png": "77f29d79b2ee1cbce354669b34f2bc1b",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/NYK.png": "b5eb0dde8472ff8e2386712a7e5ab00a",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/OKC.png": "24b43186d2c0c89ee4b91a5e03f8586f",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/Original/DAL.png": "5542c90d4fff1cc78d91581f37bd1855",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/Original/LAL.png": "200623f7fbdf00967fa973fb48b3d439",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/ORL.png": "137793ab3095bb7d90d029a3d4f736c1",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/PHI.png": "d449baadd218e3e2df279619e4141774",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/PHX.png": "4f96a362f644f0d90610742cee70d591",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/POR.png": "e07522c24bbaf221e3cf030afb3a29e7",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SAC.png": "37604af8fb3fa2087a1903bfc6a1ea33",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SAS.png": "3dc3fbc9952b114628268844c7372d20",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/ATL.svg": "f06b5eeb30c70d988dcf808d465f452d",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/BKN.svg": "1981cd1dc8260521f876b96de226e853",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/BOS.svg": "1746b907063e44453c72de3293ec5277",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/CHA.svg": "a077d98c37e19c97f8d4578236c789d3",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/CHI.svg": "c3f0b66e2ab36b803e93a330bf2941a1",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/CLE.svg": "b304dc1500cc87e53a2cc624af68c443",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/DAL.svg": "554e0e1d9060bc24fd8ba8a5fec50d86",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/DEN.svg": "eb2999ccd4d2b9913621fba1c275c2fa",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/DET.svg": "05d17bf3fe30f1f2dbf3e7b7425c0919",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/GSW.svg": "1815e029e62b1b8b6b21bb7eceb704e6",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/HOU.svg": "c08d3714e6cd9e3376b655726592e3d0",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/IND.svg": "0e5c524066a93bdc4dfd7ccfeb603da1",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/LAC.svg": "522af1e2ce407035be7fe3cd38eae5e8",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/LAL.svg": "fa5222ff8c76916bddb5b8c2cf8754f6",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/MEM.svg": "b1b74a5a67b276fd3fcf65843335c36f",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/MIA.svg": "f1303004b589060d5ef122e03d140b14",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/MIL.svg": "2ac725b57b252bf6e5749107b2d71805",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/MIN.svg": "62081b143c7f7b281bac8076c66a5f2e",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/NOP.svg": "6fe40561975c06174b7dea7aa11295ed",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/NYK.svg": "a9718eb28d227e3cd0c8a2504f42f703",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/OKC.svg": "23eaec2c14d5f1079c04208672b12705",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/ORL.svg": "a0e1bbae3bdc5cf36e48e01356607cb2",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/PHI.svg": "3c9a783a3670580b440911aed0e4a16d",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/PHX.svg": "6f999a95d5f7285595265c06fb12f3c8",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/POR.svg": "09f5f0806e0be9dca6012400fecc4b2d",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/SAC.svg": "9c7d2cbb2ee82d098f544098df572a6f",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/SAS.svg": "9494fd1111e312333aaddb0d16760da7",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/TOR.svg": "e1a01451ecd0f585fc803da4daa39a85",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/UTA.svg": "10d48f34bbcfbb558e932195fdd10acb",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/SVG/WAS.svg": "3ed352c229519904d5fc4d07bf958f62",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/TOR.png": "5d1b7cfc409c027dd9e5191522d6f7ab",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/UTA.png": "28adf094bf547b2a61498a7659b70132",
"assets/packages/gameplai_support/assets/images/Crests/Basketball/WAS.png": "06d84fd67792644680336b58043726dd",
"assets/packages/gameplai_support/assets/images/Crests/Football/ARS.png": "4530b18476e81562dd69f83ab6e28cfd",
"assets/packages/gameplai_support/assets/images/Crests/Football/AUT.png": "b0a85a697a8be0e8f151006e4425511d",
"assets/packages/gameplai_support/assets/images/Crests/Football/BEL.png": "e60b8fae8102054c125124f910fe0673",
"assets/packages/gameplai_support/assets/images/Crests/Football/BHA.png": "047a5c3eb102b431091d48f2d6309a35",
"assets/packages/gameplai_support/assets/images/Crests/Football/BMU.png": "260dcd450245499d596e4d67dcce2a4e",
"assets/packages/gameplai_support/assets/images/Crests/Football/BRE.png": "098b541676b75fb5e9c9b85ce9344319",
"assets/packages/gameplai_support/assets/images/Crests/Football/BUR.png": "7b7680c3f3c01450775e196810ed5aeb",
"assets/packages/gameplai_support/assets/images/Crests/Football/BVB.png": "c5e0190186f26237a2bc3136e1085c28",
"assets/packages/gameplai_support/assets/images/Crests/Football/CFC.png": "b0d3ac123087f2f3fe77d173b6876dd7",
"assets/packages/gameplai_support/assets/images/Crests/Football/CRO.png": "ddbbee2931be8c2bd2b85accf500f3fa",
"assets/packages/gameplai_support/assets/images/Crests/Football/CZE.png": "3568a248e3345322f6b77472fe236dee",
"assets/packages/gameplai_support/assets/images/Crests/Football/DEN.png": "cd675b4cf5f36857ab5c24b1d3d05c2e",
"assets/packages/gameplai_support/assets/images/Crests/Football/ENG.png": "1480530498424688d2e82ecdacd22a66",
"assets/packages/gameplai_support/assets/images/Crests/Football/ESP.png": "9ef8c04039478cb9249fbfc161f6106a",
"assets/packages/gameplai_support/assets/images/Crests/Football/EVE.png": "d35da45aeffc03cffc77a20eb18b0547",
"assets/packages/gameplai_support/assets/images/Crests/Football/FCP.png": "1c8b1dd0fa42cafb9edb96f2e8b1cadc",
"assets/packages/gameplai_support/assets/images/Crests/Football/FIN.png": "536060c7a9ea64f2eba465d22977d503",
"assets/packages/gameplai_support/assets/images/Crests/Football/FRA.png": "9e8966a88268ef97d17b9847956bfa00",
"assets/packages/gameplai_support/assets/images/Crests/Football/FUL.png": "b1a8b1fe03d398b5fa421a4cb7118aa8",
"assets/packages/gameplai_support/assets/images/Crests/Football/GER.png": "0b7255ce9b96062fcc2dd63a5218a17f",
"assets/packages/gameplai_support/assets/images/Crests/Football/HUN.png": "416541b9280d5e07803edfe2c60cfe61",
"assets/packages/gameplai_support/assets/images/Crests/Football/ITA.png": "4366f513f6bbfd5f9b002bcb4c2b8520",
"assets/packages/gameplai_support/assets/images/Crests/Football/LEE.png": "95663e24ccf0a6059ab387b35bc413c2",
"assets/packages/gameplai_support/assets/images/Crests/Football/LEI.png": "41e8afdfb88352e1e8b68b1af47b7513",
"assets/packages/gameplai_support/assets/images/Crests/Football/LFC.png": "176259d93967e57087204695e067688d",
"assets/packages/gameplai_support/assets/images/Crests/Football/LU.png": "95663e24ccf0a6059ab387b35bc413c2",
"assets/packages/gameplai_support/assets/images/Crests/Football/MKD.png": "7d2d8e42749642bfcd6decb9feb39344",
"assets/packages/gameplai_support/assets/images/Crests/Football/MNC.png": "968991c64dfac7adcf2bb26f0bf9927f",
"assets/packages/gameplai_support/assets/images/Crests/Football/MNU.png": "9a544ab9925b9c20ef457ffb61fcdf79",
"assets/packages/gameplai_support/assets/images/Crests/Football/NED.png": "a84593e3de87c0732b95f79cadb4fc3c",
"assets/packages/gameplai_support/assets/images/Crests/Football/NEW.png": "47913dbeed31ffcb38d0f8d841e410c6",
"assets/packages/gameplai_support/assets/images/Crests/Football/NOR.png": "5fc388a508e4d2257375fad573b434c6",
"assets/packages/gameplai_support/assets/images/Crests/Football/Original/ARS.png": "381b380c688de7b22d09a8bae6855855",
"assets/packages/gameplai_support/assets/images/Crests/Football/Original/LU.png": "b6563a481e4fee254f08a3a6acd75689",
"assets/packages/gameplai_support/assets/images/Crests/Football/PAL.png": "e4ea17d4be933ad48845d3d41e4f9a72",
"assets/packages/gameplai_support/assets/images/Crests/Football/POL.png": "e1f0679a0073c78cb20773923d9fe775",
"assets/packages/gameplai_support/assets/images/Crests/Football/POR.png": "4a5a1364360605d2b9893d61db10881c",
"assets/packages/gameplai_support/assets/images/Crests/Football/PSG.png": "a58d8ac933e550224adba8cd98277057",
"assets/packages/gameplai_support/assets/images/Crests/Football/RMA.png": "5bbe28d2574aba3ad9880bbf970ef9bd",
"assets/packages/gameplai_support/assets/images/Crests/Football/RUS.png": "05bb8f11d59eb0c061073e63b27a9b60",
"assets/packages/gameplai_support/assets/images/Crests/Football/SCO.png": "3a122885d60990ac06bef69bd41e8f47",
"assets/packages/gameplai_support/assets/images/Crests/Football/SHU.png": "ccf5d4c58083bc9a55c1b880a3fe3d21",
"assets/packages/gameplai_support/assets/images/Crests/Football/SOT.png": "e7b1313929ae1b5fb27c01943c21f3ca",
"assets/packages/gameplai_support/assets/images/Crests/Football/SUI.png": "14eaf2ac21399debad014b7a744d1ce7",
"assets/packages/gameplai_support/assets/images/Crests/Football/SVK.png": "e234080a7c1b6dbff89689036e95699c",
"assets/packages/gameplai_support/assets/images/Crests/Football/SWE.png": "30eff6a041af0f74d4b810270bd64516",
"assets/packages/gameplai_support/assets/images/Crests/Football/TOT.png": "e70a18106bcb7fae10eade535b5d57be",
"assets/packages/gameplai_support/assets/images/Crests/Football/TUR.png": "5f3221bb0f21ed0803f472f23d20b143",
"assets/packages/gameplai_support/assets/images/Crests/Football/UKR.png": "61aceced291080dfd4d97849f38209f1",
"assets/packages/gameplai_support/assets/images/Crests/Football/VIL.png": "d2f20233c1ad2e9e5b743d5e33e1e760",
"assets/packages/gameplai_support/assets/images/Crests/Football/WAL.png": "38cb58eef8d64a3076557a9e5f26ce4d",
"assets/packages/gameplai_support/assets/images/Crests/Football/WAT.png": "6481eb39f8e5610fb50e5f666fb10c59",
"assets/packages/gameplai_support/assets/images/Crests/Football/WBA.png": "d7108dc28f3d13e813ad4abfc0c21364",
"assets/packages/gameplai_support/assets/images/Crests/Football/WHU.png": "965ff8970679993522c375dfeeda4c95",
"assets/packages/gameplai_support/assets/images/Crests/Football/WOL.png": "8f968be42e02a2249f4d67a2948d8ee7",
"assets/packages/gameplai_support/assets/images/Events/Basketball/1Pointer.png": "f01f1cb81f633af07d52e3874420798e",
"assets/packages/gameplai_support/assets/images/Events/Basketball/1PointerMissed.png": "0492cb34c36d71177631fdeef0328048",
"assets/packages/gameplai_support/assets/images/Events/Basketball/2Pointer.png": "4e2a86db0ec6c26942a7744605ea2eda",
"assets/packages/gameplai_support/assets/images/Events/Basketball/2PointerMissed.png": "6d2fb4d562c80f16120f4e3732567ed7",
"assets/packages/gameplai_support/assets/images/Events/Basketball/3Pointer.png": "052d4ce3427186e4bbb35706eb8affca",
"assets/packages/gameplai_support/assets/images/Events/Basketball/3PointerMissed.png": "254771e3b7e5418c6712977eef3f57c6",
"assets/packages/gameplai_support/assets/images/Events/Basketball/Bulb.png": "140c1478afac88c969685a4fa655041f",
"assets/packages/gameplai_support/assets/images/Events/Basketball/Calculating.png": "9dabdb8bb7ac771ece07084edf046d3e",
"assets/packages/gameplai_support/assets/images/Events/Basketball/Foul.png": "7cee763ea8abd14a309850f5a0ee5d82",
"assets/packages/gameplai_support/assets/images/Events/Basketball/FreeThrow.png": "1ec4637aa2a05abd528893fb8f11a83a",
"assets/packages/gameplai_support/assets/images/Events/Basketball/Turnover.png": "36a040d91f50cad238ecbe79a3957d09",
"assets/packages/gameplai_support/assets/images/Events/Basketball/Whistle.png": "e5acbc109bae1b00dedd7717e9bdad98",
"assets/packages/gameplai_support/assets/images/Events/Football/Bulb.png": "140c1478afac88c969685a4fa655041f",
"assets/packages/gameplai_support/assets/images/Events/Football/Calculating.png": "9dabdb8bb7ac771ece07084edf046d3e",
"assets/packages/gameplai_support/assets/images/Events/Football/Chance.png": "744f1be6028a4f083290d1a90052c254",
"assets/packages/gameplai_support/assets/images/Events/Football/Corner.png": "5a2d1a0c01f39d201b6158d6e62a6f2a",
"assets/packages/gameplai_support/assets/images/Events/Football/DoubleYellowCard.png": "b10c56a709a8d3ebb1c0e02004932f19",
"assets/packages/gameplai_support/assets/images/Events/Football/ET.png": "ba10b46520e5edfc4645859618689e92",
"assets/packages/gameplai_support/assets/images/Events/Football/Foul.png": "7cee763ea8abd14a309850f5a0ee5d82",
"assets/packages/gameplai_support/assets/images/Events/Football/FreeKick.png": "4fd56f2e4272c796163582e3a05626ae",
"assets/packages/gameplai_support/assets/images/Events/Football/Goal.png": "c55c8bd1181a0003213b2dde73f542c8",
"assets/packages/gameplai_support/assets/images/Events/Football/GoalCancelled.png": "f3f37511df747054f7bfe34176aac5b4",
"assets/packages/gameplai_support/assets/images/Events/Football/Penalty.png": "25dff78d082144229f7df5ab2afde933",
"assets/packages/gameplai_support/assets/images/Events/Football/PenaltyMissed.png": "8447f47593b1d55649f01f0181451792",
"assets/packages/gameplai_support/assets/images/Events/Football/RedCard.png": "44d7b085533ccf3ef1a56e97b5d6a468",
"assets/packages/gameplai_support/assets/images/Events/Football/ShotOnTarget.png": "744f1be6028a4f083290d1a90052c254",
"assets/packages/gameplai_support/assets/images/Events/Football/VAR.png": "d803c93d66c83798229e89f194241ba6",
"assets/packages/gameplai_support/assets/images/Events/Football/Whistle.png": "e5acbc109bae1b00dedd7717e9bdad98",
"assets/packages/gameplai_support/assets/images/Events/Football/YellowCard.png": "dd29df31158d230aa672fc4efa5a469f",
"assets/packages/gameplai_support/assets/images/Icons/AppIconCircle.png": "be30525e8a744c367d370aa5a7585240",
"assets/packages/gameplai_support/assets/images/Icons/Basketball.png": "f01f1cb81f633af07d52e3874420798e",
"assets/packages/gameplai_support/assets/images/Icons/Bicep.png": "ec2d7c3cda9037d6dcc7413c3383e632",
"assets/packages/gameplai_support/assets/images/Icons/Calendar.png": "1ab269a44d88029c0dbb4e487d4ec4d7",
"assets/packages/gameplai_support/assets/images/Icons/Chips.png": "72a1654004ac090d4ffe31b2a61fe4e0",
"assets/packages/gameplai_support/assets/images/Icons/Clicker_Active.png": "7b779bfeeeb529c9b16c108eb6c3ff61",
"assets/packages/gameplai_support/assets/images/Icons/Clicker_Active_Mint.png": "685a4556fbf1b8e7aa3b480a9d6d6a0d",
"assets/packages/gameplai_support/assets/images/Icons/Clicker_Passive.png": "64af1d0ed2fe58f34c48341c64d5dc07",
"assets/packages/gameplai_support/assets/images/Icons/Coins.png": "1d1e4b230dcb029d007662babdd98663",
"assets/packages/gameplai_support/assets/images/Icons/Coins_Large.png": "3b4ca7ea1f5e325b691f21abc3135f24",
"assets/packages/gameplai_support/assets/images/Icons/Football.png": "291742efbb1d250188ac7a0b3274c034",
"assets/packages/gameplai_support/assets/images/Icons/Gameplai.png": "f02e7a197b87a40f1d6730f2141cd7a3",
"assets/packages/gameplai_support/assets/images/Icons/LiveBall.png": "6f42e8584aeda6b8087728bb885fae1b",
"assets/packages/gameplai_support/assets/images/Icons/MenuIcon.png": "0aec149f8f66caa40b71707c83eaf8be",
"assets/packages/gameplai_support/assets/images/Icons/Network.png": "e00a61bd98d9a1e147f5c91d59c53bba",
"assets/packages/gameplai_support/assets/images/Icons/Orb_Active.png": "4d654e2b6d7b06da5e38da1ddee0735a",
"assets/packages/gameplai_support/assets/images/Icons/Orb_Inactive.png": "d77edb88b068238d05da8653b1a1dd5c",
"assets/packages/gameplai_support/assets/images/Icons/Orb_Inactive_White.png": "0535795d9b18dcc46c780a4a442d9876",
"assets/packages/gameplai_support/assets/images/Icons/Points.png": "3668b396f185ca7a84806264fcb0cf91",
"assets/packages/gameplai_support/assets/images/Icons/Prize.png": "63660ee6c994f61568e9c23e3c4db1d3",
"assets/packages/gameplai_support/assets/images/Icons/RedCard.png": "1920c189a2770653082cff5608834ba8",
"assets/packages/gameplai_support/assets/images/Icons/RedCardTip.png": "a9db7f6961394461c02c2004d8f7b04b",
"assets/packages/gameplai_support/assets/images/Icons/SimBall.png": "71edd04d70726e5c858db3b3cc318e49",
"assets/packages/gameplai_support/assets/images/Icons/Wallet.png": "fd39dfd6f485d51decb4e075cdceac0e",
"assets/packages/gameplai_support/assets/images/Logos/AppleLogo.png": "b8a30cc3383ed4f66908ddd77a9d4978",
"assets/packages/gameplai_support/assets/images/Logos/FBLogo.png": "c7730c3d5ec4c2679de7aefe6df8ce25",
"assets/packages/gameplai_support/assets/images/Logos/GoogleLogo.png": "1cb8bdbd207ecb5ea7ccaaf18ab05566",
"assets/packages/gameplai_support/assets/images/Players/LeBronJames.png": "ec5c733463144f32538c7afcf21ce29f",
"assets/packages/gameplai_support/assets/images/Players/LukaDoncic.png": "2f5fa1236ab5dc6b8001514bdd4a8ffb",
"assets/packages/gameplai_support/assets/images/Players/RussellWestbrook.png": "c71e3fb20af17100d8bd45f197c3eb73",
"assets/packages/gameplai_support/assets/images/Players/SpencerDinwiddie.png": "b9f02471d96105c46ad9de4206b8791f",
"assets/packages/gameplai_support/fonts/Gugi/Gugi-Regular.ttf": "c9e52a059afc82ec754b631fde8ad987",
"assets/packages/gameplai_support/fonts/ProximaNova/ProximaNova-Black.otf": "f401366193520cdf512c7ade98260e27",
"assets/packages/gameplai_support/fonts/ProximaNova/ProximaNova-Bold.otf": "62d4d7d369292a9bf23762465ec6d704",
"assets/packages/gameplai_support/fonts/ProximaNova/ProximaNova-Extrabold.otf": "b4f9eb8ce027016ab9b9860817451d07",
"assets/packages/gameplai_support/fonts/ProximaNova/ProximaNova-Regular.otf": "410504d49238e955ba7dc23a7f963021",
"assets/packages/gameplai_support/fonts/ProximaNova/ProximaNova-Thin.otf": "8f0bc01ce5e5becef482d277cb72b728",
"assets/packages/gameplai_support/fonts/Roboto/Roboto-Medium.ttf": "58aef543c97bbaf6a9896e8484456d98",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"game_clock.html": "7b60954dd0d0634ff218d5f2653128ea",
"game_clock.js": "e5ff8fb8ce01cd5d739e054ddf97ceb9",
"get_attributes.js": "d1ab09b8ab5034a029e857fd8791e3d6",
"get_key.js": "9558475aff83c98a9436babfb98accd8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "208731872fc2f31136c16719df4ef58d",
"/": "208731872fc2f31136c16719df4ef58d",
"index_old.html": "a20be700940f13880fed202426181d16",
"main.dart.js": "68c96e872d06a8628fcd26384cfabe5d",
"manifest.json": "3730eeea2e1fa0b72869ea5e0a262a5a",
"style.css": "b354b37d64bc21f05311ef9c552ce9ff",
"version.json": "b60097d109f8d6ebad10a16756c42055"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
