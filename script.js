/* ============================================================
   YOKAIDEX — SCRIPT.JS
   ============================================================ */

// ── DATA ─────────────────────────────────────────────────────
const YOKAI_DATA = [
  // DEMÔNIOS
  { id:1,  name:"Oni",            jp:"鬼",      type:"demônio",   danger:5, icon:"👹", desc:"Demônios clássicos japoneses de força colossal.", lore:"Criaturas terríveis com pele vermelha ou azul, portando pesadas maças de ferro. Vivem no inferno (Jigoku) mas frequentemente invadem o mundo dos mortais para semear caos, devorar humanos ou punir os ímpios. São a personificação do mal bruto.", origin:"Jigoku (Inferno)", habitat:"Cavernas e portões do submundo", poder:"Força sobre-humana, maça de ferro" },
  { id:2,  name:"Hannya",         jp:"般若",    type:"demônio",   danger:5, icon:"😈", desc:"Demônio nascido do ciúme e da obsessão amorosa.", lore:"Outrora uma mulher nobre consumida pelo ciúme, transformada em demônio de chifres e expressão aterrorizante. Persegue amantes infiéis com ódio eterno. Quanto mais intensa a obsessão, mais monstruosa a forma.", origin:"Aristocracia Heian",    habitat:"Teatros Nō e ruínas",      poder:"Possessão, maldição do amor" },
  { id:3,  name:"Shuten-dōji",    jp:"酒呑童子", type:"demônio",  danger:5, icon:"🍶", desc:"O mais famoso e poderoso líder dos onis.", lore:"Lendário oni que habitava o Monte Ōe, comandando um exército de demônios e aterrorizando Kyoto. Vestido de roupas de seda roubadas da nobreza, era derrotado apenas com engano pelo herói Minamoto no Yorimitsu. Amava o saké e a crueldade em igual medida.", origin:"Monte Ōe, Kyoto",        habitat:"Fortalezas nas montanhas",  poder:"Transformação, força divina"  },
  { id:4,  name:"Ibaraki-dōji",   jp:"茨木童子", type:"demônio",  danger:5, icon:"💪", desc:"Poderoso oni lendário, tenente de Shuten-dōji.", lore:"Oni feroz que serviu sob Shuten-dōji. Tão perigoso que um braço seu foi arrancado pelo herói Watanabe no Tsuna, mas o oni conseguiu recuperá-lo através de um ardil engenhoso. Símbolo de resistência demoníaca.", origin:"Kyoto medieval",          habitat:"Portões da cidade",         poder:"Regeneração, combate brutal"  },
  { id:5,  name:"Gagoze",         jp:"元興寺",   type:"demônio",  danger:4, icon:"🧟", desc:"Monge demoníaco que habitava templos antigos.", lore:"Demônio que assumia a forma de um monge budista para atrair e devorar crianças que tocavam os sinos dos templos. Foi finalmente derrotado por um garoto corajoso que o prendeu enquanto puxava a corda do sino.", origin:"Templo Gangōji, Nara",    habitat:"Templos budistas",          poder:"Disfarce, força sobrenatural" },
  { id:6,  name:"Gaiju",          jp:"外道",     type:"demônio",  danger:4, icon:"🌑", desc:"Demônio do caminho errado, espírito da perdição.", lore:"Entidade associada à heresia e ao desvio moral. Atrai humanos para longe do dharma budista, corrompendo suas almas através de tentações e ilusões.", origin:"Tradição budista",         habitat:"Encruzilhadas noturnas",    poder:"Ilusão, corrupção espiritual" },

  // FANTASMAS
  { id:7,  name:"Yūrei",          jp:"幽霊",     type:"fantasma",  danger:4, icon:"👻", desc:"Fantasma japonês clássico preso entre os mundos.", lore:"Almas de mortos com fortes emoções — rancor, amor, angústia — que impedem a passagem para o além. Aparecem com longos cabelos negros, vestes brancas e membros caídos. Só descansam quando o motivo de sua angústia é resolvido.", origin:"Todo o Japão",             habitat:"Cemitérios, casas assombradas", poder:"Aparição, maldição emocional" },
  { id:8,  name:"Goryō",          jp:"御霊",     type:"fantasma",  danger:5, icon:"⚡", desc:"Espíritos vingativos de nobres que morreram injustiçados.", lore:"Fantasmas de aristocratas e guerreiros que morreram por traição ou injustiça. Seus rancores eram tão poderosos que causavam desastres naturais, epidemias e calamidades. O governo Heian criou rituais específicos para aplacar esses espíritos furiosos.", origin:"Período Heian",           habitat:"Palácios e capitais",       poder:"Catástrofes naturais, pragas"  },
  { id:9,  name:"Funa yūrei",     jp:"船幽霊",   type:"fantasma",  danger:4, icon:"🌊", desc:"Fantasmas de pessoas que morreram afogadas no mar.", lore:"Espíritos que cercam navios em noites nebulosas, pedindo uma concha para seus capitães. Se entregarem uma concha normal, enchem o barco de água e afundam a embarcação. A única proteção é dar uma concha sem fundo.", origin:"Costas do Japão",         habitat:"Mar aberto, baías",         poder:"Naufrágio, afogamento"        },
  { id:10, name:"Gashadokuro",    jp:"がしゃどくろ", type:"fantasma", danger:5, icon:"💀", desc:"Esqueleto gigante formado dos ossos de mortos de guerra.", lore:"Formado pelos espíritos coletivos de soldados que morreram de fome no campo de batalha sem receber ritos fúnebres adequados. Mais alto que as árvores, vaga à meia-noite emitindo um tilintar fantasmagórico antes de capturar vivos para devorar.", origin:"Campos de batalha",        habitat:"Planícies noturnas",        poder:"Invisibilidade, mordida fatal"  },
  { id:11, name:"Teke teke",      jp:"テケテケ",  type:"fantasma",  danger:5, icon:"🚂", desc:"Fantasma sem pernas que se arrasta em velocidade aterrorizante.", lore:"Espírito de uma jovem que caiu nos trilhos de um trem. A parte superior de seu corpo rasteja a velocidade surpreendente usando os braços, produzindo o terrível som 'teke-teke'. Corta suas vítimas ao meio com uma foice para fazer companhia.", origin:"Lenda urbana japonesa",    habitat:"Estações de trem, ruas",    poder:"Velocidade, foice espectral"  },
  { id:12, name:"Ubume",          jp:"産女",     type:"fantasma",  danger:3, icon:"👶", desc:"Espírito de mãe que morreu durante o parto.", lore:"Aparece como uma mulher molhada carregando um bebê. Pede para alguém segurar a criança por um momento — mas o bebê fica progressivamente mais pesado até ser impossível de carregar. Na verdade, é uma pedra no lugar da criança. Deseja apenas que seu filho receba cuidado.", origin:"Tradição folclórica",      habitat:"Hospitais, parques noturnos", poder:"Ilusão materna, peso infinito" },
  { id:13, name:"Hitodama",       jp:"人魂",     type:"fantasma",  danger:2, icon:"🔵", desc:"Bolas de fogo espirituais que anunciam mortes próximas.", lore:"Almas de recém-falecidos que vagam brevemente antes de partir para o outro mundo. Aparecem como esferas azuis ou azuis-esverdeadas flutuando lentamente. Ver uma hitodama é presságio de morte iminente, seja sua ou de alguém próximo.", origin:"Todo o Japão",             habitat:"Cemitérios, pântanos",      poder:"Presságio, luz espiritual"     },
  { id:14, name:"Buruburu",       jp:"震震",     type:"fantasma",  danger:3, icon:"😱", desc:"Espírito do medo extremo que se prende à espinha dorsal.", lore:"Gerado pelo medo intenso e crônico, gruda na espinha das pessoas assustadas. Quando alguém tem um 'calafrio na espinha' sem motivo aparente, é o buruburu passando. Pode levar à morte por terror paralisante.", origin:"Tradição budista",         habitat:"Lugares assombrados",       poder:"Terror, paralisia por medo"   },
  { id:15, name:"Kyōkotsu",       jp:"狂骨",     type:"fantasma",  danger:3, icon:"🫙", desc:"Esqueleto que habita o fundo de poços antigos.", lore:"Espírito de alguém cujos restos mortais foram descartados em um poço sem rituais fúnebres. Surge de dentro da água com uma aparência esquelética aterrorizante, representando ira e sofrimento pela morte sem honra.", origin:"Poços rurais",            habitat:"Poços, cisternas antigas",  poder:"Aparição súbita, maldição"    },
  { id:16, name:"Mujina",         jp:"貉",       type:"fantasma",  danger:3, icon:"🫥", desc:"Criatura sem rosto que imita humanos.", lore:"Aparece como uma pessoa comum — uma mulher chorando, um homem na estrada — mas ao se virar revela um rosto completamente liso, sem olhos, nariz ou boca. A visão é tão perturbadora que pode matar de susto. Noppera-bō é uma variação similar.", origin:"Estradas do Japão",       habitat:"Caminhos noturnos",         poder:"Disfarce, horror psicológico" },

  // ANIMAIS SOBRENATURAIS
  { id:17, name:"Kitsune",        jp:"狐",       type:"animal",    danger:3, icon:"🦊", desc:"Raposa com poderes mágicos que cresce em sabedoria e poderes.", lore:"Criaturas de inteligência crescente — cada cauda adicional representa um século de vida e poder. Podem ter até nove caudas. Servem ao deus Inari, são mensageiras divinas, mas também podem ser trapaceiras e sedutoras. Mestras da ilusão e transformação.", origin:"Xintoísmo, folclore",      habitat:"Santuários de Inari",       poder:"Transformação, ilusão, fogo"  },
  { id:18, name:"Kyūbi no kitsune", jp:"九尾の狐", type:"animal",  danger:5, icon:"🌟", desc:"A raposa lendária de nove caudas, poder supremo.", lore:"A forma mais poderosa de kitsune, atingida após centenas de anos de vida. Diz-se que sua pelagem é dourada ou branca prateada. Tão poderosa que pode enganar deuses, derrubar impérios e conhece todos os segredos do universo. O relato mais famoso é o da kitsune Tamamo-no-Mae.", origin:"China e Japão antigos",    habitat:"Dimensões espirituais",     poder:"Onisciência, grande ilusão"   },
  { id:19, name:"Bakeneko",       jp:"化け猫",   type:"animal",    danger:3, icon:"🐱", desc:"Gato doméstico que ganha poderes sobrenaturais com a idade.", lore:"Gatos que vivem mais de treze anos ou crescem além de certo tamanho tornam-se bakeneko. Podem caminhar em duas patas, dançar com lenços na cabeça, criar fogo fantasmagórico e até assumir formas humanas para se vingar de maus-tratos sofridos.", origin:"Período Edo",             habitat:"Casas antigas",             poder:"Fogo, transformação, dança"   },
  { id:20, name:"Nekomata",       jp:"猫又",     type:"animal",    danger:4, icon:"🐈", desc:"Gato com cauda bifurcada que controla os mortos.", lore:"Gatos com cauda dividida em duas, com poderes ainda maiores que o bakeneko. Existem tanto nas montanhas quanto nas casas. Os nekomata das montanhas são especialmente perigosos, podendo invocar e controlar a alma dos mortos como fantoches.", origin:"Montanhas do Japão",      habitat:"Florestas, casas velhas",   poder:"Necromancia, transformação"   },
  { id:21, name:"Tanuki",         jp:"狸",       type:"animal",    danger:2, icon:"🦡", desc:"Guaxinim mágico brincalhão e shapeshifter.", lore:"Um dos animais mais amados do folclore japonês. Mestres da transformação, podem assumir qualquer forma. Conhecidos por bater em suas barrigas volumosas para criar sons ilusórios. Associados à sorte, prosperidade e bebedeiras alegres. Frequentemente em contraste com a malícia da kitsune.", origin:"Todo o Japão",             habitat:"Florestas e aldeias",       poder:"Transformação, ilusão cômica" },
  { id:22, name:"Bake-danuki",    jp:"化け狸",   type:"animal",    danger:2, icon:"🍃", desc:"Tanuki metamórfico com poderes de ilusão elaborados.", lore:"Forma mais poderosa do tanuki, capaz de criar ilusões complexas — aldeias inteiras, festas, mercados — que desaparecem ao amanhecer. Célebre na história do Bake-danuki de Bunbuku Chagama, que se transformou em chaleira de chá.", origin:"Shikoku e Honshū",         habitat:"Templos, aldeias",          poder:"Grande ilusão, fortuna"       },
  { id:23, name:"Kappa",          jp:"河童",     type:"animal",    danger:3, icon:"🐢", desc:"Criatura aquática travessa que habita rios japoneses.", lore:"Criaturas do tamanho de crianças com pele esverdeada e um prato com água na cabeça — sua fonte de poder. Polidos e educados quando tratados com respeito; perigosos quando irritados. Adoram pepino, podem ser apaziguados com uma reverência que derrama a água do prato.", origin:"Rios de todo o Japão",     habitat:"Rios, lagos, poços",        poder:"Força aquática, wrestling"    },
  { id:24, name:"Tengu",          jp:"天狗",     type:"animal",    danger:4, icon:"👺", desc:"Espírito montanhês guardião com nariz longo ou bico de pássaro.", lore:"Seres arrogantes e poderosos que habitam as alturas das montanhas. Os daitengu têm nariz comprido e habilidades marciais lendárias; os kotengu têm bico de corvo. Ensinaram artes marciais a grandes guerreiros como Minamoto no Yoshitsune. Orgulhosos, mas justos.", origin:"Montanhas sagradas",       habitat:"Picos, florestas densas",   poder:"Voo, artes marciais divinas"  },
  { id:25, name:"Inugami",        jp:"犬神",     type:"animal",    danger:5, icon:"🐕", desc:"Espírito de cachorro invocado por magia negra.", lore:"Criado através de um ritual cruel — um cachorro enterrado até o pescoço e deixado morrer de fome diante de comida. A raiva extrema da morte cria um espírito controlável. Poderoso protetor para quem o invoca, mas devastador contra inimigos. Extremamente perigoso se perdido.", origin:"Japão rural, Shikoku",     habitat:"Aldeias isoladas",          poder:"Possessão, caça espiritual"   },
  { id:26, name:"Basan",          jp:"馬産",     type:"animal",    danger:3, icon:"🐓", desc:"Galinha sobrenatural de plumagem branca que cospe fogo.", lore:"Pássaro grande e fantástico que habita as montanhas de Iyo. Emite um sopro de fogo de seu bico à noite, mas o fogo não queima. Quando você ouve seus passos e vai investigar, encontra nada além do silêncio. Nunca foi observado de perto.", origin:"Iyo (Ehime),",            habitat:"Montanhas florestadas",     poder:"Fogo frio, invisibilidade"    },
  { id:27, name:"Raijū",          jp:"雷獣",     type:"animal",    danger:4, icon:"⚡", desc:"Besta mística do trovão que viaja em raios.", lore:"Criatura cujo corpo é feito de raios e trovões. Pode assumir forma de lobo, gato, vison ou inseto envolto em chamas elétricas. Cai do céu durante tempestades. Diz-se que dorme no umbigo de humanos, motivo pelo qual se deve dormir de bruços em dias de tempestade.", origin:"Tradição xintoísta",       habitat:"Céu, tempestades",          poder:"Eletricidade, velocidade"     },
  { id:28, name:"Ōmukade",        jp:"大百足",   type:"animal",    danger:5, icon:"🐛", desc:"Centopeia gigante que pode devorar dragões.", lore:"Centopeia monstruosa que habita as montanhas. Apenas a saliva humana a afeta — foi derrotada pelo herói Fujiwara no Hidesato quando ele lambeu sua flecha antes de atirar. Tão grande que envolve montanhas e seus pés podem esmagar exércitos.", origin:"Monte Mikami",            habitat:"Montanhas, cavernas",       poder:"Veneno mortal, tamanho imenso" },

  // SERES DIVINOS
  { id:29, name:"Kirin",          jp:"麒麟",     type:"divino",    danger:1, icon:"🦄", desc:"Criatura sagrada de boa sorte, aparece com sábios e governantes justos.", lore:"Ser celestial de beleza incomparável: corpo de cervo, escamas de dragão, cascos de boi e cauda de boi, nunca esmagando uma folha ou inseto. Aparece somente nos reinados dos líderes virtuosos como presságio de prosperidade e paz. Sua aparição é extremamente rara.", origin:"China e Japão",           habitat:"Cidades prósperas, palácios", poder:"Bênção, justiça divina"    },
  { id:30, name:"Hōō",            jp:"鳳凰",     type:"divino",    danger:1, icon:"🔥", desc:"Fênix japonesa, símbolo de renascimento e imortalidade.", lore:"A fênix japonesa, representando o sul entre as quatro criaturas celestiais. Aparece somente em eras de grande paz e prosperidade. Sua plumagem combina cinco cores sagradas. Nunca come ser vivo, apenas sementes de bambu, e bebe apenas de fontes puras.", origin:"Mitologia sino-japonesa",  habitat:"Paraísos celestiais",       poder:"Renascimento, bênção sagrada" },
  { id:31, name:"Suzaku",         jp:"朱雀",     type:"divino",    danger:2, icon:"🐦", desc:"Ave sagrada do sul, guardiã das quatro direções.", lore:"Uma das quatro criaturas divinas guardiãs. Pássaro imenso de plumagem vermelha como fogo, guardião do sul e da primavera. Representa a vitalidade e a força do verão. Com Seiryu (leste), Byakko (oeste) e Genbu (norte), mantém o equilíbrio sagrado do cosmos.", origin:"Mitologia chinesa e japonesa", habitat:"Sul, paraísos celestiais",  poder:"Fogo sagrado, proteção"      },
  { id:32, name:"Yatagarasu",     jp:"八咫烏",   type:"divino",    danger:1, icon:"🐦‍⬛", desc:"O corvo divino de três patas, mensageiro do sol.", lore:"Corvo sagrado de três pernas enviado pelos deuses para guiar o imperador Jimmu na fundação do Japão. Símbolo de orientação divina, intervenção e a vontade dos céus. Habita o sol de acordo com algumas tradições, e seu terceiro pé representa o céu, terra e humanidade.", origin:"Mitologia xintoísta",      habitat:"Sol, mundos celestiais",   poder:"Orientação divina, onivisão" },
  { id:33, name:"Hakutaku",       jp:"白澤",     type:"divino",    danger:1, icon:"🐂", desc:"Besta sábia que conhece todos os seres sobrenaturais.", lore:"Criatura mítica com o corpo de um boi, nove olhos e seis chifres. Apareceu ao Imperador Amarelo da China, revelando os nomes e fraquezas de todos os 11.520 seres sobrenaturais do mundo. Seu conhecimento foi compilado no Hakutaku-zu, grimório contra demônios.", origin:"China e Japão",           habitat:"Planícies celestiais",     poder:"Onisciência sobre yokais"    },
  { id:34, name:"Byakko",         jp:"白虎",     type:"divino",    danger:2, icon:"🐯", desc:"Tigre branco sagrado, guardião do oeste.", lore:"Guardião do oeste, representando o outono e o metal. Tigre de pelagem branca como neve com poder colossal. Com Seiryu, Suzaku e Genbu, forma o quarteto das quatro criaturas divinas que protegem as direções cardinais e mantêm a ordem cósmica.", origin:"Mitologia sino-japonesa",  habitat:"Oeste, montanhas sagradas", poder:"Força, proteção do oeste"    },
  { id:35, name:"Inari",          jp:"稲荷",     type:"divino",    danger:1, icon:"🌾", desc:"Divindade da fertilidade e raposas, protetora das colheitas.", lore:"Um dos kami mais venerados do Japão. Pode aparecer como homem velho, jovem mulher ou androgino. Associado às raposas brancas como mensageiras. Os santuários Inari são reconhecíveis pelos torii vermelhos em fileiras. Protetor de arroz, saké, fertilidade e prosperidade.", origin:"Xintoísmo",               habitat:"Santuários Inari",          poder:"Fertilidade, abundância, proteção" },

  // OBJETOS ANIMADOS (Tsukumogami)
  { id:36, name:"Tsukumogami",    jp:"付喪神",   type:"objeto",    danger:2, icon:"🏮", desc:"Objetos que ganham vida e consciência após cem anos de existência.", lore:"Todo objeto que sobrevive por cem anos ganha uma alma. Desde guarda-chuvas e sandálias a lanternas e pergaminhos. A maioria é inofensiva ou traviesa, mas objetos que foram descartados impropriamente podem se tornar amargos e rancorosos. O Hyakki Yagyō é sua celebração anual.", origin:"Budismo, período Heian",  habitat:"Casas antigas, templos",   poder:"Animação, vontade própria"   },
  { id:37, name:"Kasa-obake",     jp:"傘化け",   type:"objeto",    danger:1, icon:"☂️", desc:"Guarda-chuva vivo com um olho e uma perna saltitante.", lore:"Um dos tsukumogami mais icônicos. Um guarda-chuva japonês que ganhou vida após cem anos, com um único olho grande no centro e saltando em sua única perna (a haste). Mais curioso e travesso do que perigoso. Representa a essência lúdica dos tsukumogami.", origin:"Período Edo",             habitat:"Lojas de guarda-chuva",    poder:"Susto, travessura"           },
  { id:38, name:"Chōchin-obake",  jp:"提灯お化け", type:"objeto",  danger:2, icon:"🪔", desc:"Lanterna com um rosto assustador que ganha vida.", lore:"Uma lanterna de papel japonesa que ganhou alma. Possui olhos esbugalhados, uma longa língua e pode rachar ao meio para revelar um rosto aterrorizante. Aparece em histórias de terror e artes do período Edo. Ilumina corredores escuros com uma luz perturbadora.", origin:"Período Edo",             habitat:"Casas antigas, becos",     poder:"Susto, luz espectral"        },
  { id:39, name:"Ittan-momen",    jp:"一反木綿",  type:"objeto",   danger:3, icon:"🪄", desc:"Longo rolo de algodão branco que voa e sufoca pessoas.", lore:"Uma peça de tecido de algodão de uns quarenta metros que ganhou vida. Voa graciosamente pelas noites de Kagoshima, envolvendo-se ao redor de pescoços e cabeças de pessoas para asfixiá-las. Apesar da aparência inofensiva, é considerado altamente perigoso.", origin:"Kagoshima",               habitat:"Noites abertas, campos",   poder:"Voo, sufocamento"            },
  { id:40, name:"Kyōrinrin",      jp:"経凛々",   type:"objeto",   danger:2, icon:"📜", desc:"Pergaminhos ou livros que ganham vida e arrogância.", lore:"Pergaminhos budistas ou livros de ensinamentos que ganharam alma. Tornam-se arrogantes e altivos, acreditando que seus conhecimentos os tornam superiores. Geralmente considerados mais irritantes que perigosos, mas podem causar confusão espiritual.", origin:"Templos budistas",        habitat:"Bibliotecas, templos",     poder:"Conhecimento, arrogância"    },
  { id:41, name:"Bakezōri",       jp:"化け草履", type:"objeto",    danger:1, icon:"👡", desc:"Sandália japonesa viva que corre pela noite.", lore:"Sandálha de palha (zōri) que ganhou vida. Pula e corre pela casa à noite cantando rimas sobre sandalhas esquecidas. Representa o cuidado que se deve ter com os objetos cotidianos — descuidar de suas posses pode animá-las em rancor.", origin:"Período Edo",             habitat:"Entradas de casas",        poder:"Travessura noturna"          },
  { id:42, name:"Menreiki",       jp:"面霊気",   type:"objeto",   danger:2, icon:"🎭", desc:"Máscara de teatro que ganha vida e consciência.", lore:"Máscaras do teatro Nō e Kagura que acumularam energia emocional ao longo de gerações de atuação. Ganham vida e podem possuir atores ou simplesmente observar silenciosamente. Algumas são benignas; outras carregam as emoções das peças que representaram por séculos.", origin:"Teatro Nō",               habitat:"Teatros, coleções de arte", poder:"Possessão, emoção intensa"   },

  // HUMANOIDES
  { id:43, name:"Rokurokubi",     jp:"轆轤首",   type:"humanoide", danger:3, icon:"🧖", desc:"Mulher cujo pescoço se alonga infinitamente durante a noite.", lore:"De dia, parecem mulheres completamente normais — trabalhadoras, esposas, mães. À noite, seus pescoços se esticam para metros de comprimento para satisfazer curiosidade, espiar ou assustar. A maioria não sabe de sua natureza, descobrindo ao se ver no espelho.", origin:"Período Edo",             habitat:"Aldeias, cidades",         poder:"Pescoço extensível, espionagem" },
  { id:44, name:"Futakuchi-onna", jp:"二口女",   type:"humanoide", danger:4, icon:"👄", desc:"Mulher com uma segunda boca faminta na nuca.", lore:"Surge em mulheres que raramente comem ou que são maltratadas por maridos controladores. Uma segunda boca abre na parte de trás da cabeça entre os cabelos, exigindo comida em quantidade e exalando insultos. Os cabelos se movem como tentáculos para alimentá-la secretamente.", origin:"Folclore japonês",         habitat:"Casas rurais",             poder:"Segunda boca, cabelos vivos" },
  { id:45, name:"Kuchisake-onna", jp:"口裂け女", type:"humanoide", danger:5, icon:"😷", desc:"A mulher de boca rasgada, terror das ruas noturnas.", lore:"Usa máscara cirúrgica e pergunta 'Sou bonita?' Se responder não, ela o mata. Se responder sim, ela tira a máscara revelando a boca rasgada de orelha a orelha e pergunta novamente. Responder sim ou não resulta em morte. A única saída é confundi-la com uma resposta ambígua.", origin:"Lenda urbana, anos 1970",  habitat:"Ruas noturnas",            poder:"Tesoura, velocidade mortal"  },
  { id:46, name:"Hone-onna",      jp:"骨女",     type:"humanoide", danger:4, icon:"💃", desc:"Mulher esqueleto sedutora que drena a vida de amantes.", lore:"O amor é cego — literalmente, no caso de homens seduzidos por uma hone-onna. Aparece como uma bela mulher, mas à luz de uma vela especial sua natureza esquelética é revelada. Passa noites com o amante, que murcha e morre drenado de sua força vital.", origin:"Kaidan clássico japonês",  habitat:"Casas de gueixa, bares",   poder:"Sedução mortal, drenar vida" },
  { id:47, name:"Dodomeki",       jp:"百々目鬼",  type:"humanoide", danger:3, icon:"👁️", desc:"Mulher com centenas de olhos de pássaro cobrindo seus braços.", lore:"Surge de mulheres que roubavam moedas repetidamente — os olhos de bronze das moedas antigas se manifestam literalmente em sua pele. Seus braços ficam cobertos de olhos de pássaro vigilantes. Associada à avareza e ao karma do roubo.", origin:"Período Edo",             habitat:"Mercados, cidades",        poder:"Visão múltipla, maldição"    },
  { id:48, name:"Yamauba",        jp:"山姥",     type:"humanoide", danger:5, icon:"👵", desc:"Bruxa das montanhas que devora viajantes perdidos.", lore:"Vive nas montanhas profundas, oferecendo abrigo a viajantes que se perdem. À meia-noite, revela sua natureza demoníaca — cabelos que se movem como serpentes, boca que se abre até as orelhas, garras e fome insaciável. Mas algumas histórias a retratam como sábia e auxiliadora.", origin:"Todo o Japão",             habitat:"Montanhas isoladas",       poder:"Transformação, canibalismo"  },
  { id:49, name:"Datsue-ba",      jp:"奪衣婆",   type:"humanoide", danger:3, icon:"👗", desc:"Velha horrível que arranca roupas dos mortos no submundo.", lore:"Guarda o rio Sanzu, o equivalente japonês do Estige. Arranca as roupas dos recém-mortos assim que chegam ao submundo, enquanto seu parceiro pende-as em galhos para medir os pecados do falecido pelo peso da roupa. É parte inevitável da jornada após a morte.", origin:"Budismo japonês",          habitat:"Rio Sanzu, submundo",      poder:"Arranca roupas, julga pecados" },
  { id:50, name:"Aonyōbō",        jp:"青女房",   type:"humanoide", danger:3, icon:"🏯", desc:"Espírito de dama da corte que apodreceu esperando ser chamada.", lore:"A saudade de uma dama da corte que esperou pelo imperador que nunca retornou. Com o tempo, decompôs enquanto ainda aguardava, transformando-se em algo desfigurado que ainda usa seus trajes de corte apodrecidos. Vaga pelos palácios que habitou.", origin:"Período Heian",           habitat:"Palácios abandonados",     poder:"Desolação, maldição do abandono" },

  // AQUÁTICOS
  { id:51, name:"Umibōzu",        jp:"海坊主",   type:"aquático",  danger:5, icon:"🌊", desc:"Gigante negro do mar que afunda navios sem motivo.", lore:"Monstro marinho de proporções colossais, completamente negro, que surge calmamente do oceano em noites claras. Não ataca por fome ou raiva — simplesmente afunda navios porque pode. Falar sobre ele em alto mar é mau presságio. A única esperança é oferecer um barril sem fundo.", origin:"Mar do Japão",            habitat:"Oceano aberto",            poder:"Tamanho colossal, naufrágio" },
  { id:52, name:"Isonade",        jp:"磯撫で",   type:"aquático",  danger:5, icon:"🦈", desc:"Tubarão demoníaco com cauda mortal que captura pescadores.", lore:"Criatura marinha aterrorizante parecida com um enorme peixe. Sua cauda, coberta de ganchos, varre pescadores para fora de seus barcos silenciosamente. Quase impossível de detectar antes de ser tarde demais. É considerado um dos yokais marinhos mais mortais.", origin:"Costas do Japão",         habitat:"Costas rochosas, praias",  poder:"Cauda-gancho, stealth aquática" },
  { id:53, name:"Mizuchi",        jp:"大蛟",     type:"aquático",  danger:4, icon:"🐉", desc:"Dragão de água sobrenatural que habita rios poderosos.", lore:"Serpente dragão divina que habita os grandes rios do Japão. Extremamente territorial — aqueles que perturbam suas águas são arrastados para o fundo. Pode ser apaziguado com oferendas adequadas. É ancestral divino de algumas famílias nobres.", origin:"Mitos japoneses antigos",  habitat:"Rios caudalosos",          poder:"Controle da água, veneno"    },
  { id:54, name:"Ushi-oni",       jp:"牛鬼",     type:"aquático",  danger:5, icon:"🐂", desc:"Demônio marinho com corpo de caranguejo e cabeça de boi.", lore:"Uma das criaturas mais perturbadoras do folclore japonês — cabeça de boi com chifres afiados sobre um corpo enorme e monstruoso. Habita as costas e embosca pescadores. Em algumas regiões, sai do mar durante festivais para aterrorizar as aldeias costeiras.", origin:"San'in e Shikoku",         habitat:"Mar costeiro, praias",     poder:"Veneno, força brutal"        },
  { id:55, name:"Amabie",         jp:"アマビエ",  type:"aquático",  danger:1, icon:"🧜", desc:"Criatura marinha que prevê epidemias e oferece proteção.", lore:"Ser de três pernas, corpo coberto de escamas e longo cabelo, que emergiu do mar em Higo em 1846. Anunciou colheitas abundantes por três anos seguidos e então disse: 'Se uma doença vier, mostrem imagens minhas ao povo'. Tornou-se símbolo de proteção durante pandemias.", origin:"Higo (Kumamoto), 1846",   habitat:"Mar profundo",             poder:"Profecia, proteção de doenças" },
  { id:56, name:"Gyūki",          jp:"牛鬼",     type:"aquático",  danger:4, icon:"🦀", desc:"Criatura metade boi, metade aranha ou caranguejo marinho.", lore:"Monstro costeiro de forma variada dependendo da região — alguns o descrevem com corpo de aranha e cabeça de boi, outros com casco de caranguejo. Aparece em praias à noite, usando ilusões para atrair pescadores ao mar onde os devora.", origin:"Litoral japonês",         habitat:"Praias, costas rochosas",  poder:"Ilusão, força colossal"      },
  { id:57, name:"Namazu",         jp:"鯰",       type:"aquático",  danger:4, icon:"🐟", desc:"Peixe-gato gigante que causa terremotos com seus movimentos.", lore:"Peixe-gato colossal que dorme sob as ilhas japonesas, preso pela pedra kaname do deus Kashima. Quando Kashima se distrai, o namazu se mexe e provoca terremotos devastadores. Após o grande terremoto de Edo de 1855, seu número de adoradores cresceu inesperadamente.", origin:"Xintoísmo",               habitat:"Sob as ilhas do Japão",    poder:"Terremotos, catástrofes"     },

  // NATUREZA
  { id:58, name:"Kodama",         jp:"木霊",     type:"natureza",  danger:1, icon:"🌳", desc:"Espíritos que habitam árvores sagradas centenárias.", lore:"Espíritos gentis que vivem dentro de grandes árvores antigas. Seu eco nas florestas profundas é o kodama respondendo às vozes humanas. Cortar uma árvore que abriga um kodama traz maldição terrível. São representados como esferas brancas translúcidas pulsantes.", origin:"Xintoísmo",               habitat:"Florestas antigas",        poder:"Eco, maldição por desrespeito" },
  { id:59, name:"Raijin",         jp:"雷神",     type:"natureza",  danger:4, icon:"🌩️", desc:"Deus do trovão, poderoso kami das tempestades.", lore:"Kami de aparência demoníaca cercado por tambores que produzem o trovão ao golpeá-los. Trabalha em par com Fujin, o deus do vento. Feroz e barulhento, mas não maligno — faz parte do ciclo natural das tempestades que fertilizam a terra.", origin:"Xintoísmo",               habitat:"Céu, nuvens de tempestade", poder:"Trovão, raio, tempestades"  },
  { id:60, name:"Yuki-onna",      jp:"雪女",     type:"natureza",  danger:4, icon:"❄️", desc:"A mulher da neve, bela e mortal como uma tempestade de inverno.", lore:"Aparece em noites de nevasca — uma mulher de beleza impossível, com pele branca como neve e olhos azuis brilhantes. Congela viajantes perdidos com seu sopro glacial ou os seduz para uma morte fria. Em algumas histórias, poupa jovens bonitos, com quem às vezes se casa.", origin:"Todo o Japão",             habitat:"Montanhas nevadas, tundra", poder:"Sopro glacial, hipnose fria" },
  { id:61, name:"Yamata no Orochi", jp:"八岐大蛇", type:"natureza", danger:5, icon:"🐍", desc:"A serpente lendária de oito cabeças e oito caudas.", lore:"Serpente colossal de oito cabeças que devorava donzelas anualmente. Seus olhos eram como maçanetas de porta e seus flancos cobriam oito montanhas. Foi morta pelo herói Susanoo, que a embriagou com saké e matou as oito cabeças enquanto dormia. Em um de seus corpos estava a espada sagrada Kusanagi.", origin:"Kojiki, mitologia Izumo",  habitat:"Rios da província Izumo",  poder:"Oito cabeças, veneno massivo" },
  { id:62, name:"Ōgama",          jp:"大蟇",     type:"natureza",  danger:4, icon:"🐸", desc:"Sapo gigante sobrenatural de poderes imensos.", lore:"Sapo de proporções monstruosas que habita lagoas profundas e montanhas. Pode cuspir névoas que causam ilusões ou criar fumaça de guerra. Na lenda dos Três Sapos, trava batalhas épicas. Em algumas histórias, é montaria de guerreiros ou mestre de artes marciais.", origin:"Japão, China",            habitat:"Lagos, pântanos",           poder:"Névoa ilusória, tamanho imenso" },

  // MAIS YOKAIS
  { id:63, name:"Shinigami",      jp:"死神",     type:"demônio",   danger:5, icon:"☠️", desc:"O ceifador japonês, deus e guia da morte.", lore:"Entidade que guia as almas dos moribundos para o além. Diferente do Grim Reaper ocidental, pode ser enganado ou convencido a adiar a morte. Em algumas tradições, são almas de suicidas condenados a encontrar substitutos. Seu toque ou olhar anuncia a morte iminente.", origin:"Folclore e budismo",      habitat:"Limiar entre mundos",      poder:"Morte inevitável, guia de almas" },
  { id:64, name:"Jorōgumo",       jp:"絡新婦",   type:"animal",    danger:5, icon:"🕷️", desc:"Aranha que se transforma em bela mulher para capturar vítimas.", lore:"Aranha que vive por quatrocentos anos e ganha poder de se transformar numa mulher deslumbrante. Atrai homens solitários ou pecaminosos com música de koto, envolvendo-os em fios de seda enquanto se aproxima. Seus filhotes eclodem dos homens que captura. A história mais famosa é da Cachoeira de Jōren.", origin:"Cachoeira de Jōren, Izu",  habitat:"Cachoeiras, florestas",    poder:"Transformação, seda mortal"  },
  { id:65, name:"Nurarihyon",     jp:"ぬらりひょん", type:"humanoide", danger:3, icon:"👴", desc:"O líder supremo dos yokais, misterioso ancião.", lore:"Considerado o chefe de todos os yokais do Japão. Tem a estranha habilidade de entrar em casas enquanto a família está ocupada e comportar-se como o dono — bebendo chá, fumando, sentado confortavelmente. Ninguém questiona sua presença até ele ir embora. Sua cabeça é enormemente alongada.", origin:"Todo o Japão",             habitat:"Casas ocupadas",           poder:"Presença irresistível, ilusão" },
  { id:66, name:"Zashiki-warashi", jp:"座敷童子", type:"fantasma",  danger:1, icon:"🎎", desc:"Espírito infantil que traz riqueza e sorte à sua casa.", lore:"Criança fantasma de cinco ou seis anos vestida com trajes tradicionais vermelhos. Quando habita uma casa, traz prosperidade, saúde e fortuna à família. Mas é travessa — faz barulho à noite e move objetos. Se sair da casa, a família perde toda a sua sorte rapidamente.", origin:"Prefeitura de Iwate",      habitat:"Quartos japoneses (zashiki)", poder:"Fortuna, travessuras"       },
  { id:67, name:"Nurikabe",       jp:"塗壁",     type:"natureza",  danger:2, icon:"🧱", desc:"Parede invisível que bloqueia viajantes noturnos.", lore:"Um yokai invisível que se materializa como uma parede intransponível diante de viajantes noturnos. Por mais que tentem contornar, a parede os segue. O truque para escapar é bater com uma vara na base da parede — derrota a criatura. Não é malicioso, apenas obstinado.", origin:"Fukuoka",                 habitat:"Estradas noturnas",        poder:"Bloqueio intransponível"     },
  { id:68, name:"Mokumokuren",    jp:"目目連",   type:"objeto",    danger:2, icon:"👀", desc:"Olhos espectrais que aparecem em paredes e shōjis velhos.", lore:"Quando shōjis (divisórias de papel japonesas) envelhecem e não são cuidadas adequadamente, olhos começam a aparecer em seus furos e rasgos. Os olhos observam silenciosamente. Se tratados com respeito ou reparados, desaparecem. Um lembrete de que objetos observam seus donos.", origin:"Todo o Japão",             habitat:"Casas velhas, templos",    poder:"Vigilância, perturbação"     },
  { id:69, name:"Enenra",         jp:"煙々羅",   type:"natureza",  danger:2, icon:"💨", desc:"Ser feito de fumaça que assume formas dentro de fogueiras.", lore:"Nasce do interior de grandes fogueiras e fogueiras rituais. Assume formas humanas ou animais dentro da fumaça. Somente pessoas de coração puro conseguem vê-lo claramente. Para outros, é apenas fumaça bizarrada pelo vento. Não é intrinsecamente perigoso.", origin:"Período Edo",             habitat:"Fogueiras, incêndios",     poder:"Formas na fumaça, ilusão"    },
  { id:70, name:"Hyakki Yagyō",   jp:"百鬼夜行", type:"fantasma",  danger:4, icon:"🎪", desc:"O grande desfile noturno de todos os yokais, no auge do verão.", lore:"Na noite mais escura do verão, todos os yokais saem em procissão pelas ruas — um desfile interminável de criaturas grotescas, espíritos, tsukumogami animados e demônios. Qualquer humano que veja o desfile morrerá, a menos que esteja protegido por amuletos ou dentro de casa.", origin:"Japão medieval",          habitat:"Ruas de Kyoto, cidades",   poder:"Morte por visão, caos total" },
  { id:71, name:"Shikigami",      jp:"式神",     type:"divino",    danger:3, icon:"🔮", desc:"Espírito invocado e controlado por onmyoji (magos de corte).", lore:"Entidades espirituais convocadas e dominadas por praticantes de onmyōdō, a via oculta japonesa. Servem como espiões, mensageiros, protetores e armas. O maior mestre de shikigami foi Abe no Seimei. Shikigami poderosos podem assumir forma humana ou animal.", origin:"Onmyōdō, período Heian",   habitat:"Ao lado de seu mestre",    poder:"Variável — serviço espiritual" },
  { id:72, name:"Oni-bi",         jp:"鬼火",     type:"fantasma",  danger:2, icon:"🔥", desc:"Fogo fantasma que engana viajantes para pântanos.", lore:"Chamas espectrais sem fonte que flutuam no ar à noite perto de pântanos e cemitérios. Lembram lanternas à distância e atraem viajantes para longe do caminho seguro para dentro de pântanos ou áreas perigosas. Similar ao Will-o'-the-wisp europeu.", origin:"Todo o Japão",             habitat:"Pântanos, cemitérios",     poder:"Ilusão luminosa, engano"     },
  { id:73, name:"Wanyūdō",        jp:"輪入道",   type:"demônio",   danger:5, icon:"🔥", desc:"Uma roda em chamas com um rosto humano agonizante.", lore:"A alma de um senhor cruel de Kyoto — seu corpo foi atado a uma roda em chamas como punição divina. Viaja pelas estradas à noite, capturando almas dos pecadores para levá-las ao inferno. Diz-se que olhar para ele sem proteção espiritual resulta em ter a alma arrancada.", origin:"Kyoto",                   habitat:"Estradas, portões de templo", poder:"Captura de almas, fogo"    },
  { id:74, name:"Kasha",          jp:"火車",     type:"demônio",   danger:4, icon:"🚗", desc:"Demônio que rouba cadáveres durante os funerais.", lore:"Demônio semelhante a um gato ou figura humana flamejante que desce sobre funerais para roubar o corpo do falecido antes que os rituais possam ser completados. A alma do morto então fica presa em um estado indefinido. Só pode ser detido com rituais de proteção específicos.", origin:"Budismo japonês",         habitat:"Funerais, cemitérios",     poder:"Roubo de corpos, fogo"       },
  { id:75, name:"Satori",         jp:"覚",       type:"animal",    danger:3, icon:"🧠", desc:"Criatura que lê e antecipa completamente os pensamentos humanos.", lore:"Ser parecido com um macaco que habita as montanhas. Quando um viajante se aproxima, o satori começa a falar em voz alta todos os seus pensamentos antes que ele os formule completamente. É impossível escapar ou atacá-lo pois sabe cada movimento antes. A única esperança é esvaziar completamente a mente.", origin:"Montanhas do Japão",      habitat:"Florestas de montanha",    poder:"Telepatia absoluta, esquiva" },
  { id:76, name:"Nue",            jp:"鵺",       type:"animal",    danger:5, icon:"🦁", desc:"Criatura híbrida monstruosa cujo grito anuncia desgraça.", lore:"Yokai com cabeça de macaco, corpo de tanuki, patas de tigre e cauda de serpente. Seu grito é o do tordo japonês, ouvido em noites nebulosas como presságio de catástrofe. Causou doenças ao imperador Konoe. Foi morta pelo guerreiro Minamoto no Yorimitsu com flechas sagradas.", origin:"Kyoto, período Heian",    habitat:"Palácios, florestas",      poder:"Grito amaldiçoador, veneno"  },
  { id:77, name:"Ubagabi",        jp:"姥火",     type:"fantasma",  danger:3, icon:"🔮", desc:"Bola de fogo espiritual de origem misteriosa em Kyoto.", lore:"Fogo espiritual azul que aparece sobre o Rio Kamo em Kyoto. Diz-se ser o espírito de uma velha que jogou uma peça de roupa num caranguejo por diversão e foi amaldiçoada. Flutua sobre a água em noites escuras, aterrorizando pescadores e vadeadores noturnos.", origin:"Rio Kamo, Kyoto",         habitat:"Rios, lagos",              poder:"Fogo espiritual, maldição"   },
  { id:78, name:"Tsuchigumo",     jp:"土蜘蛛",   type:"animal",    danger:4, icon:"🕸️", desc:"Aranha gigante das montanhas que envolve guerreiros em seda.", lore:"Aranha colossal que habita as montanhas e cavernas profundas. Lança teias impossíveis de quebrar sobre guerreiros e aldeias inteiras. Na lenda mais famosa, o herói Minamoto no Raiko foi atraído para sua toca por uma ilusão de criança e quase morreu envolto em fios.", origin:"Montanhas japonesas",      habitat:"Cavernas, montanhas",      poder:"Teia inquebrável, ilusão"    },
  { id:79, name:"Binbōgami",      jp:"貧乏神",   type:"divino",    danger:3, icon:"💸", desc:"Deus da pobreza que habita os lares e drena a riqueza.", lore:"Divindade azarada que se instala em casas e drena sorte e prosperidade de seus habitantes. Parece um velho magro e miserável. Ironicamente, é impossível expulsá-lo com violência — fazer isso traz ainda mais azar. Deve ser alimentado com comida ruim até voluntariamente preferir sair.", origin:"Xintoísmo popular",        habitat:"Casas pobres",             poder:"Drenagem de fortuna, pobreza" },
  { id:80, name:"Jubokko",        jp:"樹木子",   type:"natureza",  danger:4, icon:"🌲", desc:"Árvore que cresceu em campo de batalha absorvendo sangue humano.", lore:"Árvore que cresceu em solos encharcados de sangue de guerreiros. Absrove tanta energia vital que se torna carnívora — captura viajantes com ramos que se movem como tentáculos, perfura-os e drena seu sangue como fazendo seiva. Parece uma árvore normal até ser tarde demais.", origin:"Campos de batalha",        habitat:"Antigas zonas de guerra",  poder:"Ramos-tentáculo, dreno de sangue" },
  { id:81, name:"Hitotsume-kozō", jp:"一つ目小僧", type:"fantasma", danger:2, icon:"👁️‍🗨️", desc:"Criança fantasma com um único olho enorme no rosto.", lore:"Aparece como uma criança comum de robe budista, mas tem apenas um olho bem no centro do rosto. É mais travessa que perigosa — aparece subitamente e provoca sustos. Pode ser evitada com uma peneira, pois criaturas de um olho são atraídas a contar buracos e se perdem nisso.", origin:"Todo o Japão",             habitat:"Aldeias, estradas",        poder:"Susto, olho hipnótico"       },
  { id:82, name:"Abura-akago",    jp:"油赤子",   type:"fantasma",  danger:2, icon:"👶", desc:"Bebê fantasma que surge das chamas de lampiões e rouba óleo.", lore:"Manifestação espiritual de um ladrão de óleo que em vida roubava dos templos budistas. Agora surge das chamas de lamparinas, lambendo o óleo ardente sem se queimar. Diz-se que a chama faz formas de crianças antes do yokai emergir completamente.", origin:"Ōtsu, Shiga",             habitat:"Templos com lampiões",     poder:"Roubo de óleo, invulnerabilidade ao fogo" },
  { id:83, name:"Ameonna",        jp:"雨女",     type:"natureza",  danger:2, icon:"🌧️", desc:"Mulher da chuva que traz tempestades onde quer que vá.", lore:"Figura feminina ligada à chuva, frequentemente retratada lambendo sua mão que destila água. Onde quer que apareça, a chuva a segue. Em algumas tradições é uma deusa menor da chuva; em outras é um espírito melancólico que chora chuva pelo mundo.", origin:"Folclore japonês",        habitat:"Regiões chuvosas",         poder:"Invocação de chuva, névoa"   },
  { id:84, name:"Namahage",       jp:"生剥",     type:"demônio",   danger:3, icon:"😤", desc:"Ogros disciplinadores que visitam casas no Ano Novo para punir preguiçosos.", lore:"Seres mascarados e feroz-aparência que visitam aldeias no Año Nuevo japonês (Oshōgatsu), perguntando em altos brados: 'Tem crianças chorosas aqui? Tem preguiçosos?'. Na verdade são agentes do bem — disciplinam os desocupados e protegem a comunidade.", origin:"Prefeitura de Akita",      habitat:"Aldeias do norte do Japão", poder:"Intimidação, julgamento moral" },
  { id:85, name:"Noppera-bō",     jp:"のっぺらぼう", type:"fantasma", danger:3, icon:"🫨", desc:"Fantasma completamente sem rosto que imita pessoas comuns.", lore:"O yokai sem rosto. Parece uma pessoa perfeitamente normal — até virar o rosto e revelar um oval de carne completamente liso. Não tem olhos, nariz ou boca. Frequentemente aparece como membros da família ou estranhos em estradas, causando horror puro pela ausência de humanidade.", origin:"Todo o Japão",             habitat:"Estradas, casas",          poder:"Disfarce, horror absoluto"   },
  { id:86, name:"Mononoke",       jp:"物の怪",   type:"fantasma",  danger:4, icon:"😤", desc:"Espírito maligno que causa doenças e desgraças.", lore:"Entidade sobrenatural malévola capaz de possuir pessoas, causar enfermidades, loucura e até morte. Na corte Heian, a aristocracia empregava onmyoji para diagnosticar e exorcizar mononoke. O conto de Genji está repleto de casos. Podem ser espíritos de pessoas mortas, animais ou forças naturais corrompidas.", origin:"Período Heian",           habitat:"Palácios, corpos de vítimas", poder:"Possessão, doença, morte"  },
  { id:87, name:"Baku",           jp:"獏",       type:"divino",    danger:1, icon:"🐘", desc:"Devorador de sonhos e pesadelos enviado pelos deuses.", lore:"Ser composto de sobras de outros animais após a criação — tromba de elefante, olhos de rinoceronte, patas de tigre, cauda de boi. Devora pesadelos se invocado corretamente ao acordar. Mas deve ser invocado com cuidado — se os pesadelos não bastarem, pode devorar as esperanças e projetos da pessoa.", origin:"China e Japão",           habitat:"Fronteira sono-vigília",    poder:"Devorar sonhos, pesadelos"  },
  { id:88, name:"Hyōsube",        jp:"兵主部",   type:"aquático",  danger:3, icon:"🧌", desc:"Criatura peluda dos rios com hábitos repugnantes.", lore:"Parente distante do kappa, coberto de pelos sujos e fedorentos. Entra em casas e toma banhos nas banheiras das pessoas, deixando-as sujas. Rouba colheitas de berinjela e pode causar doenças com seu toque. Vive em rios e pântanos. Apesar de grotesco, raramente mata diretamente.", origin:"Kyushu",                  habitat:"Rios, banheiros",          poder:"Doença, roubo de colheitas"  },
  { id:89, name:"Gaki",           jp:"餓鬼",     type:"fantasma",  danger:2, icon:"🫤", desc:"Espírito faminto condenado à fome eterna pelo karma.", lore:"Almas de gananciosos e avarentos renascidas num estado de fome eterna. Têm barrigas imensas e bocas minúsculas — comida e água desaparecem ou se transformam em carvão antes de chegar à boca. Vivem em um reino separado mas podem aparecer no mundo dos vivos, especialmente durante o Obon.", origin:"Budismo japonês",         habitat:"Reino dos famintos (Gakidō)", poder:"Fome contagiosa, miséria"  },
  { id:90, name:"Kudan",          jp:"件",       type:"divino",    danger:2, icon:"🔮", desc:"Criatura profética que nasce, faz uma previsão e morre.", lore:"Ser com corpo de boi e rosto humano. Nasce de vacas comuns em épocas de crise iminente. Ao nascer, faz uma única profecia sobre guerras, desastres ou epidemias, sempre verdadeira. Depois morre. Sua imagem é usada como amuleto de proteção contra o que previu.", origin:"Osaka e regiões vizinhas", habitat:"Fazendas, mundo dos mortais", poder:"Profecia infalível"        },
  { id:91, name:"Akaname",        jp:"垢嘗め",   type:"fantasma",  danger:1, icon:"👅", desc:"Língua comprida que lambe a sujeira de banheiros negligenciados.", lore:"Criatura humanóide de língua extraordinariamente comprida que aparece em banheiros sujos e negligenciados para limpá-los lambendo toda a sujeira. Não é perigoso para pessoas limpas, mas é uma motivação poderosa para manter a higiene do banheiro.", origin:"Todo o Japão",             habitat:"Banheiros sujos",          poder:"Limpeza lambida, susto"      },
  { id:92, name:"Aka Manto",      jp:"赤マント",  type:"fantasma",  danger:5, icon:"🚽", desc:"Espírito que assombra banheiros públicos fazendo escolhas fatais.", lore:"Aparece em banheiros públicos — especialmente escolas — e pergunta: 'Capa vermelha ou capa azul?' Vermelho resulta em ser esfolado vivo; azul em estrangulamento. Qualquer outra cor tem seu próprio fim terrível. A única salvação é dizer que não quer nenhuma.", origin:"Lenda urbana japonesa",   habitat:"Banheiros escolares",      poder:"Morte por escolha errada"    },
  { id:93, name:"Taka-onna",      jp:"高女",     type:"humanoide", danger:3, icon:"🦶", desc:"Mulher que espia pelas janelas dos andares superiores esticando o corpo.", lore:"Yokai feminino cujo corpo pode se esticar verticalmente a alturas enormes. Usada como espiã sobrenatural, pode crescer até a altura de telhados para espiar através de janelas e frestas nos andares superiores. Descobrida por sua sombra elongada.", origin:"Folclore japonês",        habitat:"Cidades, corpos administrativos", poder:"Corpo extensível vertical" },
  { id:94, name:"Ashiarai Yashiki", jp:"足洗い邸", type:"fantasma", danger:2, icon:"🦵", desc:"Um pé gigante que invade casas repentinamente e exige ser lavado.", lore:"Em casas de Edo aparecia subitamente um pé colossal caindo pelo teto com um estrondo enorme, exigindo ser lavado. Famílias que lavassem o pé eram deixadas em paz; as que resistissem tinham a casa destruída. Ninguém nunca viu o corpo ao qual o pé pertencia.", origin:"Edo (Tóquio)",            habitat:"Casas antigas de Tóquio",  poder:"Intrusão, destruição"        },
  { id:95, name:"Mikoshi-nyūdō",  jp:"見越し入道", type:"humanoide", danger:4, icon:"📏", desc:"Gigante que cresce infinitamente quanto mais você olha para cima.", lore:"Aparece como um monge alto que para à beira das estradas. Quanto mais você ergue a vista para ver seu rosto, mais alto ele fica. Olhar muito para cima para tentar ver seu rosto pode quebrar seu pescoço. A proteção é gritar 'Vi você primeiro!' antes dele crescer.", origin:"Todo o Japão",             habitat:"Estradas noturnas",        poder:"Crescimento infinito"        },
  { id:96, name:"Konaki-jiji",    jp:"子泣き爺",  type:"humanoide", danger:4, icon:"👶", desc:"Bebê velho que se faz de indefeso e então pesa toneladas.", lore:"Aparece no fundo de florestas como um bebê chorando sem parents. Qualquer pessoa de bom coração que o pegue descobre que ele fica progressivamente mais pesado — toneladas de peso concentradas naquele pequeno corpo, esmagando quem o carregou até a morte.", origin:"Shikoku",                  habitat:"Florestas, estradas rurais", poder:"Peso infinito, choro"       },
  { id:97, name:"Ikiryō",         jp:"生霊",     type:"fantasma",  danger:4, icon:"🧿", desc:"Projeção espiritual de uma pessoa viva movida por emoções intensas.", lore:"Fenômeno onde o espírito de uma pessoa viva se separa de seu corpo durante estados de emoção extrema — ciúme avassalador, ódio profundo, amor obsessivo. O ikiryō pode causar doenças, morte e catástrofes enquanto o dono do espírito dorme inocentemente. Figura prominente no Genji Monogatari.", origin:"Período Heian",           habitat:"Onde seu alvo habitar",    poder:"Possessão, doença sem origem" },
  { id:98, name:"Oarfish yokai",  jp:"大王魚",   type:"aquático",  danger:3, icon:"🐠", desc:"O peixe-remo colossal como presságio de terremotos e tsunamis.", lore:"O peixe-remo gigante (Regalecus glesne), o mais comprido peixe ósseo do mundo, é considerado mensageiro do Palácio do Dragão submarino no folclore japonês. Quando aparece na costa, presagia terremotos. Ficou famoso após numerosos avistamentos antes do terremoto de 2011.", origin:"Mar profundo do Japão",   habitat:"Oceano aberto, abissal",   poder:"Presságio sísmico"           },
  { id:99, name:"Aoandon",        jp:"青行燈",   type:"fantasma",  danger:4, icon:"🕯️", desc:"Espírito que surge ao contar cem histórias de terror.", lore:"Durante o jogo Hyakumonogatari Kaidankai, cem velas são acesas e apagadas uma a uma enquanto histórias de terror são contadas. Na centésima história, a lanterna azul se apaga e o aoandon — espírito de chifres azuis e dentes negros — se materializa como encarnação do medo coletivo.", origin:"Ritual Hyakumonogatari",   habitat:"Salas escuras, rituais",   poder:"Materialização do medo"      },
  { id:100, name:"Ikiryo",        jp:"生霊",     type:"fantasma",  danger:3, icon:"😶", desc:"Duplo espiritual que vaga enquanto seu dono dorme.", lore:"Variante menor do ikiryō — projeção espiritual que pode aparecer a outros como seu reflexo ou sombra. Viaja de noite enquanto a pessoa dorme e pode ser visto por sensitivos. Diferente do ikiryō, geralmente não é causado por raiva mas por saudade intensa ou preocupação.", origin:"Folclore japonês",        habitat:"Estradas noturnas",        poder:"Aparição dupla, premonição"  },
];

const YOKAI_IMAGE_OVERRIDES = {
  'Yūrei': 'images/yurei.png',
  'Goryō': 'images/goryo.png',
  'Funa yūrei': 'images/funa-yurei.png',
  'Gashadokuro': 'images/gashadokuro.png',
  'Teke teke': 'images/teke-teke.png',
  'Ubume': 'images/ubume.png',
  'Hitodama': 'images/hitodama.png',
  'Buruburu': 'images/buruburu.png',
  'Kyōkotsu': 'images/kyokotsu.png',
  'Mujina': 'images/mujina.png',
  'Kitsune': 'images/kitsune.png',
  'Kyūbi no kitsune': 'images/kyubi-no-kitsune.png',
  'Bakeneko': 'images/bakeneko.png',
  'Nekomata': 'images/nekomata.png',
  'Tanuki': 'images/tanuki.png',
  'Bake-danuki': 'images/bake-danuki.png',
  'Kappa': 'images/kappa.png',
  'Tengu': 'images/tengu.png',
};

function yokaiSlug(name) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/ō/g, 'o')
    .replace(/ū/g, 'u')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

YOKAI_DATA.forEach(yokai => {
  yokai.image = YOKAI_IMAGE_OVERRIDES[yokai.name] || `images/${yokaiSlug(yokai.name)}.png`;
});

// ── DOM REFS ─────────────────────────────────────────────────
const grid       = document.getElementById('yokaiGrid');
const searchIn   = document.getElementById('searchInput');
const filterBtns = document.getElementById('filterBtns');
const resultsCount = document.getElementById('resultsCount');
const emptyState = document.getElementById('emptyState');
const overlay    = document.getElementById('modalOverlay');
const modalEl    = document.getElementById('modal');
const modalClose = document.getElementById('modalClose');

// State
let currentType = 'all';
let currentSearch = '';

// ── EMBERS ───────────────────────────────────────────────────
function createEmbers() {
  const container = document.getElementById('embers');
  const colors = ['#ff3a3a','#cc2020','#ff6030','#8b0000','#b44aff','#6a00c8'];
  for (let i = 0; i < 20; i++) {
    const e = document.createElement('div');
    e.className = 'ember';
    const size = 2 + Math.random() * 4;
    const color = colors[Math.floor(Math.random() * colors.length)];
    const left = Math.random() * 100;
    const dx = (Math.random() - 0.5) * 100;
    const duration = 8 + Math.random() * 14;
    const delay = Math.random() * 10;
    e.style.cssText = `
      width:${size}px; height:${size}px;
      left:${left}%;
      background:${color};
      box-shadow: 0 0 ${size * 3}px ${color};
      --dx: ${dx}px;
      animation-duration: ${duration}s;
      animation-delay: -${delay}s;
    `;
    container.appendChild(e);
  }
}

// ── TYPE → color helper ────────────────────────────────────
const TYPE_COLORS = {
  'demônio':   { text:'#ff6060', bg:'rgba(139,0,0,0.3)',   border:'rgba(139,0,0,0.5)',  danger:'rgba(255,60,60,0.8)'  },
  'fantasma':  { text:'#c080ff', bg:'rgba(60,0,100,0.3)',  border:'rgba(100,0,180,0.4)', danger:'rgba(180,80,255,0.8)' },
  'animal':    { text:'#70d080', bg:'rgba(0,80,0,0.3)',    border:'rgba(0,120,0,0.4)',  danger:'rgba(80,200,80,0.8)'  },
  'divino':    { text:'#ffd060', bg:'rgba(120,90,0,0.3)', border:'rgba(180,140,0,0.4)', danger:'rgba(255,200,60,0.8)' },
  'objeto':    { text:'#60b0ff', bg:'rgba(0,60,100,0.3)',  border:'rgba(0,80,160,0.4)', danger:'rgba(80,160,255,0.8)' },
  'humanoide': { text:'#ff80a0', bg:'rgba(100,30,60,0.3)', border:'rgba(150,30,80,0.4)', danger:'rgba(255,120,150,0.8)' },
  'aquático':  { text:'#40d0e0', bg:'rgba(0,70,100,0.3)',  border:'rgba(0,100,140,0.4)', danger:'rgba(50,210,220,0.8)' },
  'natureza':  { text:'#90d060', bg:'rgba(20,60,0,0.3)',   border:'rgba(40,100,0,0.4)', danger:'rgba(130,200,80,0.8)' },
};

// ── BUILD CARDS ──────────────────────────────────────────────
function buildCards(list) {
  grid.innerHTML = '';
  if (list.length === 0) {
    emptyState.style.display = 'block';
    resultsCount.textContent = '0 yokais encontrados';
    return;
  }
  emptyState.style.display = 'none';
  resultsCount.textContent = `${list.length} yokai${list.length > 1 ? 's' : ''} encontrado${list.length > 1 ? 's' : ''}`;

  list.forEach((y, idx) => {
    const tc = TYPE_COLORS[y.type] || TYPE_COLORS['fantasma'];
    const card = document.createElement('div');
    card.className = `yokai-card card-${y.type}`;
    card.style.animationDelay = `${Math.min(idx, 11) * 0.03}s`;
    card.innerHTML = `
      <span class="card-num">#${String(y.id).padStart(3,'0')}</span>
      <span class="card-type type-${y.type}">${y.type.toUpperCase()}</span>
      <div class="card-icon-wrap">
        <div class="card-icon">
          <img src="${y.image}" alt="${y.name}" class="yokai-image">
        </div>
        <div class="card-icon-ring"></div>
      </div>
      <div class="card-name">${y.name}</div>
      <div class="card-desc">${y.desc}</div>
      <div class="card-danger-bar" style="background:${tc.danger}; opacity:${0.15 + (y.danger/5) * 0.35}"></div>
    `;
    card.addEventListener('click', () => openModal(y));
    grid.appendChild(card);
  });
}

// ── FILTER ───────────────────────────────────────────────────
function getFiltered() {
  return YOKAI_DATA.filter(y => {
    const matchType   = currentType === 'all' || y.type === currentType;
    const matchSearch = !currentSearch || y.name.toLowerCase().includes(currentSearch) || y.desc.toLowerCase().includes(currentSearch);
    return matchType && matchSearch;
  });
}

function render() { buildCards(getFiltered()); }

// ── MODAL ────────────────────────────────────────────────────
const JP_GLYPHS = ['妖','怪','鬼','霊','神','龍','蛇','魔','幽','憑'];

function openModal(y) {
  const tc = TYPE_COLORS[y.type] || TYPE_COLORS['fantasma'];

  // Glyph
  document.getElementById('modalGlyph').textContent = JP_GLYPHS[y.id % JP_GLYPHS.length];

  // Badge
  const badge = document.getElementById('modalBadge');
  badge.textContent = `#${String(y.id).padStart(3,'0')} — ${y.type.toUpperCase()}`;
  badge.style.cssText = `background:${tc.bg}; color:${tc.text}; border:1px solid ${tc.border}; font-size:10px; letter-spacing:2px; font-family:var(--font-jp); padding:3px 12px; border-radius:12px;`;

  document.getElementById('modalName').textContent = y.name;
  document.getElementById('modalJp').textContent   = y.jp;
  document.getElementById('modalIcon').innerHTML = `<img src="${y.image}" alt="${y.name}" class="yokai-image">`;

  // Type
  const typeVal = document.getElementById('modalType');
  typeVal.textContent = y.type;
  typeVal.className = `modal-type-val type-${y.type}`;

  // Danger
  const dangerEl = document.getElementById('modalDanger');
  dangerEl.innerHTML = '';
  for (let i = 1; i <= 5; i++) {
    const d = document.createElement('div');
    d.className = 'danger-dot' + (i <= y.danger ? ' active' : '');
    if (i <= y.danger) d.style.background = tc.text;
    dangerEl.appendChild(d);
  }

  document.getElementById('modalDesc').textContent = y.desc;
  document.getElementById('modalLore').textContent = y.lore;

  // Stats
  const stats = [
    { label:'ORIGEM', value: y.origin },
    { label:'HABITAT', value: y.habitat },
    { label:'PODER', value: y.poder },
  ];
  ['modalStat1','modalStat2','modalStat3'].forEach((id, i) => {
    document.getElementById(id).innerHTML = `<strong>${stats[i].label}</strong>${stats[i].value}`;
  });

  // Modal icon halo glow
  const iconWrap = document.getElementById('modalIconWrap');
  iconWrap.querySelector('.modal-icon').style.boxShadow = `0 0 40px ${tc.text}33, 0 0 80px ${tc.text}11`;
  iconWrap.querySelector('.modal-halo').style.borderColor = tc.border;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';

  // Sound
  playChime();
}

function closeModal() {
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

// ── CHIME SOUND ──────────────────────────────────────────────
function playChime() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const freqs = [440, 554, 659];
    freqs.forEach((f, i) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(f, ctx.currentTime + i * 0.12);
      gain.gain.setValueAtTime(0, ctx.currentTime + i * 0.12);
      gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + i * 0.12 + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + i * 0.12 + 0.8);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(ctx.currentTime + i * 0.12);
      osc.stop(ctx.currentTime + i * 0.12 + 0.8);
    });
  } catch(e) {}
}

// ── EVENTS ───────────────────────────────────────────────────
filterBtns.addEventListener('click', e => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;
  filterBtns.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentType = btn.dataset.type;
  render();
});

searchIn.addEventListener('input', e => {
  currentSearch = e.target.value.toLowerCase().trim();
  render();
});

modalClose.addEventListener('click', closeModal);
overlay.addEventListener('click', e => {
  if (e.target === overlay) closeModal();
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── INIT ─────────────────────────────────────────────────────
createEmbers();
render();

// Update status count
document.getElementById('statusText').textContent = `${YOKAI_DATA.length} espíritos catalogados`;
