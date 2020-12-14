const surgealloySummon = new Effect(10, e => {
    Draw.color(Color.valueOf("f3e979"),);
	Lines.stroke(e.fslope() * 2);
	Lines.poly(e.x, e.y, 4, 4 + e.finpow() * 8);
});
const block = extendContent(GenericCrafter, "surge-alloy-creater", {});

block.craftEffect = surgealloySummon;
