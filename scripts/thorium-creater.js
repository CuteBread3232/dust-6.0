const thoriumSummon = new Effect(10, e => {
    Draw.color(Color.valueOf("f9a3c7"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "thorium-creater", {});

block.craftEffect = thoriumSummon;
