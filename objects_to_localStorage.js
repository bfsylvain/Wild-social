// Création d'un tableau contenant le profil utilisateur
export const user = {
    firstname: "Damien",
    lastname: "Jean",
    abonnes: 196,
    abonnements: 26,
    date: "A l'instant"
  };

// Création d'un tableau contenant les posts
export const posts = [
  {
    id: 7,
    profilePic: "assets/img/profile/fred.jpg",
    firstname: "Fred",
    lastname: "",
    date: "avant-hier",
    text: 'Venez me voir sur scène le 23 octobre dans la pièce "Javascript et moi"',
    picture: "assets/img/post/theatre.jpeg",
  },
  {
    id: 6,
    profilePic: "assets/img/profile/raphael.jpg",
    firstname: "Raph",
    lastname: "",
    date: "avant-hier",
    text: "Vous connaissez Sass les gens ?",
    picture: "assets/img/post/sass.jpeg",
  },
  {
    id: 5,
    profilePic: "assets/img/profile/nassime.jpg",
    firstname: "Nassime",
    lastname: "",
    date: "avant-hier",
    text: "Je sais pas si je vous l'ai déjà dit, mais vous êtes des bonnes personnes",
    picture: "assets/img/post/coeur-mains.jpeg",
  },
  {
    id: 4,
    profilePic: "assets/img/profile/mathieu.jpg",
    firstname: "Mathieu",
    lastname: "",
    date: "avant-hier",
    text: "En train de coder une IA qui permet d'imiter Julien Lepers, je vous montre ça bientôt #jedisoui",
    picture: "assets/img/post/julien-lepers.jpeg", 
  },
  {
    id: 3,
    profilePic: "assets/img/profile/adam.jpg",
    firstname: "Adam",
    lastname: "",
    date: "hier",
    text: "Moi quand je perds 4h de taf car j'ai oublié de commit",
    picture: "assets/img/post/sad-meme.jpeg",
  },
  {
    id: 2,
    profilePic: "assets/img/profile/victor-ga.jpg",
    firstname: "Victor Ga",
    lastname: "",
    date: "hier",
    text: "Le meilleur film de tous les temps !",
    picture: "assets/img/post/die-hard.jpeg",
  },
  {
    id: 1,
    profilePic: "assets/img/profile/victor-gu.jpg",
    firstname: "Le coach",
    lastname: "",
    date: "hier",
    text: "Je viens de passer 3h à me prendre la tête avec les versions MacOS... J'étais censé aller surfer",
    picture: "assets/img/post/angry-mac.jpeg",
  },
  {
    id: 0,
    profilePic: "assets/img/profile/sylvain.jpg",
    firstname: "Sylvain",
    lastname: "",
    date: "hier",
    text: "Récolte du houblon aujourd'hui ! Dans quelques semaines on pourra déguster la nouvelle cuvée !",
    picture: "assets/img/post/houblon.jpeg",
  }
];



// Création d'un tableau contenant les commentaires
export const comments = [
    {
      postId: 7,
      profilePic: "assets/img/profile/dimitri.jpeg",
      firstname: "Dimitri",
      lastname: "",
      date: "hier",
      text: "Sylvain t'as toujours été mon chouchou",
    },
    {
      postId: 7,
      profilePic: "assets/img/profile/cedric.jpg",
      firstname: "Cédric",
      lastname: "",
      date: "hier",
      text: "J'ai soif !",
    },
    {
      postId: 6,
      profilePic: "assets/img/profile/raphael.jpg",
      firstname: "Raph",
      lastname: "",
      date: "hier",
      text: "Les macs ça sert juste à caler des tables",
    },
    {
      postId: 6,
      profilePic: "assets/img/profile/dimitri.jpeg",
      firstname: "Dimitri",
      lastname: "",
      date: "hier",
      text: "Raph t'es plus mon chouchou #appleforever",
    },
    {
      postId: 5,
      profilePic: "assets/img/profile/victor-gu.jpg",
      firstname: "Le coach",
      lastname: "",
      date: "hier",
      text: "Ah ça vient de là le marcel !",
    },
    {
      postId: 4,
      profilePic: "assets/img/profile/elea.jpeg",
      firstname: "Elea",
      lastname: "",
      date: "il y a 2h",
      text: "Je connais ça...",
    },
    {
      postId: 3,
      profilePic: "assets/img/profile/antoine.jpg",
      firstname: "Antoine",
      lastname: "",
      date: "il y a 2h",
      text: "Ce mec est exceptionnel au quotidien ! 👮‍♂️",
    },
    {
      postId: 2,
      profilePic: "assets/img/profile/dimitri.jpeg",
      firstname: "Dimitri",
      lastname: "",
      date: "il y a 2h",
      text: "Nassime t'es mon chouchou",
    },
    {
      postId: 1,
      profilePic: "assets/img/profile/david.jpg",
      firstname: "David",
      lastname: "",
      date: "il y a 2h",
      text: "Ouiiii 😍",
    },
    {
      postId: 0,
      profilePic: "assets/img/profile/raphael.jpg",
      firstname: "Raph",
      lastname: "",
      date: "il y a 2h",
      text: "Je serai au 1er rang !",
    },
  ];



//creation d'un tableau contenant les messages
export const messageSenders = [
    {
      profilePic: "assets/img/profile/cedric.jpg",
      date: "hier",
      firstname: "Cédric",
      lastname: "",
      message: "Apéro ce soir ?",
    },
    {
      profilePic: "assets/img/profile/dimitri.jpeg",
      date: "hier",
      firstname: "Dimitri",
      lastname: "",
      message: "C'est toi mon chouchou",
    },
    {
      profilePic: "assets/img/profile/antoine.jpg",
      date: "hier",
      firstname: "Antoine",
      lastname: "",
      message: "T'es es où sur le projet ??",
    },
    {
      profilePic: "assets/img/profile/adam.jpg",
      date: "hier",
      firstname: "Adam",
      lastname: "",
      message: "Petite game ce soir ?",
    },
  ];
  