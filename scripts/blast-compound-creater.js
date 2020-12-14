const blastcompoundSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("ff795e"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "blast-compound-creater", {});

block.craftEffect = blastcompoundSummon;
