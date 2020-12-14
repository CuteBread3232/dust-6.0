const leadSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("8c7fa9"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "lead-creater", {});

block.craftEffect = leadSummon;
