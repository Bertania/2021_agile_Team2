function newFact() {
	
	var fact = new Array(10);
	
	fact[0] = "Adult dogs have 42 permanent teeth.";
	fact[1] = "Dogs sweat through the pads on their feet.";
	fact[2] = "Dogs can actually see in multiple colors.";
	fact[3] = "Elizabeth II has had over 30 corgis since her accession in 1952.";
	fact[4] = "The Chihuahua is the smallest dog breed.";
	fact[5] = "Labradors were once called St. John's Newfoundland.";
	fact[6] = "Basenjis don't bark, instead they make a noise best described as a yodel.";
	fact[7] = "The name of the dog on the front of the Cracker Jack Box is Bingo.";
	fact[8] = "The most popular dog name of 2020 was Bella.";
	fact[9] = "The Labrador Retriever is the most popular breed of dog in the United States.";
	fact[10] = "Dogs have 3 eyelids.";
	
	index = Math.floor(Math.random() * fact.length);
	
	document.getElementById('title-fact').innerHTML = fact[index];
}
