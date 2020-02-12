import React from "react";
import Table from "./component/Table";

const students = [
  { id: 1, name: "Wasif", age: 21, email: "wasif@email.com" },
  { id: 2, name: "Ali", age: 19, email: "ali@email.com" },
  { id: 3, name: "Saad", age: 16, email: "saad@email.com" },
  { id: 4, name: "Asad", age: 25, email: "asad@email.com" }
];
// mockaroo realistic data generator

const users = [
  {
    id: 1,
    first_name: "Amara",
    last_name: "Crombie",
    email: "acrombie0@rediff.com",
    gender: "Female",
    ip_address: "7.239.64.255"
  },
  {
    id: 2,
    first_name: "Nat",
    last_name: "Hazard",
    email: "nhazard1@cam.ac.uk",
    gender: "Female",
    ip_address: "128.189.174.199"
  },
  {
    id: 3,
    first_name: "Laurena",
    last_name: "Bourgour",
    email: "lbourgour2@addthis.com",
    gender: "Female",
    ip_address: "142.161.123.36"
  },
  {
    id: 4,
    first_name: "Maxwell",
    last_name: "Walcot",
    email: "mwalcot3@imageshack.us",
    gender: "Male",
    ip_address: "195.34.121.135"
  },
  {
    id: 5,
    first_name: "Doris",
    last_name: "Ide",
    email: "dide4@baidu.com",
    gender: "Female",
    ip_address: "20.122.242.115"
  },
  {
    id: 6,
    first_name: "Tadio",
    last_name: "Beartup",
    email: "tbeartup5@g.co",
    gender: "Male",
    ip_address: "131.238.21.238"
  },
  {
    id: 7,
    first_name: "Lishe",
    last_name: "Sinclair",
    email: "lsinclair6@google.it",
    gender: "Female",
    ip_address: "79.62.58.19"
  },
  {
    id: 8,
    first_name: "Myrna",
    last_name: "Braithwait",
    email: "mbraithwait7@goodreads.com",
    gender: "Female",
    ip_address: "91.11.229.124"
  },
  {
    id: 9,
    first_name: "Tabbie",
    last_name: "Catterall",
    email: "tcatterall8@kickstarter.com",
    gender: "Male",
    ip_address: "194.60.31.113"
  },
  {
    id: 10,
    first_name: "Findlay",
    last_name: "Hannabus",
    email: "fhannabus9@studiopress.com",
    gender: "Male",
    ip_address: "216.3.17.208"
  },
  {
    id: 11,
    first_name: "Bari",
    last_name: "Hofler",
    email: "bhoflera@cbc.ca",
    gender: "Female",
    ip_address: "13.51.116.220"
  },
  {
    id: 12,
    first_name: "Raphael",
    last_name: "Hallyburton",
    email: "rhallyburtonb@e-recht24.de",
    gender: "Male",
    ip_address: "249.174.111.216"
  },
  {
    id: 13,
    first_name: "Goddard",
    last_name: "Ceschi",
    email: "gceschic@weather.com",
    gender: "Male",
    ip_address: "16.143.177.210"
  },
  {
    id: 14,
    first_name: "Thibaud",
    last_name: "Malkie",
    email: "tmalkied@sfgate.com",
    gender: "Male",
    ip_address: "165.106.79.9"
  },
  {
    id: 15,
    first_name: "Tracie",
    last_name: "Slowly",
    email: "tslowlye@nytimes.com",
    gender: "Male",
    ip_address: "135.14.231.66"
  },
  {
    id: 16,
    first_name: "Selma",
    last_name: "De Minico",
    email: "sdeminicof@ask.com",
    gender: "Female",
    ip_address: "115.129.205.124"
  },
  {
    id: 17,
    first_name: "Katalin",
    last_name: "Wisedale",
    email: "kwisedaleg@alexa.com",
    gender: "Female",
    ip_address: "43.96.190.168"
  },
  {
    id: 18,
    first_name: "Baxy",
    last_name: "Speachley",
    email: "bspeachleyh@cbsnews.com",
    gender: "Male",
    ip_address: "88.3.216.247"
  }
];

const comments = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body:
      "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium"
  },
  {
    postId: 1,
    id: 2,
    name: "quo vero reiciendis velit similique earum",
    email: "Jayne_Kuhic@sydney.com",
    body:
      "est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et"
  },
  {
    postId: 1,
    id: 3,
    name: "odio adipisci rerum aut animi",
    email: "Nikita@garfield.biz",
    body:
      "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
  },
  {
    postId: 1,
    id: 4,
    name: "alias odio sit",
    email: "Lew@alysha.tv",
    body:
      "non et atque\noccaecati deserunt quas accusantium unde odit nobis qui voluptatem\nquia voluptas consequuntur itaque dolor\net qui rerum deleniti ut occaecati"
  },
  {
    postId: 1,
    id: 5,
    name: "vero eaque aliquid doloribus et culpa",
    email: "Hayden@althea.biz",
    body:
      "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum architecto fugit inventore cupiditate\nvoluptates magni quo et"
  },
  {
    postId: 2,
    id: 6,
    name: "et fugit eligendi deleniti quidem qui sint nihil autem",
    email: "Presley.Mueller@myrl.com",
    body:
      "doloribus at sed quis culpa deserunt consectetur qui praesentium\naccusamus fugiat dicta\nvoluptatem rerum ut voluptate autem\nvoluptatem repellendus aspernatur dolorem in"
  },
  {
    postId: 2,
    id: 7,
    name: "repellat consequatur praesentium vel minus molestias voluptatum",
    email: "Dallas@ole.me",
    body:
      "maiores sed dolores similique labore et inventore et\nquasi temporibus esse sunt id et\neos voluptatem aliquam\naliquid ratione corporis molestiae mollitia quia et magnam dolor"
  },
  {
    postId: 2,
    id: 8,
    name: "et omnis dolorem",
    email: "Mallory_Kunze@marie.org",
    body:
      "ut voluptatem corrupti velit\nad voluptatem maiores\net nisi velit vero accusamus maiores\nvoluptates quia aliquid ullam eaque"
  },
  {
    postId: 2,
    id: 9,
    name: "provident id voluptas",
    email: "Meghan_Littel@rene.us",
    body:
      "sapiente assumenda molestiae atque\nadipisci laborum distinctio aperiam et ab ut omnis\net occaecati aspernatur odit sit rem expedita\nquas enim ipsam minus"
  },
  {
    postId: 2,
    id: 10,
    name: "eaque et deleniti atque tenetur ut quo ut",
    email: "Carmen_Keeling@caroline.name",
    body:
      "voluptate iusto quis nobis reprehenderit ipsum amet nulla\nquia quas dolores velit et non\naut quia necessitatibus\nnostrum quaerat nulla et accusamus nisi facilis"
  },
  {
    postId: 3,
    id: 11,
    name: "fugit labore quia mollitia quas deserunt nostrum sunt",
    email: "Veronica_Goodwin@timmothy.net",
    body:
      "ut dolorum nostrum id quia aut est\nfuga est inventore vel eligendi explicabo quis consectetur\naut occaecati repellat id natus quo est\nut blanditiis quia ut vel ut maiores ea"
  },
  {
    postId: 3,
    id: 12,
    name: "modi ut eos dolores illum nam dolor",
    email: "Oswald.Vandervort@leanne.org",
    body:
      "expedita maiores dignissimos facilis\nipsum est rem est fugit velit sequi\neum odio dolores dolor totam\noccaecati ratione eius rem velit"
  },
  {
    postId: 3,
    id: 13,
    name: "aut inventore non pariatur sit vitae voluptatem sapiente",
    email: "Kariane@jadyn.tv",
    body:
      "fuga eos qui dolor rerum\ninventore corporis exercitationem\ncorporis cupiditate et deserunt recusandae est sed quis culpa\neum maiores corporis et"
  },
  {
    postId: 3,
    id: 14,
    name: "et officiis id praesentium hic aut ipsa dolorem repudiandae",
    email: "Nathan@solon.io",
    body:
      "vel quae voluptas qui exercitationem\nvoluptatibus unde sed\nminima et qui ipsam aspernatur\nexpedita magnam laudantium et et quaerat ut qui dolorum"
  },
  {
    postId: 3,
    id: 15,
    name: "debitis magnam hic odit aut ullam nostrum tenetur",
    email: "Maynard.Hodkiewicz@roberta.com",
    body:
      "nihil ut voluptates blanditiis autem odio dicta rerum\nquisquam saepe et est\nsunt quasi nemo laudantium deserunt\nmolestias tempora quo quia"
  },
  {
    postId: 4,
    id: 16,
    name: "perferendis temporibus delectus optio ea eum ratione dolorum",
    email: "Christine@ayana.info",
    body:
      "iste ut laborum aliquid velit facere itaque\nquo ut soluta dicta voluptate\nerror tempore aut et\nsequi reiciendis dignissimos expedita consequuntur libero sed fugiat facilis"
  },
  {
    postId: 4,
    id: 17,
    name: "eos est animi quis",
    email: "Preston_Hudson@blaise.tv",
    body:
      "consequatur necessitatibus totam sed sit dolorum\nrecusandae quae odio excepturi voluptatum harum voluptas\nquisquam sit ad eveniet delectus\ndoloribus odio qui non labore"
  },
  {
    postId: 4,
    id: 18,
    name: "aut et tenetur ducimus illum aut nulla ab",
    email: "Vincenza_Klocko@albertha.name",
    body:
      "veritatis voluptates necessitatibus maiores corrupti\nneque et exercitationem amet sit et\nullam velit sit magnam laborum\nmagni ut molestias"
  },
  {
    postId: 4,
    id: 19,
    name: "sed impedit rerum quia et et inventore unde officiis",
    email: "Madelynn.Gorczany@darion.biz",
    body:
      "doloribus est illo sed minima aperiam\nut dignissimos accusantium tempore atque et aut molestiae\nmagni ut accusamus voluptatem quos ut voluptates\nquisquam porro sed architecto ut"
  },
  {
    postId: 4,
    id: 20,
    name: "molestias expedita iste aliquid voluptates",
    email: "Mariana_Orn@preston.org",
    body:
      "qui harum consequatur fugiat\net eligendi perferendis at molestiae commodi ducimus\ndoloremque asperiores numquam qui\nut sit dignissimos reprehenderit tempore"
  }
];

const todos = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  },
  {
    userId: 1,
    id: 3,
    title: "fugiat veniam minus",
    completed: false
  },
  {
    userId: 1,
    id: 4,
    title: "et porro tempora",
    completed: true
  },
  {
    userId: 1,
    id: 5,
    title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
    completed: false
  },
  {
    userId: 1,
    id: 6,
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false
  },
  {
    userId: 1,
    id: 7,
    title: "illo expedita consequatur quia in",
    completed: false
  },
  {
    userId: 1,
    id: 8,
    title: "quo adipisci enim quam ut ab",
    completed: true
  },
  {
    userId: 1,
    id: 9,
    title: "molestiae perspiciatis ipsa",
    completed: false
  },
  {
    userId: 1,
    id: 10,
    title: "illo est ratione doloremque quia maiores aut",
    completed: true
  },
  {
    userId: 1,
    id: 11,
    title: "vero rerum temporibus dolor",
    completed: true
  },
  {
    userId: 1,
    id: 12,
    title: "ipsa repellendus fugit nisi",
    completed: true
  },
  {
    userId: 1,
    id: 13,
    title: "et doloremque nulla",
    completed: false
  },
  {
    userId: 1,
    id: 14,
    title: "repellendus sunt dolores architecto voluptatum",
    completed: true
  },
  {
    userId: 1,
    id: 15,
    title: "ab voluptatum amet voluptas",
    completed: true
  },
  {
    userId: 1,
    id: 16,
    title: "accusamus eos facilis sint et aut voluptatem",
    completed: true
  },
  {
    userId: 1,
    id: 17,
    title: "quo laboriosam deleniti aut qui",
    completed: true
  },
  {
    userId: 1,
    id: 18,
    title: "dolorum est consequatur ea mollitia in culpa",
    completed: false
  },
  {
    userId: 1,
    id: 19,
    title: "molestiae ipsa aut voluptatibus pariatur dolor nihil",
    completed: true
  },
  {
    userId: 1,
    id: 20,
    title: "ullam nobis libero sapiente ad optio sint",
    completed: true
  }
];

const posts = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
  },
  {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
  },
  {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
  },
  {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body:
      "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
  },
  {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body:
      "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  },
  {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body:
      "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
  },
  {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body:
      "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
  },
  {
    userId: 2,
    id: 11,
    title: "et ea vero quia laudantium autem",
    body:
      "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
  },
  {
    userId: 2,
    id: 12,
    title: "in quibusdam tempore odit est dolorem",
    body:
      "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
  },
  {
    userId: 2,
    id: 13,
    title: "dolorum ut in voluptas mollitia et saepe quo animi",
    body:
      "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
  },
  {
    userId: 2,
    id: 14,
    title: "voluptatem eligendi optio",
    body:
      "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
  },
  {
    userId: 2,
    id: 15,
    title: "eveniet quod temporibus",
    body:
      "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
  },
  {
    userId: 2,
    id: 16,
    title:
      "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
    body:
      "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
  },
  {
    userId: 2,
    id: 17,
    title: "fugit voluptas sed molestias voluptatem provident",
    body:
      "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
  },
  {
    userId: 2,
    id: 18,
    title: "voluptate et itaque vero tempora molestiae",
    body:
      "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
  },
  {
    userId: 2,
    id: 19,
    title: "adipisci placeat illum aut reiciendis qui",
    body:
      "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
  },
  {
    userId: 2,
    id: 20,
    title: "doloribus ad provident suscipit at",
    body:
      "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
  }
];

const albumns = [
  {
    userId: 1,
    id: 1,
    title: "quidem molestiae enim"
  },
  {
    userId: 1,
    id: 2,
    title: "sunt qui excepturi placeat culpa"
  },
  {
    userId: 1,
    id: 3,
    title: "omnis laborum odio"
  },
  {
    userId: 1,
    id: 4,
    title: "non esse culpa molestiae omnis sed optio"
  },
  {
    userId: 1,
    id: 5,
    title: "eaque aut omnis a"
  },
  {
    userId: 1,
    id: 6,
    title: "natus impedit quibusdam illo est"
  },
  {
    userId: 1,
    id: 7,
    title: "quibusdam autem aliquid et et quia"
  },
  {
    userId: 1,
    id: 8,
    title: "qui fuga est a eum"
  },
  {
    userId: 1,
    id: 9,
    title: "saepe unde necessitatibus rem"
  },
  {
    userId: 1,
    id: 10,
    title: "distinctio laborum qui"
  },
  {
    userId: 2,
    id: 11,
    title: "quam nostrum impedit mollitia quod et dolor"
  },
  {
    userId: 2,
    id: 12,
    title: "consequatur autem doloribus natus consectetur"
  },
  {
    userId: 2,
    id: 13,
    title: "ab rerum non rerum consequatur ut ea unde"
  },
  {
    userId: 2,
    id: 14,
    title: "ducimus molestias eos animi atque nihil"
  },
  {
    userId: 2,
    id: 15,
    title: "ut pariatur rerum ipsum natus repellendus praesentium"
  },
  {
    userId: 2,
    id: 16,
    title: "voluptatem aut maxime inventore autem magnam atque repellat"
  },
  {
    userId: 2,
    id: 17,
    title: "aut minima voluptatem ut velit"
  },
  {
    userId: 2,
    id: 18,
    title: "nesciunt quia et doloremque"
  },
  {
    userId: 2,
    id: 19,
    title: "velit pariatur quaerat similique libero omnis quia"
  },
  {
    userId: 2,
    id: 20,
    title: "voluptas rerum iure ut enim"
  }
];

const photos = [
  {
    albumId: 1,
    id: 1,
    title: "accusamus beatae ad facilis cum similique qui sunt",
    url: "https://via.placeholder.com/600/92c952",
    thumbnailUrl: "https://via.placeholder.com/150/92c952"
  },
  {
    albumId: 1,
    id: 2,
    title: "reprehenderit est deserunt velit ipsam",
    url: "https://via.placeholder.com/600/771796",
    thumbnailUrl: "https://via.placeholder.com/150/771796"
  },
  {
    albumId: 1,
    id: 3,
    title: "officia porro iure quia iusto qui ipsa ut modi",
    url: "https://via.placeholder.com/600/24f355",
    thumbnailUrl: "https://via.placeholder.com/150/24f355"
  },
  {
    albumId: 1,
    id: 4,
    title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
    url: "https://via.placeholder.com/600/d32776",
    thumbnailUrl: "https://via.placeholder.com/150/d32776"
  },
  {
    albumId: 1,
    id: 5,
    title: "natus nisi omnis corporis facere molestiae rerum in",
    url: "https://via.placeholder.com/600/f66b97",
    thumbnailUrl: "https://via.placeholder.com/150/f66b97"
  },
  {
    albumId: 1,
    id: 6,
    title: "accusamus ea aliquid et amet sequi nemo",
    url: "https://via.placeholder.com/600/56a8c2",
    thumbnailUrl: "https://via.placeholder.com/150/56a8c2"
  },
  {
    albumId: 1,
    id: 7,
    title: "officia delectus consequatur vero aut veniam explicabo molestias",
    url: "https://via.placeholder.com/600/b0f7cc",
    thumbnailUrl: "https://via.placeholder.com/150/b0f7cc"
  },
  {
    albumId: 1,
    id: 8,
    title: "aut porro officiis laborum odit ea laudantium corporis",
    url: "https://via.placeholder.com/600/54176f",
    thumbnailUrl: "https://via.placeholder.com/150/54176f"
  },
  {
    albumId: 1,
    id: 9,
    title: "qui eius qui autem sed",
    url: "https://via.placeholder.com/600/51aa97",
    thumbnailUrl: "https://via.placeholder.com/150/51aa97"
  },
  {
    albumId: 1,
    id: 10,
    title: "beatae et provident et ut vel",
    url: "https://via.placeholder.com/600/810b14",
    thumbnailUrl: "https://via.placeholder.com/150/810b14"
  },
  {
    albumId: 1,
    id: 11,
    title: "nihil at amet non hic quia qui",
    url: "https://via.placeholder.com/600/1ee8a4",
    thumbnailUrl: "https://via.placeholder.com/150/1ee8a4"
  },
  {
    albumId: 1,
    id: 12,
    title:
      "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
    url: "https://via.placeholder.com/600/66b7d2",
    thumbnailUrl: "https://via.placeholder.com/150/66b7d2"
  },
  {
    albumId: 1,
    id: 13,
    title: "repudiandae iusto deleniti rerum",
    url: "https://via.placeholder.com/600/197d29",
    thumbnailUrl: "https://via.placeholder.com/150/197d29"
  },
  {
    albumId: 1,
    id: 14,
    title: "est necessitatibus architecto ut laborum",
    url: "https://via.placeholder.com/600/61a65",
    thumbnailUrl: "https://via.placeholder.com/150/61a65"
  },
  {
    albumId: 1,
    id: 15,
    title: "harum dicta similique quis dolore earum ex qui",
    url: "https://via.placeholder.com/600/f9cee5",
    thumbnailUrl: "https://via.placeholder.com/150/f9cee5"
  },
  {
    albumId: 1,
    id: 16,
    title: "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
    url: "https://via.placeholder.com/600/fdf73e",
    thumbnailUrl: "https://via.placeholder.com/150/fdf73e"
  },
  {
    albumId: 1,
    id: 17,
    title: "natus doloribus necessitatibus ipsa",
    url: "https://via.placeholder.com/600/9c184f",
    thumbnailUrl: "https://via.placeholder.com/150/9c184f"
  },
  {
    albumId: 1,
    id: 18,
    title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
    url: "https://via.placeholder.com/600/1fe46f",
    thumbnailUrl: "https://via.placeholder.com/150/1fe46f"
  },
  {
    albumId: 1,
    id: 19,
    title: "perferendis nesciunt eveniet et optio a",
    url: "https://via.placeholder.com/600/56acb2",
    thumbnailUrl: "https://via.placeholder.com/150/56acb2"
  },
  {
    albumId: 1,
    id: 20,
    title:
      "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
    url: "https://via.placeholder.com/600/8985dc",
    thumbnailUrl: "https://via.placeholder.com/150/8985dc"
  }
];

const App = () => (
  <div>
    <h1 id="title">React Dynamic Table</h1>
    <hr />
    <h1>Students Table</h1>
    <Table data={students} />
    <hr />
    <h1>Users Table</h1>
    <Table data={users} />
    <hr />
    <h1>Comments Table</h1>
    <Table data={comments} />
    <hr />
    <h1>Todos Table</h1>
    <Table data={todos} />
    <hr />
    <h1>Posts Table</h1>
    <Table data={posts} />
    <hr />
    <h1>Albums Table</h1>
    <Table data={albumns} />
    <hr />
    <h1>Photos Table</h1>
    <Table data={photos} />
  </div>
);
export default App;
