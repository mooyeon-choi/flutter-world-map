'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e3af20da93bdf62e76f98b5c91f70b0d",
"assets/AssetManifest.bin.json": "3f88855093476e8591480cb82ebf4804",
"assets/AssetManifest.json": "613f2e9c42f1a4eca87ec396811f3109",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/images/world_map/AE.svg": "85404537d3a006b4a1ecc8b627886159",
"assets/images/world_map/AF.svg": "88222516638646e56bd0e5ec43eb121f",
"assets/images/world_map/AL.svg": "2c9d27a8e7ca37585142c4a901b83fed",
"assets/images/world_map/AM.svg": "bd6e185a81ac641b1fbadb3bc5aaa7d2",
"assets/images/world_map/AO.svg": "7f4c702405bbec264c48066af2620b7d",
"assets/images/world_map/AR.svg": "6a1b7e6fdda14374f1922c98f99e9040",
"assets/images/world_map/AT.svg": "6bbfa417c668aed8fc2f190d87ae01a7",
"assets/images/world_map/AU.svg": "a6f30ea71e9814a79155dc5b7ff28828",
"assets/images/world_map/AZ.svg": "18622332825d9a22fc813ccee4a1c40c",
"assets/images/world_map/BA.svg": "55cf04cf7268b825ce172a5d96b819fc",
"assets/images/world_map/BD.svg": "3b37bc3694541ffee6de8c78763c5763",
"assets/images/world_map/BE.svg": "83fdc9db18e8562e0d43bcdf399dd251",
"assets/images/world_map/BF.svg": "c6403c98930c2ebf2f3a6451551ce80f",
"assets/images/world_map/BG.svg": "adea211d2f6bcb5bad4059ad88787ded",
"assets/images/world_map/BI.svg": "c164ca6167c7be7ed6702cd2bea43b51",
"assets/images/world_map/BJ.svg": "41b4fdefdcaecb663e8b26d8c436cff1",
"assets/images/world_map/BN.svg": "49368abedc107b4f0662b54b82bbd59b",
"assets/images/world_map/BO.svg": "f30fba88515e77a9836cc5c229757eda",
"assets/images/world_map/BR.svg": "c640e24c7ca3e37877eae06b91015bcb",
"assets/images/world_map/BS.svg": "df9ddb9cb845ba4447ab8e57421351d5",
"assets/images/world_map/BT.svg": "414b0d54552ddb3e5cb8cdf1323409c0",
"assets/images/world_map/BW.svg": "72fcf88b00736b75b8604ccaa5f87e6d",
"assets/images/world_map/BY.svg": "76f5d7dd7c84e3cb586bef17013467b6",
"assets/images/world_map/BZ.svg": "5e126178ee38293f897e71e24f8dbc45",
"assets/images/world_map/CA.svg": "30d83972647b086a915be3cb9bce9d43",
"assets/images/world_map/CD.svg": "d26b6903a8931d7fcb1823f2a99b04ea",
"assets/images/world_map/CF.svg": "bf230327de434b41682020fe756e695f",
"assets/images/world_map/CG.svg": "19d1b5a2df656753beef7ef06323d698",
"assets/images/world_map/CH.svg": "ab0e90e75895474f55eaaec82feb061b",
"assets/images/world_map/CI.svg": "1ca01c5ab1b97b7916ebf119b56917dd",
"assets/images/world_map/CL.svg": "fb4723017adcd3dcb6e8455b0df0a7bd",
"assets/images/world_map/CM.svg": "aae310b9a0a55707dfd55acae2b75318",
"assets/images/world_map/CN.svg": "09d095d775d153277ed09b27976ed5e9",
"assets/images/world_map/CO.svg": "c1fb192033473b6ea869237c36f324ba",
"assets/images/world_map/CR.svg": "23fa91e39fd0fa5bab5eab322acc5d44",
"assets/images/world_map/CU.svg": "56237c8c82eca5d807cbf8acde588d1a",
"assets/images/world_map/CY.svg": "c2157746ff22a2a161209fa8262dd3e2",
"assets/images/world_map/CZ.svg": "a2a5eacc134f8673088154ac8c288a99",
"assets/images/world_map/DE.svg": "7cb14e4583a72cad3370283466b9a08d",
"assets/images/world_map/DJ.svg": "fca6ffeec47b286562f8f69f01835701",
"assets/images/world_map/DK.svg": "0750c455a8e274b6b0e51939479f9728",
"assets/images/world_map/DO.svg": "67469a285945917fa255f6426c4ab226",
"assets/images/world_map/DZ.svg": "389e24a5e8df422e88e50ac5a2d453a9",
"assets/images/world_map/EC.svg": "ca43a7d2499a0bf2db139b928debfa33",
"assets/images/world_map/EE.svg": "a548d0fb8d3771972335112e4064e11b",
"assets/images/world_map/EG.svg": "61f957de17c4a573c1f1da0ec6db4256",
"assets/images/world_map/EH.svg": "fd380f13f05dd7dbb266158cd3cf8919",
"assets/images/world_map/ER.svg": "132d15669ceb39082361500772f4ddc8",
"assets/images/world_map/ES.svg": "2d6ab0eb19b267c36dbb5b917e9280dc",
"assets/images/world_map/ET.svg": "ac30cf3ad223007551d4ae38ad6c2412",
"assets/images/world_map/FI.svg": "3027c601a13d65c7bdea3b8ba8ef8576",
"assets/images/world_map/FJ.svg": "d96fd748fc93078dec3046e89c1f0797",
"assets/images/world_map/FK.svg": "cf23b6c85e916d23466a150e83d4531f",
"assets/images/world_map/FR.svg": "ae753061c3593a72f6d460b37d7b9b04",
"assets/images/world_map/GA.svg": "26b43850790d80f644b0f58f583fdec1",
"assets/images/world_map/GB.svg": "bdca0204277fec10f268f115e0652bf9",
"assets/images/world_map/GE.svg": "4c5da3a09d545e538cb43916e3c5d205",
"assets/images/world_map/GF.svg": "398d89afd1e0f86e69d7058c97a559a1",
"assets/images/world_map/GH.svg": "29e77dbcf4b0c4680f7183a4cab7ccb1",
"assets/images/world_map/GL.svg": "f495f7e6f63038c04738e7ddbe05c8e3",
"assets/images/world_map/GM.svg": "47ef5acd352acb337c761d8e1e4624d3",
"assets/images/world_map/GN.svg": "5dd64f905cf09e97ee9a31f1903d0ca0",
"assets/images/world_map/GQ.svg": "7eb8efd5dd5a11f11c2d411380ecb28c",
"assets/images/world_map/GR.svg": "867228453b994531844ca0632f81a172",
"assets/images/world_map/GT.svg": "c551bf0bfecc136aa3202aca92861f32",
"assets/images/world_map/GW.svg": "ef1c634d998dea7c30d18b787c05c076",
"assets/images/world_map/GY.svg": "97630ed82e6be591656e803b345358e1",
"assets/images/world_map/HN.svg": "7ad762f505e10bd18613294348ac4aca",
"assets/images/world_map/HR.svg": "1a16918d0244b26968d186e90a5079b6",
"assets/images/world_map/HT.svg": "79f61ebe93a46008e671d97072d32987",
"assets/images/world_map/HU.svg": "c68c2574f012aee2edd3de6d1f1fe7d7",
"assets/images/world_map/ID.svg": "0949341283427024cc7691a6d8bbfa08",
"assets/images/world_map/IE.svg": "e424b5337ff89625fb2c37d82cd6c5e4",
"assets/images/world_map/IL.svg": "0d5d4aa97ed00dcb77f09ccaad47a466",
"assets/images/world_map/IN.svg": "113ea91912678c81fb835700629dc399",
"assets/images/world_map/IQ.svg": "ff85f90d53c86ee4ef2e51897e787be5",
"assets/images/world_map/IR.svg": "625413eec6c86fa98aa5f166931c4aef",
"assets/images/world_map/IS.svg": "4dd828ee1be6d5823abc9ddf5e91a981",
"assets/images/world_map/IT.svg": "d398f741fdea61a2b4f3474893a2a7af",
"assets/images/world_map/JM.svg": "d25cb1655050eb3ef97d9ff8b3df9286",
"assets/images/world_map/JO.svg": "ad0fb8d0fd1b2b28df4c9d0562b68d39",
"assets/images/world_map/JP.svg": "c13943f132586ceee39f155f2e71bcc8",
"assets/images/world_map/KE.svg": "164fd5c18a3191a85e34838fbafc3b21",
"assets/images/world_map/KG.svg": "511fdc55870d701d5a5113574174f5b5",
"assets/images/world_map/KH.svg": "62a8b8b0d38aa12ece657e1fe624bfa6",
"assets/images/world_map/KP.svg": "681bbe020d2e9acb866e4a3db9d93f70",
"assets/images/world_map/KR.svg": "19ffeb6ad3a3994aba6ba97c56e2adbf",
"assets/images/world_map/KW.svg": "4dc33feea02b8c178faba197ff701580",
"assets/images/world_map/KZ.svg": "0668e479efa0350fb818c822c1fd0f76",
"assets/images/world_map/LA.svg": "daef0646c9bd41e097bc5fda0c87601a",
"assets/images/world_map/LB.svg": "35d2c35fc6e96a03810ca6c30f2a14fd",
"assets/images/world_map/LK.svg": "ec97c37ed84b69625ede7dc394d02948",
"assets/images/world_map/LR.svg": "6e4cc47e23cac2acc0e358811c49bca5",
"assets/images/world_map/LS.svg": "323526a639fb197d93bed8c08b478b78",
"assets/images/world_map/LT.svg": "a41e71a4fe51dcc79d6671d78fe18636",
"assets/images/world_map/LU.svg": "86450348f875aa6382a76552187a55d5",
"assets/images/world_map/LV.svg": "a13023a3d9d41f35305d624d1e600076",
"assets/images/world_map/LY.svg": "e60aff68022c8482c63b9808f36cc7b8",
"assets/images/world_map/MA.svg": "beef73e0345c1c4926c874042e0e7e3c",
"assets/images/world_map/MD.svg": "fa9536182f2d9e66945ec06c37074d71",
"assets/images/world_map/ME.svg": "e4fe1183e630b8e8bd25f40da327f3cf",
"assets/images/world_map/MG.svg": "d7ee0925c5524a32be6f091b6fbd16f5",
"assets/images/world_map/MK.svg": "debc81cad5466ad71468fe8714b42776",
"assets/images/world_map/ML.svg": "8b2916b399a8e8577aa624175f7fb70d",
"assets/images/world_map/MM.svg": "36f70f2deaa299e78bf63ae0777d5bba",
"assets/images/world_map/MN.svg": "985d1ae3d85d84c87aeea63dad9d001b",
"assets/images/world_map/MR.svg": "43665f109de6327f53c2ce81b108b5fc",
"assets/images/world_map/MW.svg": "5a269f6b0e70e278909a109fd82cf062",
"assets/images/world_map/MX.svg": "89907de7bd5288e3cb75d6c2c0f9d732",
"assets/images/world_map/MY.svg": "9ba6ae0a0a3310309ebea29f5fa656b7",
"assets/images/world_map/MZ.svg": "bf8524f73450338f039022d5136005fb",
"assets/images/world_map/NA.svg": "d95d2943749fbebbbbb2e9c9c6c7a52f",
"assets/images/world_map/NC.svg": "749c11b9cfba28e5d6f678963c5dabe6",
"assets/images/world_map/NE.svg": "98e17d89d5ddaa72e2fdc04f4d33a1ab",
"assets/images/world_map/NG.svg": "29a115f4abaa9b9b495d85b0546d38f6",
"assets/images/world_map/NI.svg": "5675601c091724710b8560e333de846b",
"assets/images/world_map/NL.svg": "27c1bd78ff66abc0137e32d96b2f6f8e",
"assets/images/world_map/NO.svg": "d41d8cd98f00b204e9800998ecf8427e",
"assets/images/world_map/NP.svg": "1c9afde4ed1f189451f36f3f0cc682dc",
"assets/images/world_map/NZ.svg": "9d98230002ac57ba3588418f7bfb532e",
"assets/images/world_map/OM.svg": "342000a8b3a7d97917f2d501511ef57f",
"assets/images/world_map/PA.svg": "164f072c9b3c5e06846eedcd1847c1f6",
"assets/images/world_map/PE.svg": "fcd13e3f2655ec42060cb3313c948019",
"assets/images/world_map/PG.svg": "6f066d942b8757f95ffa414926cd5a4b",
"assets/images/world_map/PH.svg": "4d9d32a12a920a2280e6afe252d0c5ac",
"assets/images/world_map/PK.svg": "cbc807e86e31aa5796666c2eb4dd9bc8",
"assets/images/world_map/PL.svg": "9c588261955fd4555f3f40759ee312f3",
"assets/images/world_map/PR.svg": "4c5ac834db08a892e0b9c0ebd4f4cc9d",
"assets/images/world_map/PS.svg": "4e455766fdb7737c03699fbee8a60682",
"assets/images/world_map/PT.svg": "e7bfc6d28914f435bea458bf0c260558",
"assets/images/world_map/PY.svg": "ca80328df5cefc83f4107ea67ad3da74",
"assets/images/world_map/QA.svg": "26a52fc824215cba3893f87d2fe58351",
"assets/images/world_map/RO.svg": "2e22873a338c428a130a41217dbd541b",
"assets/images/world_map/RS.svg": "3df43fe96bce0a0069e4acd106f58f39",
"assets/images/world_map/RU.svg": "c122ff8ad4aef196201fe303e4e81fc9",
"assets/images/world_map/RW.svg": "cb7683a282ca6145d0a405d8f0055eba",
"assets/images/world_map/SA.svg": "e13c992b602a4db1aebb61681f2971ea",
"assets/images/world_map/SB.svg": "953488179b59414de50dfcaf486bb93a",
"assets/images/world_map/SD.svg": "c66c86422e8d75f7c78f5a43b5c833ea",
"assets/images/world_map/SE.svg": "e78f4b228cca4ad08cb00becb6fa27b6",
"assets/images/world_map/SI.svg": "9b22214aaa8c4f9a0a99cd49ff0f0b31",
"assets/images/world_map/SK.svg": "2db868874b31376098cf4d4e31f1e6e8",
"assets/images/world_map/SL.svg": "39d32de28541b4df2b773ba9226bc012",
"assets/images/world_map/SN.svg": "61098a5dcdc873772f1364b5b29179ae",
"assets/images/world_map/SO.svg": "9918801a81af00da0c6fdd39159204f6",
"assets/images/world_map/SR.svg": "37227dd582871c79f23c55c5d8b4567a",
"assets/images/world_map/SV.svg": "509b2d9a35f766b593a00097d7677e6c",
"assets/images/world_map/SY.svg": "fbb5284a3a43f1b2428d4039d3df5c06",
"assets/images/world_map/SZ.svg": "c5b71e5b142e943cd5f97658a92e4bdf",
"assets/images/world_map/TD.svg": "f4e99d2b9a2af1f3e06bfb3104e3fdc0",
"assets/images/world_map/TG.svg": "6c1ea48d4bb22fa4f20357c940ce847d",
"assets/images/world_map/TH.svg": "306adb6eaa3343b0def0a5ad712f1620",
"assets/images/world_map/TJ.svg": "26af70381eb1205f82ae19451f90e439",
"assets/images/world_map/TL.svg": "7a42cf9738504ea142aad8fbb2d515d5",
"assets/images/world_map/TM.svg": "ba2dbb79ee7eb4ca28b1edca1192c59c",
"assets/images/world_map/TN.svg": "f68a393ac4cbe6ee2746463d9064cd3d",
"assets/images/world_map/TR.svg": "c2ef04e169b5b2ce0c49a184962bc010",
"assets/images/world_map/TT.svg": "e67aa78e77a25a10d62afe5908c22c48",
"assets/images/world_map/TZ.svg": "4b2033666ebd2884fbaa1d34e91f6133",
"assets/images/world_map/UA.svg": "64069a97f0d9aa7085687a87d4f927ef",
"assets/images/world_map/UG.svg": "89a478280c04e513ff2d92576527b4cc",
"assets/images/world_map/US.svg": "432a90e6048399a475ce3665a766d6f9",
"assets/images/world_map/UY.svg": "5698cc4c1c3d84a1999758c95c099f2e",
"assets/images/world_map/UZ.svg": "ba53286335f0311dbcab35260e2bdd39",
"assets/images/world_map/VE.svg": "8404752cbd117c08131843917562bdc6",
"assets/images/world_map/VN.svg": "7c5eb4a761c8e7f590151fb9f74585fb",
"assets/images/world_map/XK.svg": "34b7c6ed06b4f8d1c27b5af4dabe73d3",
"assets/images/world_map/YE.svg": "548a94fa7e54fa748d1e2bbb8bb6ed16",
"assets/images/world_map/ZA.svg": "5eb9371553789cd2e858e9e66dd820ac",
"assets/images/world_map/ZM.svg": "8b9902e154dd3923af392bf4c2ef6b50",
"assets/images/world_map/ZW.svg": "cb6e5530e90f679f4fba4845a816ad83",
"assets/NOTICES": "02b0fa53a3cf9e85722ab0e30f221999",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "7737f5fc722b6a040ac15271ea8d92fb",
"canvaskit/canvaskit.js.symbols": "d0b3bf92014e698856d505a65b5f0ee9",
"canvaskit/canvaskit.wasm": "567c5aeda8f673d1b76256d2682fd3b9",
"canvaskit/chromium/canvaskit.js": "2f82009588e8a72043db753d360d488f",
"canvaskit/chromium/canvaskit.js.symbols": "e3a8db3bea434c929936f69d84e2f2bd",
"canvaskit/chromium/canvaskit.wasm": "e86670fe2af62cbdd3b75e098f393924",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "f1b800f6a9fac877f65a545b9f76c703",
"canvaskit/skwasm.wasm": "5a5c6171d2eed658e3b5fff70c4af82c",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4af2b91eb221b73845365e1302528f07",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "18b64348e2089120c98cc72ddcbc8110",
"/": "18b64348e2089120c98cc72ddcbc8110",
"main.dart.js": "f84bdbde9e5a2f24811b8217a5ec0ef5",
"manifest.json": "c501a11bd65a294f2c23d98c69abef41",
"version.json": "ad7124a8509a566ea907d431a5ce736b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
