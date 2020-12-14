const copperSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("d99d73"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "copper-creater", {});

block.craftEffect = copperSummon;
