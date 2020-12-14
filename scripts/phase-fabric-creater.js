const phasefabricSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("f4ba6e"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "phase-fabric-creater", {});

block.craftEffect = phasefabricSummon;
