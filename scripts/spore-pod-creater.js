const sporepodSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("7457ce"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "spore-pod-creater", {});

block.craftEffect = sporepodSummon;
