const consomableCat = [
    {
        categorie:"Medicale",
    },
    {
        categorie: "Stimulant"
    },
    {
        categorie: "Armement"
    }
]

const armeCat = [
    {
        categorie:"Blasteur",
    },
    {
        categorie: "Sabre Laser"
    },
    {
        categorie: "Mandalorien"
    }
]

const armureCat = [
    {
        categorie: "Armure Simple"
    },
    {
        categorie: "Armure Intermédiare"
    },
    {
        categorie: "Armure Lourde"
    }
]

const cristauCat = [
    {
        categorie: "Sabre"
    },
    {
        categorie: "Blaster"
    }
]

const modificateurCat = [
    {
        categorie: "Armure"
    },
    {
        categorie: "Arme"
    }
]

const consomableList = [
    {
        nom: "Médipacs standard",
        detail: "1 D4",
        prix: 20,
        image: "Ressource/Image/Shop/consomable/Medipac_Stand.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Medicale"
    },
    {
        nom: "Médipacs intermédiare",
        detail: "1 D8",
        prix: 40,
        image: "Ressource/Image/Shop/consomable/Medipac_Int.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Medicale"
    },
    {
        nom: "Médipacs Anvancé",
        detail: "1 D10",
        prix: 200,
        image: "Ressource/Image/Shop/consomable/Medipac_Av.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Medicale"
    },
    {
        nom: "Médipacs Supérieur",
        detail: "1 D20",
        prix: 600,
        image: "Ressource/Image/Shop/consomable/Medipac_Sup.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Medicale"
    },
    {
        nom: "Médipacs Exceptionnel",
        detail: "1 D100",
        prix: 1500,
        image: "Ressource/Image/Shop/consomable/Medipac_Excep.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Medicale"
    },
    {
        nom: "Force",
        detail: "plus 2 au mod pour 5 tours",
        prix: 300,
        image: "Ressource/Image/Shop/consomable/Force.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Stimulant"
    },
    {
        nom: "Dextérité",
        detail: "plus 2 au mod pour 5 tours",
        prix: 300,
        image: "Ressource/Image/Shop/consomable/Dexterite.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Stimulant"
    },
    {
        nom: "Dégât",
        detail: "plus 4 dégât pour 5 tours",
        prix: 500,
        image: "Ressource/Image/Shop/consomable/Degat.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Stimulant"
    },
    {
        nom: "Précision",
        detail: "plus 5 à l’initative pour 2 tours",
        prix: 750,
        image: "Ressource/Image/Shop/consomable/Precision.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Stimulant"
    },
    {
        nom: "Perception",
        detail: "plus 1 D6 au jet de perception",
        prix: 750,
        image: "Ressource/Image/Shop/consomable/Perception.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Stimulant"
    },
    {
        nom: "Couteau de l’ancer",
        detail: "1 D6 dégâts plus Mod dex",
        prix: 100,
        image: "Ressource/Image/Shop/consomable/Couteau_lancer.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armement"
    },
    {
        nom: "papillon mandalorien x10",
        detail: "envoi 5 papillons pour 2 D6 dégât",
        prix: 250,
        image: "Ressource/Image/Shop/consomable/Papillon.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armement"
    },
    {
        nom: "lance cable",
        detail: "envoi un cable pour s’accrocher au paroit",
        prix: 1000,
        image: "Ressource/Image/Shop/consomable/Lance_Cable.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armement"
    },
    {
        nom: "grenade fragmentation x5",
        detail: "1 D10 dégâts",
        prix: 300,
        image: "Ressource/Image/Shop/consomable/Grenade_Frag.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armement"
    },
    {
        nom: "grenade flash x5",
        detail: "eblouis l’ennemi pour 2 Tours",
        prix: 300,
        image: "Ressource/Image/Shop/consomable/Grenade_Flash.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armement"
    },
]

const vaisseau = [
    {
        nom: "Atelier de modification droïde",
        detail: "Permet d’intégrer des modificateurs de type armure à un droïde ( le nombre de modificateur et le MoD Tech /2 )",
        prix: 40000,
        image: "Ressource/Image/Shop/Vaisseau/Atelier_Robot.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png"
    },
    {
        nom: "Atelier de modification Armure",
        detail: "Permet d’intégrer des modificateurs de type armure",
        prix: 40000,
        image: "Ressource/Image/Shop/Vaisseau/Atelier.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png"
    },
    {
        nom: "Atelier de modification Arme",
        detail: "Permet d’intégrer des modificateurs de type arme",
        prix: 40000,
        image: "Ressource/Image/Shop/Vaisseau/Atelier.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png"
    },
    {
        nom: "Atelier d’alchimie soin",
        detail: "Permet de créer des medipacks par recette",
        prix: 100000,
        image: "Ressource/Image/Shop/Vaisseau/Atelier_Alchimie.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png"
    },
    {
        nom: "Atelier d’alchimie sith",
        detail: "Permet de créer des monstruosités sith",
        prix: 100000,
        image: "Ressource/Image/Shop/Vaisseau/Atelier_Alchimie.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png"
    },
]

const armeList = [
    {
        nom: "Blaster simple (2 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 2000,
        image: "Ressource/Image/Shop/Armes/Blaster_Simple.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blasteur"
    },
    {
        nom: "Fusil Blaster (2 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 4000,
        image: "Ressource/Image/Shop/Armes/Fusil_Blaster.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blasteur"
    },
    {
        nom: "Sniper Blaster (2 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 4000,
        image: "Ressource/Image/Shop/Armes/Fusil_Sniper_Blaster.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blasteur"
    },
    {
        nom: "Poignée simple (4 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 3000,
        image: "Ressource/Image/Shop/Armes/Poignet_Simple.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre Laser"
    },
    {
        nom: "Poignée double (4 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 3000,
        image: "Ressource/Image/Shop/Armes/Poignet_Double.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre Laser"
    },
    {
        nom: "Évacuateur d’énergie",
        detail: "évite la surchauffe du sabre",
        prix: 1000,
        image: "Ressource/Image/Shop/Armes/Évacuateur_d’énergie.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre Laser"
    },
    {
        nom: "Lanceur flechette papillon ( 2 modificateurs possible )",
        detail: "dégât en fonction des flechettes papillon",
        prix: 2000,
        image: "Ressource/Image/Shop/Armes/Lanceur_flechette.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Mandalorien"
    },
    {
        nom: "viro-couteau en beskar (2 modificateurs)",
        detail: "Ce référer au doc création section arme",
        prix: 6000,
        image: "Ressource/Image/Shop/Armes/VibroCouteau.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Mandalorien"
    },
    {
        nom: "Lance flamme",
        detail: "1 D8 plus 10 brûlure",
        prix: 4000,
        image: "Ressource/Image/Shop/Armes/Lance_flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Mandalorien"
    },
]

const armureList = [
    {
        nom: "Armure de cuir simple avec protection en alliage légée",
        detail: "Protection de 5 ( réduction de 1 de dégât)",
        prix: 2000,
        image: "Ressource/Image/Shop/Armures/Armure_Cuir.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Simple"
    },
    {
        nom: "Armure de tissu, cuir et alliage légée",
        detail: "Protection de 5 ( réduction de 1 de dégât)",
        prix: 2000,
        image: "Ressource/Image/Shop/Armures/Armure_tissu.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Simple"
    },
    {
        nom: "Armure du voyageur en cuir et alliage légée ( 4 modificateurs possible )",
        detail: "Protection de 10 ( réduction de 2 de dégât)",
        prix: 10000,
        image: "Ressource/Image/Shop/Armures/Armure_Voyage.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Intermédiare"
    },
    {
        nom: "Armure base mandalorien ( 4 modificateurs possible )",
        detail: "Protection de 10 ( réduction de 2 de dégât)",
        prix: 10000,
        image: "Ressource/Image/Shop/Armures/Armure_Mando.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Intermédiare"
    },
    {
        nom: "Armure de combat de manipulateur de la force ( 4 modificateurs possible )",
        detail: "Protection de 10 ( réduction de 2 de dégât)",
        prix: 10000,
        image: "Ressource/Image/Shop/Armures/Armure_Manipulateur_Force.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Intermédiare"
    },
    {
        nom: "Armure de soldat en alliage renforcée ( 8 modificateurs possible )",
        detail: "Protection de 20 ( réduction de 4 de dégât)",
        prix: 50000,
        image: "Ressource/Image/Shop/Armures/Armure_Soldat.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Lourde"
    },
    {
        nom: "Armure De guerrier sith ( 8 modificateurs possible )",
        detail: "Protection de 20 ( réduction de 4 de dégât)",
        prix: 50000,
        image: "Ressource/Image/Shop/Armures/Armure_Guerrier_Sith.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Lourde"
    },
    {
        nom: "Armure de mercenaire en alliage renforcée ( 8 modificateurs possible )",
        detail: "Protection de 20 ( réduction de 4 de dégât)",
        prix: 50000,
        image: "Ressource/Image/Shop/Armures/Armure_Mercenaire.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure Lourde"
    },
]

const Cristaux = [
    {
        nom: "cristal bleu",
        detail: "plus 2 de dégât de sabre",
        prix: 2500,
        image: "Ressource/Image/Shop/Cristaux/cristal_bleu.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal vert",
        detail: "plus 2 de dégât de sabre",
        prix: 2500,
        image: "Ressource/Image/Shop/Cristaux/cristal_vert.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal violet",
        detail: "plus 2 de dextérité",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_violet.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal jaune",
        detail: "plus 2 de dextérité",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_jaune.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal orange",
        detail: "plus 4 dégât de feu",
        prix: 6500,
        image: "Ressource/Image/Shop/Cristaux/cristal_orange.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal cyan",
        detail: "plus 4 de dégât de sabre",
        prix: 5000,
        image: "Ressource/Image/Shop/Cristaux/cristal_cyan.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal magenta",
        detail: "plus 2 de charisme",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_Magenta.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal rouge",
        detail: "plus 4 de dégât de sabre",
        prix: 5000,
        image: "Ressource/Image/Shop/Cristaux/cristal_rouge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal blanc",
        detail: "plus 8 de dégât de sabre",
        prix: 15000,
        image: "Ressource/Image/Shop/Cristaux/cristal_blanc.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal noir",
        detail: "plus 8 de dégât de sabre",
        prix: 15000,
        image: "Ressource/Image/Shop/Cristaux/cristal_noir.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal blanc et jaune-orange",
        detail: "plus 10 de dégât de sabre",
        prix: 30000,
        image: "Ressource/Image/Shop/Cristaux/cristal_blanc_jaune_orange.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal noir et rouge bordeaux",
        detail: "plus 10 de dégât de sabre",
        prix: 30000,
        image: "Ressource/Image/Shop/Cristaux/cristal_noir_rouge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Sabre"
    },
    {
        nom: "cristal bleu",
        detail: "plus 2 de dégât",
        prix: 2500,
        image: "Ressource/Image/Shop/Cristaux/cristal_bleu.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal vert",
        detail: "plus 2 de dégât",
        prix: 2500,
        image: "Ressource/Image/Shop/Cristaux/cristal_vert.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal violet",
        detail: "plus 2 de precision",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_violet.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal jaune",
        detail: "plus 4 de dégât",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_jaune.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal orange",
        detail: "plus 4 dégât de feu",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_orange.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal cyan",
        detail: "plus 4 de dextérité",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_cyan.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal magenta",
        detail: "plus 2 de charisme",
        prix: 4500,
        image: "Ressource/Image/Shop/Cristaux/cristal_Magenta.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal rouge",
        detail: "plus 2 de dégât",
        prix: 2500,
        image: "Ressource/Image/Shop/Cristaux/cristal_rouge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
    {
        nom: "cristal blanc",
        detail: "plus 10 de dégât",
        prix: 9500,
        image: "Ressource/Image/Shop/Cristaux/cristal_blanc.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Blaster"
    },
]

const modificateurList = [
    {
        nom: "Résistance froid standard",
        detail: "moins 2 dégât froid résistance au froid",
        prix: 500,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance froid intermédiaire",
        detail: "moins 4 dégât froid résistance au froid",
        prix: 1500,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance froid supérieur",
        detail: "moins 8 dégât froid résistance au froid",
        prix: 3500,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance feu standard",
        detail: "moins 2 dégât feu résistance au feu",
        prix: 500,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance feu intermédiaire",
        detail: "moins 4 dégât feu résistance au feu",
        prix: 1500,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance feu supérieur",
        detail: "moins 8 dégât feu résistance au feu",
        prix: 3500,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance poison standard",
        detail: "moins 2 dégât poison résistance poison",
        prix: 500,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance poison intermédiaire",
        detail: "moins 4 dégât poison résistance poison",
        prix: 1500,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Résistance poison supérieur",
        detail: "moins 8 dégât poison résistance poison",
        prix: 3500,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Renforcement armure standard",
        detail: "plus 5 en armure",
        prix: 1500,
        image: "Ressource/Image/Shop/Modificateurs/Armure_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Renforcement armure intermédiaire",
        detail: "plus 15 en armure",
        prix: 2500,
        image: "Ressource/Image/Shop/Modificateurs/Armure_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "Renforcement armure supérieur",
        detail: "plus 25 en armure",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Armure_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Armure"
    },
    {
        nom: "dégât standard",
        detail: "dégât plus 1 D6",
        prix: 1500,
        image: "Ressource/Image/Shop/Modificateurs/Degat_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât intermédiaire",
        detail: "dégât plus 1 D8",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Degat_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât supérieur",
        detail: "dégât plus 1 D10",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Degat_plus.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "égât feu standard",
        detail: "plus 2 de brûlure",
        prix: 1000,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât feu intermédiaire",
        detail: "plus 4 de brûlure",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât feu supérieur",
        detail: "plus 6 de brûlure",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Flamme.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât froid standard",
        detail: "plus 5 de gelure",
        prix: 1000,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât froid intermédiair",
        detail: "plus 10 de gelure",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât froid supérieur",
        detail: "plus 20 de gelure",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Froid.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât poison standard",
        detail: "plus 2 de empoisonner",
        prix: 1000,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât poison intermédiaire",
        detail: "plus 4 de empoisonner",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât poison supérieur",
        detail: "plus 6 de empoisonner",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Poison.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât electric standard",
        detail: "plus 5 de paralysie",
        prix: 1000,
        image: "Ressource/Image/Shop/Modificateurs/Electrique.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât electric intermédiaire",
        detail: "plus 10 de paralysie",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Electrique.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "dégât electric supérieur",
        detail: "plus 20 de paralysie",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Electrique.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "surcharge crystaux standard",
        detail: "plus 2 dégâts",
        prix: 1000,
        image: "Ressource/Image/Shop/Modificateurs/Surcharge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "surcharge crystaux intermédiaire",
        detail: "plus 4 dégâts",
        prix: 4500,
        image: "Ressource/Image/Shop/Modificateurs/Surcharge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
    {
        nom: "surcharge crystaux supérieur",
        detail: "plus 8 dégâts",
        prix: 8000,
        image: "Ressource/Image/Shop/Modificateurs/Surcharge.jpg",
        imgCredit: "Ressource/Image/Picto/Picto_Credit.png",
        categorie: "Arme"
    },
]

