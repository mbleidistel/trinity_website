module("Standard Tests");
test("Availability of MapAPI object", function ()
{
	expect(1);

	ok(typeof(jQuery) === 'object');
});