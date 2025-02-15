let currentIndex = 0;
const flashcards = [
    {
        "question": "Qu'est-ce que l'hygiène alimentaire ?",
        "options": [
            "A. Un protocole strict",
            "B. Une cuisine propre",
            "C. Une réglementation",
            "D. Ensemble de bonnes pratiques"
        ],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Pourquoi faut-il respecter l'hygiène alimentaire ?",
        "answer": "Pour éviter les contaminations alimentaires",
        "type": "text"
    },
    {
        "question": "La cuisson élimine tous les micro-organismes.",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "À quelle température doivent être conservés les surgelés ?",
        "options": [
            "A. -10°C",
            "B. -15°C",
            "C. -18°C",
            "D. -25°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Le nettoyage et la désinfection sont identiques.",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle est la température maximale de stockage de la viande crue en chambre froide ?",
        "options": [
            "A. 0°C",
            "B. 3°C",
            "C. 5°C",
            "D. 7°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quels sont les éléments nécessaires au développement des micro-organismes ?",
        "options": [
            "A. Eau",
            "B. Température",
            "C. Nutriments",
            "D. Tous les éléments précédents"
        ],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Quelle est la température optimale de conservation du poisson frais ?",
        "options": [
            "A. 0°C",
            "B. 2°C",
            "C. 4°C",
            "D. 6°C"
        ],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Quels sont les micro-organismes dangereux pouvant être présents dans les aliments ?",
        "answer": "Salmonelles, Staphylocoques, Listeria, Bacillus cereus",
        "type": "text"
    },
    {
        "question": "Quelle est la règle de base de l'hygiène professionnelle ?",
        "answer": "Propreté absolue sur soi-même et dans son travail.",
        "type": "text"
    },
    {
        "question": "Les bactéries se multiplient plus rapidement à température ambiante.",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quelles sont les températures recommandées pour stocker les ovoproduits ?",
        "options": [
            "A. 0°C",
            "B. 2°C",
            "C. 4°C",
            "D. 6°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quelle est la température minimale requise pour cuire les aliments afin de tuer les bactéries ?",
        "options": [
            "A. 50°C",
            "B. 60°C",
            "C. 70°C",
            "D. 80°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quels sont les moyens de prévention des contaminations alimentaires en cuisine ?",
        "answer": "Lavage des mains, séparation des aliments crus et cuits, respect de la chaîne du froid.",
        "type": "text"
    },
    {
        "question": "Un poisson frais a des yeux brillants et bombés.",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Pourquoi est-il important de bien étiqueter les aliments en cuisine ?",
        "answer": "Pour assurer une traçabilité et éviter les erreurs de consommation.",
        "type": "text"
    },
    {
        "question": "Quels aliments nécessitent un stockage à -18°C ?",
        "answer": "Les produits surgelés",
        "type": "text"
    },
    {
        "question": "Le lait et les produits laitiers doivent être stockés à 10°C.",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Pourquoi est-il important de nettoyer et désinfecter régulièrement les surfaces de travail en cuisine ?",
        "answer": "Pour éviter la contamination croisée et garantir l'hygiène des aliments.",
        "type": "text"
    },
    {
        "question": "À quelle température doit-on maintenir un congélateur pour garantir la sécurité des aliments ?",
        "options": [
            "A. -10°C",
            "B. -15°C",
            "C. -18°C",
            "D. -25°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Qu'est-ce que l'autocontrôle en hygiène alimentaire ?",
        "options": [
            "A. Un audit externe",
            "B. Une réglementation stricte",
            "C. Une vérification interne",
            "D. Une formation obligatoire"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Pourquoi est-il important de respecter les prescriptions d'hygiène en restauration ?",
        "answer": "Pour garantir la sécurité alimentaire et éviter les contaminations.",
        "type": "text"
    },
    {
        "question": "Les équipements de cuisine doivent être nettoyés et désinfectés régulièrement.",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quelle est la température maximale de stockage de la viande hachée ?",
        "options": [
            "A. 2°C",
            "B. 5°C",
            "C. 8°C",
            "D. 10°C"
        ],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Est-il autorisé de recongeler un aliment déjà décongelé ?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quels sont les facteurs qui influencent le développement des micro-organismes dans les aliments ?",
        "options": [
            "A. Humidité",
            "B. Température",
            "C. Temps",
            "D. Tous les éléments précédents"
        ],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "À quelle température les aliments doivent-ils être conservés pour éviter la prolifération bactérienne ?",
        "options": [
            "A. -10°C",
            "B. 0°C",
            "C. 4°C",
            "D. 10°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quels sont les micro-organismes dangereux pouvant être présents dans les aliments ?",
        "answer": "Salmonelles, Listeria, Clostridium perfringens, Bacillus cereus.",
        "type": "text"
    },
    {
        "question": "Quelles sont les cinq clés principales de l'hygiène alimentaire ?",
        "answer": "Propreté, séparation des aliments crus et cuits, cuisson suffisante, conservation à bonne température, utilisation d'eau et de matières premières sûres.",
        "type": "text"
    },
    {
        "question": "Les personnes malades doivent-elles manipuler des aliments en cuisine ?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quels sont les dangers d'un non-respect de la chaîne du froid ?",
        "answer": "Prolifération bactérienne, intoxications alimentaires.",
        "type": "text"
    },
    {
        "question": "Quelle est la température minimale requise pour la cuisson des viandes afin de garantir leur sécurité ?",
        "options": [
            "A. 50°C",
            "B. 60°C",
            "C. 70°C",
            "D. 80°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "À quelle fréquence doit-on vérifier l'efficacité des appareils de mesure en cuisine ?",
        "answer": "À intervalles prédéfinis et régulièrement.",
        "type": "text"
    },
    {
        "question": "L’eau chaude est essentielle pour le nettoyage et la désinfection des équipements.",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quelles sont les obligations en matière de transport des denrées alimentaires ?",
        "answer": "Les aliments chauds doivent être transportés à plus de 65°C et les aliments périssables à moins de 5°C.",
        "type": "text"
    },
    {
        "question": "Pourquoi est-il interdit de stocker les denrées alimentaires à même le sol ?",
        "answer": "Pour éviter la contamination et garantir une bonne hygiène.",
        "type": "text"
    },
    {
        "question": "Les buffets en libre-service doivent-ils être protégés contre les expectorations ?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quel est l'objectif principal du guide BPHR ?",
        "answer": "Garantir la sécurité alimentaire et aider à la mise en œuvre de l'autocontrôle.",
        "type": "text"
    },
    {
        "question": "Quelles informations doivent figurer sur l’étiquette des denrées alimentaires emballées en cuisine ?",
        "answer": "Date de fabrication, date limite de consommation, ingrédients allergènes, température de conservation.",
        "type": "text"
    },
    {
        "question": "Peut-on servir du lait cru directement aux clients en restauration ?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quel est le but de la loi sur les denrées alimentaires?",
        "answer": "Assurer la sécurité des consommateurs en garantissant la qualité et l'hygiène des denrées alimentaires.",
        "type": "text"
    },
    {
        "question": "Citez le précepte essentiel de l'hygiène dans la restauration.",
        "answer": "Respecter les bonnes pratiques d'hygiène pour éviter la contamination des aliments.",
        "type": "text"
    },
    {
        "question": "Veuillez expliquer la définition de la chaîne du froid.",
        "answer": "Maintenir les aliments à des températures adéquates pour éviter leur détérioration et la prolifération des bactéries.",
        "type": "text"
    },
    {
        "question": "Comment détruit-on les micro-organismes en cuisine ?",
        "options": [
            "A. Par réfrigération",
            "B. Par la cuisson",
            "C. Par la congélation",
            "D. Par la ventilation"
        ],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Citez deux aliments facilement altérables.",
        "answer": "Poisson et produits laitiers.",
        "type": "text"
    },
    {
        "question": "Sur quels produits trouve-t-on la salmonelle ?",
        "answer": "Viandes crues et œufs.",
        "type": "text"
    },
    {
        "question": "Citez la marche à suivre pour le nettoyage d'un plan de travail.",
        "answer": "Nettoyer avec un détergent, rincer à l'eau claire, appliquer un désinfectant et sécher avec un chiffon propre.",
        "type": "text"
    },
    {
        "question": "À quelle température le nettoyage des installations à l'eau est optimal?",
        "options": [
            "A. 30°C",
            "B. 50°C",
            "C. 60°C",
            "D. 80°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Que veut dire le terme désinfecter en cuisine ?",
        "answer": "Éliminer les micro-organismes pathogènes présents sur les surfaces de travail.",
        "type": "text"
    },
    {
        "question": "Citez 4 appareils utilisés en cuisine, qu'il est recommandé de nettoyer régulièrement.",
        "answer": "Réfrigérateur, four, trancheuse, mixeur.",
        "type": "text"
    },
    
    {
        "question": "Comment doit-on garder des aliments au congélateur ?",
        "answer": "Dans des contenants hermétiques, avec une étiquette indiquant la date de congélation.",
        "type": "text"
    },
    {
        "question": "Pour la remise à température d'un produit, différents points sont à respecter, veuillez en citer deux.",
        "answer": "Respecter la température cible et éviter les variations brusques de température.",
        "type": "text"
    },
    {
        "question": "Citez 4 points qui doivent figurer sur un bulletin de livraison.",
        "answer": "Nom du fournisseur, date de livraison, température des produits, quantité reçue.",
        "type": "text"
    },
    {
        "question": "Que doit-on contrôler lors de la réception d'un poisson frais?",
        "answer": "Odeur, texture, brillance des yeux.",
        "type": "text"
    },
    {
        "question": "Quels sont les différents critères à considérer lors de l'achat de marchandises food ?",
        "answer": "Qualité, fraîcheur, origine.",
        "type": "text"
    },
    {
        "question": "Le tri des déchets inclut différentes catégories. Quelles sont-elles ?",
        "answer": "Déchets organiques, plastiques, papiers/cartons, verre.",
        "type": "text"
    },
    {
        "question": "La cuisson élimine tous les micro-organismes.",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "À quelle température doivent être conservés les surgelés ?",
        "options": [
            "A. -10°C",
            "B. -15°C",
            "C. -18°C",
            "D. -25°C"
        ],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Le nettoyage et la désinfection sont identiques.",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quel est le rôle du responsable de l'entreprise vis-à-vis de ses collaborateurs en matière d'hygiène?",
        "answer": "Former ses collaborateurs afin qu'ils connaissent les bases légales et les appliquent.",
        "type": "text"
    },
    {
        "question": "L'hygiène se divise en 4 domaines spécifiques, veuillez en citer 2.",
        "answer": "Hygiène alimentaire, hygiène vétérinaire, hygiène corporelle, hygiène de vie.",
        "type": "text"
    },
    {
        "question": "Quelle est la différence entre la sécurité des aliments (food safety) et la sécurité alimentaire (food security) ?",
        "answer": "Food safety : l'assurance que les aliments une fois préparés ne causeront pas de dommage au consommateur. Food security : sécurité des approvisionnements alimentaires en quantité et en qualité.",
        "type": "text"
    },
    {
        "question": "Quels sont 4 objets usuels derrière le bar nécessitant une hygiène irréprochable ?",
        "answer": "Lave-vaisselle, machine à glaçons, presse-agrumes, machine à café.",
        "type": "text"
    },
    {
        "question": "Quels sont 4 objets usuels en salle nécessitant une hygiène irréprochable ?",
        "answer": "Assiettes, couverts, pochette facture, carte des mets & vins.",
        "type": "text"
    },
    {
        "question": "Quels sont les recommandations en matière d'hygiène à appliquer derrière le bar ?",
        "answer": "Nettoyage du réfrigérateur une fois par semaine avec eau tiède et vinaigre blanc, éviter les nettoyants chimiques des grandes surfaces, chaque aliment doit être rangé à un endroit précis.",
        "type": "text"
    },
    {
        "question": "Est-il recommandé de recongeler un aliment décongelé ?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle matière est non recommandée pour les ustensiles et matériel de bar et pourquoi ?",
        "answer": "Le bois, car ses pores permettent aux microbes de s'y nicher.",
        "type": "text"
    },
    {
        "question": "Quelle précaution faut-il appliquer après utilisation de la crème fraiche en cocktail ?",
        "answer": "Replacer immédiatement la crème au réfrigérateur.",
        "type": "text"
    },
    {
        "question": "Où et de quelle manière doivent être stockés les œufs ?",
        "answer": "Au bas de la chambre froide, en hauteur avec la tête de l'œuf vers le haut.",
        "type": "text"
    },
    {
        "question": "Citez 4 endroits où l'hygiène est primordiale dans un établissement.",
        "answer": "Murs, plafonds, portes, plan de travail.",
        "type": "text"
    },
    {
        "question": "Quels équipements doivent être présents dans les pièces de transformation des denrées alimentaires ?",
        "answer": "Lavabos avec eau chaude et froide, distributeur de savon liquide, essuie-mains en rouleaux ou serviettes jetables.",
        "type": "text"
    },
    {
        "question": "Quelle est la température recommandée du chauffe-eau pour éviter la contamination du circuit d'eau chaude ?",
        "options": ["A. 50°C", "B. 55°C", "C. 60°C", "D. 65°C"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Citez deux instruments de mesure et de contrôle en cuisine et leur utilité.",
        "answer": "Balance pour mesurer le poids des aliments, thermomètre pour vérifier les températures de cuisson et de conservation.",
        "type": "text"
    },
    {
        "question": "Quel est le but de la désinfection ?",
        "answer": "Détruire les micro-organismes.",
        "type": "text"
    },
    {
        "question": "Quel dispositif doit équiper les buffets en libre-service ?",
        "answer": "Un dispositif de protection contre les expectorations.",
        "type": "text"
    },
    {
        "question": "Quels sont les précautions à appliquer lorsque des aliments sont présentés en vrac à l'extérieur ?",
        "answer": "Protéger des insectes et nuisibles, protéger de la contamination avec des couvercles, contrôler la température.",
        "type": "text"
    },
    {
        "question": "Quelle est la différence entre les installations 'postmix' et 'premix' ?",
        "answer": "Postmix : boissons livrées en fûts sous forme de concentré. Premix : boissons livrées en fûts prêtes à l'emploi.",
        "type": "text"
    },
    {
        "question": "Quelle est la température recommandée pour maintenir des plats au chaud (bain-marie) ?",
        "options": ["A. 50°C", "B. 60°C", "C. 65°C", "D. 70°C"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quels sont les 3 points spécifiques à mentionner sur les cartes des mets & boissons ?",
        "answer": "Carte des mets : nom de la denrée alimentaire, prix. Carte des boissons : quantité lors du débit en vrac, prix.",
        "type": "text"
    },
    {
        "question": "Quelle mention doit figurer sur la carte des mets lorsqu'une denrée alimentaire a été génétiquement modifiée ?",
        "answer": "Produit à partir de … (nom de la denrée alimentaire).",
        "type": "text"
    }

]
const shuffledFlashcards = flashcards.sort(() => Math.random() - 0.5);
const flashcard = document.getElementById('flashcard');
const booleanButtons = document.getElementById('boolean-buttons');
const mcqButtons = document.getElementById('mcq-buttons');
const progressBar = document.getElementById('progress-bar');

function updateCard() {
    const currentCard = shuffledFlashcards[currentIndex];
    flashcard.textContent = currentCard.question;
    flashcard.classList.remove('correct', 'incorrect');
    booleanButtons.style.display = currentCard.type === "boolean" ? 'flex' : 'none';
    mcqButtons.style.display = currentCard.type === "mcq" ? 'flex' : 'none';
    mcqButtons.innerHTML = "";
    
    if (currentCard.type === "mcq") {
        currentCard.options.forEach(option => {
            const btn = document.createElement("button");
            btn.textContent = option;
            btn.classList.add("nav-button");
            btn.onclick = () => checkMCQAnswer(option);
            mcqButtons.appendChild(btn);
        });
    }
    updateProgressBar();
}

function flipCard() {
    const currentCard = shuffledFlashcards[currentIndex];
    flashcard.textContent = flashcard.textContent === currentCard.question ? currentCard.answer : currentCard.question;
}

function checkAnswer(userAnswer) {
    const currentCard = shuffledFlashcards[currentIndex];
    flashcard.classList.add(userAnswer === currentCard.answer ? 'correct' : 'incorrect');
    setTimeout(nextCard, 1000);
}

function checkMCQAnswer(userAnswer) {
    const currentCard = shuffledFlashcards[currentIndex];
    flashcard.classList.add(userAnswer.startsWith(currentCard.answer) ? 'correct' : 'incorrect');
    setTimeout(nextCard, 1000);
}

function nextCard() {
    currentIndex = (currentIndex + 1) % shuffledFlashcards.length;
    updateCard();
}

function prevCard() {
    currentIndex = (currentIndex - 1 + shuffledFlashcards.length) % shuffledFlashcards.length;
    updateCard();
}

function updateProgressBar() {
    const progress = ((currentIndex + 1) / shuffledFlashcards.length) * 100;
    progressBar.style.width = progress + "%";
}

updateCard();
