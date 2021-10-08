function newFact() {
	
	// Casey - thinking an onclick event handler // to change the photo or fact to another one
	
	var fact = new Array(20);
	
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
	fact[11] = "Dogs can smell thousands of times better than humans. Their noses have millions more scent receptors—for example, a human nose averages 5 million while a Dachshund’s nose has 125 million—making them useful in sniffing out drugs, dead bodies, bed bugs, explosives, and more.";
	fact[12] = "Dogs’ sense of smell might be pretty amazing, but don’t forget about their hearing! Everything from the positioning of their ears to the muscles in them helps them pick up a whole host of sounds that humans can’t pick up. In fact, the most popular explanation for why dogs tilt their heads is that they’re trying to locate the source of a sound.";
	fact[13] = "Dogs have approximately a sixth of the number of taste buds that humans have (1,700 taste buds to humans’ approximately 9,000). This is why dogs will scarf rotting food scraps as voraciously as they’ll eat a bowl of kibble or a hunk of steak. Their less discriminatory sense of taste also has to do with their evolutionary instincts, carried over from when they would scavenge in the wild.";
	fact[14] = "Dogs have approximately a sixth of the number of taste buds that humans have (1,700 taste buds to humans’ approximately 9,000). This is why dogs will scarf rotting food scraps as voraciously as they’ll eat a bowl of kibble or a hunk of steak. Their less discriminatory sense of taste also has to do with their evolutionary instincts, carried over from when they would scavenge in the wild.";
	fact[15] = "A dog’s nose is the equivalent of a human fingerprint, with each having a unique pattern of ridges and creases."
	fact[16] = "If you’ve ever noticed your pooch twitching in her sleep, this probably means she’s dreaming. Researchers found that dogs have similar sleep patterns and brain activity as humans, and that small breeds tend to dream more than large ones. Psychology Today suggests they’re probably imagining familiar activities like playing outside or chasing their tail.";
	fact[17] = "According to canine researcher and author Stanley Coren, your toddler and pup are about on par when it comes to brains. He also explained that man’s best friend can count, understand over 150 words, and even trick people or other dogs to get treats. Intelligence varies based on breed—Border collies are the smartest.";
	fact[18]= "Unspayed females only go into heat twice a year, so dog breeders need to plan carefully.";
	fact[19] = "If your dog excitedly wags its tail, it means they’re happy to see you, right? Not necessarily. According to Discovery.com, dogs wag their tails to the right when they’re happy and to the left when they’re frightened. Wagging low means they’re insecure, and rapid tail wagging accompanied by tense muscles or dilated pupils can signal aggression.";
	fact[20] = "Newborn dogs are still developing, according to Psychology Today, so their ear canals and eyes are still closed. Most puppies open their eyes and respond to noises after about two weeks.";
	
	
	index = Math.floor(Math.random() * fact.length);
	
	document.getElementById('title-fact').innerHTML = fact[index];
	
	var images = new Array(5);

images[0] = new Image();
images[0].src = "images/dog_img1.jpeg";

images[1] = new Image();
images[1].src = "images/dog_img2.jpg";

images[2]= new Image();
images[2].src = "images/dog_img3.jpg";

images[3] = new Image();
images[3].src = "images/dog_img4.jpg";

images[4] = new Image();
images[4].src = "images/dog_img5.jpg";

images[5] = new Image();
images[5].src = "images/dog_img6.jpg";

i = Math.floor(Math.random() * images.length);

document.getElementById('dog-image').src = images[i].src;
}
