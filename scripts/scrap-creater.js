const scrapSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("777777"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "scrap-creater", {});

block.craftEffect = scrapSummon;
