const pyratiteSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("ffaa5f"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "pyratite-creater", {});

block.craftEffect = pyratiteSummon;
