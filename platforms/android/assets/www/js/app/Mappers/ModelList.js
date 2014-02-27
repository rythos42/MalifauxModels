var ModelList = {
// Lenny cost
	data: [
		new Model('Lady Justice', [C.Guild], [C.Master, C.Living, C.GuildMarshal], undefined, 4),
		new Model('Sonnia Criid', [C.Guild], [C.Master, C.Living, C.WitchHunter], undefined, 3),
		new Model('Perdita Ortega', [C.Guild], [C.Master, C.Living, C.Family], undefined, 2),
		new Model('Franscisco Ortega', [C.Guild], [C.Henchman, C.Living, C.Family], 8, 5),
		new Model('Samael Hopkins', [C.Guild], [C.Henchman, C.Living, C.WitchHunter], 9, 4),
		new Model('The Judge', [C.Guild], [C.Henchman, C.Living, C.Rare1, C.GuildMarshal], 9, 4),
		new Model('Scales of Justice', [C.Guild], [C.Peon, C.Living, C.TotemFor('Lady Justice')], 3),
		new Model('Purifying Flame', [C.Guild], [C.Peon, C.TotemFor('Sonnia Criid'), C.Spirit], 3),
		new Model('Enslaved Nephilim', [C.Guild], [C.Peon, C.TotemFor('Perdita Ortega'), C.Nephilim], 3),
		new Model('Governor\'s Proxy', [C.Guild], [C.Peon, C.Totem, C.Living], 3),
		new Model('Death Marshal', [C.Guild], [C.Minion, C.Living, C.GuildMarshal], 6),
		new Model('Executioner', [C.Guild], [C.Enforcer, C.Living, C.Rare2], 9),
		new Model('Guild Austringer', [C.Guild], [C.Minion, C.Living, C.Rare2, C.Guardsman], 6),
		new Model('Guild Guard', [C.Guild], [C.Minion, C.Living, C.Guardsman], 4),
		new Model('Peacekeeper', [C.Guild], [C.Enforcer, C.Construct, C.Rare1], 11),
		new Model('The Lone Marshal', [C.Guild], [C.Enforcer, C.Living, C.Rare1, C.GuildMarshal], 8),
		new Model('Witchling Stalker', [C.Guild], [C.Minion, C.Living, C.WitchHunter], 5),
		new Model('Nino Ortega', [C.Guild], [C.Enforcer, C.Living, C.Rare1, C.Family], 7),
		new Model('Papa Loco', [C.Guild], [C.Enforcer, C.Living, C.Rare1, C.Family, C.Tormented], 7),
		new Model('Santiago Ortega', [C.Guild], [C.Enforcer, C.Living, C.Rare1, C.Family], 7),
		
		new Model('C. Hoffman', [C.Guild], [C.Master, C.Living, C.Construct, C.Msu], undefined, 3),
		new Model('Ryle', [C.Guild], [C.Henchman, C.Construct, C.Rare1], 10, 3),
		new Model('Mechanical Attendant', [C.Guild], [C.Peon, C.Construct, C.TotemFor('C. Hoffman')], 2),
		new Model('Guardian', [C.Guild], [C.Minion, C.Construct], 8),
		new Model('Lucius', [C.Guild, C.Neverborn], [C.Master, C.Living, C.Mimic], undefined, 4),
		new Model('Captain Dashel', [C.Guild], [C.Henchman, C.Living, C.Rare1], 9, 4),
		new Model('The Scribe', [C.Guild, C.Neverborn], [C.Peon, C.Living, C.TotemFor('Lucius')], 2),
		new Model('Abuela Ortega', [C.Guild], [C.Enforcer, C.Living, C.Rare1, C.Family], 7),
		new Model('Guild Hound', [C.Guild], [C.Minion, C.Living, C.Rare4, C.Beast, C.Hound, C.Guardsman], 3),
		new Model('Guard Sergeant', [C.Guild], [C.Enforcer, C.Living, C.Rare2], 6),
		new Model('Hunter', [C.Guild], [C.Minion, C.Construct, C.Rare2], 7),
		new Model('Guild Lawyer', [C.Guild], [C.Minion, C.Living, C.Rare2, C.Mimic], 6),
		new Model('Watcher', [C.Guild], [C.Minion, C.Construct], 4),
		new Model('Exorcist', [C.Guild], [C.Enforcer, C.Living, C.Rare2, C.GuildMarshal], 7),
		new Model('Pistolero De Latigo', [C.Guild], [C.Minion, C.Living, C.Family], 5),
		new Model('Pale Rider', [C.Guild], [C.Enforcer, C.Undead, C.Rare1, C.Horseman], 12),
		new Model('Warden', [C.Guild], [C.Minion, C.Construct, C.Guardsman], 6),
		new Model('Witchling Handler', [C.Guild], [C.Enforcer, C.Living, C.WitchHunter], 8),
		new Model('Brutal Effigy', [C.Guild], [C.Minion, C.Construct, C.Puppet, C.Effigy], 4),
		new Model('Guild Rifleman', [C.Guild], [C.Minion, C.Living, C.Rare3, C.Guardsman], 5),
		new Model('Clockwork Trap', [C.Guild, C.TenThunders], [C.Peon, C.Rare4], 2),
		new Model('Guild Pathfinder', [C.Guild, C.TenThunders], [C.Minion, C.Living, C.Guardsman], 6),		
		
		new Model('Seamus', [C.Resurrectionist], [C.Master, C.Living], undefined, 3),
		new Model('McMourning', [C.Resurrectionist, C.Guild], [C.Master, C.Living], undefined, 4),
		new Model('Nicodem', [C.Resurrectionist], [C.Master, C.Living], undefined, 3),
		new Model('Madam Sybelle', [C.Resurrectionist], [C.Henchman, C.Undead, C.Rare1], 8, 5),
		new Model('Sebastian', [C.Resurrectionist], [C.Henchman, C.Living, C.Rare1], 7, 6),
		new Model('Mortimer', [C.Resurrectionist], [C.Henchman, C.Living, C.Rare1], 9, 4),
		new Model('Copycat Killer', [C.Resurrectionist], [C.Peon, C.Living, C.TotemFor('Seamus')], 3),
		new Model('Zombie Chihuahua', [C.Resurrectionist], [C.Peon, C.Undead, C.TotemFor('McMourning'), C.Beast], 2),
		new Model('Vulture', [C.Resurrectionist], [C.Peon, C.Living, C.TotemFor('Nicodem'), C.Beast], 3),
		new Model('Graveyard Spirit', [C.Resurrectionist], [C.Peon, C.Totem, C.Spirit], 3),
		new Model('Bete Noire', [C.Resurrectionist], [C.Enforcer, C.Undead, C.Rare1], 8),
		new Model('Canine Remains', [C.Resurrectionist], [C.Minion, C.Undead], 4),
		new Model('Crooked Man', [C.Resurrectionist], [C.Minion, C.Undead], 5),
		new Model('Flesh Construct', [C.Resurrectionist], [C.Minion, C.Undead, C.Construct], 6),
		new Model('Mindless Zombie', [C.Resurrectionist], [C.Peon, C.Undead], 2),
		new Model('Necropunk', [C.Resurrectionist], [C.Minion, C.Undead, C.Construct], 5),
		new Model('Nurse', [C.Resurrectionist], [C.Minion, C.Living, C.Tormented], 5),
		new Model('Punk Zombie', [C.Resurrectionist], [C.Minion, C.Undead, C.Horror], 7),
		new Model('Rotten Belle', [C.Resurrectionist], [C.Minion, C.Undead, C.Belle], 5),
		new Model('The Hanged', [C.Resurrectionist], [C.Minion, C.Undead, C.Rare2, C.Spirit, C.Tormented], 9),
		
		new Model('Molly Squidpiddge', [C.Resurrectionist], [C.Master, C.Undead, C.Belle, C.Horror], undefined, 3),
		new Model('Rogue Necromancy', [C.Resurrectionist], [C.Enforcer, C.Undead, C.Construct, C.Beast, C.Horror], 10),
		new Model('Guild Autopsy', [C.Resurrectionist], [C.Minion, C.Undead, C.Horror], 4),
		new Model('Necrotic Machine', [C.Resurrectionist], [C.Minion, C.Construct, C.TotemFor('Molly Squidpiddge'), C.Rare1, C.Horror, C.Spirit], 2),
		new Model('Kirai Ankoku', [C.Resurrectionist], [C.Master, C.Living], undefined, 3),
		new Model('Ikiryo', [C.Resurrectionist], [C.Enforcer, C.Rare1, C.Spirit], 0),
		new Model('Seishin', [C.Resurrectionist], [C.Peon, C.Rare5, C.Spirit], 0),
		new Model('Lost Love', [C.Resurrectionist], [C.Peon, C.Undead, C.TotemFor('Kirai Ankoku'), C.Spirit], 4),
		new Model('Datsue Ba', [C.Resurrectionist], [C.Henchman, C.Undead, C.Rare1, C.Spirit], 8, 5),
		new Model('Dead Rider', [C.Resurrectionist], [C.Enforcer, C.Undead, C.Rare1, C.Horseman], 12),
		new Model('Gaki', [C.Resurrectionist], [C.Minion, C.Spirit], 4),
		new Model('Night Terror', [C.Resurrectionist], [C.Minion, C.Rare4, C.Beast, C.Spirit], 3),
		new Model('Onryo', [C.Resurrectionist], [C.Minion, C.Spirit, C.Retainer], 5),
		new Model('Shikome', [C.Resurrectionist], [C.Minion, C.Undead, C.Rare2, C.Beast, C.Spirit], 8),
		new Model('Crooligan', [C.Resurrectionist], [C.Minion, C.Undead, C.Horror, C.Lost], 4),
		new Model('Dead Doxy', [C.Resurrectionist], [C.Minion, C.Undead, C.Belle], 6),
		new Model('The Drowned', [C.Resurrectionist], [C.Minion, C.Undead, C.Horror, C.Spirit, C.Tormented], 6),
		new Model('Jaakuna Ubume', [C.Resurrectionist], [C.Enforcer, C.Undead, C.Spirit, C.Tormented], 6),
		new Model('Rafkin', [C.Resurrectionist], [C.Enforcer, C.Living, C.Rare1], 7),
		new Model('Carrion Effigy', [C.Resurrectionist], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('Ashigaru', [C.Resurrectionist], [C.Minion, C.Undead, C.Retainer], 5),
		new Model('Philip and the Nanny', [C.Resurrectionist], [C.Henchman, C.Undead, C.Rare1], 8, 5),
		new Model('Student of Sinew', [C.Resurrectionist], [C.Minion, C.Construct, C.Undead, C.Horror, C.Academic], 7),
		new Model('Student of Steel', [C.Resurrectionist], [C.Minion, C.Construct, C.Undead, C.Horror, C.Academic], 7),
		new Model('Student of Viscera', [C.Resurrectionist], [C.Minion, C.Construct, C.Undead, C.Horror, C.Academic], 8),
		new Model('The Valedictorian', [C.Resurrectionist], [C.Henchman, C.Construct, C.Undead, C.Rare1, C.Horror, C.Academic], 10, 3),
				
		new Model('Rasputina', [C.Arcanist], [C.Master, C.Living], undefined, 3),
		new Model('Marcus', [C.Arcanist], [C.Master, C.Living], undefined, 4),
		new Model('Ramos', [C.Arcanist], [C.Master, C.Living], undefined, 3),
		new Model('Myranda', [C.Arcanist], [C.Henchman, C.Living, C.Rare1, C.Beast], 8, 5),
		new Model('Joss', [C.Arcanist], [C.Henchman, C.Living, C.Construct, C.Rare1, C.Msu], 10, 3),
		new Model('Cojo', [C.Arcanist], [C.Enforcer, C.Living, C.Rare1, C.Beast], 8),
		new Model('Ice Golem', [C.Arcanist], [C.Enforcer, C.Construct], 10),
		new Model('Wendigo', [C.Arcanist], [C.Minion, C.Living, C.TotemFor('Rasputina')], 3),
		new Model('Jackalope', [C.Arcanist], [C.Peon, C.Living, C.TotemFor('Marcus'), C.Beast], 2),
		new Model('Brass Arachnid', [C.Arcanist], [C.Peon, C.Construct, C.TotemFor('Ramos'), C.Msu], 4),
		new Model('Essence of Power', [C.Arcanist], [C.Peon, C.Totem, C.Spirit], 3),
		new Model('December Acolyte', [C.Arcanist], [C.Minion, C.Living], 7),
		new Model('Electric Creation', [C.Arcanist], [C.Peon, C.Construct], 4),
		new Model('Hoarcat Pride', [C.Arcanist], [C.Minion, C.Living, C.Beast, C.Swarm], 5),
		new Model('Howard Langston', [C.Arcanist], [C.Enforcer, C.Construct, C.Living, C.Rare1, C.Msu], 12),
		new Model('Ice Gamin', [C.Arcanist], [C.Minion, C.Construct, C.Gamin], 4),
		new Model('Metal Gamin', [C.Arcanist], [C.Minion, C.Construct, C.Gamin, C.Msu, C.Foundry], 4),
		new Model('Moleman', [C.Arcanist], [C.Minion, C.Living, C.Beast], 4),
		new Model('Rail Golem', [C.Arcanist], [C.Enforcer, C.Construct, C.Rare1, C.Foundry], 11),
		new Model('Razorspine Rattler', [C.Arcanist], [C.Minion, C.Living, C.Beast], 7),
		new Model('Sabertooth Cerberus', [C.Arcanist], [C.Enforcer, C.Living, C.Beast], 9),
		new Model('Steam Arachnid', [C.Arcanist], [C.Minion, C.Construct, C.Msu], 4),
		new Model('Steam Arachnid Swarm', [C.Arcanist], [C.Minion, C.Construct, C.Swarm, C.Msu], 8),
		
		new Model('Ironsides', [C.Arcanist], [C.Master, C.Living, C.Msu], undefined, 5),
		new Model('Oxfordian Mage', [C.Arcanist], [C.Enforcer, C.Living, C.Rare3, C.Academic, C.Msu], 6),
		new Model('Mouse', [C.Arcanist], [C.Peon, C.Living, C.TotemFor('Ironsides'), C.Msu], 4),
		new Model('Colette Du Bois', [C.Arcanist], [C.Master, C.Living, C.Showgirl], undefined, 2),
		new Model('Mechanical Dove', [C.Arcanist], [C.Peon, C.Construct, C.TotemFor('Colette Du Bois'), C.Rare3], 2),
		new Model('Cassandra', [C.Arcanist], [C.Henchman, C.Living, C.Rare1, C.Showgirl], 8, 5),
		new Model('Coryphee', [C.Arcanist], [C.Minion, C.Construct, C.Rare2, C.Showgirl, C.Puppet], 7),
		new Model('Coryphee Duet', [C.Arcanist], [C.Enforcer, C.Construct, C.Showgirl, C.Puppet], 0),
		new Model('Performer', [C.Arcanist], [C.Minion, C.Living, C.Mercenary, C.Showgirl], 5),
		new Model('Mannequin', [C.Arcanist], [C.Peon, C.Construct, C.Showgirl, C.Puppet], 4),
		new Model('Kaeris', [C.Arcanist], [C.Master, C.Living, C.Msu], undefined, 4),
		new Model('The Firestarter', [C.Arcanist], [C.Henchman, C.Living, C.Rare1, C.Msu], 7, 6),
		new Model('Eternal Flame', [C.Arcanist], [C.Peon, C.Construct, C.TotemFor('Kaeris'), C.Msu], 2),
		new Model('Gunsmith', [C.Arcanist], [C.Minion, C.Living, C.Msu], 7),
		new Model('Large Arachnid', [C.Arcanist], [C.Minion, C.Construct, C.Msu], 6),
		new Model('Malifaux Raptor', [C.Arcanist], [C.Peon, C.Living, C.Rare3, C.Beast], 3),
		new Model('Mechanical Rider', [C.Arcanist], [C.Enforcer, C.Construct, C.Rare1, C.Horseman], 12),
		new Model('Silent One', [C.Arcanist], [C.Minion, C.Living], 6),
		new Model('Snow Storm', [C.Arcanist], [C.Henchman, C.Rare1, C.Spirit], 11, 2),
		new Model('Soulstone Miner', [C.Arcanist], [C.Minion, C.Construct, C.Msu], 6),
		new Model('The Captain', [C.Arcanist], [C.Henchman, C.Living, C.Rare1, C.Msu], 10, 3),
		new Model('Angelic', [C.Arcanist], [C.Enforcer, C.Living, C.Rare1, C.Showgirl], 6),
		new Model('Blessed of December', [C.Arcanist], [C.Enforcer, C.Living, C.Rare1, C.Beast], 9),
		new Model('Fire Gamin', [C.Arcanist], [C.Minion, C.Construct, C.Gamin], 4),
		new Model('Slate Ridge Mauler', [C.Arcanist], [C.Minion, C.Living, C.Beast], 8),
		new Model('Union Miner', [C.Arcanist], [C.Minion, C.Living, C.Msu], 5),
		new Model('Willie', [C.Arcanist], [C.Minion, C.Living, C.Rare1, C.Msu, C.Foundry], 6),
		new Model('Arcane Effigy', [C.Arcanist], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('Mobile Toolkit', [C.Arcanist], [C.Peon, C.Construct, C.Rare1, C.Msu], 3),
		
		new Model('Lilith', ['Neverborn'], [C.Master, C.Living, C.Nephilim], undefined, 4),
		new Model('Pandora', ['Neverborn'], [C.Master, C.Living, C.Woe], undefined, 3),
		new Model('Zoraida', ['Neverborn', C.Gremlin], [C.Master, C.Living, C.Swampfiend], undefined, 4),
		new Model('Barbaros', ['Neverborn'], [C.Henchman, C.Living, C.Rare1, C.Nephilim], 10, 3),
		new Model('Candy', ['Neverborn'], [C.Henchman, C.Living, C.Rare1, C.Woe, C.Mimic, C.Lost], 9, 4),
		new Model('Bad Juju', ['Neverborn'], [C.Henchman, C.Rare1, C.Swampfiend], 8, 5),
		new Model('Cherub', ['Neverborn'], [C.Peon, C.Living, C.TotemFor('Lilith'), C.Nephilim], 3),
		new Model('Poltergeist', ['Neverborn'], [C.Minion, C.TotemFor('Pandora'), C.Woe, C.Spirit], 5),
		new Model('Voodoo Doll', ['Neverborn', C.Gremlin], [C.Peon, C.Construct, C.TotemFor('Zoraida'), C.Puppet], 3),
		new Model('Primordial Magic', ['Neverborn'], [C.Peon, C.Totem, C.Spirit], 2),
		new Model('Baby Kade', ['Neverborn'], [C.Enforcer, C.Living, C.Rare1, C.Woe, C.Lost], 7),
		new Model('Teddy', ['Neverborn'], [C.Enforcer, C.Construct, C.Nightmare], 11),
		new Model('Beckoner', ['Neverborn'], [C.Minion, C.Living, C.Rare2, C.Brilliance, C.Darkened, C.Mimic], 7),
		new Model('Doppleganger', ['Neverborn'], [C.Enforcer, C.Living, C.Rare1, C.Woe, C.Mimic], 7),
		new Model('Mature Nephilim', ['Neverborn'], [C.Enforcer, C.Living, C.Nephilim], 11),
		new Model('Silurid', ['Neverborn'], [C.Minion, C.Living, C.Beast, C.Swampfiend], 7),
		new Model('Sorrow', ['Neverborn'], [C.Minion, C.Woe, C.Spirit], 5),
		new Model('Terror Tot', ['Neverborn'], [C.Minion, C.Living, C.Nephilim], 4),
		new Model('Waldgeist', ['Neverborn'], [C.Minion, C.Living, C.Beast, C.Swampfiend], 6),
		new Model('Young Nephilim', ['Neverborn'], [C.Minion, C.Living, C.Nephilim], 6),
		
		new Model('The Dreamer', [C.Neverborn], [C.Master, C.Spirit], undefined, 2),
		new Model('Lord Chompy Bits', [C.Neverborn], [C.Henchman, C.Rare1, C.Nightmare, C.Tyrant], 0),
		new Model('Daydream', [C.Neverborn], [C.Peon, C.TotemFor('The Dreamer'), C.Rare3, C.Nightmare], 2),
		new Model('Alp', [C.Neverborn], [C.Peon, C.Nightmare], 3),
		new Model('Coppelius', [C.Neverborn], [C.Enforcer, C.Rare1, C.Nightmare], 8),
		new Model('Lelu', [C.Neverborn], [C.Enforcer, C.Rare1, C.Nightmare, C.Nephilim, C.Woe], 7),
		new Model('Lilitu', [C.Neverborn], [C.Enforcer, C.Rare1, C.Nightmare, C.Nephilim, C.Woe], 7),
		new Model('Insidious Madness', [C.Neverborn], [C.Minion, C.Rare3, C.Nightmare, C.Woe], 5),
		new Model('Widow Weaver', [C.Neverborn], [C.Henchman, C.Rare1, C.Nightmare], 8, 5),
		new Model('Black Blood Shaman', [C.Neverborn], [C.Minion, C.Living, C.Rare2, C.Nephilim], 7),
		new Model('Nekima', [C.Neverborn], [C.Henchman, C.Living, C.Rare1, C.Nephilim], 13, 0),
		new Model('Collodi', [C.Neverborn], [C.Master, C.Construct, C.Puppet], undefined, 3),
		new Model('Marionette', [C.Neverborn], [C.Minion, C.Construct, C.TotemFor('Collodi'), C.Rare4, C.Puppet], 3),
		new Model('Stitched Together', [C.Neverborn], [C.Minion, C.Construct, C.Nightmare, C.Puppet, C.Darkened], 6),
		new Model('Wicked Doll', [C.Neverborn], [C.Minion, C.Construct, C.Puppet], 4),
		new Model('Vasilisa', [C.Neverborn], [C.Henchman, C.Construct, C.Rare1, C.Puppet], 9, 4),
		new Model('Iggy', [C.Neverborn], [C.Enforcer, C.Living, C.Rare1, C.Woe, C.Lost], 5),
		new Model('Spawn Mother', [C.Neverborn], [C.Henchman, C.Living, C.Rare1, C.Swampfiend, C.Beast], 9, 4),
		new Model('Gupps', [C.Neverborn], [C.Minion, C.Living, C.Swampfiend, C.Beast, C.Swarm], 4),
		new Model('Tuco', [C.Neverborn], [C.Enforcer, C.Living, C.Rare1, C.Nephilim], 7),
		new Model('Mysterious Effigy', [C.Neverborn], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('The Depleted', [C.Neverborn], [C.Minion, C.Living, C.Brilliance, C.Darkened], 4),
		new Model('Hooded Rider', [C.Neverborn], [C.Enforcer, C.Construct, C.Rare1, C.Horseman], 12),
		
		new Model('Von Schill', [C.Outcast], [C.Master, C.Living, C.Freikorps], undefined, 1),
		new Model('Tara', [C.Outcast, C.Resurrectionist], [C.Master, C.Undead], undefined, 4),
		new Model('Viktoria of Ashes', [C.Outcast], [C.Master, C.Living], undefined, 1),
		new Model('Hannah', [C.Outcast], [C.Henchman, C.Living, C.Rare1, C.Mercenary], 10, 3),
		new Model('The Nothing Beast', [C.Outcast], [C.Enforcer, C.Rare1], 10),
		new Model('Viktoria of Blood', [C.Outcast], [C.Henchman, C.Living, C.Rare1, C.Sister], 0, 3),
		new Model('Taelor', [C.Outcast], [C.Henchman, C.Living, C.Mercenary, C.Rare1], 10, 3),
		new Model('Steam Trunk', [C.Outcast], [C.Peon, C.Construct, C.TotemFor('Von Schill')], 3),
		new Model('Karina', [C.Outcast, C.Resurrectionist], [C.Enforcer, C.Living, C.TotemFor('Tara')], 5),
		new Model('Student of Conflict', [C.Outcast], [C.Peon, C.Living, C.Totem, C.Mercenary, C.Sister], 4),
		new Model('Malifaux Child', [C.Outcast], [C.Peon, C.Living, C.Totem, C.Mercenary, C.Lost], 2),
		new Model('Bishop', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare1], 10),
		new Model('Convict Gunslinger', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare2], 7),
		new Model('Desperate Gunslinger', [C.Outcast], [C.Minion, C.Living, C.Mercenary], 4),
		new Model('Freikorps Specialist', [C.Outcast], [C.Living, C.Enforcer, C.Mercenary, C.Freikorps], 8),
		new Model('Freikorpsman', [C.Outcast], [C.Living, C.Minion, C.Mercenary, C.Freikorps], 5),
		new Model('Hans', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare1], 8),
		new Model('Johan', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare1, C.Msu], 6),
		new Model('Killjoy', [C.Outcast], [C.Enforcer, C.Undead, C.Mercenary, C.Rare1, C.Horror], 12),
		new Model('Ronin', [C.Outcast], [C.Minion, C.Living, C.Mercenary], 6),
		new Model('Void Wretch', [C.Outcast], [C.Minion], 4),
		
		new Model('Jack Daw', [C.Outcast], [C.Master, C.Undead, C.Tormented, C.Spirit, C.Cursed], undefined, 2),
		new Model('The Guilty', [C.Outcast], [C.Minion, C.Undead, C.Tormented], 5),
		new Model('Montresor', [C.Outcast], [C.Henchman, C.Undead, C.Rare1, C.Tormented], 9, 4),
		new Model('Lady Ligeia', [C.Outcast], [C.Peon, C.TotemFor('Jack Daw'), C.Tormented, C.Spirit], 4),
		new Model('Hamelin', [C.Outcast], [C.Master, C.Tyrant, C.Nihilist], undefined, 1),
		new Model('Nix', [C.Outcast], [C.Henchman, C.Rare1, C.Nihilist, C.Spirit], 8, 5),
		new Model('Obediant Wretch', [C.Outcast], [C.Minion, C.Living, C.Rare1, C.Nihilist], 4),
		new Model('Rat Catcher', [C.Outcast], [C.Minion, C.Living, C.Rare2, C.Nihilist], 6),
		new Model('Malifaux Rat', [C.Outcast], [C.Peon, C.Vermin], 2),
		new Model('Rat King', [C.Outcast], [C.Minion, C.Vermin, C.Swarm], 8),
		new Model('The Stolen', [C.Outcast], [C.Peon, C.Living, C.TotemFor('Hamelin'), C.Rare3, C.Nihilist, C.Lost], 2),
		new Model('Ashes and Dust', [C.Outcast], [C.Enforcer, C.Construct, C.Undead, C.Rare1], 13),
		new Model('Ashen Core', [C.Outcast], [C.Enforcer, C.Construct, C.Undead, C.Rare1], 0),
		new Model('Dust Storm', [C.Outcast], [C.Enforcer, C.Construct, C.Undead, C.Rare1], 6),
		new Model('Freikorps Librarian', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Academic, C.Freikorps], 7),
		new Model('Freikorps Trapper', [C.Outcast], [C.Minion, C.Living, C.Mercenary, C.Rare2, C.Freikorps], 6),
		new Model('Lazarus', [C.Outcast], [C.Enforcer, C.Construct, C.Mercenary, C.Rare1, C.Freikorps], 10),
		new Model('Sue', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare1], 8),
		new Model('Hodgepodge Effigy', [C.Outcast], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('Ama No Zako', [C.Outcast, C.TenThunders], [C.Henchman, C.Mercenary, C.Rare1, C.Oni], 9, 4),
		new Model('Strongarm Suit', [C.Outcast], [C.Enforcer, C.Living, C.Mercenary, C.Rare1, C.Freikorps], 10),
		new Model('Vanessa', [C.Outcast], [C.Enforcer, C.Living, C.Rare1, C.Sister], 8),
		new Model('Leveticus', [C.Outcast], [C.Master, C.Living], undefined, 2),
		new Model('Rusty Alyce', [C.Outcast], [C.Henchman, C.Living, C.Rare1], 10, 3),
		new Model('Hollow Waif', [C.Outcast], [C.Peon, C.Undead, C.TotemFor('Leveticus'), C.Rare3], 0),
		new Model('Abomination', [C.Outcast], [C.Minion, C.Construct, C.Undead], 4),
		new Model('Desolation Engine', [C.Outcast], [C.Enforcer, C.Undead, C.Construct, C.Rare1], 13),
				
		new Model('Som\'er Teeth Jones', [C.Gremlin], [C.Master, C.Living, C.Gremlin], undefined, 4),
		new Model('Ophelia LaCroix', [C.Gremlin], [C.Master, C.Living, C.Gremlin, C.Kin], undefined, 3),
		new Model('The Brewmaster', [C.Gremlin, C.TenThunders], [C.Master, C.Living, C.Gremlin, C.TriChi], undefined, 3),
		new Model('Francois LaCroix', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Gremlin, C.Kin], 7, 6),
		new Model('Fingers', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Gremlin, C.TriChi], 10, 3),
		new Model('Lenny', [C.Gremlin], [C.Enforcer, C.Living, C.Rare1, C.Gremlin], 9),
		new Model('Whisky Golem', [C.Gremlin], [C.Enforcer, C.Construct, C.Rare1, C.TriChi], 10),
		new Model('Skeeter', [C.Gremlin], [C.Peon, C.Living, C.TotemFor('Som\er Teeth Jones')], 2),
		new Model('Young LaCroix', [C.Gremlin], [C.Peon, C.Living, C.TotemFor('Ophelia LaCroix'), C.Gremlin, C.Kin], 2),
		new Model('Apprentice Wesley', [C.Gremlin], [C.Minion, C.Living, C.TotemFor('The Brewmaster'), C.Gremlin, C.TriChi], 3),
		new Model('Bayou Gremlin', [C.Gremlin], [C.Minion, C.Living, C.Gremlin], 3),
		new Model('Hog Whisperer', [C.Gremlin], [C.Minion, C.Living, C.Mercenary, C.Gremlin], 5),
		new Model('Moon Shinobi', [C.Gremlin], [C.Minion, C.Living, C.Gremlin, C.TriChi], 6),
		new Model('Pigapult', [C.Gremlin], [C.Peon, C.Construct, C.Rare1, C.Gremlin], 8),
		new Model('Piglet', [C.Gremlin], [C.Minion, C.Living, C.Beast, C.Pig], 4),
		new Model('Slop Hauler', [C.Gremlin], [C.Minion, C.Living, C.Gremlin], 5),
		new Model('War Pig', [C.Gremlin], [C.Minion, C.Living, C.Beast, C.Pig], 9),
		new Model('Pere Ravage', [C.Gremlin], [C.Enforcer, C.Living, C.Rare1, C.Gremlin, C.Kin], 6),
		new Model('Rami LaCroix', [C.Gremlin], [C.Enforcer, C.Living, C.Rare1, C.Gremlin, C.Kin], 7),
		new Model('Raphael LaCroix', [C.Gremlin], [C.Enforcer, C.Living, C.Rare1, C.Gremlin, C.Kin], 7),
		
		new Model('Ulix', [C.Gremlin], [C.Master, C.Living, C.Gremlin], undefined, 4),
		new Model('Penelope', [C.Gremlin], [C.Peon, C.Living, C.TotemFor('Ulix'), C.Hound], 2),
		new Model('The Sow', [C.Gremlin], [C.Minion, C.Living, C.Rare1, C.Beast, C.Pig], 8),
		new Model('Old Major', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Pig], 9, 4),
		new Model('Rooster Rider', [C.Gremlin], [C.Minion, C.Living, C.Gremlin, C.Rooster], 6),
		new Model('Stuffed Piglet', [C.Gremlin], [C.Peon, C.Undead, C.Rare6, C.Pig], 2),
		new Model('Gremlin Taxidermist', [C.Gremlin], [C.Enforcer, C.Living, C.Rare2, C.Gremlin], 7),
		new Model('Mah Tucket', [C.Gremlin], [C.Master, C.Living, C.Gremlin], undefined, 4),
		new Model('The Little Lass', [C.Gremlin], [C.Peon, C.Living, C.TotemFor('Mah Tucket'), C.Gremlin], 4),
		new Model('Trixiebelle', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Gremlin], 8, 5),
		new Model('Bayou Bushwhacker', [C.Gremlin], [C.Minion, C.Living, C.Rare3, C.Gremlin], 6),
		new Model('McTavish', [C.Gremlin], [C.Henchman, C.Living, C.Mercenary, C.Rare1, C.Swampfiend], 10, 3),
		new Model('Mancha Roja', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Gremlin], 10, 3),
		new Model('Burt Jebsen', [C.Gremlin], [C.Enforcer, C.Living, C.Mercenary, C.Rare1, C.Gremlin], 7),
		new Model('Gracie', [C.Gremlin], [C.Enforcer, C.Living, C.Mercenary, C.Rare1, C.Pig], 10),
		new Model('Merris LaCroix', [C.Gremlin], [C.Enforcer, C.Living, C.Rare1, C.Gremlin, C.Kin], 6),
		new Model('Wild Boar', [C.Gremlin], [C.Minion, C.Living, C.Beast, C.Pig, C.Swampfiend], 6),
		new Model('Lucky Effigy', [C.Gremlin], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('Wong', [C.Gremlin], [C.Master, C.Living, C.Gremlin], undefined, 3),
		new Model('Lovely Assistant', [C.Gremlin], [C.Peon, C.Living, C.TotemFor('Wong'), C.Gremlin, C.Showgirl], 3),
		new Model('Lightning Bug', [C.Gremlin], [C.Minion, C.Living, C.Gremlin], 5),
		new Model('Bayou Gator', [C.Gremlin], [C.Minion, C.Living, C.Swampfiend], 5),
		new Model('Sammy LaCroix', [C.Gremlin], [C.Henchman, C.Living, C.Rare1, C.Gremlin, C.Kin], 7, 6),
		new Model('Old Cranky', [C.Gremlin], [C.Peon, C.Living, C.Totem, C.Gremlin], 4),
				
		new Model('Misaki', [C.TenThunders, C.Outcast], [C.Master, C.Living, C.LastBlossom], undefined, 2),
		new Model('Mei Feng', [C.TenThunders, C.Arcanist], [C.Master, C.Living, C.Foundry], undefined, 3),
		new Model('Jakob Lynch', [C.TenThunders, C.Neverborn], [C.Master, C.Living, C.Darkened], undefined, 1),
		new Model('Ototo', [C.TenThunders], [C.Henchman, C.Living, C.Rare1, C.LastBlossom], 10, 3),
		new Model('Kang', [C.TenThunders], [C.Henchman, C.Living, C.Rare1, C.Foundry], 9, 4),
		new Model('Yamaziko', [C.TenThunders], [C.Henchman, C.Living, C.Rare1, C.LastBlossom], 7, 6),
		new Model('Shang', [C.TenThunders, C.Outcast], [C.Peon, C.Living, C.TotemFor('Misaki')], 3),
		new Model('Emberling', [C.TenThunders, C.Arcanist], [C.Minion, C.TotemFor('Mei Feng'), C.Spirit], 3),
		new Model('Hungering Darkness', [C.TenThunders, C.Neverborn], [C.Henchman, C.TotemFor('Jakob Lynch'), C.Rare1, C.Spirit, C.Darkened], 0, 5),
		new Model('Dawn Serpent', [C.TenThunders], [C.Minion, C.Living, C.Rare1, C.Beast], 10),
		new Model('Fuhatsu', [C.TenThunders], [C.Henchman, C.Living, C.Rare1], 10, 3),
		new Model('Monk of Low River', [C.TenThunders], [C.Minion, C.Living, C.Rare3], 4),
		new Model('Oiran', [C.TenThunders], [C.Minion, C.Living, C.Mercenary, C.LastBlossom, C.Showgirl], 5),
		new Model('Rail Worker', [C.TenThunders, C.Arcanist], [C.Minion, C.Living, C.Construct, C.Foundry], 5),
		new Model('The Illuminated', [C.TenThunders, C.Neverborn], [C.Minion, C.Living, C.Brilliance], 7),
		new Model('Thunder Archer', [C.TenThunders], [C.Minion, C.Living], 7),
		new Model('Torakage', [C.TenThunders], [C.Minion, C.Living, C.Mercenary, C.LastBlossom], 6),
		new Model('Samurai', [C.TenThunders], [C.Enforcer, C.Living], 8),
		
		new Model('Lucas McCabe', [C.TenThunders, C.Guild], [C.Master, C.Living, C.BlackSheep], undefined, 2),
		new Model('Dismounted McCabe', [C.TenThunders, C.Guild], [C.Master, C.Living, C.BlackSheep], undefined, 0),
		new Model('Sidir Alchibal', [C.TenThunders, C.Guild], [C.Henchman, C.Living, C.Rare1, C.BlackSheep], 9, 4),
		new Model('Luna', [C.TenThunders, C.Guild], [C.Minion, C.Living, C.TotemFor('Lucas McCabe'), C.Beast, C.Hound], 4),
		new Model('Wastel', [C.TenThunders, C.Guild], [C.Minion, C.Living, C.BlackSheep], 4),
		new Model('Yan Lo', [C.TenThunders, C.Resurrectionist], [C.Master, C.Living, C.Ancestor], undefined, 4),
		new Model('Soul Porter', [C.TenThunders, C.Resurrectionist], [C.Peon, C.TotemFor('Yan Lo'), C.Spirit], 3),
		new Model('Chiaki the Niece', [C.TenThunders, C.Resurrectionist], [C.Enforcer, C.Living, C.Rare1, C.Ancestor], 6),
		new Model('Izamu the Armor', [C.TenThunders, C.Resurrectionist], [C.Enforcer, C.Undead, C.Rare1, C.Ancestor, C.Spirit], 10),
		new Model('Toshiro the Daimyo', [C.TenThunders, C.Resurrectionist], [C.Henchman, C.Undead, C.Rare1, C.Ancestor], 9, 4),
		new Model('Yin the Penangalan', [C.TenThunders, C.Resurrectionist], [C.Enforcer, C.Undead, C.Rare1, C.Ancestor, C.Horror], 8),
		new Model('Ten Thunders Brother', [C.TenThunders], [C.Minion, C.Living], 5),
		new Model('Mr Graves', [C.TenThunders, C.Neverborn], [C.Enforcer, C.Living, C.Rare1, C.Nephilim, C.Darkened, C.Mimic], 8),
		new Model('Mr Tannen', [C.TenThunders, C.Neverborn], [C.Enforcer, C.Living, C.Rare1, C.Woe, C.Darkened, C.Mimic], 6),
		new Model('Shadow Effigy', [C.TenThunders], [C.Minion, C.Construct, C.Rare1, C.Puppet, C.Effigy], 4),
		new Model('Komainu', [C.TenThunders], [C.Minion, C.Construct, C.Spirit, C.Retainer], 5),
		new Model('Sensei Yu', [C.TenThunders], [C.Henchman, C.Living, C.Rare1], 9, 4),
		new Model('Shenlong', [C.TenThunders], [C.Master, C.Living, C.Tyrant], undefined, 2),
		new Model('Peasant', [C.TenThunders], [C.Peon, C.Living, C.TotemFor('Shenlong'), C.Rare2], 2),
		new Model('Fermented River Monk', [C.TenThunders], [C.Minion, C.Living, C.TriChi], 5),
		new Model('Monk of High River', [C.TenThunders], [C.Minion, C.Living, C.Rare3], 6),
		new Model('The Lone Swordsman', [C.TenThunders], [C.Enforcer, C.Living, C.Rare1], 8),
		new Model('Kamaitachi', [C.TenThunders], [C.Minion, C.Totem, C.Oni], 4),
		new Model('Tengu', [C.TenThunders], [C.Minion, C.Spirit, C.Oni], 4),
		new Model('Katanaka Sniper', [C.TenThunders], [C.Minion, C.Living, C.Rare2], 7)
	]
};