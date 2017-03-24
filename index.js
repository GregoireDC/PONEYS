/*	-deadpool peut aider une licorne a la fois
	-plus il y a de licorne moins son aide est rapide
	-

*/
class Poneys {
	constructor() {
		this.isUnicorn = false;
		this.energy = 0;
		this.deadpool = new Deadpool();
		this.deadpool.poneyFarm.push(this); // Liste poneyfarm qui quand on utilise .push rentre le poney dans la liste
		this.spiderman = new Spiderman();

		setInterval(() => {		// Toutes les s la fonction setintervalle recommence
			this.gestiontemps();
			if (this.nuit === true) {
				if (this.isUnicorn === false) {
					const jetdeLancer = Math.floor(Math.random() * 101);
					this.energy += 20;		// L'energie du poney monte plus rapidement la nuit et celle de deadpool baisse plus rapidement
					this.deadpool.energydeadpool -= 2;
					if (jetdeLancer >= 35) {
						this.deadpool.transformtoPoney();
					}
				}
				this.spiderman.spideruseponey();
			} else if (this.isUnicorn === false) {
				const jetdeLancer1 = Math.floor(Math.random() * 101);
				this.energy += 10;
				this.deadpool.energydeadpool -= 1;
				if (jetdeLancer1 >= 35) {
					this.deadpool.transformtoPoney();
				}
			}
			this.spiderman.spideruseponey();
			if (this.energy > 100) {
				const jetTransformation = Math.floor(Math.random() * 101);  // Attribue un nombre entre 1 et 100 qui détérmine en plus de l'escalier inversement proportionnel quelles sont les chances pour le poney d'étre une licorne
				console.log(jetTransformation);
				this.transform(jetTransformation);
			}
		}, 1200);
	}

	gestiontemps() {
		const minuteactuelle = new Date();				// Récupére la minute actuelle du pc, si elle est paire alors c'est la nuit sinon c'est le jour
		if (minuteactuelle.getMinutes() % 2 === 0) {
			this.nuit = true;
		}		else {
			this.nuit = false;
		}
	}

	transform(jetTransformation) {
		this.deadpool.tranformToUnicorn(jetTransformation);		// Fais appel a la fonction transformtounicorn présente dans la classe deadpool
		this.energy = 0;
	}
}

let instance = null;			// Vérifie si il y a un deadpool déja existant(une liste de poney) et si oui ne le remplace pas
class Deadpool {
	constructor() {
		this.energydeadpool = 150;
		this.poneyFarm = [];
		this.nbrUnicorn = 0;
		if (!instance) {
			instance = this;
		}
		return instance;
	}
	tranformToUnicorn(jetTransformation) {
		console.log('nombre de licorne = ' + this.nbrUnicorn);
		const coeff = 1 / this.nbrUnicorn;
		for (let i = 0; i < this.poneyFarm.length; i++) {
			if (coeff >= 0.75) {					// On fait un escalier inversement proportionnel au nombre de licornes pour savoir si les poney se transforment ou non
				this.poneyFarm[i].isUnicorn = true;
				console.log('poney devient licorne');
				if (this.nbrUnicorn < 9) {
					this.nbrUnicorn = this.nbrUnicorn + 1;
				}
				console.log('nombre de licorne = ' + this.nbrUnicorn);
				break;
			}			else if (coeff >= 0.5) {
				if (jetTransformation > 25) {
					this.poneyFarm[i].isUnicorn = true;
					console.log('poney devient licorne');
					if (this.nbrUnicorn < 6) {
						this.nbrUnicorn = this.nbrUnicorn + 1;
					}
					console.log('nombre de licorne = ' + this.nbrUnicorn);
					break;
				}
			}			else if (coeff >= 0.25 && coeff < 0.5) {
				if (jetTransformation > 50) {
					this.poneyFarm[i].isUnicorn = true;
					console.log('poney devient licorne');
					if (this.nbrUnicorn < 9) {
						this.nbrUnicorn = this.nbrUnicorn + 1;
					}
					console.log('nombre de licorne = ' + this.nbrUnicorn);
					break;
				}
			}			else if (coeff < 0.25) {
				if (jetTransformation > 75) {
					this.poneyFarm[i].isUnicorn = true;
					console.log('poney devient licorne');
					if (this.nbrUnicorn < 9) {
						this.nbrUnicorn = this.nbrUnicorn + 1;
					}
					console.log('nombre de licorne = ' + this.nbrUnicorn);
					break;
				}
			}
		}
	}
	transformtoPoney() {				// Transforme une licorne en poney
		for (let i = 0; i < this.poneyFarm.length; i++) {
			if (this.poneyFarm[i].isUnicorn === true) {
				this.poneyFarm[i].isUnicorn = false;
				this.nbrUnicorn = this.nbrUnicorn - 1;
				console.log('deadpool : licornes devient poney');
				console.log('nombre de licorne = ' + this.nbrUnicorn);
				this.energydeadpool += 10;
				break;
			}
		}
	}

}

let instance2 = null;
class Spiderman {
	constructor() {
		this.deadpool = new Deadpool();
		this.energyspiderman = 100;
		if (!instance2) {
			instance2 = this;
		}
		return instance2;
	}
	spideruseponey() {							// Fonction qui détérmine si spiderman utilise un poney ou non
		for (let i = 0; i < this.deadpool.poneyFarm.length; i++) {
			const chancespiduseponey = Math.floor(Math.random() * 101);				// Test spiderman a un nombre aléatoire entre 1 et 100 et si il fait plus de 50 il utilise un poney ou une licorne
			if (chancespiduseponey <= 1) {
				if (this.deadpool.poneyFarm[i].isUnicorn === false) {
					this.energy = this.energy - 10;
					console.log('spiderman utilise un poney');
					break;
				}
				if (this.deadpool.poneyFarm[i].isUnicorn === true) {
					this.isUnicorn = false;
					this.energy = 0;
					this.deadpool.nbrUnicorn = this.deadpool.nbrUnicorn - 1;
					console.log('spiderman transforme une licorne en poney');
					break;
				}
			}
		}
	}
}

poney1 = new Poneys();
poney2 = new Poneys();
poney3 = new Poneys();
poney4 = new Poneys();
poney5 = new Poneys();
poney6 = new Poneys();
poney7 = new Poneys();
poney8 = new Poneys();
poney9 = new Poneys();

	/*
		Creer un dossier
		$ yarn init			//genere un package.json qui contient les dépendances
		$ yarn add bluebird //rajoute les trucs de promesses et update le package.json et ajoute un dossier node_modules
		ajoutez dans un fichier .gitignore
			.DS_Store
			/*.log
			node_modules/

		$ git init
		$ git add .
		$ git commit - m "message dezdDCDEdceD3
		$ git push https://github.com/<NOM DE TON REPO> master
		$ xo
		// MASSE ERREURS
		$ xo --fix
		// UN PEU MOINS QUE MASSE ERREURS

	*/

	/*
		+poney.js
		+package.json
		.git
		.gitignore
		nodes_modules
		yarn.lock
		*.log
	*/

	/*
		git clone https://
		yarn start

	*/

/* class Spiderman {
  constructor(onPoney) {
    while (onPoney) {

    }
  } */
