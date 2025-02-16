let currentIndex = 0;
const part1 = [
    {
        "question": "Quel est l'âge minimum légal pour travailler en Suisse?",
        "options": ["A. 13 ans", "B. 14 ans", "C. 15 ans", "D. 16 ans"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quel est le nombre maximal d'heures de travail pour un jeune de plus de 13 ans scolarisé pendant les vacances?",
        "options": ["A. 30 heures/semaine", "B. 35 heures/semaine", "C. 40 heures/semaine", "D. 45 heures/semaine"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Les jeunes de moins de 16 ans peuvent-ils travailler la nuit ou le dimanche?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle est la durée maximale du travail hebdomadaire pour un employé dans une entreprise industrielle?",
        "options": ["A. 40 heures", "B. 42 heures", "C. 45 heures", "D. 50 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quels sont les critères pris en compte pour la protection de la santé des travailleurs?",
        "answer": "Les conditions ergonomiques, les influences physiques, chimiques ou biologiques, ainsi que l'organisation du travail.",
        "type": "text"
    },
    {
        "question": "Un employeur peut-il obliger un travailleur à consommer de l'alcool ou des substances psychotropes?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Combien de dimanches de congé un employé doit-il avoir par an au minimum?",
        "options": ["A. 6", "B. 8", "C. 10", "D. 12"],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Quel est le délai minimal de repos quotidien pour un employé?",
        "options": ["A. 8 heures", "B. 10 heures", "C. 11 heures", "D. 12 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quelle est la durée minimale de pause pour une journée de travail supérieure à 7 heures?",
        "options": ["A. 15 minutes", "B. 30 minutes", "C. 45 minutes", "D. 1 heure"],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Un employeur est-il tenu d’informer les travailleurs des risques liés à leur activité?",
        "answer": true,
        "type": "boolean"
    }
]
const part2 = [
    {
        "question": "Quel est l’âge minimum pour travailler dans un restaurant ou un café en Suisse?",
        "options": ["A. 14 ans", "B. 15 ans", "C. 16 ans", "D. 18 ans"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quelle est la limite maximale d’heures de travail par jour pour un jeune travailleur de moins de 18 ans?",
        "options": ["A. 7 heures", "B. 8 heures", "C. 9 heures", "D. 10 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Un employé peut-il refuser de travailler la nuit pour des raisons de santé?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Combien d’heures supplémentaires peuvent être effectuées par an pour les employés ayant une durée maximale de travail hebdomadaire de 45 heures?",
        "options": ["A. 100 heures", "B. 140 heures", "C. 170 heures", "D. 200 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Les pauses de plus de 30 minutes peuvent-elles être fractionnées?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quelle est la durée maximale du travail de nuit autorisée, pauses incluses?",
        "options": ["A. 8 heures", "B. 9 heures", "C. 10 heures", "D. 11 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quelle compensation est prévue pour un travailleur effectuant du travail de nuit à titre régulier?",
        "options": ["A. 5% de temps de repos compensatoire", "B. 10% de temps de repos compensatoire", "C. 15% de majoration salariale", "D. 25% de majoration salariale"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Combien de dimanches de congé minimum un travailleur doit-il avoir si son entreprise fonctionne en continu?",
        "options": ["A. 4", "B. 6", "C. 8", "D. 12"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Les employeurs doivent-ils informer et consulter les employés sur l'organisation du temps de travail?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Combien de jours de congé pour des événements familiaux spécifiques (mariage, décès, déménagement) peuvent être accordés aux employés?",
        "options": ["A. 1 jour", "B. 2 jours", "C. 3 jours", "D. 5 jours"],
        "answer": "C",
        "type": "mcq"
    }
]

const part3 = [
    {
        "question": "Un employeur peut-il surveiller les travailleurs à leur poste de travail avec des caméras pour évaluer leur comportement?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle est la durée minimale de repos quotidien pour les jeunes travailleurs de moins de 18 ans?",
        "options": ["A. 8 heures", "B. 10 heures", "C. 11 heures", "D. 12 heures"],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Dans quels cas un employé peut-il effectuer un travail supplémentaire dépassant la durée maximale de travail hebdomadaire?",
        "options": ["A. Sur demande de l'employeur sans justification", "B. En cas d'urgence ou de surcroît extraordinaire de travail", "C. Pour remplacer un collègue absent", "D. Lorsque l'employeur offre une prime"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Les femmes enceintes peuvent-elles être obligées de travailler entre 20h et 6h pendant les 8 semaines avant leur accouchement?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle compensation est prévue pour un employé effectuant un travail supplémentaire?",
        "options": ["A. 10% de majoration salariale", "B. 15% de majoration salariale", "C. 25% de majoration salariale", "D. 50% de majoration salariale"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quelle est la durée maximale de travail hebdomadaire pour les travailleurs hors entreprises industrielles?",
        "options": ["A. 40 heures", "B. 45 heures", "C. 50 heures", "D. 55 heures"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Un employé travaillant dans une entreprise saisonnière peut-il accumuler des demi-journées de congé?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Combien de jours de congé un employé a-t-il droit au minimum par an?",
        "options": ["A. 2 semaines", "B. 3 semaines", "C. 4 semaines", "D. 5 semaines"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Les travailleurs de nuit doivent-ils passer un examen médical régulier?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Un employeur peut-il fixer l'horaire de travail de jour entre 5h et 24h?",
        "answer": true,
        "type": "boolean"
    }
]

const part4 = [
    {
        "question": "Le contrat de travail existe-t-il uniquement lorsque le travailleur commence à travailler?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quelle est la forme obligatoire d'un contrat de travail?",
        "options": ["A. Écrite", "B. Orale", "C. Aucune forme spécifique", "D. Enregistrée chez un notaire"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "L'employeur peut-il modifier librement le salaire d'un employé si l'entreprise traverse une période difficile?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Que doit faire un employeur s'il licencie une employée enceinte?",
        "options": ["A. Le licenciement est effectif immédiatement", "B. Il doit attendre la fin du congé maternité", "C. Il doit attendre 16 semaines après l'accouchement", "D. Il doit obtenir une autorisation spéciale"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Un employeur peut-il refuser de payer un salarié en cas de fermeture temporaire de l'entreprise pour manque de clients?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quel est le rôle du certificat de travail?",
        "options": ["A. Refléter uniquement les aspects positifs de l'employé", "B. Être un document strictement neutre et factuel", "C. Exprimer l'opinion personnelle de l'employeur", "D. Être facultatif"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Si un employé travaille avec du matériel personnel dans l'entreprise et quitte son poste, ce matériel appartient-il à l'employeur?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quels éléments un employeur peut-il légalement exiger pour un contrat à durée déterminée?",
        "options": ["A. Une période d'essai obligatoire", "B. Une reconduction automatique", "C. Un écrit définissant la durée et les conditions", "D. Un engagement oral"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "L'employeur peut-il retenir des informations sur la vie privée d'un employé sans son consentement?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Combien de temps après un licenciement un employé peut-il réclamer une indemnité pour congé abusif?",
        "options": ["A. 6 mois", "B. 1 an", "C. 2 ans", "D. 5 ans"],
        "answer": "C",
        "type": "mcq"
    }
]

const part5 = [
    {
        "question": "Un employeur peut-il décider seul des jours et heures de congé de son employé?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Si l'employeur annonce une prime de fin d’année, peut-il changer d’avis et ne pas la payer?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quels employés n’ont pas droit aux vacances?",
        "options": ["A. Les employés en contrat à durée déterminée", "B. Les employés temporaires de moins de 3 mois", "C. Les employés à plein temps", "D. Tous les employés ont droit aux vacances"],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Un employeur peut-il exiger qu'un employé utilise son propre matériel pour travailler?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Dans quels cas un employé peut-il réclamer une indemnité pour licenciement abusif?",
        "options": ["A. En cas de licenciement sans raison", "B. Si le licenciement est discriminatoire", "C. Si l'employeur ne respecte pas la procédure", "D. Toutes les réponses sont correctes"],
        "answer": "D",
        "type": "mcq"
    },
    {
        "question": "Si un contrat à durée déterminée arrive à la fin, est-il automatiquement reconduit pour la même durée?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Peut-on conclure un contrat de travail oralement en Suisse?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "L’employeur peut-il obliger un employé à reprendre le travail 4 semaines après son accouchement?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Que doit faire l’employeur s'il souhaite remettre son entreprise à un tiers?",
        "options": ["A. Informer ses employés en temps utile", "B. Informer uniquement l’administration fiscale", "C. Garder l’information confidentielle", "D. Ne rien faire de particulier"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Si un employeur reprend une entreprise en faillite, peut-il changer librement les contrats des employés?",
        "answer": false,
        "type": "boolean"
    }
]

const part6 = [
    {
        "question": "L'employeur peut-il exiger une caution pour du matériel et l'utiliser comme il le souhaite?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Si l’équipe n’a pas assez de travail, l’employeur peut-il réduire un peu le salaire?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Si un employé change de fonction, comment doit-il formaliser cet accord?",
        "options": ["A. Oralement avec l'employeur", "B. Par un accord écrit", "C. Uniquement par une augmentation de salaire", "D. Aucune formalité nécessaire"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Un employeur peut-il choisir librement la caisse de prévoyance professionnelle pour ses employés?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "En cas de licenciement collectif, à quel moment l’employeur doit-il informer les employés?",
        "options": ["A. Avant la décision", "B. Au moment du congé", "C. Après la fin des contrats", "D. Légalement, il n’a pas besoin de les informer"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Un employé peut-il être licencié immédiatement sans motif valable?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Si un employé décède, doit-on encore lui payer son salaire?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Lorsqu'un employé quitte une entreprise, que doit-on faire avec son matériel personnel laissé sur place?",
        "options": ["A. L’employeur peut le garder", "B. Il devient la propriété de l’entreprise", "C. L’employeur doit le restituer à l’employé", "D. Il peut être vendu aux enchères"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Un employé peut-il renoncer à son dernier salaire si l’employeur le convainc?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Si un employé est licencié de manière abusive, combien de temps a-t-il pour réclamer une indemnité?",
        "options": ["A. 6 mois", "B. 1 an", "C. 2 ans", "D. 5 ans"],
        "answer": "C",
        "type": "mcq"
    }
]
const part7 = [
    {
        "question": "Quels textes légaux peuvent concerner le domaine du droit du travail?",
        "answer": "La loi fédérale sur le travail",
        "type": "text"
    },
    {
        "question": "Qu’est-ce qu’une convention collective de travail (CCT) ?",
        "answer": "C'est souvent une convention d'amélioration des lois du travail pour certains domaines.",
        "type": "text"
    },
    {
        "question": "Pouvez-vous donner des exemples de conventions collectives?",
        "answer": "La convention des hôtellerie et restauration, la convention des boulangeries.",
        "type": "text"
    },
    {
        "question": "Quels documents consulter en cas de question de droit du travail (hiérarchie des sources de droit) ?",
        "answer": "Contrat de travail > Règlement d'entreprise > Convention collective (si existante) > Loi sur le travail.",
        "type": "text"
    },
    {
        "question": "Le contrat de travail est-il soumis à une forme spéciale? Quels éléments doit-il comporter?",
        "answer": "Il doit contenir la durée du travail et la définition du travail.",
        "type": "text"
    },
    {
        "question": "Donnez des exemples d’obligations du travailleur.",
        "answer": "Suivre les instructions de sécurité de l'employeur.",
        "type": "text"
    },
    {
        "question": "Quels éléments doivent figurer dans un certificat de travail?",
        "answer": "La définition du travail effectué et la durée du travail.",
        "type": "text"
    },
    {
        "question": "Un employeur peut-il racheter une entreprise et modifier librement les contrats des employés (salaires, périodes d'essai) ?",
        "answer": false,
        "type": "boolean"
    },
    {
        "question": "Quand y a-t-il licenciement collectif et quelle est la procédure à suivre?",
        "answer": "Un licenciement collectif a lieu lorsqu'un minimum de 10 employés sur 100 sont licenciés. L'employeur doit informer les autorités et le service de l'emploi en avance.",
        "type": "text"
    },
    {
        "question": "Les motifs suivants de licenciement sont-ils abusifs? \n- Licencier une collaboratrice qui annonce son mariage. \n- Licencier un employé avant fin novembre pour éviter de payer la prime annuelle. \n- Licencier un employé qui réclame une cinquième semaine de vacances par erreur.",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Quelles sont les 4 périodes pendant lesquelles un collaborateur est protégé contre le licenciement?",
        "answer": "- Période de maternité, accouchement et allaitement \n- Maladie ou accident \n- Service militaire \n- Service à l'étranger",
        "type": "text"
    },
    {
        "question": "Qu’est-ce qu’un juste motif de licenciement selon le Code des Obligations?",
        "answer": "Ce qui est défini dans la loi sur le travail, une convention collective ou un contrat de travail.",
        "type": "text"
    },
    {
        "question": "Un employé peut-il démissionner immédiatement pour un autre emploi mieux rémunéré? L'employeur peut-il demander réparation?",
        "answer": "Oui, l'employeur peut demander un quart du salaire mensuel en réparation.",
        "type": "text"
    },
    {
        "question": "Un employé dont l'entreprise ne paie pas les salaires depuis 2 mois peut-il résilier immédiatement son contrat?",
        "answer": true,
        "type": "boolean"
    },
    {
        "question": "Que devient un contrat de travail en cas de décès de l’employeur ou du travailleur?",
        "answer": "Il n'est plus valide.",
        "type": "text"
    }
]

const part8 = [
    {
        "question": "Depuis le 1er janvier suivant quel anniversaire une personne exerçant une activité lucrative en Suisse est-elle soumise à l’obligation de cotiser à l’AVS/AI/APG ?",
        "options": ["A. 16e anniversaire", "B. 18e anniversaire", "C. 17e anniversaire"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "En cas d’activité lucrative après l’âge de retraite, doit-on continuer de déduire la cotisation AVS/AI/APG ?",
        "options": ["A. Oui, avec possibilité de déduction de la franchise AVS mensuel de CHF 1'400.-", "B. Non", "C. Oui"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Quel est le pourcentage de la cotisation AVS/AI/APG d’un indépendant ?",
        "options": ["A. 9.65%", "B. 10.00%", "C. 8.10%"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Quel est le pourcentage de la cotisation paritaire AVS/AI/APG d’un salarié ?",
        "options": ["A. 10.55%", "B. 8.70%", "C. 10.60%"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Combien d’années au maximum avant l’âge ordinaire de la retraite peut-on demander le versement de la prestation retraite à l’AVS ?",
        "options": ["A. 3 ans", "B. 2 ans", "C. 4 ans"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Quelle indemnité n’est pas soumise à cotisations des charges sociales ?",
        "options": ["A. Les vacances et jours fériés", "B. Le 13e salaire", "C. Les allocations familiales"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quel est le montant du salaire déterminant à l’AVS sur lequel les cotisations ne sont prélevées qu’à la demande de l’assuré ?",
        "options": ["A. CHF 1'890.00", "B. CHF 1'400.00", "C. CHF 2'500.00"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "À quel pourcentage l’indemnité APG est-elle versée à une personne astreinte au service civil, protection civile ou armée, pendant 25 jours au maximum ?",
        "options": ["A. 88%", "B. 100%", "C. 80%"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quel est le montant minimal journalier de l’allocation de base APG ?",
        "options": ["A. CHF 75.00", "B. CHF 69.00", "C. CHF 22.00"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Pendant combien de jours l’allocation de maternité fédérale est-elle versée ?",
        "options": ["A. 98 jours", "B. 100 jours", "C. 78 jours"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "À quel pourcentage est versée l’allocation de maternité fédérale ?",
        "options": ["A. 100%", "B. 80%", "C. 88%"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "L’allocation de maternité fédérale est-elle soumise aux cotisations des charges sociales ?",
        "options": ["A. Oui, sauf l’accident. La LPP doit être calculée sur 100% du salaire", "B. Oui", "C. Non"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "À partir de quand l’allocation de maternité fédérale est-elle versée ?",
        "options": ["A. Dès le jour de l’accouchement", "B. Dès le 3ème jour suivant le jour de l’accouchement", "C. Dès que la mère présente un certificat médical d’incapacité de travail"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Quel est le montant maximal journalier de l’allocation de base APG ?",
        "options": ["A. CHF 102.00", "B. CHF 69.00", "C. CHF 220.00"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Pendant combien de jours ouvrables dure le congé de paternité ?",
        "options": ["A. 7 jours ouvrables", "B. 5 jours ouvrables", "C. 10 jours ouvrables"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "À quel pourcentage du revenu moyen de l’activité lucrative correspond le congé de paternité ?",
        "options": ["A. 100%", "B. 80%", "C. 88%"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Combien d’indemnités journalières sont versées durant le congé de paternité ?",
        "options": ["A. 14 indemnités journalières", "B. 7 indemnités journalières", "C. 5 indemnités journalières"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Quel est le pourcentage de la cotisation paritaire à l’assurance-chômage ?",
        "options": ["A. 1.1%", "B. 1.0%", "C. 2.2%"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "À combien se monte le salaire annuel déterminant sur lequel sont prélevées les cotisations à l’assurance-chômage ?",
        "options": ["A. Aucune limite maximale", "B. CHF 106'800.00", "C. CHF 148'200.00"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "En cas d’activité lucrative après l’âge de retraite, doit-on continuer de déduire la cotisation à l’assurance-chômage ?",
        "options": ["A. Oui, avec déduction de la franchise AVS mensuelle de CHF 1'400.-", "B. Oui", "C. Non"],
        "answer": "C",
        "type": "mcq"
    }
]

const part9 = [
    {
        "question": "Sur quel revenu doit-on déduire la cotisation à l’assurance-chômage ?",
        "options": ["A. Sur le salaire net", "B. Sur le salaire brut AVS", "C. Sur le revenu total (y compris les allocations familiales)"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Selon quelles dispositions les allocations familiales sont-elles réglementées ?",
        "options": ["A. Selon le droit fédéral et les dispositions cantonales", "B. Selon le droit fédéral", "C. Selon le règlement de la caisse d’allocations familiales"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "L’employeur doit-il verser les allocations familiales à son employé.e sans avoir reçu de décision ?",
        "options": ["A. Oui, l’employé(e) doit toucher ses allocations à la fin du mois", "B. Non", "C. L’employeur verse les allocations familiales sur un compte bloqué en attendant la décision"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Les allocations familiales sont-elles soumises à l’impôt à la source ?",
        "options": ["A. Non puisque les allocations familiales sont versées en plus du salaire net", "B. Non", "C. Oui, elles doivent être ajoutées au salaire mensuel brut AVS"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Jusqu’à quel âge les allocations familiales pour enfants sont-elles versées ?",
        "options": ["A. 25 ans révolus", "B. 16 ans révolus", "C. 18 ans révolus"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Jusqu’à quel âge les allocations de formation professionnelle sont-elles versées ?",
        "options": ["A. 20 ans révolus", "B. Jusqu’à la fin de la formation, mais au maximum jusqu’au 25e anniversaire", "C. Jusqu’à la fin de la formation"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Qui prend en charge la cotisation à la caisse d’allocations familiales ?",
        "options": ["A. L’employé", "B. L’employé et l’employeur", "C. L’employeur"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Quel est le revenu annuel minimum AVS donnant droit aux allocations familiales ?",
        "options": ["A. CHF 2'143.75", "B. CHF 7'350.00", "C. CHF 12'350.00"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Depuis le 1er janvier suivant quel anniversaire, une personne salariée doit-elle cotiser au 2ème pilier ?",
        "options": ["A. 17 ans", "B. 16 ans", "C. 18 ans"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Jusqu’au 31 décembre de quel anniversaire, une personne salariée est-elle soumise uniquement aux cotisations risque dans le 2ème pilier ?",
        "options": ["A. 17 ans", "B. 20 ans", "C. 24 ans"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Depuis le 1er janvier suivant quel anniversaire une personne salariée est-elle soumise aux cotisations risque et retraite dans le 2ème pilier ?",
        "options": ["A. 18 ans", "B. 24 ans", "C. 25 ans"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Quel est le salaire minimum moyen à partir duquel une personne salariée doit cotiser au 2ème pilier ?",
        "options": ["A. CHF 2'205.00", "B. CHF 1'890.00", "C. CHF 1'400.00"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "En cas de changement de caisse de pension, l’assuré.e doit-il (elle) faire transférer son avoir du 2ème pilier ?",
        "options": ["A. Non, c’est l’ancienne caisse de pension qui est responsable du transfert", "B. Non", "C. Oui, l’assuré.e doit entreprendre les démarches pour le transfert de son avoir"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Dans quel cas l’employé.e peut-il (elle) demander le paiement de son capital 2ème pilier ?",
        "options": ["A. En cas de rachat d’une Sàrl", "B. Pour le remboursement de ses dettes", "C. Lors de l’acquisition d’une résidence principale (maison/appartement)"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Un.e employé.e est engagé.e durant la saison d’hiver pour une durée déterminée de 4 mois, est-il (elle) soumis.e aux cotisations du 2ème pilier ?",
        "options": ["A. Non, car il s’agit de la saison d’hiver et que l’on ne connaît pas la date exacte de fin de saison", "B. Oui, car le contrat a été conclu pour une durée déterminée de plus de 3 mois", "C. Dans ce cas, l’affiliation est facultative"],
        "answer": "B",
        "type": "mcq"
    },
    {
        "question": "Quelle prime déduisez-vous à votre employé.e dans l’assurance-accidents ?",
        "options": ["A. Assurance-accidents professionnels", "B. Assurance-accidents non professionnels", "C. Assurance-accidents professionnels et non professionnels"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Le jour de l’accident est-il considéré comme un jour d’absence ?",
        "options": ["A. Cela figure dans les conditions générales de l’assurance", "B. Non", "C. Oui, seulement si mon employé(e) était au travail durant ce jour"],
        "answer": "C",
        "type": "mcq"
    },
    {
        "question": "Avez-vous l’obligation de conclure une assurance complémentaire en cas d’accidents professionnels ?",
        "options": ["A. Oui, selon les dispositions de la CCNT", "B. Non, cela est facultatif", "C. C’est à mon employé.e de faire le nécessaire"],
        "answer": "A",
        "type": "mcq"
    },
    {
        "question": "Quelle est la durée du versement de l’assurance complémentaire en cas d’accidents, par l’employeur ?",
        "options": ["A. Les conditions générales de l’assurance", "B. L’échelle bernoise", "C. Selon l’âge du collaborateur.trice"],
        "answer": "B",
        "type": "mcq"
    }
]

const flashcards = part1.concat(part2, part3, part4, part5, part6, part7, part8, part9);
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

document.getElementById("title").textContent = `${document.getElementById("title").textContent} (${shuffledFlashcards.length} questions)`;

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
